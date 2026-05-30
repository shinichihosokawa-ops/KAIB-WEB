import { useState } from "react";
import { useLanguage } from "@/_core/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { Mail, User, Building2, CheckCircle, AlertCircle } from "lucide-react";
import { NEWSLETTER_SCRIPT_URL } from "@/config/newsletter";

export default function NewsletterForm() {
  const { language } = useLanguage();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error" | "no-url">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;

    if (!NEWSLETTER_SCRIPT_URL) {
      setStatus("no-url");
      return;
    }

    setStatus("submitting");
    try {
      await fetch(NEWSLETTER_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({ action: "subscribe", name, company, email }),
      });
      setStatus("success");
      setName("");
      setCompany("");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 py-4 text-green-700">
        <CheckCircle className="w-8 h-8" />
        <p className="font-semibold">
          {language === "en"
            ? "Thank you! You have been subscribed."
            : "登録ありがとうございます！メルマガをお届けします。"}
        </p>
      </div>
    );
  }

  const inputClass = "w-full pl-10 pr-4 py-2.5 rounded-lg text-sm bg-white border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label className="block text-sm font-semibold text-foreground mb-1.5">
          {language === "en" ? "Name" : "お名前"} <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={name}
            onChange={(e) => { setName(e.target.value); setStatus("idle"); }}
            required
            placeholder={language === "en" ? "Your name" : "山田太郎"}
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-foreground mb-1.5">
          {language === "en" ? "Company / Organization" : "会社名・団体名"}
        </label>
        <div className="relative">
          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={company}
            onChange={(e) => { setCompany(e.target.value); setStatus("idle"); }}
            placeholder={language === "en" ? "Company name (optional)" : "会社名（任意）"}
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-foreground mb-1.5">
          {language === "en" ? "Email" : "メールアドレス"} <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
            required
            placeholder={language === "en" ? "your@email.com" : "your@email.com"}
            className={inputClass}
          />
        </div>
      </div>
      {status === "error" && (
        <div className="flex items-center gap-2 text-red-500 text-sm">
          <AlertCircle className="w-4 h-4" />
          {language === "en" ? "Something went wrong. Please try again." : "エラーが発生しました。もう一度お試しください。"}
        </div>
      )}
      {status === "no-url" && (
        <div className="flex items-center gap-2 text-amber-600 text-sm">
          <AlertCircle className="w-4 h-4" />
          {language === "en" ? "Newsletter registration is being set up. Please try again later." : "メルマガ登録は現在準備中です。しばらくお待ちください。"}
        </div>
      )}
      <Button
        type="submit"
        disabled={status === "submitting"}
        size="lg"
        className="w-full bg-primary hover:bg-primary/90 font-semibold"
      >
        {status === "submitting"
          ? (language === "en" ? "Subscribing..." : "登録中...")
          : (language === "en" ? "Subscribe to Newsletter" : "メルマガに登録する")}
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        {language === "en"
          ? "Free to subscribe. Unsubscribe anytime."
          : "無料で登録できます。いつでも配信停止可能です。"}
      </p>
    </form>
  );
}
