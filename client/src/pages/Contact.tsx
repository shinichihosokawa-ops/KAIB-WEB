import { useState } from "react";
import { useLanguage } from "@/_core/hooks/useLanguage";
import { useSEO } from "@/_core/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { ExternalLink, Mail } from "lucide-react";

export default function Contact() {
  const { language, setLanguage, t, localePath } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });
  useSEO(language === 'en' ? {
    title: "Contact KAIB | Kagawa Innovation Base",
    description: "Contact Kagawa Innovation Base (KAIB). Get in touch with us for inquiries and questions about our community and events.",
    path: "/en/contact",
  } : {
    title: "お問い合わせ | KAIB - 香川イノベーションベース",
    description: "KAIB（香川イノベーションベース）へのお問い合わせ。ご質問やご不明な点がございましたら、お気軽にお問い合わせください。",
    path: "/contact",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getEmail = () => ['info', 'kaib', 'jp'].join('@').replace('@jp', '.jp');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `${formData.message}\n\n---\n${language === 'en' ? 'Name' : 'お名前'}: ${formData.name}`
    );
    window.location.href = `mailto:${getEmail()}?subject=${subject}&body=${body}`;
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

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3"
              >
                <Mail className="w-4 h-4 mr-2" />
                {language === 'en' ? 'Send Email' : 'メールで送信する'}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                {language === 'en'
                  ? 'Clicking the button will open your email app with the message pre-filled.'
                  : 'ボタンを押すとメールアプリが開き、入力内容が自動で反映されます。'
                }
              </p>
            </form>
          </Card>

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
