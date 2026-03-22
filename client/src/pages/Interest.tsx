import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import { useLocation } from "wouter";
import { useSEO } from "@/_core/hooks/useSEO";

export default function Interest() {
  useSEO({
    title: "参加意向登録 | KAIB - 香川イノベーションベース",
    description: "KAIB（香川イノベーションベース）の第1期メンバー募集。2026年4月発足予定。香川から世界へ、新しい起業家精神を育てるコミュニティ。",
    path: "/interest",
  });
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // FormspreeまたはEmailJSなどのサービスを使用する場合はここに実装
      console.log("Form submitted:", formData);

      // 実装例：Formspreeを使用する場合
      const response = await fetch("https://formspree.io/f/xyzabc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          name: formData.name,
          company: formData.company,
          message: formData.message,
          _to: "info@kaib.jp",
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ email: "", name: "", company: "", message: "" });
        setTimeout(() => {
          setLocation("/");
        }, 2000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663255440915/pZrMXUTAEjDsCOGE.jpg"
              alt="KAIB Logo"
              className="h-12"
            />
          </div>
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition"
          >
            <ArrowLeft className="w-4 h-4" />
            戻る
          </button>
        </div>
      </nav>

      {/* Interest Registration Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-2xl">
          <h1 className="text-4xl font-bold text-primary mb-4 font-display">
            参加意向登録
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            KAIB への参加をご検討いただきありがとうございます。下記のフォームから参加意向をお知らせください。
          </p>

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
                  placeholder="your@email.com"
                />
              </div>

              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
                  placeholder="山田太郎"
                />
              </div>

              {/* Company Field */}
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-2">
                  会社名・団体名
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
                  placeholder="会社名・団体名をご入力ください"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  メッセージ・備考
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground resize-none"
                  placeholder="ご質問やご要望などをご入力ください..."
                />
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-semibold">
                    ✓ 参加意向登録を送信いたしました。
                  </p>
                  <p className="text-green-700 text-sm mt-1">
                    ご返信までお待ちください。
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 font-semibold">
                    ✗ 送信に失敗しました。
                  </p>
                  <p className="text-red-700 text-sm mt-1">
                    もう一度お試しいただくか、直接お問い合わせください。
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3"
              >
                {isSubmitting ? "送信中..." : "送付"}
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <Card className="p-6 text-center">
              <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">電話</h3>
              <p className="text-muted-foreground text-sm">
                未定
              </p>
            </Card>
            <Card className="p-6 text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">住所</h3>
              <p className="text-muted-foreground text-sm">
                香川県さぬき市
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 mt-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663255440915/pZrMXUTAEjDsCOGE.jpg"
                alt="KAIB Logo"
                className="h-10 mb-4"
              />
              <p className="text-white/70 text-sm">
                香川県を拠点に活動する起業家・経営者のための実践的なコミュニティ。ソーシャル × グローバル × Web3で、新しい起業家精神を育てます。
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">メニュー</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <button
                    onClick={() => setLocation("/#about")}
                    className="hover:text-white transition"
                  >
                    KAIBについて
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setLocation("/#solution")}
                    className="hover:text-white transition"
                  >
                    解決策
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setLocation("/#services")}
                    className="hover:text-white transition"
                  >
                    サービス
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">連絡先</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>未定</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>未定</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">住所</h4>
              <p className="text-sm text-white/70">
                香川県さぬき市
              </p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/70">
            <p>&copy; 2026 Kagawa Innovation Base. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
