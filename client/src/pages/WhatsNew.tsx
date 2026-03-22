import { useLanguage } from "@/_core/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Users, ExternalLink } from "lucide-react";
import { useEffect } from "react";

export default function WhatsNew() {
  const { language, setLanguage, t, localePath } = useLanguage();

  useEffect(() => {
    if (language === 'en') {
      document.title = "KAIB First Monthly Meeting | News";
      document.querySelector('meta[name="description"]')?.setAttribute(
        'content',
        'KAIB First Monthly Meeting on April 3, 2026. Special speech by KAIB Chairman Shinichi Hosokawa on "Thoughts on Kagawa and Its Potential".'
      );
    } else {
      document.title = "KAIB第1回月例会 | ニュース";
      document.querySelector('meta[name="description"]')?.setAttribute(
        'content',
        'KAIB第1回月例会は4月3日開催。KAIB会長・細川慎一による特別スピーチ「香川にかける思いと、香川の可能性」'
      );
    }
  }, [language]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <a href={localePath("/")}>
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663255440915/pZrMXUTAEjDsCOGE.jpg"
              alt="KAIB Logo"
              className="h-12 cursor-pointer"
            />
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href={`${localePath("/")}#about`} className="text-sm text-foreground hover:text-primary transition">
              {t('nav.about')}
            </a>
            <a href={`${localePath("/")}#solution`} className="text-sm text-foreground hover:text-primary transition">
              {t('nav.solution')}
            </a>
            <a href={`${localePath("/")}#services`} className="text-sm text-foreground hover:text-primary transition">
              {t('nav.services')}
            </a>
            <a href={localePath("/whatsnew")} className="text-sm text-primary font-semibold transition">
              {t('nav.news')}
            </a>
            <a href={localePath("/contact")} className="text-sm text-foreground hover:text-primary transition">
              {t('nav.contact')}
            </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfse888pkXKIR7S7CkP_MSCC6WBAG5KNX2Z7IYZQx-I7vRYAQ/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-primary transition">
              {t('nav.register')}
            </a>
            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-border">
              <a
                href="/whatsnew"
                className={`px-2 py-1 text-sm font-medium rounded transition ${
                  language === 'ja'
                    ? 'bg-primary text-white'
                    : 'text-foreground hover:bg-secondary/20'
                }`}
              >
                日本語
              </a>
              <a
                href="/en/whatsnew"
                className={`px-2 py-1 text-sm font-medium rounded transition ${
                  language === 'en'
                    ? 'bg-primary text-white'
                    : 'text-foreground hover:bg-secondary/20'
                }`}
              >
                English
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold text-primary mb-4">
            {language === 'en' ? 'News' : 'ニュース'}
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            {language === 'en'
              ? 'Latest news and event information from KAIB'
              : 'KAIB の最新情報とイベント情報をお知らせいたします。'
            }
          </p>

          {/* First Event Card */}
          <Card className="p-8 mb-8 border-l-4 border-l-primary">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-2">
                  {language === 'en' ? 'First Monthly Meeting' : '第1回 月例会'}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {language === 'en' ? 'April 3, 2026' : '2026年4月3日（金）開催'}
                </p>
              </div>
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-semibold rounded-full text-sm">
                {language === 'en' ? 'Upcoming' : '開催予定'}
              </span>
            </div>

            {/* Event Introduction */}
            <div className="mb-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-foreground leading-relaxed mb-4">
                {language === 'en'
                  ? 'Hello everyone! Kagawa Innovation Base (KAIB) is now in full operation!'
                  : '皆様、こんにちは。Kagawa Innovation Base（KAIB）の活動がいよいよ本格始動いたします！'
                }
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                {language === 'en'
                  ? 'We are pleased to announce the first monthly meeting on April 3rd at Takamatsu Kotori.'
                  : '記念すべき「第1回 月例会」を、4月3日に『高松コトリ』にて開催する運びとなりました。'
                }
              </p>
              <p className="text-foreground leading-relaxed">
                {language === 'en'
                  ? 'The main content is a special speech by KAIB Chairman Shinichi Hosokawa on the theme: '
                  : 'メインコンテンツは、KAIB会長・細川による特別スピーチです。テーマは'
                }
                <span className="font-semibold text-primary">
                  {language === 'en'
                    ? '"My Thoughts on Kagawa and Kagawa\'s Potential"'
                    : '『香川にかける思いと、香川の可能性』'
                  }
                </span>
                {language === 'en' ? '.' : 'です。'}
              </p>
            </div>

            {/* Speaker Profile */}
            <div className="mb-8 p-6 bg-card border border-border rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {language === 'en' ? 'Speaker Profile' : '登壇者プロフィール'}
              </h3>
              <div className="space-y-3">
                <p className="font-semibold text-primary">
                  {language === 'en' ? 'Shinichi Hosokawa' : '細川慎一'}
                </p>
                <p className="text-sm text-muted-foreground font-semibold">
                  {language === 'en'
                    ? 'KAIB Chairman\nDirector & Founder, GMO z.com research pte. ltd\nRepresentative Director, HOSOKAWA Co., Ltd. / Director, HOSOKAWA, pte. ltd.'
                    : 'Kagawa Innovation Base（KAIB）会長\nGMO z.com research pte. ltd Director & Founder\n株式会社HOSOKAWA 代表取締役 / HOSOKAWA, pte. ltd. Director'
                  }
                </p>
                <p className="text-foreground leading-relaxed text-sm">
                  {language === 'en'
                    ? 'Born in Kotohira Town, Kagawa Prefecture. After graduating from university, he began his career as a diplomat at the Japanese Embassy in Ethiopia. He later earned an MBA from Thunderbird School of Global Management. For 30 years, he has been at the forefront of international business, visiting over 50 countries. After successfully leading a company to IPO in growth markets, he now serves as the CEO of a listed company while based in Singapore.'
                    : '香川県琴平町出身。大学卒業後に在エチオピア日本大使館で外交官としてのキャリアをスタートして以来、サンダーバード国際経営大学院にてMBAを取得。30年にわたり海外ビジネスの最前線で活躍し、これまでの訪問国は50カ国以上にのぼる。グロース市場での企業上場（IPO）を実現させたのち、シンガポール在住のまま上場企業の経営トップを務めるという稀有な実績を持つ。'
                  }
                </p>
                <p className="text-foreground leading-relaxed text-sm">
                  {language === 'en'
                    ? 'Currently holding a top talent work visa in Singapore, he serves in key positions including Representative of ESOMAR (European Association for Opinion and Marketing Research) Japan, and Chair of APRC (Asia-Pacific Research Committee). Leveraging his global insights, networks, and proven business acumen, he is now embarking on a new challenge to foster innovation in Kagawa.'
                    : '現在はシンガポールにてトップタレント向け就労ビザを保有して活動する傍ら、ESOMAR（欧州世論・市場調査協会）日本代表、APRC（アジア太平洋リサーチ委員会）会長などの要職を務める。グローバルな知見とネットワーク、そして経営者としての確かな手腕を活かし、香川のイノベーション創出に向けた新たな挑戦を始動。'
                  }
                </p>
              </div>
            </div>

            {/* Why Attend */}
            <div className="mb-8 p-6 bg-accent/5 rounded-lg border border-accent/20">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {language === 'en' ? 'Event Highlights' : 'このイベントの見どころ'}
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-foreground">
                    {language === 'en'
                      ? 'Unique career path: IPO experience and leading a listed company from Singapore'
                      : '上場経験＆シンガポールからの上場企業経営！異色のキャリアから見えた世界と日本'
                    }
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-foreground">
                    {language === 'en'
                      ? 'Global perspective on "Japan\'s regions and Kagawa\'s current state and potential"'
                      : 'グローバル視点から紐解く「日本の地方と香川の現状と可能性」'
                    }
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-foreground">
                    {language === 'en'
                      ? 'Future challenges: "My next steps and direction"'
                      : 'これからの挑戦「今後の自分の身の振り方」'
                    }
                  </span>
                </li>
              </ul>
            </div>

            {/* Event Details */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {language === 'en' ? 'Date & Time' : '日時'}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {language === 'en' ? 'Friday, April 3, 2026' : '4月3日（金）'}
                    <br />
                    <span className="text-foreground font-semibold">
                      {language === 'en' ? '7:00 PM - (Reception: 6:30 PM)' : '19:00～（受付18:30開始）'}
                    </span>
                    <br />
                    <span className="text-sm text-muted-foreground mt-1 block">
                      {language === 'en' ? '※Networking reception to follow' : '※その後懇親会あり'}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {language === 'en' ? 'Venue' : '会場'}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-2">
                    Takamatsu Kotori
                  </p>
                  <a
                    href="https://maps.app.goo.gl/FhLNakthV6Ueh2yJ8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 text-sm font-semibold flex items-center gap-1 transition"
                  >
                    {language === 'en' ? 'View on Google Maps' : 'Google Map で見る'}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {language === 'en' ? 'Participation Fee' : '参加費'}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    <span className="text-primary font-semibold">
                      {language === 'en' ? 'Free' : '無料'}
                    </span>
                    <br />
                    {language === 'en'
                      ? '※Networking reception participation fee applies'
                      : '※2次会（懇親会）にご参加される方は実費負担をお願いいたします。'
                    }
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <ExternalLink className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {language === 'en' ? 'Registration' : 'お申し込み'}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-2">
                    {language === 'en'
                      ? 'Please register using the form below:'
                      : '下記のフォームよりお申し込みをお願いいたします。'
                    }
                  </p>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScGGduXIS6rABE9DcczOu00NcbhSRTSi6p5eP2a6FENIvvcgA/viewform?usp=dialog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 text-sm font-semibold flex items-center gap-1 transition"
                  >
                    {language === 'en' ? 'Registration Form' : '申し込みフォーム'}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/20">
              <p className="text-foreground leading-relaxed mb-4">
                {language === 'en'
                  ? 'For those who want to create Kagawa\'s future together, touch global perspectives and real business management, and take new steps in the region, this will be a time full of insights and inspiration.'
                  : '香川の未来を共に創りたい方、グローバルな視点や経営のリアルに触れてみたい方、地域での新たな一歩を踏み出したい方にとって、多くの気づきと刺激に満ちた時間になるはずです。'
                }
              </p>
              <p className="text-foreground font-semibold">
                {language === 'en'
                  ? 'Why not join us at this gathering where new connections and passion for Kagawa\'s future intersect?'
                  : '新しい出会いと、香川の未来への熱気が交差する場へ、ぜひ足を運んでみませんか？'
                }
              </p>
              <p className="text-foreground mt-4">
                {language === 'en'
                  ? 'We look forward to your participation!'
                  : '皆様のご参加を心よりお待ちしております！'
                }
              </p>
            </div>

            {/* Apply Button */}
            <div className="mt-8">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScGGduXIS6rABE9DcczOu00NcbhSRTSi6p5eP2a6FENIvvcgA/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                  {language === 'en' ? 'Register Now' : '今すぐ申し込む'}
                </Button>
              </a>
            </div>
          </Card>

          {/* xIB JAPAN Network Info */}
          <Card className="p-6 bg-green-50 border border-green-200">
            <h3 className="font-semibold text-green-900 mb-2">
              🌍 {language === 'en' ? 'Part of xIB JAPAN Network' : 'xIB JAPAN ネットワークの一部'}
            </h3>
            <p className="text-sm text-green-800">
              {language === 'en'
                ? 'KAIB is part of xIB JAPAN, a network that brings together Innovation Bases active across Japan.'
                : 'KAIB は、各県で活動するイノベーションベースを束ねるxIB JAPAN ネットワークの一部です。'
              }
            </p>
            <a
              href="https://xibase.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-green-900 font-semibold hover:underline mt-2 inline-block"
            >
              {language === 'en' ? 'Learn about xIB JAPAN →' : 'xIB JAPAN を詳しく →'}
            </a>
          </Card>
        </div>
      </section>
    </div>
  );
}
