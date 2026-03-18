import { useState } from "react";
import { cactiData, CactusItem } from "@/data/cacti";
import CactusCard from "@/components/CactusCard";
import CactusDetailModal from "@/components/CactusDetailModal";

const Catalogue = () => {
  const [selectedCactus, setSelectedCactus] = useState<CactusItem | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const filtered = filter === "all" ? cactiData : cactiData.filter((c) => c.growType === filter);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="font-display text-4xl font-bold">แคตตาล็อก</h1>
        <p className="text-muted-foreground">รวมกระบองเพชรทุกสายพันธุ์ที่พร้อมจำหน่าย</p>
      </div>

      <div className="mb-6 flex gap-2">
        {["all", "ไม้เมล็ด", "ไม้กราฟ"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              filter === f
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {f === "all" ? "ทั้งหมด" : f}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((c) => (
          <CactusCard key={c.id} cactus={c} onSelect={setSelectedCactus} />
        ))}
      </div>

      <CactusDetailModal cactus={selectedCactus} open={!!selectedCactus} onOpenChange={(open) => !open && setSelectedCactus(null)} />
    </div>
  );
};

export default Catalogue;
