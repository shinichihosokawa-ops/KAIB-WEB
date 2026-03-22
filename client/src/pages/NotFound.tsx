import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="text-8xl font-bold text-[#0B5394]/20">404</div>
        <h1 className="text-2xl font-bold text-[#2C3E50]">ページが見つかりません</h1>
        <p className="text-[#2C3E50]/60">
          お探しのページは存在しないか、移動した可能性があります。
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/">
            <Button className="bg-[#0B5394] hover:bg-[#0B5394]/90">
              <Home size={16} className="mr-2" />
              トップページに戻る
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline">
              <ArrowLeft size={16} className="mr-2" />
              お問い合わせ
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
