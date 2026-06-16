import { useLanguage } from "@/_core/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Newspaper, Mail, Tv, FileText } from "lucide-react";
import Navigation from "@/components/Navigation";
import { useSEO } from "@/_core/hooks/useSEO";

export default function Media() {
  const { language, setLanguage, t, localePath } = useLanguage();

  useSEO(language === 'en' ? {
    title: "KAIB - Media Coverage & Event Videos",
    description: "KAIB (Kagawa Innovation Base) media coverage, press information, and past event videos. Watch the 2026 KICK OFF event launch video.",
    path: "/en/media",
  } : {
    title: "KAIB - メディア掲載・過去のイベント動画",
    description: "KAIB（香川イノベーションベース）のメディア掲載情報と過去のイベント動画。2026年キックオフイベント動画をご覧ください。",
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
              {language === 'en' ? 'Media Coverage & Event Videos' : 'メディア掲載・過去のイベント動画'}
            </h1>
          </div>
          <p className="text-lg text-muted-foreground mb-12">
            {language === 'en'
              ? 'KAIB\'s activities featured in various media outlets.'
              : 'KAIBの活動が各メディアに取り上げられました。'
            }
          </p>

          {/* Event Video */}
          <Card className="p-8 mb-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-l-primary">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === 'en' ? 'KAIB 2026 KICK OFF Event' : 'KAIB 2026 キックオフイベント'}
            </h2>
            <div className="mb-6 aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/mkbSZu-rBWc"
                title={language === 'en' ? 'KAIB 2026 KICK OFF Event' : 'KAIB 2026 キックオフイベント'}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-sm text-muted-foreground">
              {language === 'en'
                ? 'Full event video from May 14, 2026. Featuring speeches, introductions, and networking highlights from KAIB\'s official launch event in Sanuki City, Kagawa.'
                : '2026年5月14日の香川県さぬき市での公式ローンチイベントの映像。スピーチ、組織紹介、ネットワーキングのハイライトをご覧ください。'
              }
            </p>
          </Card>

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
                  href: 'https://news.ntv.co.jp/n/rnc/category/society/rne502855c6e2d4b0295b1d154eaa3f951',
                  outlet: { en: 'RNC NEWS NNN (TV)', ja: 'RNC NEWS NNN（テレビ）' },
                  title: {
                    en: 'New organization founded by Kagawa-linked entrepreneurs to support startups (May 14, 2026)',
                    ja: '起業を支援　香川県ゆかりの経営による新団体発足（2026年5月14日掲載）',
                  },
                  icon: <Tv className="w-5 h-5 text-accent" />,
                  iconBg: 'bg-accent/10',
                },
                {
                  href: 'https://www.shikoku-np.co.jp/dg/article.aspx?id=K2026051500000001900',
                  outlet: { en: 'Shikoku Shimbun', ja: '四国新聞' },
                  title: {
                    en: 'New organization launched to nurture entrepreneurs — Kagawa Innovation Base holds study sessions with guest lecturers and member networking',
                    ja: '起業家育てる組織発足　香川イノベーションベース　講師招き勉強会、会員同士の交流も',
                  },
                  icon: <FileText className="w-5 h-5 text-primary" />,
                  iconBg: 'bg-primary/10',
                },
                {
                  href: 'https://news.yahoo.co.jp/articles/a41c847983e02907758909e8c33e6b66c23ee008',
                  outlet: { en: 'Yahoo News', ja: 'Yahoo News' },
                  title: {
                    en: 'Kagawa Innovation Base launches to nurture entrepreneurs — kicks off in Sanuki City',
                    ja: '起業家育成へ香川イノベーションベース始動　さぬき市でキックオフ',
                  },
                  icon: <FileText className="w-5 h-5 text-primary" />,
                  iconBg: 'bg-primary/10',
                },
                {
                  href: 'https://takamatsu.keizai.biz/mapnews/1499/',
                  outlet: { en: 'Takamatsu Keizai Shimbun', ja: '高松経済新聞' },
                  title: {
                    en: 'Kagawa Innovation Base launches to nurture entrepreneurs — kicks off in Sanuki City',
                    ja: '起業家育成へ香川イノベーションベース始動　さぬき市でキックオフ',
                  },
                  icon: <FileText className="w-5 h-5 text-primary" />,
                  iconBg: 'bg-primary/10',
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
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <a href="https://forms.gle/fpudsa3tHTGXqnrKA" target="_blank" rel="noopener noreferrer">
                {language === 'en' ? 'Contact Us' : 'お問い合わせフォーム'}
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
}
