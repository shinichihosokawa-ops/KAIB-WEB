import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "wouter";
import { ArrowLeft, ExternalLink, Users, Globe, Lightbulb, ChevronRight } from "lucide-react";

export default function Interest() {
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
            <span className="text-sm text-[#2C3E50]/60">参加意向登録</span>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center gap-1 text-sm text-[#0B5394] hover:underline mb-8">
          <ArrowLeft size={14} />
          トップに戻る
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
            KAIB 参加意向登録
          </h1>
          <p className="text-[#2C3E50]/70 max-w-2xl mx-auto">
            2026年4月発足予定のKAIB（Kagawa Innovation Base）の第1期メンバーを募集しています。
            参加にご興味のある方は、以下のフォームから意向登録をお願いします。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Users, title: "コミュニティ", desc: "同じ志を持つ起業家仲間とつながる" },
            { icon: Globe, title: "グローバル", desc: "海外起業家・Web3リーダーとの接点" },
            { icon: Lightbulb, title: "学び", desc: "メンタリングやワークショップで成長" },
          ].map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="bg-white text-center">
              <CardContent className="py-6 space-y-3">
                <div className="w-12 h-12 mx-auto bg-[#0B5394]/10 rounded-lg flex items-center justify-center">
                  <Icon size={24} className="text-[#0B5394]" />
                </div>
                <h3 className="font-semibold text-[#2C3E50]">{title}</h3>
                <p className="text-sm text-[#2C3E50]/60">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-white max-w-2xl mx-auto">
          <CardContent className="py-8 text-center space-y-6">
            <h2 className="text-2xl font-bold text-[#2C3E50]">参加意向登録フォーム</h2>
            <p className="text-[#2C3E50]/70">
              Google Formsにて参加意向を受け付けています。<br />
              下のボタンからフォームにアクセスしてください。
            </p>
            <a
              href="https://forms.gle/kaib-interest"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-[#0B5394] hover:bg-[#0B5394]/90 font-semibold">
                Google Formsで登録する
                <ExternalLink size={16} className="ml-2" />
              </Button>
            </a>
            <p className="text-xs text-[#2C3E50]/40">
              ※ 外部サイト（Google Forms）に移動します
            </p>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-[#2C3E50]/60 mb-4">ご質問がありましたら、お気軽にお問い合わせください。</p>
          <Link href="/contact">
            <Button variant="outline">
              お問い合わせ
              <ChevronRight size={16} className="ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
