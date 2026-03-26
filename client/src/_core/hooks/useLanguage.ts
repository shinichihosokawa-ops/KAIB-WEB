import { useLanguage as useLanguageContext } from "@/contexts/LanguageContext";

const translations: Record<string, Record<string, string>> = {
  "nav.about": {
    ja: "KAIBとは",
    en: "About",
  },
  "nav.solution": {
    ja: "解決策",
    en: "Solutions",
  },
  "nav.services": {
    ja: "サービス",
    en: "Services",
  },
  "nav.membership": {
    ja: "会員制度",
    en: "Membership",
  },
  "nav.news": {
    ja: "ニュース",
    en: "News",
  },
  "nav.contact": {
    ja: "お問い合わせ",
    en: "Contact",
  },
  "nav.register": {
    ja: "参加意向登録",
    en: "Register Interest",
  },
  "contact.title": {
    ja: "お問い合わせ",
    en: "Contact Us",
  },
  "contact.subtitle": {
    ja: "KAIBについてのご質問やご相談がございましたら、お気軽にお問い合わせください。",
    en: "If you have any questions or inquiries about KAIB, please feel free to contact us.",
  },
  "contact.name": {
    ja: "お名前",
    en: "Name",
  },
  "contact.email": {
    ja: "メールアドレス",
    en: "Email",
  },
  "contact.subject": {
    ja: "件名",
    en: "Subject",
  },
  "contact.message": {
    ja: "メッセージ",
    en: "Message",
  },
  "contact.send": {
    ja: "送信する",
    en: "Send Message",
  },
  "contact.sending": {
    ja: "送信中...",
    en: "Sending...",
  },
  "contact.success": {
    ja: "送信完了",
    en: "Message Sent",
  },
  "contact.successMessage": {
    ja: "お問い合わせありがとうございます。内容を確認の上、折り返しご連絡いたします。",
    en: "Thank you for your inquiry. We will review your message and get back to you shortly.",
  },
  "contact.error": {
    ja: "送信に失敗しました。もう一度お試しください。",
    en: "Failed to send message. Please try again.",
  },
  "contact.location": {
    ja: "所在地",
    en: "Location",
  },
  "contact.locationValue": {
    ja: "香川県さぬき市（詳細未定）",
    en: "Sanuki City, Kagawa Prefecture (details TBD)",
  },
  "interest.title": {
    ja: "参加意向登録",
    en: "Register Your Interest",
  },
  "interest.subtitle": {
    ja: "2026年4月発足予定のKAIBの第1期メンバーを募集しています。",
    en: "We are recruiting founding members for KAIB, launching in April 2026.",
  },
  "whatsnew.title": {
    ja: "ニュース",
    en: "News",
  },
  "whatsnew.subtitle": {
    ja: "KAIBの最新情報・イベント情報をお届けします。",
    en: "Latest news and event information from KAIB.",
  },
  "common.backToTop": {
    ja: "トップに戻る",
    en: "Back to Top",
  },
  "common.learnMore": {
    ja: "詳しく見る",
    en: "Learn More",
  },
  "common.register": {
    ja: "参加意向登録",
    en: "Register Interest",
  },
  "notfound.title": {
    ja: "ページが見つかりません",
    en: "Page Not Found",
  },
  "notfound.message": {
    ja: "お探しのページは存在しないか、移動した可能性があります。",
    en: "The page you are looking for does not exist or may have been moved.",
  },
  "notfound.home": {
    ja: "トップページに戻る",
    en: "Back to Home",
  },
};

export function useLanguage() {
  const { language, setLanguage } = useLanguageContext();

  const t = (key: string): string => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[language] || entry["ja"] || key;
  };

  /** Returns a path with /en prefix when in English mode */
  const localePath = (path: string): string => {
    if (language === "en") {
      return path === "/" ? "/en" : `/en${path}`;
    }
    return path;
  };

  return { language, setLanguage, t, localePath };
}
