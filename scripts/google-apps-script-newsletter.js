/**
 * KAIB メルマガ管理 - Google Apps Script
 *
 * セットアップ手順:
 *
 * 1. Google Sheets で新しいスプレッドシートを作成
 *    - シート名: 「メルマガ」
 *    - A1〜E1 にヘッダーを入力: Email | ステータス | 登録日 | 解除日 | 備考
 *
 * 2. メニュー → 拡張機能 → Apps Script を開く
 *
 * 3. このファイルの内容をすべてコピーして貼り付け（Code.gs に）
 *
 * 4. デプロイ:
 *    - 「デプロイ」→「新しいデプロイ」
 *    - 種類: 「ウェブアプリ」
 *    - 実行ユーザー: 「自分」
 *    - アクセス権: 「全員」
 *    - 「デプロイ」をクリック
 *    - 表示されるURLをコピー
 *
 * 5. Vercel の環境変数に設定:
 *    - キー: VITE_NEWSLETTER_SCRIPT_URL
 *    - 値: コピーしたURL
 *
 * 6. 再デプロイ（Vercel）で反映
 */

// POST リクエストを受け取る
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var action = data.action;
    var email = (data.email || '').trim().toLowerCase();

    if (!email || !isValidEmail(email)) {
      return jsonResponse({ status: 'error', message: 'Invalid email' });
    }

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('メルマガ');
    if (!sheet) {
      sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
      sheet.setName('メルマガ');
      sheet.getRange('A1:E1').setValues([['Email', 'ステータス', '登録日', '解除日', '備考']]);
    }

    if (action === 'subscribe') {
      return handleSubscribe(sheet, email);
    } else if (action === 'unsubscribe') {
      return handleUnsubscribe(sheet, email);
    }

    return jsonResponse({ status: 'error', message: 'Unknown action' });
  } catch (err) {
    return jsonResponse({ status: 'error', message: err.toString() });
  }
}

// 登録処理
function handleSubscribe(sheet, email) {
  var row = findEmailRow(sheet, email);

  if (row) {
    // 既存のメールアドレス → ステータスを「登録中」に更新
    sheet.getRange(row, 2).setValue('登録中');
    sheet.getRange(row, 3).setValue(new Date());
    sheet.getRange(row, 4).setValue('');
  } else {
    // 新規登録
    sheet.appendRow([email, '登録中', new Date(), '', '']);
  }

  // 確認メール送信
  sendConfirmationEmail(email);

  return jsonResponse({ status: 'ok', message: 'Subscribed' });
}

// 配信停止処理
function handleUnsubscribe(sheet, email) {
  var row = findEmailRow(sheet, email);

  if (row) {
    sheet.getRange(row, 2).setValue('解除済み');
    sheet.getRange(row, 4).setValue(new Date());
  }
  // メールが見つからなくても成功を返す（セキュリティ上）

  return jsonResponse({ status: 'ok', message: 'Unsubscribed' });
}

// メールアドレスの行を検索
function findEmailRow(sheet, email) {
  var data = sheet.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    if (String(data[i][0]).toLowerCase() === email) {
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
function sendConfirmationEmail(email) {
  var subject = 'KAIBメルマガ登録完了';
  var body = 'KAIBメルマガにご登録いただきありがとうございます。\n\n'
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
    // メール送信失敗してもエラーにしない（登録自体は完了）
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

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('メルマガ');
  var data = sheet.getDataRange().getValues();
  var sent = 0;
  var failed = 0;

  for (var i = 1; i < data.length; i++) {
    var email = data[i][0];
    var status = data[i][1];

    if (status !== '登録中') continue;

    try {
      GmailApp.sendEmail(email, SUBJECT, BODY, {
        name: 'KAIB - 香川イノベーションベース'
      });
      sent++;
      Utilities.sleep(500); // レート制限対策
    } catch (err) {
      Logger.log('Failed to send to ' + email + ': ' + err.toString());
      failed++;
    }
  }

  Logger.log('送信完了: ' + sent + '通 / 失敗: ' + failed + '通');
  SpreadsheetApp.getUi().alert('送信完了: ' + sent + '通\n失敗: ' + failed + '通');
}
