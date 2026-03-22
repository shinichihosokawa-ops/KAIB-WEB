import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Link } from "wouter";
import { ArrowLeft, Calendar, MapPin, Clock, ChevronRight } from "lucide-react";

const newsItems = [
  {
    id: 1,
    date: "2026年3月",
    badge: "イベント",
    title: "KAIB 第1回月例会のお知らせ",
    description:
      "KAIBの発足を記念して、第1回月例会を開催します。ゲストスピーカーによる講演と、参加者同士のネットワーキングを予定しています。起業家の皆様のご参加をお待ちしています。",
    details: {
      date: "2026年4月（日程調整中）",
      location: "香川県さぬき市（会場未定）",
      time: "18:00 - 21:00（予定）",
    },
    highlight: true,
  },
  {
    id: 2,
    date: "2026年2月",
    badge: "お知らせ",
    title: "KAIB 公式サイトを公開しました",
    description:
      "Kagawa Innovation Base（KAIB）の公式ウェブサイトを公開しました。KAIBのビジョン、サービス内容、会員制度について詳しくご覧いただけます。",
    highlight: false,
  },
  {
    id: 3,
    date: "2026年1月",
    badge: "お知らせ",
    title: "KAIB 参加意向登録を開始",
    description:
      "2026年4月の発足に先立ち、第1期メンバーの参加意向登録を開始しました。起業に興味のある方、すでに起業されている方、学生の方など、幅広い方々の参加をお待ちしています。",
    highlight: false,
  },
];

export default function WhatsNew() {
  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <nav className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#0B5394] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="font-bold text-lg text-[#2C3E50]">KAIB</span>
            </Link>
            <Separator orientation="vertical" className="h-6" />
            <span className="text-sm text-[#2C3E50]/60">ニュース</span>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center gap-1 text-sm text-[#0B5394] hover:underline mb-8">
          <ArrowLeft size={14} />
          トップに戻る
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">ニュース</h1>
          <div className="w-20 h-1 bg-[#0B5394] mx-auto mb-6" />
          <p className="text-[#2C3E50]/70 max-w-2xl mx-auto">
            KAIBの最新情報・イベント情報をお届けします。
          </p>
        </div>

        <div className="space-y-6">
          {newsItems.map((item) => (
            <Card
              key={item.id}
              className={`bg-white ${item.highlight ? "border-[#0B5394] border-l-4" : ""}`}
            >
              <CardHeader>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <Badge
                    variant={item.badge === "イベント" ? "default" : "secondary"}
                    className={item.badge === "イベント" ? "bg-[#0B5394]" : ""}
                  >
                    {item.badge}
                  </Badge>
                  <span className="text-sm text-[#2C3E50]/50">{item.date}</span>
                </div>
                <CardTitle className="text-xl text-[#2C3E50]">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-[#2C3E50]/70 leading-relaxed">
                  {item.description}
                </CardDescription>
                {item.details && (
                  <div className="bg-[#F5F7FA] rounded-lg p-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-[#2C3E50]/80">
                      <Calendar size={14} className="text-[#0B5394]" />
                      <span>{item.details.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#2C3E50]/80">
                      <MapPin size={14} className="text-[#0B5394]" />
                      <span>{item.details.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#2C3E50]/80">
                      <Clock size={14} className="text-[#0B5394]" />
                      <span>{item.details.time}</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/interest">
            <Button className="bg-[#0B5394] hover:bg-[#0B5394]/90">
              参加意向登録
              <ChevronRight size={16} className="ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
