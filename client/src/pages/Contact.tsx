import { useLanguage } from "@/_core/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { ExternalLink, Mail } from "lucide-react";
import { useSEO } from "@/_core/hooks/useSEO";

export default function Contact() {
  const { language, setLanguage, t, localePath } = useLanguage();

  useSEO(language === 'en' ? {
    title: "Contact KAIB | Kagawa Innovation Base",
    description: "Contact Kagawa Innovation Base (KAIB). Get in touch with us for inquiries and questions about our community and events.",
    path: "/en/contact",
  } : {
    title: "お問い合わせ | KAIB - 香川イノベーションベース",
    description: "KAIB（香川イノベーションベース）へのお問い合わせ。ご質問やご不明な点がございましたら、お気軽にお問い合わせください。",
    path: "/contact",
  });

  const getEmail = () => ['info', 'kaib.jp'].join('@');

  return (
    <div className="min-h-screen bg-white">
      <Navigation activePage="contact" />

      <section className="py-20 bg-white">
        <div className="container max-w-2xl">
          <h1 className="text-4xl font-bold text-primary mb-4">
            {language === 'en' ? 'Contact Us' : 'お問い合わせ'}
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            {language === 'en'
              ? 'If you have any questions or inquiries, please feel free to contact us.'
              : 'ご質問やご不明な点がございましたら、お気軽にお問い合わせください。'
            }
          </p>

          <Card className="p-8 text-center">
            <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
            <p className="text-lg text-foreground mb-6">
              {language === 'en'
                ? 'Click the button below to send us an email.'
                : '下記のボタンを押すとメールアプリが起動します。'
              }
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
              <a href={`mailto:${getEmail()}`}>
                <Mail className="w-4 h-4 mr-2" />
                {language === 'en' ? 'Send Email' : 'メールで問い合わせる'}
              </a>
            </Button>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 mt-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663255440915/pZrMXUTAEjDsCOGE.jpg"
                alt="KAIB Logo"
                className="h-10 mb-4"
              />
              <p className="text-background/70 text-sm">
                {language === 'en'
                  ? 'An entrepreneur community in Kagawa. Growing businesses beyond ¥100M revenue through EO methods and the xIB network.'
                  : '香川の起業家コミュニティ。EOの成長メソッドとxIBネットワークで年商1億円を超える経営者を育てます。'
                }
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">
                {language === 'en' ? 'Menu' : 'メニュー'}
              </h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href={localePath("/#about")} className="hover:text-background transition">{t('nav.about')}</a></li>
                <li><a href={localePath("/#services")} className="hover:text-background transition">{t('nav.services')}</a></li>
                <li><a href={localePath("/membership")} className="hover:text-background transition">{t('nav.membership')}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">
                {language === 'en' ? 'Network' : 'ネットワーク'}
              </h4>
              <p className="text-sm text-background/70 mb-2">
                {language === 'en'
                  ? 'KAIB is part of xIB JAPAN'
                  : 'KAIB は xIB JAPAN ネットワークの一員です。'
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
          </div>
          <div className="border-t border-background/10 pt-8 text-center text-sm text-background/70">
            <p>© 2026 Kagawa Innovation Base (KAIB). {language === 'en' ? 'All rights reserved.' : 'すべての権利を保有します。'}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
