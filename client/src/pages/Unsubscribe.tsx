import { useState } from "react";
import { useLanguage } from "@/_core/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import { useSEO } from "@/_core/hooks/useSEO";
import { NEWSLETTER_SCRIPT_URL } from "@/config/newsletter";

export default function Unsubscribe() {
  const { language } = useLanguage();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error" | "no-url">("idle");

  useSEO(language === "en" ? {
    title: "Unsubscribe | KAIB",
    description: "Unsubscribe from KAIB newsletter.",
    path: "/en/unsubscribe",
  } : {
    title: "メルマガ配信停止 | KAIB",
    description: "KAIBメルマガの配信停止。",
    path: "/unsubscribe",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

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
        body: JSON.stringify({ action: "unsubscribe", email }),
      });
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation activePage="home" />

      <section className="py-20 bg-white">
        <div className="container max-w-md">
          <h1 className="text-3xl font-bold text-primary mb-4">
            {language === "en" ? "Unsubscribe" : "メルマガ配信停止"}
          </h1>
          <p className="text-muted-foreground mb-8">
            {language === "en"
              ? "Enter your email address to unsubscribe from our newsletter."
              : "配信停止するメールアドレスを入力してください。"}
          </p>

          <Card className="p-6">
            {status === "success" ? (
              <div className="flex flex-col items-center gap-3 py-4 text-center">
                <CheckCircle className="w-10 h-10 text-green-600" />
                <p className="font-semibold text-foreground">
                  {language === "en"
                    ? "You have been unsubscribed."
                    : "配信停止が完了しました。"}
                </p>
                <p className="text-sm text-muted-foreground">
                  {language === "en"
                    ? "You will no longer receive our newsletter."
                    : "今後メルマガは届きません。"}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="unsub-email" className="block text-sm font-semibold text-foreground mb-2">
                    {language === "en" ? "Email Address" : "メールアドレス"}
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="email"
                      id="unsub-email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
                      required
                      placeholder={language === "en" ? "your@email.com" : "your@email.com"}
                      className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg text-sm bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
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
                    {language === "en" ? "This feature is being set up. Please try again later." : "現在準備中です。しばらくお待ちください。"}
                  </div>
                )}
                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full"
                  variant="outline"
                >
                  {status === "submitting"
                    ? (language === "en" ? "Processing..." : "処理中...")
                    : (language === "en" ? "Unsubscribe" : "配信停止する")}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </section>
    </div>
  );
}
