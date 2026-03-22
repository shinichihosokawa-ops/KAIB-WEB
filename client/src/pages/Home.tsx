import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Link } from "wouter";
import {
  Users,
  Globe,
  Lightbulb,
  TrendingUp,
  Calendar,
  GraduationCap,
  MessageCircle,
  BookOpen,
  MapPin,
  Mail,
  ChevronRight,
  Menu,
  X,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#0B5394] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            <span className="font-bold text-lg text-[#2C3E50]">KAIB</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm text-[#2C3E50] hover:text-[#0B5394] transition-colors">KAIBとは</a>
            <a href="#services" className="text-sm text-[#2C3E50] hover:text-[#0B5394] transition-colors">サービス</a>
            <a href="#membership" className="text-sm text-[#2C3E50] hover:text-[#0B5394] transition-colors">会員制度</a>
            <Link href="/whatsnew" className="text-sm text-[#2C3E50] hover:text-[#0B5394] transition-colors">ニュース</Link>
            <Link href="/contact">
              <Button variant="outline" size="sm">お問い合わせ</Button>
            </Link>
            <Link href="/interest">
              <Button size="sm" className="bg-[#0B5394] hover:bg-[#0B5394]/90">参加意向登録</Button>
            </Link>
          </div>
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-3">
          <a href="#about" className="block text-sm text-[#2C3E50] py-2" onClick={() => setMobileMenuOpen(false)}>KAIBとは</a>
          <a href="#services" className="block text-sm text-[#2C3E50] py-2" onClick={() => setMobileMenuOpen(false)}>サービス</a>
          <a href="#membership" className="block text-sm text-[#2C3E50] py-2" onClick={() => setMobileMenuOpen(false)}>会員制度</a>
          <Link href="/whatsnew" className="block text-sm text-[#2C3E50] py-2" onClick={() => setMobileMenuOpen(false)}>ニュース</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
            <Button variant="outline" size="sm" className="w-full">お問い合わせ</Button>
          </Link>
          <Link href="/interest" onClick={() => setMobileMenuOpen(false)}>
            <Button size="sm" className="w-full bg-[#0B5394] hover:bg-[#0B5394]/90">参加意向登録</Button>
          </Link>
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-16 min-h-[80vh] flex items-center bg-gradient-to-br from-[#0B5394] via-[#1a6ab5] to-[#4A90E2] overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 border border-white/30 rounded-full" />
        <div className="absolute bottom-10 left-10 w-96 h-96 border border-white/20 rounded-full" />
        <div className="absolute top-40 left-1/3 w-48 h-48 border border-white/20 rounded-full" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <Badge className="bg-[#D4A574] text-white border-none text-sm px-4 py-1">
              2026年4月1日 発足予定
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Kagawa<br />
              Innovation<br />
              Base
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              香川から、世界へ。<br />
              ソーシャル × グローバル × Web3 で、<br />
              新しい起業家精神を育てる。
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/interest">
                <Button size="lg" className="bg-white text-[#0B5394] hover:bg-white/90 font-semibold">
                  参加意向登録
                  <ChevronRight className="ml-1" size={18} />
                </Button>
              </Link>
              <a href="#about">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  詳しく見る
                </Button>
              </a>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 lg:w-80 lg:h-80 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 flex flex-col items-center justify-center p-8">
                <div className="text-6xl lg:text-7xl font-bold text-white mb-2">KAIB</div>
                <div className="text-white/80 text-center text-sm">
                  Kagawa Innovation Base
                </div>
                <Separator className="bg-white/30 my-4 w-32" />
                <div className="text-[#D4A574] font-semibold text-lg">2026 KICK OFF!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function KickoffBanner() {
  return (
    <section className="bg-gradient-to-r from-[#D4A574] to-[#e8c49a] py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
        <span className="text-white font-bold text-lg">KAIB 2026 KICK OFF!</span>
        <span className="text-white/90 text-sm">第1期メンバー募集中</span>
        <Link href="/interest">
          <Button size="sm" className="bg-white text-[#D4A574] hover:bg-white/90">
            今すぐ登録
          </Button>
        </Link>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">KAIBとは</h2>
          <div className="w-20 h-1 bg-[#0B5394] mx-auto mb-6" />
          <p className="text-[#2C3E50]/70 max-w-2xl mx-auto text-lg">
            KAIB（Kagawa Innovation Base）は、
            <a
              href="https://xib.jp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0B5394] hover:underline inline-flex items-center gap-1"
            >
              xIB JAPAN
              <ExternalLink size={14} />
            </a>
            {" "}ネットワークの香川拠点として、地方の起業家が集い、学び、成長するためのコミュニティです。
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#2C3E50]">ビジョン</h3>
            <p className="text-[#2C3E50]/80 leading-relaxed">
              香川県を拠点に、地方から新しいイノベーションを生み出す起業家コミュニティ。
              瀬戸内海の美しい環境の中で、志を同じくする仲間と出会い、
              グローバルなネットワークとWeb3の力を活用して、
              新しいビジネスの可能性を追求します。
            </p>
            <p className="text-[#2C3E50]/80 leading-relaxed">
              「ソーシャル × グローバル × Web3」のビジョンのもと、
              地方起業家が抱える課題を解決し、
              分散型グローバルネットワークで新しい起業家精神を育てます。
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Users, label: "コミュニティ", desc: "志を同じくする仲間との出会い" },
              { icon: Globe, label: "グローバル", desc: "海外起業家・Web3リーダーとの接点" },
              { icon: Lightbulb, label: "イノベーション", desc: "新しいビジネスモデルの創出" },
              { icon: TrendingUp, label: "成長", desc: "メンタリングによる事業成長" },
            ].map(({ icon: Icon, label, desc }) => (
              <div key={label} className="bg-[#F5F7FA] rounded-xl p-6 text-center space-y-3 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 mx-auto bg-[#0B5394]/10 rounded-lg flex items-center justify-center">
                  <Icon size={24} className="text-[#0B5394]" />
                </div>
                <h4 className="font-semibold text-[#2C3E50]">{label}</h4>
                <p className="text-sm text-[#2C3E50]/60">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ChallengesSection() {
  const challenges = [
    { title: "孤立感", desc: "地方では同じ志を持つ起業家仲間が少なく、孤独を感じやすい" },
    { title: "情報格差", desc: "最新のビジネストレンドや技術情報へのアクセスが限られている" },
    { title: "ネットワーク不足", desc: "投資家やメンター、グローバルなビジネスパートナーとの接点が少ない" },
    { title: "リソース制約", desc: "スキルアップや事業拡大に必要なリソースが都市部に比べて不足" },
  ];

  return (
    <section className="py-20 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">地方起業家の課題</h2>
          <div className="w-20 h-1 bg-[#D4A574] mx-auto mb-6" />
          <p className="text-[#2C3E50]/70 max-w-2xl mx-auto">
            地方で起業する際に直面する課題を、KAIBのコミュニティが解決します。
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map(({ title, desc }) => (
            <Card key={title} className="border-none shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardHeader>
                <CardTitle className="text-[#2C3E50] text-lg">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#2C3E50]/60 text-sm">{desc}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: Calendar,
      title: "月例会",
      desc: "毎月開催される交流会で、起業家同士の情報交換やネットワーキングを行います。ゲストスピーカーによる講演も。",
    },
    {
      icon: GraduationCap,
      title: "メンタリング",
      desc: "経験豊富な経営者・専門家による個別メンタリング。事業計画のブラッシュアップや課題解決をサポート。",
    },
    {
      icon: BookOpen,
      title: "ラーニング",
      desc: "Web3、マーケティング、ファイナンスなど、起業に必要なスキルを学べるワークショップやセミナー。",
    },
    {
      icon: MessageCircle,
      title: "フォーラム",
      desc: "オンラインフォーラムで日常的に情報交換。質問・相談・ビジネスアイデアの議論が活発に行われます。",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">サービス</h2>
          <div className="w-20 h-1 bg-[#0B5394] mx-auto mb-6" />
          <p className="text-[#2C3E50]/70 max-w-2xl mx-auto">
            KAIBは起業家の成長を多角的にサポートします。
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center space-y-4 group">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#0B5394] to-[#4A90E2] rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform">
                <Icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#2C3E50]">{title}</h3>
              <p className="text-sm text-[#2C3E50]/60 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MembershipSection() {
  const plans = [
    {
      name: "学生会員",
      price: "無料",
      period: "",
      features: ["月例会への参加", "オンラインフォーラム", "ラーニングコンテンツ（一部）"],
      highlight: false,
    },
    {
      name: "正会員",
      price: "¥5,000",
      period: "/月",
      features: ["月例会への参加", "個別メンタリング", "全ラーニングコンテンツ", "オンラインフォーラム", "グローバルネットワーク"],
      highlight: true,
    },
    {
      name: "準会員",
      price: "¥2,000",
      period: "/月",
      features: ["月例会への参加", "オンラインフォーラム", "ラーニングコンテンツ"],
      highlight: false,
    },
  ];

  return (
    <section id="membership" className="py-20 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">会員制度</h2>
          <div className="w-20 h-1 bg-[#D4A574] mx-auto mb-6" />
          <p className="text-[#2C3E50]/70 max-w-2xl mx-auto">
            あなたに合ったプランをお選びください。
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {plans.map(({ name, price, period, features, highlight }) => (
            <Card
              key={name}
              className={`relative ${
                highlight
                  ? "border-[#0B5394] border-2 shadow-lg scale-105"
                  : "border shadow-sm"
              } bg-white`}
            >
              {highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-[#0B5394] text-white">おすすめ</Badge>
                </div>
              )}
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-xl text-[#2C3E50]">{name}</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-[#0B5394]">{price}</span>
                  <span className="text-[#2C3E50]/60 text-sm">{period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-[#2C3E50]/80">
                      <ChevronRight size={16} className="text-[#2ECC71] mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link href="/interest">
                    <Button
                      className={`w-full ${
                        highlight
                          ? "bg-[#0B5394] hover:bg-[#0B5394]/90"
                          : ""
                      }`}
                      variant={highlight ? "default" : "outline"}
                    >
                      登録する
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0B5394] to-[#4A90E2] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold">一緒に、香川から未来を創ろう。</h2>
        <p className="text-lg text-white/90">
          KAIBは2026年4月に始動します。第1期メンバーとして、新しい起業家コミュニティを一緒に作りませんか？
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/interest">
            <Button size="lg" className="bg-white text-[#0B5394] hover:bg-white/90 font-semibold">
              参加意向登録
              <ChevronRight className="ml-1" size={18} />
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              お問い合わせ
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#2C3E50] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#0B5394] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="font-bold text-lg">KAIB</span>
            </div>
            <p className="text-sm text-white/60">
              Kagawa Innovation Base<br />
              香川から、世界へ。
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold">メニュー</h4>
            <div className="space-y-2 text-sm text-white/60">
              <a href="#about" className="block hover:text-white transition-colors">KAIBとは</a>
              <a href="#services" className="block hover:text-white transition-colors">サービス</a>
              <a href="#membership" className="block hover:text-white transition-colors">会員制度</a>
              <Link href="/whatsnew" className="block hover:text-white transition-colors">ニュース</Link>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold">xIB JAPAN</h4>
            <div className="space-y-2 text-sm text-white/60">
              <a
                href="https://xib.jp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                xIB JAPAN 公式サイト
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold">所在地</h4>
            <div className="space-y-2 text-sm text-white/60">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>香川県さぬき市<br />（詳細未定）</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={14} className="mt-0.5 shrink-0" />
                <Link href="/contact" className="hover:text-white transition-colors">
                  お問い合わせフォーム
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Separator className="bg-white/20 my-8" />
        <div className="text-center text-sm text-white/40">
          &copy; 2026 KAIB - Kagawa Innovation Base. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <KickoffBanner />
      <AboutSection />
      <ChallengesSection />
      <ServicesSection />
      <MembershipSection />
      <CTASection />
      <Footer />
    </div>
  );
}
