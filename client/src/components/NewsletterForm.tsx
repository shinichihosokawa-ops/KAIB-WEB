import { useState } from "react";
import { useLanguage } from "@/_core/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";
import { NEWSLETTER_SCRIPT_URL } from "@/config/newsletter";

interface NewsletterFormProps {
  variant?: "default" | "footer";
}

export default function NewsletterForm({ variant = "default" }: NewsletterFormProps) {
  const { language } = useLanguage();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !NEWSLETTER_SCRIPT_URL) return;

    setStatus("submitting");
    try {
      await fetch(NEWSLETTER_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({ action: "subscribe", email }),
      });
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className={`flex items-center gap-3 ${variant === "footer" ? "text-background/90" : "text-green-700"}`}>
        <CheckCircle className="w-5 h-5 flex-shrink-0" />
        <p className="text-sm font-semibold">
          {language === "en"
            ? "Thank you! You have been subscribed."
            : "登録ありがとうございます！メルマガをお届けします。"}
        </p>
      </div>
    );
  }

  const isFooter = variant === "footer";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className={`flex gap-2 ${isFooter ? "flex-col sm:flex-row" : "flex-col sm:flex-row"}`}>
        <div className="relative flex-1">
          <Mail className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${isFooter ? "text-background/50" : "text-muted-foreground"}`} />
          <input
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
            required
            placeholder={language === "en" ? "Enter your email" : "メールアドレスを入力"}
            className={`w-full pl-10 pr-4 py-2.5 rounded-lg text-sm ${
              isFooter
                ? "bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:border-background/40"
                : "bg-white border border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
            } focus:outline-none focus:ring-2 focus:ring-primary/30 transition`}
          />
        </div>
        <Button
          type="submit"
          disabled={status === "submitting" || !NEWSLETTER_SCRIPT_URL}
          size="lg"
          className={isFooter
            ? "bg-white text-primary hover:bg-white/90 font-semibold shrink-0"
            : "bg-primary hover:bg-primary/90 font-semibold shrink-0"
          }
        >
          {status === "submitting"
            ? (language === "en" ? "Subscribing..." : "登録中...")
            : (language === "en" ? "Subscribe" : "登録する")}
        </Button>
      </div>
      {status === "error" && (
        <div className="flex items-center gap-2 text-red-500 text-sm">
          <AlertCircle className="w-4 h-4" />
          {language === "en" ? "Something went wrong. Please try again." : "エラーが発生しました。もう一度お試しください。"}
        </div>
      )}
      <p className={`text-xs ${isFooter ? "text-background/50" : "text-muted-foreground"}`}>
        {language === "en"
          ? "We respect your privacy. Unsubscribe anytime."
          : "プライバシーを尊重します。いつでも配信停止できます。"}
      </p>
    </form>
  );
}
