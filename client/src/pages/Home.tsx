import { useLanguage } from "@/_core/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Globe, TrendingUp, LinkIcon, Mail, Phone, Network, Zap, Instagram } from "lucide-react";
import Navigation from "@/components/Navigation";
import { useSEO } from "@/_core/hooks/useSEO";

export default function Home() {
  const { language, setLanguage, t, localePath } = useLanguage();

  useSEO(language === 'en' ? {
    title: "KAIB - Kagawa Innovation Base | Entrepreneur Community",
    description: "KAIB (Kagawa Innovation Base) is an entrepreneur and business leader community in Kagawa Prefecture. Fostering new entrepreneurial spirit through Social × Global × Web3.",
    path: "/en",
  } : {
    title: "KAIB - 香川イノベーションベース | 起業家コミュニティ",
    description: "KAIB（香川イノベーションベース）は、香川県の起業家・経営者向けコミュニティ。ソーシャル×グローバル×Web3で、新しい起業家精神を育てます。",
    path: "/",
  });

  return (
    <div className="min-h-screen bg-white">
      <Navigation activePage="home" />

      {/* Event Announcement Banner */}
      <div className="bg-gradient-to-r from-accent via-yellow-400 to-orange-400 text-foreground py-4 px-4 sticky top-16 z-40 shadow-lg">
        <div className="container flex items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm md:text-base font-semibold">
              {language === 'en' ? 'KAIB 2026 KICK OFF! Event Confirmed' : 'KAIB 2026 KICK OFF! 開催決定'}
            </p>
            <p className="text-xs md:text-sm text-foreground/80 mt-1">
              {language === 'en'
                ? 'May 14, 2026 (Thursday) in Sanuki City, Kagawa. The forefront of innovation.'
                : '2026年5月14日（木）香川県さぬき市で開催。イノベーションの最前線へ。'
              }
            </p>
          </div>
          <a
            href="https://www.globalforum.jp/ja/sanuki/2026/kaib"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 whitespace-nowrap"
          >
            <Button
              size="sm"
              className="bg-foreground text-accent hover:bg-foreground/90 font-semibold"
            >
              {language === 'en' ? 'Learn More' : '詳細を見る'}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>

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
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 container flex flex-col items-center justify-center text-center h-full">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-display">
            {language === 'en'
              ? 'Creating a Foundation for Entrepreneurs to Thrive'
              : '起業家が育つ土壌をつくる'
            }
          </h1>
          <p className="text-xl text-white/90 mb-2 max-w-2xl">
            {language === 'en'
              ? 'A practical community for entrepreneurs and business leaders based in Kagawa Prefecture'
              : '香川県を拠点に活動する起業家・経営者のための実践的なコミュニティ'
            }
          </p>
          <p className="text-lg text-white/80 mb-8 max-w-2xl">
            {language === 'en' ? 'Social × Global × Web3' : 'ソーシャル × グローバル × Web3'}
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-foreground">
            {language === 'en' ? 'Learn More' : '詳しく知る'}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                {language === 'en' ? 'About KAIB' : 'KAIBとは'}
              </h2>

              {/* xIB JAPAN Network Info */}
              <div className="mb-6 p-4 bg-green-50 border-l-4 border-l-green-500 rounded">
                <p className="text-sm font-semibold text-green-700">
                  🌍 {language === 'en' ? 'Part of xIB JAPAN Network' : 'xIB JAPAN ネットワークの一部'}
                </p>
                <p className="text-xs text-green-600 mt-2">
                  {language === 'en'
                    ? 'KAIB operates as part of xIB JAPAN, a core network that brings together Innovation Bases active in each prefecture.'
                    : 'KAIB は、各県で活動するイノベーションベースを束ねる中核的なネットワーク、xIB JAPAN の一部として活動しています。'
                  }
                </p>
                <a
                  href="https://xibase.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-green-700 font-semibold hover:underline mt-2 inline-block"
                >
                  {language === 'en' ? 'Learn about xIB JAPAN →' : 'xIB JAPAN を詳しく →'}
                </a>
              </div>

              <p className="text-lg text-foreground mb-4 leading-relaxed">
                {language === 'en'
                  ? 'KAIB (Kagawa Innovation Base) is a hub where entrepreneurs gather, learn, and accelerate their challenges.'
                  : 'KAIB（香川イノベーションベース）は、起業家が集い、学び、挑戦を加速させる拠点です。'
                }
              </p>
              <p className="text-lg text-foreground mb-4 leading-relaxed">
                {language === 'en'
                  ? 'Centered on "Social × Global," we provide a place that leads to action, not just information exchange.'
                  : '「ソーシャル × グローバル」を軸に、単なる情報交換にとどまらない、行動につながる場を提供します。'
                }
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                {language === 'en'
                  ? 'Founded as a general incorporated association, we aim to build an entrepreneur network rooted in the region while maintaining a global perspective and awareness of social issues.'
                  : '一般社団法人として設立し、地域に根ざしながらも、グローバルな視点と社会課題への意識を持つ起業家ネットワークの形成を目指します。'
                }
              </p>
              <div className="mt-6 p-4 bg-gray-50 border border-border rounded">
                <h4 className="text-sm font-semibold text-foreground mb-2">
                  {language === 'en' ? 'Organization' : '組織情報'}
                </h4>
                <dl className="text-sm space-y-1">
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
            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {language === 'en' ? 'Community' : 'コミュニティ'}
                    </h3>
                    <p className="text-muted-foreground">
                      {language === 'en'
                        ? 'A safe entrepreneur community where you can speak honestly'
                        : '安心して本音で話せる起業家コミュニティ'
                      }
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {language === 'en' ? 'Decentralized Global' : '分散型グローバル'}
                    </h3>
                    <p className="text-muted-foreground">
                      {language === 'en'
                        ? 'Connections with global leaders, overseas entrepreneurs, and Web3 business leaders'
                        : 'グローバル経営者・海外起業家・Web3ビジネスリーダーとの接点'
                      }
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {language === 'en' ? 'Growth' : '成長'}
                    </h3>
                    <p className="text-muted-foreground">
                      {language === 'en'
                        ? 'Opportunities for forums and mentoring'
                        : 'フォーラムやメンタリングの機会'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">
            {language === 'en'
              ? 'Challenges Faced by Regional Entrepreneurs'
              : '地方起業家が抱える課題'
            }
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 border-l-4 border-l-accent">
              <h3 className="font-semibold text-foreground mb-3">
                {language === 'en' ? 'Isolation' : '孤独感'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Few business peers to consult with, leading to isolation'
                  : '相談できる経営者仲間が少なく、孤独になりやすい'
                }
              </p>
            </Card>
            <Card className="p-6 border-l-4 border-l-secondary">
              <h3 className="font-semibold text-foreground mb-3">
                {language === 'en' ? 'Limited Perspective' : '視野の狭さ'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Vision tends to be confined to the region, making it difficult to gain new insights'
                  : '視野が地域内に閉じがちで、新しい刺激を得にくい'
                }
              </p>
            </Card>
            <Card className="p-6 border-l-4 border-l-accent">
              <h3 className="font-semibold text-foreground mb-3">
                {language === 'en' ? 'Growth Stagnation' : '成長の停滞'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Lack of nearby role models makes the growth path unclear'
                  : '身近にロールモデルがなく、成長の道筋が見えにくい'
                }
              </p>
            </Card>
            <Card className="p-6 border-l-4 border-l-secondary">
              <h3 className="font-semibold text-foreground mb-3">
                {language === 'en' ? 'Lack of Opportunities' : '機会不足'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Distance from government, financial institutions, and universities; limited global access'
                  : '行政、金融機関、大学との距離が遠く、グローバルアクセスが限定的'
                }
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solution" className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-primary mb-6">
            {language === 'en'
              ? 'Solutions Provided by KAIB'
              : 'KAIBが提供する解決策'
            }
          </h2>
          <p className="text-center text-lg font-semibold text-secondary mb-4">
            {language === 'en' ? 'Social × Global × Web3' : 'ソーシャル × グローバル × Web3'}
          </p>
          <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            {language === 'en'
              ? 'A mechanism that leads to the next step, not just networking'
              : '交流ではなく、次の一歩につながる仕組み'
            }
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {language === 'en' ? 'Community' : 'コミュニティ'}
              </h3>
              <p className="text-muted-foreground text-sm">
                {language === 'en'
                  ? 'A safe entrepreneur community where you can speak honestly'
                  : '安心して本音で話せる起業家コミュニティ'
                }
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-accent mx-auto mb-4 flex items-center justify-center">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {language === 'en' ? 'Decentralized Global' : '分散型グローバル'}
              </h3>
              <p className="text-muted-foreground text-sm">
                {language === 'en'
                  ? 'Borderless collaboration with global leaders and Web3 business leaders'
                  : 'グローバル経営者・Web3ビジネスリーダーとのボーダーレスな協業'
                }
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {language === 'en' ? 'Mentoring' : 'メンタリング'}
              </h3>
              <p className="text-muted-foreground text-sm">
                {language === 'en'
                  ? 'Opportunities for forums and mentoring'
                  : 'フォーラムやメンタリングの機会'
                }
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center">
                <LinkIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {language === 'en' ? 'Network' : 'ネットワーク'}
              </h3>
              <p className="text-muted-foreground text-sm">
                {language === 'en'
                  ? 'Connections with government, corporations, and investors'
                  : '行政・企業・投資との接続'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Web3 Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5 border-t border-border">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">
            {language === 'en'
              ? 'Web3 & DAO Ecosystem'
              : 'Web3・DAOエコシステム'
            }
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 border-l-4 border-l-secondary">
              <div className="flex items-start gap-4 mb-4">
                <Zap className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {language === 'en'
                      ? 'Blockchain & Token Economy'
                      : 'ブロックチェーン・トークンエコノミー'
                    }
                  </h3>
                  <p className="text-muted-foreground">
                    {language === 'en'
                      ? 'Learning opportunities for Web3 and DAO decentralized business models. Gain practical knowledge of smart contracts, DeFi, NFTs, and more.'
                      : 'Web3・DAO等の非中央集権型ビジネスモデルの学習機会。スマートコントラクト、DeFi、NFT等の実践的な知識を習得できます。'
                    }
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-8 border-l-4 border-l-accent">
              <div className="flex items-start gap-4 mb-4">
                <Network className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {language === 'en'
                      ? 'Decentralized Global Network'
                      : '分散型グローバルネットワーク'
                    }
                  </h3>
                  <p className="text-muted-foreground">
                    {language === 'en'
                      ? 'Kagawa entrepreneurs participate in a global decentralized community. Opportunities for cross-border collaboration through DAO governance.'
                      : '香川の起業家がグローバルな分散型コミュニティに参加。DAOガバナンスを通じた国境を超えた協業の機会。'
                    }
                  </p>
                </div>
              </div>
            </Card>
          </div>
          <div className="mt-12 p-8 bg-white rounded-lg border border-border text-center">
            <p className="text-lg text-foreground mb-4">
              <span className="font-semibold">
                {language === 'en'
                  ? 'From Kagawa to the World.'
                  : '香川から、世界へ。'
                }
              </span>
              {language === 'en'
                ? ' Nurturing new entrepreneurial spirit through a decentralized global network.'
                : '分散型グローバルネットワークで、新しい起業家精神を育てる。'
              }
            </p>
            <p className="text-muted-foreground">
              {language === 'en'
                ? 'We provide all the skills, networks, and opportunities needed for entrepreneurs in the Web3 era.'
                : 'Web3時代の起業家に必要なスキル、ネットワーク、機会をすべて提供します。'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-card">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">
            {language === 'en'
              ? 'Main Services'
              : '主なサービス'
            }
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                {language === 'en' ? 'Monthly Meetings' : '月例会'}
              </h3>
              <p className="text-muted-foreground mb-4">
                {language === 'en'
                  ? 'Monthly meetings where entrepreneurs gather to share the latest information and experiences.'
                  : '毎月開催される月例会では、起業家同士が集い、最新の情報や経験を共有します。'
                }
              </p>
              <Button variant="outline" className="w-full">
                {language === 'en' ? 'Learn More' : '詳しく見る'}
              </Button>
            </Card>
            <Card className="p-8 hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                {language === 'en' ? 'Mentoring' : 'メンタリング'}
              </h3>
              <p className="text-muted-foreground mb-4">
                {language === 'en'
                  ? 'Individual guidance from experienced entrepreneurs to support business growth.'
                  : '経験豊富な起業家からの個別指導で、ビジネスの成長をサポートします。'
                }
              </p>
              <Button variant="outline" className="w-full">
                {language === 'en' ? 'Learn More' : '詳しく見る'}
              </Button>
            </Card>
            <Card className="p-8 hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                {language === 'en' ? 'Learning' : 'ラーニング'}
              </h3>
              <p className="text-muted-foreground mb-4">
                {language === 'en'
                  ? 'Various programs to learn the skills and knowledge necessary for entrepreneurship.'
                  : '起業に必要なスキルや知識を学ぶための各種プログラムを提供します。'
                }
              </p>
              <Button variant="outline" className="w-full">
                {language === 'en' ? 'Learn More' : '詳しく見る'}
              </Button>
            </Card>
            <Card className="p-8 hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                {language === 'en' ? 'Networking' : 'ネットワーキング'}
              </h3>
              <p className="text-muted-foreground mb-4">
                {language === 'en'
                  ? 'Opportunities to connect with investors, corporations, and government agencies.'
                  : '投資家、企業、行政機関とのつながりを構築する機会を提供します。'
                }
              </p>
              <Button variant="outline" className="w-full">
                {language === 'en' ? 'Learn More' : '詳しく見る'}
              </Button>
            </Card>
          </div>
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
                  <a href="#solution" className="hover:underline">
                    {language === 'en' ? 'Solutions' : '解決策'}
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:underline">
                    {language === 'en' ? 'Services' : 'サービス'}
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
                  : 'KAIB は xIB JAPAN ネットワークの一部です。'
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
