import React, { createContext, useContext, useState, useCallback } from "react";
import { CactusItem } from "@/data/cacti";

interface CartItem {
  cactus: CactusItem;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (cactus: CactusItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = useCallback((cactus: CactusItem) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.cactus.id === cactus.id);
      if (existing) {
        return prev.map((item) =>
          item.cactus.id === cactus.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { cactus, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.cactus.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((item) => item.cactus.id !== id));
    } else {
      setItems((prev) =>
        prev.map((item) => (item.cactus.id === id ? { ...item, quantity } : item))
      );
    }
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.cactus.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
