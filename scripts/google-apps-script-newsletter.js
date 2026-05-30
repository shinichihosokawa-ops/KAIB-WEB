/**
 * KAIB メルマガ管理 - Google Apps Script
 *
 * 対象スプレッドシート:
 * https://docs.google.com/spreadsheets/d/1_Yv1hMlDy_iRexr5UtqXqdopVPvouch-fS3mct-PEKs/edit?gid=434963377#gid=434963377
 *
 * セットアップ手順:
 *
 * 1. 上記スプレッドシートを開く
 *
 * 2. メニュー → 拡張機能 → Apps Script を開く
 *
 * 3. このファイルの内容をすべてコピーして貼り付け（Code.gs に）
 *
 * 4. SHEET_GID を確認（デフォルト: 434963377）
 *
 * 5. デプロイ:
 *    - 「デプロイ」→「新しいデプロイ」
 *    - 種類: 「ウェブアプリ」
 *    - 実行ユーザー: 「自分」
 *    - アクセス権: 「全員」
 *    - 「デプロイ」をクリック
 *    - 表示されるURLをコピー
 *
 * 6. Vercel の環境変数に設定:
 *    - キー: VITE_NEWSLETTER_SCRIPT_URL
 *    - 値: コピーしたURL
 *
 * 7. Vercel を再デプロイで反映
 *
 * シートの列構成（既存のシートに合わせて調整してください）:
 *   A: お名前
 *   B: 会社名
 *   C: メールアドレス
 *   D: 登録日
 *   E: 配信停止
 */

// シートの GID（URLの gid= の値）
var SHEET_GID = 434963377;

// GID からシートを取得
function getSheetByGid(gid) {
  var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  for (var i = 0; i < sheets.length; i++) {
    if (sheets[i].getSheetId() === gid) {
      return sheets[i];
    }
  }
  return null;
}

// POST リクエストを受け取る
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var action = data.action;
    var email = (data.email || '').trim().toLowerCase();

    if (!email || !isValidEmail(email)) {
      return jsonResponse({ status: 'error', message: 'Invalid email' });
    }

    var sheet = getSheetByGid(SHEET_GID);
    if (!sheet) {
      sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    }

    if (action === 'subscribe') {
      var name = (data.name || '').trim();
      var company = (data.company || '').trim();
      return handleSubscribe(sheet, name, company, email);
    } else if (action === 'unsubscribe') {
      return handleUnsubscribe(sheet, email);
    }

    return jsonResponse({ status: 'error', message: 'Unknown action' });
  } catch (err) {
    return jsonResponse({ status: 'error', message: err.toString() });
  }
}

// 登録処理: 最終行の下に追加
function handleSubscribe(sheet, name, company, email) {
  var row = findEmailRow(sheet, email);

  if (row) {
    // 既存 → 情報を更新、配信停止を解除
    sheet.getRange(row, 1).setValue(name);
    sheet.getRange(row, 2).setValue(company);
    sheet.getRange(row, 4).setValue(new Date());
    sheet.getRange(row, 5).setValue('');
  } else {
    // 新規 → 最終行の下に追加
    sheet.appendRow([name, company, email, new Date(), '']);
  }

  sendConfirmationEmail(email, name);
  return jsonResponse({ status: 'ok', message: 'Subscribed' });
}

// 配信停止処理: 該当者の配信停止欄にマーク
function handleUnsubscribe(sheet, email) {
  var row = findEmailRow(sheet, email);

  if (row) {
    sheet.getRange(row, 5).setValue('停止');
  }
  // メールが見つからなくても成功を返す（セキュリティ上）

  return jsonResponse({ status: 'ok', message: 'Unsubscribed' });
}

// メールアドレスの行を検索（C列 = メールアドレス）
function findEmailRow(sheet, email) {
  var data = sheet.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    if (String(data[i][2]).toLowerCase().trim() === email) {
      return i + 1; // 1-indexed
    }
  }
  return null;
}

// メール形式チェック
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// 登録確認メール送信（Gmailから自動送信）
function sendConfirmationEmail(email, name) {
  var greeting = name ? (name + '様\n\n') : '';
  var subject = 'KAIBメルマガ登録完了';
  var body = greeting
    + 'KAIBメルマガにご登録いただきありがとうございます。\n\n'
    + '今後、イベント情報や活動レポートをお届けします。\n\n'
    + '配信停止をご希望の場合は、以下のリンクからお手続きください：\n'
    + 'https://kaib.jp/unsubscribe\n\n'
    + '---\n'
    + 'KAIB - 香川イノベーションベース\n'
    + 'https://kaib.jp';

  try {
    GmailApp.sendEmail(email, subject, body, {
      name: 'KAIB - 香川イノベーションベース'
    });
  } catch (err) {
    Logger.log('Email send failed: ' + err.toString());
  }
}

// JSON レスポンスを返す
function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// GET リクエスト（ヘルスチェック用）
function doGet(e) {
  return jsonResponse({ status: 'ok', service: 'KAIB Newsletter' });
}

/**
 * メルマガ一括送信（手動実行用）
 *
 * 使い方:
 * 1. Apps Script エディタで「sendNewsletter」を選択
 * 2. 下の SUBJECT と BODY を編集
 * 3. ▶ 実行ボタンをクリック
 *
 * ※ 配信停止欄にマークがある行はスキップします
 * ※ Gmail の1日あたりの送信上限:
 *    - 無料 Gmail: 100通/日
 *    - Google Workspace: 2,000通/日
 */
function sendNewsletter() {
  // ---- ここを毎回編集 ----
  var SUBJECT = '【KAIB】月例会のご案内';
  var BODY = 'こんにちは、KAIBです。\n\n'
    + '次回月例会のご案内です。\n\n'
    + '...\n\n'
    + '---\n'
    + '配信停止: https://kaib.jp/unsubscribe\n'
    + 'KAIB - 香川イノベーションベース\n'
    + 'https://kaib.jp';
  // ---- ここまで ----

  var sheet = getSheetByGid(SHEET_GID);
  if (!sheet) {
    SpreadsheetApp.getUi().alert('シートが見つかりません');
    return;
  }

  var data = sheet.getDataRange().getValues();
  var sent = 0;
  var skipped = 0;
  var failed = 0;

  for (var i = 1; i < data.length; i++) {
    var email = String(data[i][2]).trim();
    var unsubscribed = String(data[i][4]).trim();

    // 配信停止欄にマークがある場合はスキップ
    if (unsubscribed) {
      skipped++;
      continue;
    }

    if (!email || !isValidEmail(email)) continue;

    try {
      GmailApp.sendEmail(email, SUBJECT, BODY, {
        name: 'KAIB - 香川イノベーションベース'
      });
      sent++;
      Utilities.sleep(500);
    } catch (err) {
      Logger.log('Failed to send to ' + email + ': ' + err.toString());
      failed++;
    }
  }

  Logger.log('送信: ' + sent + ' / スキップ: ' + skipped + ' / 失敗: ' + failed);
  SpreadsheetApp.getUi().alert('送信完了: ' + sent + '通\nスキップ（配信停止）: ' + skipped + '通\n失敗: ' + failed + '通');
}
