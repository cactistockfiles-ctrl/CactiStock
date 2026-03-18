import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Trash2, Plus, Minus, Send, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [line, setLine] = useState("");
  const [note, setNote] = useState("");

  const handleSubmitOrder = () => {
    if (!name.trim() || !email.trim() || !phone.trim()) {
      toast.error("กรุณากรอกข้อมูลติดต่อให้ครบถ้วน");
      return;
    }

    const orderLines = items
      .map((item) => `- ${item.cactus.name} x${item.quantity} = ฿${(item.cactus.price * item.quantity).toLocaleString()}`)
      .join("%0A");

    const body = [
      `ใบสั่งซื้อจาก Cacti Stock`,
      ``,
      `ชื่อ: ${name}`,
      `อีเมล: ${email}`,
      `โทร: ${phone}`,
      line ? `LINE: ${line}` : "",
      ``,
      `รายการสั่งซื้อ:`,
      ...items.map(
        (item) => `- ${item.cactus.name} x${item.quantity} = ฿${(item.cactus.price * item.quantity).toLocaleString()}`
      ),
      ``,
      `รวมทั้งสิ้น: ฿${totalPrice.toLocaleString()}`,
      note ? `\nหมายเหตุ: ${note}` : "",
    ]
      .filter(Boolean)
      .join("%0A");

    const subject = encodeURIComponent(`ใบสั่งซื้อกระบองเพชรจาก ${name}`);

    window.open(`mailto:cactistockfiles@gmail.com?subject=${subject}&body=${body}`, "_blank");
    toast.success("เปิดอีเมลเพื่อส่งใบสั่งซื้อแล้ว!");
    clearCart();
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 py-12 text-center">
        <ShoppingCart className="mb-4 h-16 w-16 text-muted-foreground/40" />
        <h1 className="font-display text-2xl font-bold">ตะกร้าว่างเปล่า</h1>
        <p className="mt-2 text-muted-foreground">ยังไม่มีสินค้าในตะกร้า เริ่มเลือกกระบองเพชรกันเลย!</p>
        <Button asChild className="mt-6">
          <Link to="/catalogue">ไปที่แคตตาล็อก</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 font-display text-4xl font-bold">ตะกร้าสินค้า</h1>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={item.cactus.id} className="flex gap-4 rounded-lg border bg-card p-4">
              <img
                src={item.cactus.images.top}
                alt={item.cactus.name}
                className="h-24 w-24 rounded-md object-cover"
              />
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <h3 className="font-display font-semibold">{item.cactus.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.cactus.growType} · {item.cactus.size}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.cactus.id, item.quantity - 1)}
                      className="rounded-md border p-1 hover:bg-muted"
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.cactus.id, item.quantity + 1)}
                      className="rounded-md border p-1 hover:bg-muted"
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                  <span className="font-display font-bold text-primary">
                    ฿{(item.cactus.price * item.quantity).toLocaleString()}
                  </span>
                  <button onClick={() => removeFromCart(item.cactus.id)} className="text-destructive hover:text-destructive/80">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Form */}
        <div className="rounded-lg border bg-card p-6 space-y-4 h-fit lg:sticky lg:top-24">
          <h2 className="font-display text-xl font-bold">ข้อมูลการสั่งซื้อ</h2>
          <p className="text-sm text-muted-foreground">กรอกข้อมูลติดต่อเพื่อส่งใบสั่งซื้อทางอีเมล</p>

          <div className="space-y-3">
            <Input placeholder="ชื่อ-นามสกุล *" value={name} onChange={(e) => setName(e.target.value)} />
            <Input placeholder="อีเมล *" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input placeholder="เบอร์โทรศัพท์ *" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <Input placeholder="LINE ID (ถ้ามี)" value={line} onChange={(e) => setLine(e.target.value)} />
            <Textarea placeholder="หมายเหตุเพิ่มเติม" value={note} onChange={(e) => setNote(e.target.value)} />
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between text-lg font-bold">
              <span>รวมทั้งสิ้น</span>
              <span className="text-primary font-display">฿{totalPrice.toLocaleString()}</span>
            </div>
          </div>

          <Button onClick={handleSubmitOrder} className="w-full gap-2" size="lg">
            <Send className="h-4 w-4" />
            ส่งใบสั่งซื้อทางอีเมล
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            ใบสั่งซื้อจะถูกส่งไปยัง cactistockfiles@gmail.com<br />
            ทีมงานจะติดต่อกลับเพื่อยืนยันรายการและชำระเงิน
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
