import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Truck, Shield } from "lucide-react";
import heroCactus from "@/assets/hero-cactus.jpg";
import { cactiData, blogPosts } from "@/data/cacti";
import CactusCard from "@/components/CactusCard";
import CactusDetailModal from "@/components/CactusDetailModal";
import { CactusItem } from "@/data/cacti";
import { useState } from "react";

const Index = () => {
  const [selectedCactus, setSelectedCactus] = useState<CactusItem | null>(null);
  const featured = cactiData.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroCactus} alt="Cacti Stock Hero" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-cactus-900/90 to-cactus-900/40" />
        </div>
        <div className="container relative mx-auto px-4 py-32 md:py-44">
          <div className="max-w-xl space-y-6">
            <h1 className="font-display text-4xl font-bold leading-tight text-cactus-50 md:text-6xl">
              คอลเลกชัน<br />กระบองเพชรหายาก
            </h1>
            <p className="text-lg text-cactus-100">
              แหล่งรวมกระบองเพชรคุณภาพสูงจากทั่วโลก สำหรับนักสะสมและผู้รักต้นไม้ตัวจริง
            </p>
            <div className="flex gap-3">
              <Button asChild size="lg" className="gap-2">
                <Link to="/catalogue">
                  ดูแคตตาล็อก <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-cactus-200 text-cactus-50 hover:bg-cactus-50/10 hover:text-cactus-50">
                <Link to="/about">เกี่ยวกับเรา</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-cactus-50 py-16">
        <div className="container mx-auto grid gap-8 px-4 md:grid-cols-3">
          {[
            { icon: Leaf, title: "คุณภาพสูง", desc: "คัดเลือกสายพันธุ์แท้จากแหล่งที่เชื่อถือได้" },
            { icon: Truck, title: "จัดส่งปลอดภัย", desc: "บรรจุภัณฑ์พิเศษสำหรับการจัดส่งต้นไม้" },
            { icon: Shield, title: "รับประกันคุณภาพ", desc: "รับประกันต้นไม้ถึงมือคุณในสภาพสมบูรณ์" },
          ].map((f, i) => (
            <div key={i} className="flex items-start gap-4 rounded-lg bg-card p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Cacti */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="font-display text-3xl font-bold">กระบองเพชรยอดนิยม</h2>
              <p className="text-muted-foreground">สายพันธุ์เด่นที่คัดเลือกมาเพื่อคุณ</p>
            </div>
            <Button asChild variant="ghost" className="gap-1">
              <Link to="/catalogue">ดูทั้งหมด <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featured.map((c) => (
              <CactusCard key={c.id} cactus={c} onSelect={setSelectedCactus} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="bg-earth-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="font-display text-3xl font-bold">บทความล่าสุด</h2>
              <p className="text-muted-foreground">ความรู้เกี่ยวกับกระบองเพชร</p>
            </div>
            <Button asChild variant="ghost" className="gap-1">
              <Link to="/blog">ดูทั้งหมด <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {blogPosts.map((post) => (
              <div key={post.id} className="rounded-lg border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <p className="text-xs text-muted-foreground">{post.date}</p>
                <h3 className="mt-2 font-display text-lg font-semibold">{post.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CactusDetailModal cactus={selectedCactus} open={!!selectedCactus} onOpenChange={(open) => !open && setSelectedCactus(null)} />
    </div>
  );
};

export default Index;
