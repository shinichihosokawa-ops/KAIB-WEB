import { useLanguage } from "@/_core/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Users, ExternalLink, Instagram, CalendarDays } from "lucide-react";
import Navigation from "@/components/Navigation";
import { useSEO } from "@/_core/hooks/useSEO";

export default function WhatsNew() {
  const { language, setLanguage, t, localePath } = useLanguage();

  useSEO(language === 'en' ? {
    title: "KAIB Monthly Meetings | News & Events",
    description: 'KAIB 3rd Monthly Meeting on July 3, 2026. Masaaki Fujii, CEO of Yamato Manufacturing, on "Global Business Expansion by Japan\'s Top Noodle Machine Manufacturer".',
    path: "/en/whatsnew",
  } : {
    title: "KAIB月例会 | ニュース＋イベント案内",
    description: "KAIB第3回月例会は7月3日開催。株式会社大和製作所 代表取締役社長 藤井正章氏による「国内TOP製麺機メーカーのグローバルビジネス展開について」",
    path: "/whatsnew",
  });

  return (
    <div className="min-h-screen bg-white">
      <Navigation activePage="whatsnew" />

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

          {/* 2026 Yearly Schedule */}
          <Card className="p-8 mb-8 border-l-4 border-l-accent">
            <div className="flex items-center gap-3 mb-6">
              <CalendarDays className="w-7 h-7 text-accent" />
              <h2 className="text-2xl font-bold text-foreground">
                {language === 'en' ? '2026 Annual Schedule' : '2026年 年間スケジュール'}
              </h2>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              {language === 'en'
                ? 'Planned events for the rest of 2026. Details will be announced as dates approach.'
                : '2026年後半の予定です。詳細は開催日が近づきましたらお知らせいたします。'
              }
            </p>
            <div className="space-y-0">
              {[
                {
                  month: { en: 'Jul', ja: '7月' },
                  date: { en: 'Jul 3 (Fri)', ja: '7/3（金）' },
                  title: { en: 'Monthly Meeting', ja: '月例会' },
                  type: 'monthly' as const,
                },
                {
                  month: { en: 'Aug', ja: '8月' },
                  date: { en: 'Aug 21 (Fri)', ja: '8/21（金）' },
                  title: { en: 'Setouchi Summit', ja: 'Setouchi Summit' },
                  subtitle: { en: 'Joint event of Chushikoku IBs & EO Setouchi — Tokushima City, 1:00 PM – 8:00 PM', ja: '中四国のIBとEO Setouchiの合同イベント｜徳島市｜13:00〜20:00' },
                  type: 'special' as const,
                  href: 'https://www.eosetouchi.org/all/415/',
                },
                {
                  month: { en: 'Sep', ja: '9月' },
                  date: { en: 'Sep 4 (Fri)', ja: '9/4（金）' },
                  title: { en: 'Monthly Meeting', ja: '月例会' },
                  type: 'monthly' as const,
                },
                {
                  month: { en: 'Oct', ja: '10月' },
                  date: { en: 'Oct 2 (Fri)', ja: '10/2（金）' },
                  title: { en: 'Monthly Meeting', ja: '月例会' },
                  type: 'monthly' as const,
                },
                {
                  month: { en: 'Oct', ja: '10月' },
                  date: { en: 'Oct 8-9 (Thu-Fri)', ja: '10/8-9（木-金）' },
                  title: { en: 'LEC Yamanashi', ja: 'LEC山梨' },
                  type: 'special' as const,
                  href: 'https://www.yamanashi-lec.com/',
                },
                {
                  month: { en: 'Nov', ja: '11月' },
                  date: { en: 'Nov 6 (Fri)', ja: '11/6（金）' },
                  title: { en: 'Monthly Meeting', ja: '月例会' },
                  type: 'monthly' as const,
                },
                {
                  month: { en: 'Dec', ja: '12月' },
                  date: { en: 'Dec 18 (Fri)', ja: '12/18（金）' },
                  title: { en: 'Setouchi EO Joint IB Monthly Meeting', ja: '瀬戸内EO合同IB月例会' },
                  type: 'special' as const,
                },
              ].map((event, i, arr) => (
                <div key={i} className="flex items-stretch gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full flex-shrink-0 mt-1.5 ${event.type === 'special' ? 'bg-accent' : 'bg-primary'}`} />
                    {i < arr.length - 1 && <div className="w-px flex-1 bg-border" />}
                  </div>
                  <div className={`flex-1 pb-5 ${i === arr.length - 1 ? 'pb-0' : ''}`}>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-sm font-semibold text-foreground min-w-[120px]">
                        {event.date[language]}
                      </span>
                      <span className={`text-sm ${event.type === 'special' ? 'font-semibold text-accent' : 'text-foreground'}`}>
                        {event.title[language]}
                      </span>
                      {event.href && (
                        <a
                          href={event.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition inline-flex items-center gap-1"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                    {event.subtitle && (
                      <p className="text-xs text-muted-foreground mt-1 ml-[132px]">
                        {event.subtitle[language]}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Third Event Card — July */}
          <Card className="p-8 mb-8 border-l-4 border-l-primary">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-2">
                  {language === 'en' ? '3rd Monthly Meeting' : '第3回 月例会'}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {language === 'en' ? 'July 3, 2026' : '2026年7月3日（金）開催'}
                </p>
              </div>
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-semibold rounded-full text-sm">
                {language === 'en' ? 'Upcoming' : '開催予定'}
              </span>
            </div>

            {/* Title */}
            <div className="mb-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-lg font-bold text-primary leading-relaxed">
                {language === 'en'
                  ? 'Global Business Expansion by Japan\'s Top Noodle Machine Manufacturer (tentative)'
                  : '国内TOP製麺機メーカーのグローバルビジネス展開について（仮）'
                }
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {language === 'en'
                  ? '— Featuring Masaaki Fujii, President & CEO, Yamato Manufacturing Co., Ltd.'
                  : '〜株式会社大和製作所 代表取締役社長 藤井正章氏 登壇〜'
                }
              </p>
            </div>

            {/* Lead Text */}
            <div className="mb-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-foreground leading-relaxed mb-4">
                {language === 'en'
                  ? 'We are excited to welcome Mr. Masaaki Fujii, President & CEO of Yamato Manufacturing Co., Ltd., the top domestic manufacturer of compact noodle machines, spreading Japan\'s "noodle culture" to the world.'
                  : '今回は、小型製麺機で国内トップシェアを誇り、世界中へ日本の「麺文化」を発信し続ける株式会社大和製作所 代表取締役社長の藤井 正章さまをゲストにお招きします。'
                }
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                {language === 'en'
                  ? 'The company goes beyond being a machine manufacturer — operating "noodle schools," providing startup support, and sharing restaurant management know-how, scientifically approaching the noodle business from both hardware and software perspectives to support the success of ramen and udon restaurants worldwide.'
                  : '同社は機械メーカーにとどまらず、「麺学校」の運営や開業支援、店舗経営のノウハウ提供など、ハードとソフトの両面から麺ビジネスを科学し、世界中のラーメン・うどん店の成功を支えています。'
                }
              </p>
              <p className="text-foreground leading-relaxed">
                {language === 'en'
                  ? 'In this session, Mr. Fujii will share how they have pioneered overseas markets with overwhelming product strength and a unique business model, the strategies and challenges behind the scenes, and future prospects. Don\'t miss this rare opportunity to hear from a top leader who continues to challenge on the world stage!'
                  : '本セッションでは、圧倒的な製品力と独自のビジネスモデルでいかにして海外市場を開拓してきたのか、その裏側にある戦略や苦労、そして今後の展望についてたっぷりとお話しいただきます。世界を舞台に挑戦し続けるトップリーダーの生の声を聞ける貴重な機会です。ぜひ奮ってご参加ください！'
                }
              </p>
            </div>

            {/* Talk Themes */}
            <div className="mb-8 p-6 bg-accent/5 rounded-lg border border-accent/20">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {language === 'en' ? 'Talk Themes (planned)' : 'トークテーマ（予定）'}
              </h3>
              <ul className="space-y-3">
                {[
                  { en: 'The journey and business model strengths of Yamato Manufacturing', ja: '株式会社大和製作所の歩みとビジネスモデルの強み' },
                  { en: 'Why are Japanese "noodle machines" in demand worldwide?', ja: 'なぜ日本の「製麺機」が世界で求められているのか？' },
                  { en: 'Barriers in global expansion and how to overcome them', ja: 'グローバル展開における壁とその乗り越え方' },
                  { en: 'Synergy of hardware (machines) × software (noodle schools & management support)', ja: 'ハード（機械）×ソフト（麺学校・経営支援）の相乗効果' },
                  { en: 'Future overseas strategy and the potential of Japanese manufacturing', ja: '今後の海外戦略と日本のモノづくりの可能性' },
                ].map((theme, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span className="text-foreground">{theme[language]}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground mt-4">
                {language === 'en'
                  ? '※ Content may be subject to partial changes.'
                  : '※内容は一部変更となる場合がございます。'
                }
              </p>
            </div>

            {/* Speaker Profile */}
            <div className="mb-8 p-6 bg-card border border-border rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {language === 'en' ? 'Speaker Profile' : '講師プロフィール'}
              </h3>
              <div className="space-y-3">
                <p className="font-semibold text-primary text-lg">
                  {language === 'en' ? 'Masaaki Fujii' : '藤井 正章（ふじい まさあき）'}
                </p>
                <p className="text-sm text-muted-foreground font-semibold">
                  {language === 'en'
                    ? 'President & CEO, Yamato Manufacturing Co., Ltd.'
                    : '株式会社大和製作所 代表取締役社長'
                  }
                </p>
                <p className="text-foreground leading-relaxed text-sm">
                  {language === 'en'
                    ? 'In April 2025, he succeeded founder Kaoru Fujii as President & CEO of Yamato Manufacturing Co., Ltd. Headquartered in Kagawa Prefecture, the company holds the top domestic market share in compact noodle machines for udon, soba, and ramen. Going beyond a conventional machine manufacturer, the company operates its own "Udon School," "Ramen School," and "Soba School." In addition to hardware (noodle machines), it provides comprehensive support for noodle restaurant success through proprietary "Digital Cooking" techniques, restaurant management know-how, and total startup consulting.'
                    : '2025年4月、創業者である前社長の藤井薫氏の後を継ぎ、株式会社大和製作所の代表取締役社長に就任。同社は香川県に本社を構え、うどん・そば・ラーメン用小型製麺機において業界トップシェアを誇る。単なる機械メーカーの枠を超え、自社で「うどん学校」「ラーメン学校」「そば学校」を運営。ハード（製麺機）の提供だけでなく、独自の「デジタルクッキング法」による製麺技術の指導、店舗経営ノウハウ、新規開業のトータルプロデュースなど、ソフト面も併せ持った麺専門店繁盛支援を展開している。'
                  }
                </p>
                <p className="text-foreground leading-relaxed text-sm">
                  {language === 'en'
                    ? 'Since becoming president, he has inherited a solid domestic business foundation while driving the expansion of overseas operations against the backdrop of the global Japanese food boom. Armed with Japan\'s proud "noodle culture" and "manufacturing excellence," he leads the company\'s global business expansion at the forefront.'
                    : '藤井氏は代表就任以降、国内の盤石な事業基盤を引き継ぐとともに、世界的な日本食ブームを背景とした海外拠点の拡充を推進。日本が誇る「麺文化」と「モノづくり」を武器に、同社のグローバルビジネス展開の最前線を牽引している。'
                  }
                </p>
              </div>
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
                    {language === 'en' ? 'Friday, July 3, 2026' : '7月3日（金）'}
                    <br />
                    <span className="text-foreground font-semibold">
                      {language === 'en' ? '7:00 PM -' : '19:00～'}
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
                    Board game cafe bar Alternative
                  </p>
                  <a
                    href="https://maps.app.goo.gl/kCQsZKJwU3udMgkVA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 text-sm font-semibold flex items-center gap-1 transition"
                  >
                    {language === 'en' ? 'View on Google Maps' : 'Google Map で見る'}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Fee Table */}
            <div className="mb-8">
              <div className="flex gap-4">
                <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-2">
                    {language === 'en' ? 'Fee (including Networking Reception)' : '参加費（懇親会込み）'}
                  </h4>
                  <div className="mb-3 text-sm text-muted-foreground">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-amber-300">
                          <th className="text-left py-1.5 pr-4 text-foreground font-semibold">{language === 'en' ? 'Category' : '区分'}</th>
                          <th className="text-right py-1.5 text-foreground font-semibold">{language === 'en' ? 'Fee' : '金額'}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-amber-100">
                          <td className="py-1.5 pr-4">{language === 'en' ? 'Regular / Associate members' : '正会員・準会員'}</td>
                          <td className="text-right py-1.5 font-semibold text-foreground">¥5,000</td>
                        </tr>
                        <tr className="border-b border-amber-100">
                          <td className="py-1.5 pr-4">{language === 'en' ? 'Student members' : '学生会員'}</td>
                          <td className="text-right py-1.5 font-semibold text-primary">{language === 'en' ? 'Free' : '無料'}</td>
                        </tr>
                        <tr className="border-b border-amber-100">
                          <td className="py-1.5 pr-4">{language === 'en' ? 'Non-members (general)' : '非会員（一般）'}</td>
                          <td className="text-right py-1.5 font-semibold text-foreground">¥8,000</td>
                        </tr>
                        <tr>
                          <td className="py-1.5 pr-4">{language === 'en' ? 'Non-members (students)' : '非会員（学生）'}</td>
                          <td className="text-right py-1.5 font-semibold text-foreground">¥5,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Coming Soon Button */}
            <div className="mb-8">
              <Button size="lg" disabled className="w-full">
                {language === 'en' ? 'Coming Soon' : 'Coming Soon（準備中）'}
              </Button>
            </div>

          </Card>

          {/* Second Event Card */}
          <Card className="p-8 mb-8 border-l-4 border-l-primary">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-2">
                  {language === 'en' ? '2nd Monthly Meeting' : '第2回 月例会'}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {language === 'en' ? 'June 5, 2026' : '2026年6月5日（金）開催'}
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
                  ? 'The KAIB 2nd Monthly Meeting will be held on June 5th!'
                  : 'KAIB第2回月例会を6月5日に開催いたします！'
                }
              </p>
              <p className="text-foreground leading-relaxed">
                {language === 'en'
                  ? 'We are honored to welcome Mr. Takeshi Izuka as our guest speaker. The theme is '
                  : '今回は特別講師として猪塚武氏をお迎えし、テーマは'
                }
                <span className="font-semibold text-primary">
                  {language === 'en'
                    ? '"The Reality of Cutting-Edge AI-Driven Management"'
                    : '『最先端のAI駆動経営の実際』'
                  }
                </span>
                {language === 'en'
                  ? '. He will share concrete examples of future management methods utilizing AI.'
                  : 'です。AIを活用した将来の具体的な経営方法の実際を具体的に紹介していただきます。'
                }
              </p>
            </div>

            {/* Speaker Profile */}
            <div className="mb-8 p-6 bg-card border border-border rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {language === 'en' ? 'Speaker Profile' : '講師プロフィール'}
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-primary text-lg">
                    {language === 'en' ? 'Takeshi Izuka' : '猪塚武'}
                  </p>
                  <a
                    href="https://izuka.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 text-sm flex items-center gap-1 transition"
                  >
                    {language === 'en' ? 'Website' : 'Webサイト'}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground font-semibold">
                  {language === 'en'
                    ? 'KAIB Co-President / Serial Entrepreneur'
                    : 'KAIB共同代表理事 / シリアルアントレプレナー'
                  }
                </p>
                <p className="text-foreground leading-relaxed text-sm">
                  {language === 'en'
                    ? 'After majoring in physics at graduate school, he ventured into politics and then founded businesses in Japan, Singapore, and Cambodia. He founded Digital Forest Inc. (Visionalist), which was acquired by NTT Communications. He also established a university in Cambodia and operates the Sanuki Peer Learning Hub in Kagawa Prefecture. A serial entrepreneur with a unique career spanning global business, education, and technology.'
                    : '大学院で物理を専攻した後、政治家に挑戦。その後、日本・シンガポール・カンボジアで起業。アクセス解析ツール「Visionalist」を提供するデジタルフォレスト社を創業し、NTTコミュニケーションズに事業売却。カンボジアでは大学を設立し、香川県では「さぬきピアラーニングハブ」を運営。グローバルビジネス・教育・テクノロジーを横断する異色の経歴を持つシリアルアントレプレナー。'
                  }
                </p>
              </div>
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
                    {language === 'en' ? 'Friday, June 5, 2026' : '6月5日（金）'}
                    <br />
                    <span className="text-foreground font-semibold">
                      {language === 'en' ? '7:00 PM -' : '19:00～'}
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
                    Board game cafe bar Alternative
                  </p>
                  <a
                    href="https://maps.app.goo.gl/kCQsZKJwU3udMgkVA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 text-sm font-semibold flex items-center gap-1 transition"
                  >
                    {language === 'en' ? 'View on Google Maps' : 'Google Map で見る'}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Fee Table (Monthly Meeting including Networking Reception) */}
            <div className="mb-8">
              <div className="flex gap-4">
                <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-2">
                    {language === 'en' ? 'Fee (including Networking Reception)' : '参加費（懇親会込み）'}
                  </h4>
                  <div className="mb-3 text-sm text-muted-foreground">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-amber-300">
                          <th className="text-left py-1.5 pr-4 text-foreground font-semibold">{language === 'en' ? 'Category' : '区分'}</th>
                          <th className="text-right py-1.5 text-foreground font-semibold">{language === 'en' ? 'Fee' : '金額'}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-amber-100">
                          <td className="py-1.5 pr-4">{language === 'en' ? 'Regular / Associate members' : '正会員・準会員'}</td>
                          <td className="text-right py-1.5 font-semibold text-foreground">¥5,000</td>
                        </tr>
                        <tr className="border-b border-amber-100">
                          <td className="py-1.5 pr-4">{language === 'en' ? 'Student members' : '学生会員'}</td>
                          <td className="text-right py-1.5 font-semibold text-primary">{language === 'en' ? 'Free' : '無料'}</td>
                        </tr>
                        <tr className="border-b border-amber-100">
                          <td className="py-1.5 pr-4">{language === 'en' ? 'Non-members (general)' : '非会員（一般）'}</td>
                          <td className="text-right py-1.5 font-semibold text-foreground">¥8,000</td>
                        </tr>
                        <tr>
                          <td className="py-1.5 pr-4">{language === 'en' ? 'Non-members (students)' : '非会員（学生）'}</td>
                          <td className="text-right py-1.5 font-semibold text-foreground">¥5,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Apply Button */}
            <div className="mb-8">
              <a
                href="https://kaib20260605.peatix.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                  {language === 'en' ? 'Apply for Monthly Meeting (Peatix)' : '月例会に申し込む（Peatix）'}
                </Button>
              </a>
            </div>

          </Card>

          {/* First Event Card */}
          <Card className="p-8 mb-8 border-l-4 border-l-muted-foreground/30">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-muted-foreground mb-2">
                  {language === 'en' ? 'First Monthly Meeting' : '第1回 月例会'}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {language === 'en' ? 'April 3, 2026' : '2026年4月3日（金）開催'}
                </p>
              </div>
              <span className="inline-block px-4 py-2 bg-muted text-muted-foreground font-semibold rounded-full text-sm">
                {language === 'en' ? 'Ended' : '開催済み'}
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
                  ? 'We are pleased to announce the first monthly meeting on April 3rd at Board game cafe bar Alternative.'
                  : '記念すべき「第1回 月例会」を、4月3日に『Board game cafe bar Alternative』にて開催する運びとなりました。'
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
                    Board game cafe bar Alternative
                  </p>
                  <a
                    href="https://maps.app.goo.gl/kCQsZKJwU3udMgkVA"
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
                  </p>
                  <div className="mt-2 p-3 bg-amber-50 border border-amber-200 rounded-md">
                    <p className="text-sm text-foreground font-semibold mb-1">
                      {language === 'en' ? 'Networking Reception (After-party)' : '２次会（懇親会）'}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {language === 'en'
                        ? 'Adults: ¥5,500 / High school students and under: Free'
                        : '大人1名 ¥5,500 ／ 高校生以下 無料'
                      }
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {language === 'en'
                        ? 'Advance payment is required.'
                        : '事前決済をお願いしております。'
                      }
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {language === 'en'
                        ? 'If you need a separate receipt, please contact us.'
                        : '※別途領収書が必要な場合は、大変お手数ですがご連絡ください。'
                      }
                    </p>
                    <p className="text-sm text-muted-foreground font-semibold mt-2">
                      {language === 'en' ? 'Payment closed' : '受付終了'}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <ExternalLink className="w-6 h-6 text-muted-foreground flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {language === 'en' ? 'Registration' : 'お申し込み'}
                  </h4>
                  <p className="text-muted-foreground text-sm font-semibold">
                    {language === 'en' ? 'Registration closed' : '受付終了'}
                  </p>
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

            {/* Registration Closed */}
            <div className="mt-8">
              <Button size="lg" disabled className="w-full">
                {language === 'en' ? 'Registration Closed' : '受付終了'}
              </Button>
            </div>
          </Card>

          {/* Instagram */}
          <Card className="p-6 mb-8 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200">
            <a
              href="https://www.instagram.com/kaibkagawa/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-xl flex items-center justify-center flex-shrink-0">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition">
                  {language === 'en' ? 'Follow KAIB on Instagram' : 'KAIB公式Instagram'}
                </h3>
                <p className="text-sm text-muted-foreground">
                  @kaibkagawa
                </p>
              </div>
              <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition flex-shrink-0" />
            </a>
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
