import { useState } from "react";
import { useLanguage } from "@/_core/hooks/useLanguage";
import { useSEO } from "@/_core/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Phone, MapPin, ExternalLink } from "lucide-react";
import { trpc } from "@/lib/trpc";

export default function Contact() {
  const { language, setLanguage, t, localePath } = useLanguage();
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  useSEO(language === 'en' ? {
    title: "Contact KAIB | Kagawa Innovation Base",
    description: "Contact Kagawa Innovation Base (KAIB). Get in touch with us for inquiries and questions about our community and events.",
    path: "/en/contact",
  } : {
    title: "お問い合わせ | KAIB - 香川イノベーションベース",
    description: "KAIB（香川イノベーションベース）へのお問い合わせ。ご質問やご不明な点がございましたら、お気軽にお問い合わせください。",
    path: "/contact",
  });

  const contactMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      setSubmitStatus("success");
      setFormData({ email: "", name: "", subject: "", message: "" });
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    },
    onError: (error) => {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("idle");
    try {
      await contactMutation.mutateAsync({
        email: formData.email,
        name: formData.name,
        subject: formData.subject,
        message: formData.message,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation activePage="contact" />

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-2xl">
          <h1 className="text-4xl font-bold text-primary mb-4">
            {language === 'en' ? 'Contact Us' : 'お問い合わせ'}
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            {language === 'en'
              ? 'If you have any questions or inquiries, please feel free to contact us using the form below.'
              : 'ご質問やご不明な点がございましたら、下記のフォームからお気軽にお問い合わせください。'
            }
          </p>

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  {language === 'en' ? 'Email Address' : 'メールアドレス'} <span className="text-red-500">*</span>
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
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  {language === 'en' ? 'Name' : 'お名前'} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
                  placeholder={language === 'en' ? 'John Doe' : '山田太郎'}
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                  {language === 'en' ? 'Subject' : '題名'} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
                  placeholder={language === 'en' ? 'Enter subject' : '題名をご入力ください'}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  {language === 'en' ? 'Message' : 'メッセージ本文'} <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground resize-none"
                  placeholder={language === 'en' ? 'Enter your message...' : 'お問い合わせ内容をご入力ください...'}
                />
              </div>

              {submitStatus === "success" && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-semibold">
                    ✓ {language === 'en' ? 'Your message has been sent successfully.' : 'お問い合わせを送信いたしました。'}
                  </p>
                  <p className="text-green-700 text-sm mt-1">
                    {language === 'en' ? 'Thank you for contacting us. We will get back to you soon.' : 'ご返信までお待ちください。'}
                  </p>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 font-semibold">
                    ✗ {language === 'en' ? 'Failed to send message.' : '送信に失敗しました。'}
                  </p>
                  <p className="text-red-700 text-sm mt-1">
                    {language === 'en'
                      ? 'Please try again or contact us directly.'
                      : 'もう一度お試しいただくか、直接お問い合わせください。'
                    }
                  </p>
                </div>
              )}

              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3"
              >
                {contactMutation.isPending
                  ? language === 'en' ? 'Sending...' : '送信中...'
                  : language === 'en' ? 'Send' : '送付'
                }
              </Button>
            </form>
          </Card>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <Card className="p-6 text-center">
              <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">
                {language === 'en' ? 'Phone' : '電話'}
              </h3>
              <p className="text-muted-foreground text-sm">
                {language === 'en' ? 'Coming Soon' : '未定'}
              </p>
            </Card>
            <Card className="p-6 text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">
                {language === 'en' ? 'Address' : '住所'}
              </h3>
              <p className="text-muted-foreground text-sm">
                {language === 'en' ? 'Sanuki City, Kagawa Prefecture' : '香川県さぬき市'}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 mt-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663255440915/pZrMXUTAEjDsCOGE.jpg"
                alt="KAIB Logo"
                className="h-10 mb-4"
              />
              <p className="text-background/70 text-sm">
                {language === 'en'
                  ? 'A practical community for entrepreneurs and business leaders based in Kagawa Prefecture. Nurturing new entrepreneurial spirit through Social × Global × Web3.'
                  : '香川県を拠点に活動する起業家・経営者のための実践的なコミュニティ。ソーシャル × グローバル × Web3で、新しい起業家精神を育てます。'
                }
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">
                {language === 'en' ? 'Menu' : 'メニュー'}
              </h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="/#about" className="hover:text-background transition">{t('nav.about')}</a></li>
                <li><a href="/#solution" className="hover:text-background transition">{t('nav.solution')}</a></li>
                <li><a href="/#services" className="hover:text-background transition">{t('nav.services')}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">
                {language === 'en' ? 'Network' : 'ネットワーク'}
              </h4>
              <p className="text-sm text-background/70 mb-2">
                {language === 'en'
                  ? 'KAIB is part of xIB JAPAN'
                  : 'KAIB は xIB JAPAN ネットワークの一部です。'
                }
              </p>
              <a
                href="https://xibase.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-background/70 hover:text-background font-semibold inline-flex items-center gap-1 transition"
              >
                {language === 'en' ? 'Learn More' : '詳しく'}
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div>
              <h4 className="font-semibold mb-4">
                {language === 'en' ? 'Address' : '住所'}
              </h4>
              <p className="text-sm text-background/70">
                {language === 'en' ? 'Sanuki City, Kagawa Prefecture, Japan' : '香川県さぬき市'}
              </p>
            </div>
          </div>
          <div className="border-t border-background/10 pt-8 text-center text-sm text-background/70">
            <p>© 2026 Kagawa Innovation Base (KAIB). {language === 'en' ? 'All rights reserved.' : 'すべての権利を保有します。'}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
