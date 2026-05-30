import { useLanguage } from "@/_core/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Globe, TrendingUp, LinkIcon, Mail, Network, Instagram, Target, MessageCircle, BookOpen, UserCheck, ChevronRight, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import NewsletterForm from "@/components/NewsletterForm";
import { useSEO } from "@/_core/hooks/useSEO";

export default function Home() {
  const { language, setLanguage, t, localePath } = useLanguage();

  useSEO(language === 'en' ? {
    title: "KAIB - Kagawa Innovation Base | Entrepreneur Community",
    description: "KAIB (Kagawa Innovation Base) is an entrepreneur and business leader community in Kagawa Prefecture. Aiming to grow businesses beyond 100M yen revenue through EO methods and the nationwide xIB network.",
    path: "/en",
  } : {
    title: "KAIB - 香川イノベーションベース | 起業家コミュニティ",
    description: "KAIB（香川イノベーションベース）は、香川で年商1億円を超える経営者を増やすための起業家コミュニティ。EOの成長メソッドと全国xIBネットワークを活用。",
    path: "/",
  });

  return (
    <div className="min-h-screen bg-white">
      <Navigation activePage="home" />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://files.manuscdn.com/user_upload_by_module/session_file/310519663255440915/rCiplMxDnHzGTnlv.png')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container flex flex-col items-center justify-center text-center h-full">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display leading-tight">
            {language === 'en'
              ? 'Growing Entrepreneurs Who Build\nBeyond ¥100M Revenue from Kagawa'
              : '香川から、年商1億円を超える\n経営者を増やす。'
            }
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-3 max-w-3xl">
            {language === 'en'
              ? 'KAIB is an entrepreneur community where business leaders in Kagawa learn from each other, support each other, and accelerate business growth.'
              : 'KAIBは、香川で挑戦する経営者が学び合い、支え合い、事業成長を加速させるための起業家コミュニティです。'
            }
          </p>
          <p className="text-base text-white/70 mb-8 max-w-2xl">
            {language === 'en'
              ? 'Leveraging EO growth methods and the nationwide xIB network to nurture entrepreneurs who transform the region.'
              : 'EOの成長メソッドと全国xIBネットワークを活用し、地域を変える経営者を育てます。'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={localePath("/membership")}>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-foreground font-semibold">
                {language === 'en' ? 'Learn About Membership' : '入会案内を見る'}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <a href="#about">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                {language === 'en' ? 'About KAIB' : 'KAIBとは'}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-4xl font-bold text-primary mb-8">
            {language === 'en' ? 'About KAIB' : 'KAIBとは'}
          </h2>
          <div className="space-y-6 mb-10">
            <p className="text-lg text-foreground leading-relaxed">
              {language === 'en'
                ? 'KAIB (Kagawa Innovation Base) is an entrepreneur community for business owners and leaders in Kagawa who want to grow.'
                : 'KAIB（香川イノベーションベース）は、香川で挑戦する起業家・経営者が成長するための起業家コミュニティです。'
              }
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              {language === 'en'
                ? 'We are not just a networking group or study circle. Our goal is to produce growth companies from Kagawa that create employment, generate challenges, and revitalize the regional economy.'
                : '単なる交流会や勉強会ではありません。目指しているのは、香川から成長企業を生み出し、雇用をつくり、地域経済を活性化させることです。'
              }
            </p>
            <p className="text-lg text-foreground leading-relaxed font-semibold text-primary">
              {language === 'en'
                ? "Each entrepreneur's growth shapes the future of Kagawa."
                : '経営者一人ひとりの成長が、香川の未来をつくる。'
              }
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              {language === 'en'
                ? 'Based on this belief, KAIB works with government, financial institutions, media, educational institutions, and local businesses to create an environment that nurtures entrepreneurs across all of Kagawa.'
                : 'その考えのもと、行政・金融機関・メディア・教育機関・地域企業などと連携しながら、香川全体で起業家を育てる場をつくっていきます。'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* xIB JAPAN */}
            <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Globe className="w-6 h-6 text-green-700" />
                <h3 className="font-bold text-green-900">
                  {language === 'en' ? 'Part of the Nationwide xIB Network' : '全国xIBネットワークの一員'}
                </h3>
              </div>
              <p className="text-sm text-green-800 mb-3">
                {language === 'en'
                  ? 'KAIB is part of xIB JAPAN, the nationwide Innovation Base network. Connect with entrepreneurs in Tokushima, Hiroshima, Ehime, Kochi, Niigata, Wakayama and more — all from Kagawa.'
                  : 'KAIBは、全国に広がるイノベーションベースネットワーク「xIB JAPAN」の一員です。香川にいながら、徳島・広島・愛媛・高知・新潟・和歌山など全国の挑戦する経営者とつながれます。'
                }
              </p>
              <a
                href="https://xibase.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-green-700 font-semibold hover:underline inline-flex items-center gap-1"
              >
                xIB JAPAN <ChevronRight className="w-3 h-3" />
              </a>
            </div>

            {/* EO */}
            <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Target className="w-6 h-6 text-blue-700" />
                <h3 className="font-bold text-blue-900">
                  {language === 'en' ? 'Growth Methods Based on EO' : 'EOの知見を活かした成長プログラム'}
                </h3>
              </div>
              <p className="text-sm text-blue-800">
                {language === 'en'
                  ? 'EO (Entrepreneurs\' Organization) is a global network of entrepreneurs. KAIB incorporates EO-developed methods for forums, mentoring, and peer learning to help Kagawa entrepreneurs grow.'
                  : 'EO（Entrepreneurs\' Organization）は世界的な起業家ネットワークです。KAIBは、EOが培ってきたフォーラム・メンタリング・経営者同士の学び合いの仕組みを活かし、香川の起業家が成長できる場をつくっています。'
                }
              </p>
            </div>
          </div>

          {/* Organization Info */}
          <div className="mt-8 p-4 bg-gray-50 border border-border rounded">
            <h4 className="text-sm font-semibold text-foreground mb-2">
              {language === 'en' ? 'Organization' : '組織情報'}
            </h4>
            <dl className="text-sm space-y-1">
              <div className="flex gap-2">
                <dt className="text-muted-foreground min-w-[100px]">{language === 'en' ? 'Name' : '名称'}</dt>
                <dd className="text-foreground">{language === 'en' ? 'General Incorporated Association Kagawa Innovation Base' : '一般社団法人香川イノベーションベース'}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-muted-foreground min-w-[100px]">{language === 'en' ? 'Co-Representative Directors' : '共同代表理事'}</dt>
                <dd className="text-foreground">{language === 'en' ? 'Takeshi Izuka, Shinichi Hosokawa' : '猪塚武、細川慎一'}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-muted-foreground min-w-[100px]">{language === 'en' ? 'Chairman' : '会長'}</dt>
                <dd className="text-foreground">{language === 'en' ? 'Shinichi Hosokawa' : '細川慎一'}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-muted-foreground min-w-[100px]">{language === 'en' ? 'Address' : '住所'}</dt>
                <dd className="text-foreground">{language === 'en' ? '1615 Kamimae, Sangawa-cho, Sanuki City, Kagawa 769-2323, Japan' : '〒769-2323 香川県さぬき市寒川町神前1615'}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-card">
        <div className="container max-w-5xl">
          <h2 className="text-4xl font-bold text-center text-primary mb-4">
            {language === 'en' ? 'What You Gain at KAIB' : 'KAIBで得られること'}
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Learning, connections with peers, mentorship from experienced entrepreneurs, and access to a nationwide network to accelerate your business growth.'
              : '経営者としての学び、仲間とのつながり、先輩経営者からの支援、全国ネットワークとの連携を通じて、事業成長を後押しします。'
            }
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Users className="w-6 h-6 text-white" />,
                title: { en: 'Trusted peers to consult with honestly', ja: '経営者同士の本音の相談相手ができる' },
                desc: { en: 'Entrepreneurs in the same position who understand your challenges. Find peers you can truly confide in.', ja: '同じ立場の経営者だからこそ分かる悩みがあります。本音で話せる仲間が見つかります。' },
              },
              {
                icon: <Globe className="w-6 h-6 text-white" />,
                title: { en: 'Connect with entrepreneurs nationwide from Kagawa', ja: '香川にいながら全国の起業家とつながれる' },
                desc: { en: 'Through the xIB network, access insights and connections from entrepreneurs across Japan.', ja: 'xIBネットワークを通じて、全国の経営者の知見やネットワークに触れられます。' },
              },
              {
                icon: <TrendingUp className="w-6 h-6 text-white" />,
                title: { en: 'Receive mentoring from experienced entrepreneurs', ja: '先輩経営者からメンタリングを受けられる' },
                desc: { en: 'Learn practical insights on strategy, hiring, fundraising and more from those who have already been through it.', ja: '事業戦略、採用、資金調達など、すでに壁を越えてきた先輩の経験から学べます。' },
              },
              {
                icon: <Target className="w-6 h-6 text-white" />,
                title: { en: 'See the next stage: ¥100M revenue and EO', ja: '年商1億円、EO参加という次のステージが見える' },
                desc: { en: 'A clear growth path from KAIB to ¥100M revenue and beyond to EO Setouchi.', ja: 'KAIBでの成長から年商1億円突破、そしてEO Setouchiへ。次のステージが明確になります。' },
              },
              {
                icon: <MessageCircle className="w-6 h-6 text-white" />,
                title: { en: 'Deep sharing of business challenges in forums', ja: 'フォーラムで経営課題を深く共有できる' },
                desc: { en: 'Small-group forums for honest experience sharing on business, organization, and life decisions.', ja: '少人数で、事業・組織・経営判断について深く共有し合える場があります。' },
              },
              {
                icon: <LinkIcon className="w-6 h-6 text-white" />,
                title: { en: 'Contribute to the region through business growth', ja: '地域貢献を「事業成長」という形で実現できる' },
                desc: { en: 'Growing your business creates jobs, inspires young people, and revitalizes the local economy.', ja: '事業が成長すれば、雇用が生まれ、若者に選択肢が増え、地域が活性化します。' },
              },
            ].map((item, i) => (
              <Card key={i} className="p-6 flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title[language]}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc[language]}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-4xl font-bold text-center text-primary mb-4">
            {language === 'en' ? 'Programs' : '活動内容'}
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Not just networking — structured programs that lead to real growth.'
              : '交流ではなく、次の一歩につながる仕組み。'
            }
          </p>
          <div className="space-y-8">
            {/* Monthly Meetings */}
            <Card className="p-8 border-l-4 border-l-primary">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {language === 'en' ? 'Monthly Meetings' : '月例会'}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {language === 'en'
                      ? 'Invite leaders of growth companies and entrepreneurs challenging various fields to learn real management insights — business growth strategies, lessons from failure, team building, fundraising, marketing, and more.'
                      : '成長企業の経営者や各分野で挑戦している起業家を招き、事業成長の考え方、失敗からの学び、組織づくり、資金調達、マーケティングなど、経営の現場で役立つテーマを学びます。'
                    }
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(language === 'en'
                      ? ['Learn directly from growth company leaders', 'Real success & failure stories', 'Connect with local business leaders & government']
                      : ['成長企業の経営者から直接学べる', '成功・失敗のリアルを知れる', '地域の経営者・行政・金融機関と接点が持てる']
                    ).map((tag, i) => (
                      <span key={i} className="inline-flex items-center gap-1 text-xs bg-primary/5 text-primary px-3 py-1.5 rounded-full">
                        <CheckCircle className="w-3 h-3" /> {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Forum */}
            <Card className="p-8 border-l-4 border-l-secondary">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <MessageCircle className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {language === 'en' ? 'Forum' : 'フォーラム'}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {language === 'en'
                      ? 'Small groups of entrepreneurs gather to deeply share about business, organization, management decisions, and even personal life. Not advice sessions, but real experience sharing that helps each participant make better decisions.'
                      : '少人数の経営者同士が集まり、事業や組織、経営判断、人生について深く共有する場です。単なるアドバイスの場ではなく、参加者それぞれの実体験を共有することで、自分自身の意思決定につなげていきます。'
                    }
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(language === 'en'
                      ? ['Honest dialogue among entrepreneurs', 'Learn from peers who overcame similar challenges', 'Reduce the loneliness of leadership']
                      : ['経営者同士で本音の対話ができる', '似た課題を乗り越えた経験者から学べる', '経営者としての孤独を軽減できる']
                    ).map((tag, i) => (
                      <span key={i} className="inline-flex items-center gap-1 text-xs bg-secondary/5 text-secondary px-3 py-1.5 rounded-full">
                        <CheckCircle className="w-3 h-3" /> {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Mentoring */}
            <Card className="p-8 border-l-4 border-l-accent">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <UserCheck className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {language === 'en' ? 'Mentoring' : 'メンタリング'}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {language === 'en'
                      ? 'Experienced entrepreneurs support the growth and decision-making of newer entrepreneurs. Learn about strategy, revenue growth, team building, hiring, fundraising, and new business ventures based on real experience.'
                      : '先輩経営者が後輩経営者の事業成長や意思決定を支援する仕組みです。事業戦略、売上拡大、組織づくり、採用、資金調達、新規事業など、経営のさまざまなテーマについて先輩の経験をもとに学べます。'
                    }
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    {language === 'en'
                      ? 'Innovation Bases value a culture where entrepreneurs nurture the next generation of entrepreneurs.'
                      : 'イノベーションベースが大切にしているのは、起業家が次の起業家を育てる文化です。'
                    }
                  </p>
                </div>
              </div>
            </Card>

            {/* Learning */}
            <Card className="p-8 border-l-4 border-l-primary">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {language === 'en' ? 'Learning' : 'ラーニング'}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {language === 'en'
                      ? 'Practical business programs covering AI, hiring, fundraising, sales, team building, and more — real skills for today\'s business challenges.'
                      : 'AI、採用、資金調達、営業、組織づくりなど、経営の実務テーマを学ぶプログラムです。今の経営課題に直結する実践的なスキルを習得できます。'
                    }
                  </p>
                </div>
              </div>
            </Card>

            {/* Nationwide Exchange */}
            <Card className="p-8 border-l-4 border-l-green-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 mt-1">
                  <Network className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {language === 'en' ? 'Nationwide Exchange via xIB' : 'xIBを通じた全国交流'}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {language === 'en'
                      ? 'Each regional Innovation Base operates independently while connecting through xIB Japan. From Kagawa, access the insights, networks, and success stories of entrepreneurs across Japan.'
                      : '各地域のイノベーションベースは独立した活動を行いながらも、xIB Japanを通じて全国的につながっています。香川にいながら、全国の起業家の知見や成功事例、ネットワークに触れることができます。'
                    }
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(language === 'en'
                      ? ['Connect with entrepreneurs nationwide', 'Learn success stories from other regions', 'Cross-regional collaboration opportunities']
                      : ['全国の起業家・経営者とつながれる', '他地域の成功事例を学べる', '地域を越えた協業の可能性が広がる']
                    ).map((tag, i) => (
                      <span key={i} className="inline-flex items-center gap-1 text-xs bg-green-50 text-green-700 px-3 py-1.5 rounded-full">
                        <CheckCircle className="w-3 h-3" /> {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Growth Path Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5 border-t border-border">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-primary mb-4">
            {language === 'en' ? 'Growth Path' : '成長ステップ'}
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-12">
            {language === 'en'
              ? 'KAIB is the first step. Beyond lies the next stage.'
              : 'KAIBは第一歩。その先には、次のステージがあります。'
            }
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            {/* Step 1 */}
            <div className="flex-1 text-center p-6 bg-white rounded-lg border-2 border-primary shadow-sm">
              <div className="w-16 h-16 rounded-full bg-primary mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="font-bold text-foreground mb-2">
                {language === 'en' ? 'Join KAIB' : 'KAIBに参加'}
              </h3>
              <p className="text-sm text-muted-foreground">
                {language === 'en'
                  ? 'Monthly meetings, forums, mentoring — learn and grow with peers'
                  : '月例会・フォーラム・メンタリングで学び、仲間と共に成長'
                }
              </p>
            </div>
            <ChevronRight className="w-8 h-8 text-primary flex-shrink-0 rotate-90 md:rotate-0" />
            {/* Step 2 */}
            <div className="flex-1 text-center p-6 bg-white rounded-lg border-2 border-accent shadow-sm">
              <div className="w-16 h-16 rounded-full bg-accent mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="font-bold text-foreground mb-2">
                {language === 'en' ? 'Break ¥100M Revenue' : '年商1億円突破'}
              </h3>
              <p className="text-sm text-muted-foreground">
                {language === 'en'
                  ? 'Grow your business to create jobs and invest in the future'
                  : '事業成長で雇用を生み、地域に貢献し、次の投資へ'
                }
              </p>
            </div>
            <ChevronRight className="w-8 h-8 text-primary flex-shrink-0 rotate-90 md:rotate-0" />
            {/* Step 3 */}
            <div className="flex-1 text-center p-6 bg-white rounded-lg border-2 border-secondary shadow-sm">
              <div className="w-16 h-16 rounded-full bg-secondary mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="font-bold text-foreground mb-2">
                {language === 'en' ? 'EO Setouchi & Beyond' : 'EO Setouchi、その先へ'}
              </h3>
              <p className="text-sm text-muted-foreground">
                {language === 'en'
                  ? 'Join the global entrepreneur network and expand your stage'
                  : '世界的な起業家ネットワークに参加し、さらなる成長ステージへ'
                }
              </p>
            </div>
          </div>
          <div className="mt-8 p-6 bg-white rounded-lg border border-border text-center">
            <p className="text-foreground">
              {language === 'en'
                ? 'EO (Entrepreneurs\' Organization) is a global network of entrepreneurs meeting revenue thresholds. Through KAIB, grow your business toward ¥100M revenue and open the path to EO Setouchi.'
                : 'EO（Entrepreneurs\' Organization）は、年商基準を満たした起業家が参加する世界的な経営者ネットワークです。KAIBで学び、年商1億円を突破し、EO Setouchiへの道を切り拓く。KAIBは、その第一歩となる場所です。'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-card">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-primary mb-4">
            {language === 'en' ? 'Who Should Join KAIB?' : 'こんな方におすすめです'}
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-12">
            {language === 'en'
              ? 'KAIB welcomes anyone who wants to grow through business in Kagawa.'
              : '香川で事業を通じて成長したいすべての方を歓迎します。'
            }
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {(language === 'en' ? [
              'Business owners aiming for ¥100M+ revenue',
              'Entrepreneurs who want to grow their business in Kagawa',
              'Successors preparing for business succession',
              'Leaders launching new business ventures',
              'Business owners who want to keep learning',
              'Those seeking trusted peers to consult with',
              'Those who want mentoring from experienced entrepreneurs',
              'Students and young people aspiring to start a business',
              'Those who want to contribute to Kagawa\'s economy',
              'Those who want to connect with entrepreneurs nationwide',
            ] : [
              '年商1億円を目指したい経営者',
              '香川で事業を成長させたい経営者',
              '事業承継を予定している後継者',
              '新規事業に挑戦したいリーダー',
              '経営者として学び続けたい方',
              '経営課題を相談できる仲間がほしい方',
              '先輩経営者から学びたい方',
              '起業を目指している学生・若手',
              '香川の地域経済に貢献したい方',
              '全国の起業家ネットワークとつながりたい方',
            ]).map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-lg border border-border">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a href={localePath("/membership")}>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-foreground font-semibold">
                {language === 'en' ? 'View Membership Details' : '入会案内を見る'}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Regional Contribution Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-primary mb-8">
            {language === 'en'
              ? "Entrepreneurs' Growth Creates Kagawa's Future"
              : '経営者の成長が、香川の未来をつくる。'
            }
          </h2>
          <div className="space-y-4 text-lg text-foreground leading-relaxed max-w-3xl mx-auto">
            <p>
              {language === 'en'
                ? 'Regional contribution is not just about hosting events.'
                : '地域貢献とは、単にイベントを開くことではありません。'
              }
            </p>
            <p>
              {language === 'en'
                ? 'Entrepreneurs in Kagawa growing their businesses, increasing revenue, creating employment, and showing young people that they can take on challenges right here.'
                : '香川で挑戦する経営者が成長し、売上を伸ばし、雇用を生み、若者に「香川で挑戦できる」という選択肢を見せること。'
              }
            </p>
            <p className="font-semibold text-primary">
              {language === 'en'
                ? 'KAIB contributes to the future of Kagawa\'s industry and community through the growth of its entrepreneurs.'
                : 'KAIBは、経営者の成長を通じて、香川の産業と地域の未来に貢献します。'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {language === 'en' ? 'From Kagawa, the Next Growth Company.' : '香川から、次の成長企業を。'}
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            {language === 'en'
              ? 'KAIB is a place to learn together, grow together, and build the future of the region together.'
              : 'KAIBは、共に学び、共に成長し、共に地域の未来をつくる場所です。'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={localePath("/membership")}>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                {language === 'en' ? 'View Membership' : '入会案内を見る'}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <a href={localePath("/contact")}>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                {language === 'en' ? 'Contact Us' : 'お問い合わせ'}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-card border-t border-border">
        <div className="container max-w-2xl text-center">
          <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-2">
            {language === 'en' ? 'KAIB Newsletter' : 'KAIBメルマガ'}
          </h2>
          <p className="text-muted-foreground mb-6">
            {language === 'en'
              ? 'Get the latest news on events, monthly meetings, and KAIB activities delivered to your inbox.'
              : 'イベント・月例会・KAIBの活動情報をメールでお届けします。'}
          </p>
          <NewsletterForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">
                {language === 'en' ? 'About KAIB' : 'KAIBについて'}
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#about" className="hover:underline">
                    {language === 'en' ? 'About Us' : 'KAIBとは'}
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:underline">
                    {language === 'en' ? 'Programs' : '活動内容'}
                  </a>
                </li>
                <li>
                  <a href={localePath("/membership")} className="hover:underline">
                    {language === 'en' ? 'Membership' : '会員制度'}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">
                {language === 'en' ? 'Resources' : 'リソース'}
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href={localePath("/whatsnew")} className="hover:underline">
                    {language === 'en' ? 'News' : 'ニュース'}
                  </a>
                </li>
                <li>
                  <a href={localePath("/media")} className="hover:underline">
                    {language === 'en' ? 'Media Coverage' : 'メディア掲載'}
                  </a>
                </li>
                <li>
                  <a href={localePath("/contact")} className="hover:underline">
                    {language === 'en' ? 'Contact' : 'お問い合わせ'}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">
                {language === 'en' ? 'Network' : 'ネットワーク'}
              </h4>
              <p className="text-sm mb-2">
                {language === 'en'
                  ? 'KAIB is part of the xIB JAPAN network.'
                  : 'KAIB は xIB JAPAN ネットワークの一員です。'
                }
              </p>
              <a
                href="https://xibase.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline inline-block"
              >
                {language === 'en' ? 'Learn about xIB JAPAN' : 'xIB JAPAN を詳しく'}
              </a>
            </div>
            <div>
              <h4 className="font-semibold mb-4">
                {language === 'en' ? 'Follow Us' : 'フォローする'}
              </h4>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/kaibkagawa/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href={localePath("/contact")} className="hover:opacity-80">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm">
            <p>
              © 2026 Kagawa Innovation Base (KAIB). {language === 'en' ? 'All rights reserved.' : 'すべての権利を保有します。'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
