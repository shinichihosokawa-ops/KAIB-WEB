import { useLanguage } from "@/_core/hooks/useLanguage";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Send, ShieldCheck, CalendarDays, XCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import NewsletterForm from "@/components/NewsletterForm";
import { useSEO } from "@/_core/hooks/useSEO";

export default function Newsletter() {
  const { language } = useLanguage();

  useSEO(language === 'en' ? {
    title: "KAIB Newsletter | Stay Updated",
    description: "Subscribe to the KAIB newsletter. Get the latest news on events, monthly meetings, and activities from Kagawa Innovation Base.",
    path: "/en/newsletter",
  } : {
    title: "KAIBメルマガ | 香川イノベーションベース",
    description: "KAIBメルマガに登録して、イベント・月例会・活動情報をいち早くお届け。香川イノベーションベースの最新情報。",
    path: "/newsletter",
  });

  const benefits = [
    {
      icon: <CalendarDays className="w-6 h-6 text-primary" />,
      title: language === 'en' ? 'Event Information' : 'イベント情報',
      desc: language === 'en'
        ? 'Be the first to know about monthly meetings, special lectures, and networking events.'
        : '月例会・特別講演・交流会などの開催情報をいち早くお届けします。',
    },
    {
      icon: <Send className="w-6 h-6 text-primary" />,
      title: language === 'en' ? 'Activity Reports' : '活動レポート',
      desc: language === 'en'
        ? 'Summaries of past events and insights from guest speakers.'
        : '過去のイベントの振り返りや講師からの学びを共有します。',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: language === 'en' ? 'Member-Only Info' : '会員限定情報',
      desc: language === 'en'
        ? 'Special announcements and early access opportunities for members.'
        : '先行案内や会員限定のお知らせをお届けします。',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation activePage="newsletter" />

      <section className="py-20 bg-white">
        <div className="container max-w-3xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-primary mb-4">
              {language === 'en' ? 'KAIB Newsletter' : 'KAIBメルマガ'}
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              {language === 'en'
                ? 'Stay updated with KAIB\'s latest events, insights, and community news. Delivered to your inbox.'
                : 'KAIBの最新イベント・活動情報・コミュニティニュースをメールでお届けします。'}
            </p>
          </div>

          {/* Subscribe Form */}
          <Card className="p-8 mb-12 border-2 border-primary/20 bg-primary/5">
            <h2 className="text-xl font-bold text-foreground mb-2 text-center">
              {language === 'en' ? 'Subscribe Now' : '今すぐ登録'}
            </h2>
            <p className="text-sm text-muted-foreground mb-6 text-center">
              {language === 'en'
                ? 'Free to subscribe. Unsubscribe anytime.'
                : '無料で登録できます。いつでも配信停止可能です。'}
            </p>
            <NewsletterForm />
          </Card>

          {/* Benefits */}
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            {language === 'en' ? 'What You\'ll Receive' : 'お届けする内容'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {benefits.map((item, i) => (
              <Card key={i} className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>

          {/* Unsubscribe */}
          <Card className="p-6 mb-12 border border-border">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                <XCircle className="w-5 h-5 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">
                  {language === 'en' ? 'Want to unsubscribe?' : '配信停止をご希望の方'}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {language === 'en'
                    ? 'You can unsubscribe from the newsletter at any time.'
                    : 'メルマガの配信はいつでも停止できます。'}
                </p>
                <Button asChild variant="outline" size="sm">
                  <a href={language === 'en' ? '/en/unsubscribe' : '/unsubscribe'}>
                    {language === 'en' ? 'Unsubscribe' : '配信停止はこちら'}
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          {/* FAQ */}
          <Card className="p-8">
            <h2 className="text-xl font-bold text-foreground mb-6">
              {language === 'en' ? 'FAQ' : 'よくある質問'}
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  {language === 'en' ? 'How often will I receive emails?' : '配信頻度は？'}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === 'en'
                    ? 'Approximately 1-2 times per month. We only send when there\'s something valuable to share.'
                    : '月1〜2回程度です。お届けする価値のある情報がある時のみ配信します。'}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  {language === 'en' ? 'Can I unsubscribe?' : '配信停止はできますか？'}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === 'en'
                    ? 'Yes, every email includes an unsubscribe link. You can also unsubscribe from our website anytime.'
                    : 'はい、毎回のメールに配信停止リンクがあります。ウェブサイトからもいつでも停止できます。'}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  {language === 'en' ? 'Is it free?' : '無料ですか？'}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === 'en'
                    ? 'Yes, the newsletter is completely free. No membership required.'
                    : 'はい、完全無料です。会員でなくても登録できます。'}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
