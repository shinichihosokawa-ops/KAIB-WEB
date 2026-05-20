import { useLanguage } from "@/_core/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Newspaper, Mail, Tv, FileText } from "lucide-react";
import Navigation from "@/components/Navigation";
import { useSEO } from "@/_core/hooks/useSEO";

export default function Media() {
  const { language, setLanguage, t, localePath } = useLanguage();

  useSEO(language === 'en' ? {
    title: "KAIB - Media Coverage | Press",
    description: "Media coverage and press information about KAIB (Kagawa Innovation Base). Press inquiries welcome.",
    path: "/en/media",
  } : {
    title: "KAIB - メディア掲載 | プレス",
    description: "KAIB（香川イノベーションベース）のメディア掲載情報。取材のお問い合わせもこちらから。",
    path: "/media",
  });

  return (
    <div className="min-h-screen bg-white">
      <Navigation activePage="media" />

      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <Newspaper className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold text-primary">
              {language === 'en' ? 'Media Coverage' : 'メディア掲載'}
            </h1>
          </div>
          <p className="text-lg text-muted-foreground mb-12">
            {language === 'en'
              ? 'KAIB\'s activities featured in various media outlets.'
              : 'KAIBの活動が各メディアに取り上げられました。'
            }
          </p>

          {/* KICK OFF Event Coverage */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              KAIB 2026 KICK OFF!
            </h2>
            <p className="text-sm text-muted-foreground mb-8">
              {language === 'en'
                ? 'May 14, 2026 — Sanuki City, Kagawa Prefecture'
                : '2026年5月14日 — 香川県さぬき市にて開催'
              }
            </p>

            <div className="space-y-4">
              {[
                {
                  href: 'https://www.shikoku-np.co.jp/dg/article.aspx?id=K2026051500000001900',
                  outlet: { en: 'Shikoku Shimbun', ja: '四国新聞' },
                  title: { en: '', ja: '' },
                  icon: <FileText className="w-5 h-5 text-primary" />,
                  iconBg: 'bg-primary/10',
                },
                {
                  href: 'https://takamatsu.keizai.biz/mapnews/1499/',
                  outlet: { en: 'Takamatsu Keizai Shimbun', ja: '高松経済新聞' },
                  title: { en: '', ja: '' },
                  icon: <FileText className="w-5 h-5 text-primary" />,
                  iconBg: 'bg-primary/10',
                },
                {
                  href: 'https://news.yahoo.co.jp/articles/a41c847983e02907758909e8c33e6b66c23ee008',
                  outlet: { en: 'Yahoo News', ja: 'Yahoo News' },
                  title: { en: '', ja: '' },
                  icon: <FileText className="w-5 h-5 text-primary" />,
                  iconBg: 'bg-primary/10',
                },
                {
                  href: 'https://news.ntv.co.jp/n/rnc/category/society/rne502855c6e2d4b0295b1d154eaa3f951',
                  outlet: { en: 'RNC NEWS NNN (TV)', ja: 'RNC NEWS NNN（テレビ）' },
                  title: {
                    en: 'New organization founded by Kagawa-linked entrepreneurs to support startups (May 14, 2026)',
                    ja: '起業を支援　香川県ゆかりの経営による新団体発足（2026年5月14日掲載）',
                  },
                  icon: <Tv className="w-5 h-5 text-accent" />,
                  iconBg: 'bg-accent/10',
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-card border border-border rounded-lg hover:border-primary/40 hover:bg-primary/5 transition group"
                >
                  <div className={`w-10 h-10 rounded-full ${item.iconBg} flex items-center justify-center flex-shrink-0`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground group-hover:text-primary transition">
                      {item.outlet[language]}
                    </p>
                    {item.title[language] && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.title[language]}
                      </p>
                    )}
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition flex-shrink-0" />
                </a>
              ))}
            </div>
          </Card>

          {/* Media Inquiry */}
          <Card className="p-8 mb-8 border-l-4 border-l-primary">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">
                {language === 'en' ? 'Press & Media Inquiries' : '取材・メディアに関するお問い合わせ'}
              </h2>
            </div>
            <p className="text-muted-foreground mb-6">
              {language === 'en'
                ? 'For interview requests, media coverage, and press inquiries, please contact us through the form below.'
                : '取材のご依頼、メディア掲載に関するお問い合わせは、下記よりご連絡ください。'
              }
            </p>
            <a href={localePath("/contact")}>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                {language === 'en' ? 'Contact Us' : 'お問い合わせフォームへ'}
                <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </Card>
        </div>
      </section>
    </div>
  );
}
