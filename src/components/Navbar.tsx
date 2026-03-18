import { Link, useLocation } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const { totalItems } = useCart();
  const location = useLocation();

  const links = [
    { to: "/", label: "หน้าหลัก" },
    { to: "/catalogue", label: "แคตตาล็อก" },
    { to: "/about", label: "เกี่ยวกับเรา" },
    { to: "/blog", label: "บล็อก" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Cacti Stock" className="h-10 w-10" />
          <span className="font-display text-xl font-bold text-primary">Cacti Stock</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          to="/cart"
          className="relative flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <ShoppingCart className="h-4 w-4" />
          <span className="hidden sm:inline">ตะกร้า</span>
          {totalItems > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
