import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Link } from "wouter";
import { MapPin, Mail, ArrowLeft, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/trpc/contact.submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ json: formData }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("送信に失敗しました。もう一度お試しください。");
      }
    } catch {
      alert("送信に失敗しました。もう一度お試しください。");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center px-4">
        <Card className="max-w-md w-full text-center bg-white">
          <CardContent className="py-12 space-y-6">
            <div className="w-16 h-16 mx-auto bg-[#2ECC71]/10 rounded-full flex items-center justify-center">
              <CheckCircle size={32} className="text-[#2ECC71]" />
            </div>
            <h2 className="text-2xl font-bold text-[#2C3E50]">送信完了</h2>
            <p className="text-[#2C3E50]/70">
              お問い合わせありがとうございます。<br />
              内容を確認の上、折り返しご連絡いたします。
            </p>
            <Link href="/">
              <Button className="bg-[#0B5394] hover:bg-[#0B5394]/90">
                <ArrowLeft size={16} className="mr-2" />
                トップに戻る
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

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
            <span className="text-sm text-[#2C3E50]/60">お問い合わせ</span>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center gap-1 text-sm text-[#0B5394] hover:underline mb-8">
          <ArrowLeft size={14} />
          トップに戻る
        </Link>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-2xl text-[#2C3E50]">お問い合わせ</CardTitle>
                <CardDescription>
                  KAIBについてのご質問やご相談がございましたら、以下のフォームからお気軽にお問い合わせください。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#2C3E50]">お名前 *</label>
                      <Input
                        required
                        placeholder="山田 太郎"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#2C3E50]">メールアドレス *</label>
                      <Input
                        required
                        type="email"
                        placeholder="example@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#2C3E50]">件名 *</label>
                    <Input
                      required
                      placeholder="お問い合わせの件名"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#2C3E50]">メッセージ *</label>
                    <Textarea
                      required
                      placeholder="お問い合わせ内容をご記入ください"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#0B5394] hover:bg-[#0B5394]/90"
                    disabled={loading}
                  >
                    {loading ? (
                      "送信中..."
                    ) : (
                      <>
                        <Send size={16} className="mr-2" />
                        送信する
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-lg text-[#2C3E50]">連絡先情報</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#0B5394] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-[#2C3E50]">所在地</p>
                    <p className="text-sm text-[#2C3E50]/60">香川県さぬき市（詳細未定）</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-[#0B5394] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-[#2C3E50]">メール</p>
                    <p className="text-sm text-[#2C3E50]/60">フォームよりお問い合わせください</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#0B5394] to-[#4A90E2] text-white">
              <CardContent className="py-6 space-y-4">
                <h3 className="font-semibold">参加をお考えですか？</h3>
                <p className="text-sm text-white/80">
                  KAIBの活動にご興味がある方は、まず参加意向登録をお勧めします。
                </p>
                <Link href="/interest">
                  <Button size="sm" className="bg-white text-[#0B5394] hover:bg-white/90 w-full">
                    参加意向登録
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
