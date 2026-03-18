import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CactusItem } from "@/data/cacti";
import { useCart } from "@/context/CartContext";

interface Props {
  cactus: CactusItem;
  onSelect: (cactus: CactusItem) => void;
}

const CactusCard = ({ cactus, onSelect }: Props) => {
  const { addToCart } = useCart();

  return (
    <div
      className="group cursor-pointer overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
      onClick={() => onSelect(cactus)}
    >
      {/* Image grid: main left, 3 small stacked right */}
      <div className="flex h-64">
        <div className="w-2/3 overflow-hidden">
          <img
            src={cactus.images.top}
            alt={cactus.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex w-1/3 flex-col">
          {[cactus.images.side1, cactus.images.side2, cactus.images.side3].map((img, i) => (
            <div key={i} className="h-1/3 overflow-hidden border-l border-b last:border-b-0">
              <img src={img} alt={`${cactus.name} side ${i + 1}`} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 space-y-2">
        <h3 className="font-display text-lg font-semibold leading-tight text-card-foreground">
          {cactus.name}
        </h3>
        <div className="flex flex-wrap gap-1.5">
          <Badge variant="secondary" className="text-xs">{cactus.family}</Badge>
          <Badge variant="outline" className="text-xs">{cactus.growType}</Badge>
          <Badge variant="outline" className="text-xs">{cactus.size}</Badge>
        </div>
        <div className="flex items-center justify-between pt-2">
          <span className="font-display text-xl font-bold text-primary">
            ฿{cactus.price.toLocaleString()}
          </span>
          <Button
            size="sm"
            className="gap-1.5"
            onClick={(e) => {
              e.stopPropagation();
              addToCart(cactus);
            }}
          >
            <ShoppingCart className="h-3.5 w-3.5" />
            เพิ่ม
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CactusCard;
