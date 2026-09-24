import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingBag, Check } from 'lucide-react';

export interface BakeryItem {
  id: string;
  name: string;
  description: string;
  price: number;
  displayPrice: string;
  category: string;
}

const BAKERY_MENU: BakeryItem[] = [
  {
    id: 'cinnamon-toast',
    name: 'Cinnamon Toast',
    description: 'Golden caramelized toast with cinnamon, powdered sugar and whipped cream.',
    price: 28000,
    displayPrice: 'Rp 28.000',
    category: 'Signature',
  },
  {
    id: 'artisan-sourdough',
    name: 'Artisan Sourdough',
    description: 'Rustic sourdough with a crisp crust and soft, airy center.',
    price: 35000,
    displayPrice: 'Rp 35.000',
    category: 'Slow Ferment',
  },
  {
    id: 'butter-croissant',
    name: 'Butter Croissant',
    description: 'Flaky, golden layers baked with rich butter.',
    price: 25000,
    displayPrice: 'Rp 25.000',
    category: 'Viennoiserie',
  },
  {
    id: 'seeded-bread',
    name: 'Seeded Bread',
    description: 'Soft artisan bread topped with a mix of wholesome seeds.',
    price: 30000,
    displayPrice: 'Rp 30.000',
    category: 'Artisan Bread',
  },
];

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdateCartCount?: (count: number) => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  onUpdateCartCount,
}) => {
  const [quantities, setQuantities] = useState<Record<string, number>>({
    'cinnamon-toast': 1,
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!isOpen) return null;

  const updateQuantity = (id: string, delta: number) => {
    setQuantities((prev) => {
      const nextQty = Math.max(0, (prev[id] || 0) + delta);
      const updated = { ...prev, [id]: nextQty };
      const totalCount = Object.values(updated).reduce((acc, q) => acc + q, 0);
      onUpdateCartCount?.(totalCount);
      return updated;
    });
  };

  const totalItems = Object.values(quantities).reduce((acc, q) => acc + q, 0);
  const subtotal = BAKERY_MENU.reduce(
    (acc, item) => acc + item.price * (quantities[item.id] || 0),
    0
  );

  const handleCheckout = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      setOrderPlaced(false);
      onClose();
    }, 2200);
  };

  return (
    <div
      id="order-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="order-modal-dialog"
        className="relative w-full max-w-lg bg-[#1a1614] border border-[#cbb59d]/40 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/90 text-[#f7f4ee] max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#cbb59d]/20 shrink-0">
          <div>
            <h2 className="font-bakery-serif text-2xl sm:text-3xl text-[#cbb59d] font-semibold tracking-wide">
              Artisan Bakery Menu
            </h2>
            <p className="text-xs text-[#bda995] font-bakery-sans mt-0.5">
              Freshly baked every morning in small handcrafted batches
            </p>
          </div>
          <button
            id="btn-close-modal"
            onClick={onClose}
            type="button"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-[#e8ded1] flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body / Menu List */}
        <div className="flex-1 overflow-y-auto py-4 space-y-3.5 pr-1 my-1">
          {BAKERY_MENU.map((item) => {
            const qty = quantities[item.id] || 0;
            return (
              <div
                key={item.id}
                className="p-4 rounded-2xl bg-[#221c18] border border-[#cbb396]/15 hover:border-[#cbb396]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 transition-all"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-widest font-bakery-sans text-[#cbb59d] font-medium bg-[#cbb59d]/15 px-2 py-0.5 rounded-full">
                      {item.category}
                    </span>
                    <h3 className="font-bakery-serif text-base sm:text-lg font-semibold text-[#f7f4ee]">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-xs text-[#a89988] font-bakery-sans mt-1 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                  <p className="font-bakery-sans font-semibold text-sm text-[#cbb59d] mt-1.5">
                    Rp {item.price.toLocaleString('id-ID')}
                  </p>
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center gap-2.5 shrink-0 bg-[#161311] px-2 py-1 rounded-full border border-white/10">
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, -1)}
                    disabled={qty === 0}
                    className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/15 disabled:opacity-30 text-[#e8ded1] flex items-center justify-center transition-all active:scale-95 cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-5 text-center text-xs font-semibold font-bakery-sans text-[#f7f4ee]">
                    {qty}
                  </span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, 1)}
                    className="w-7 h-7 rounded-full bg-[#cbb59d] hover:bg-[#d9c5af] text-[#1a1614] flex items-center justify-center transition-all active:scale-95 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Footer / Checkout */}
        <div className="pt-4 border-t border-[#cbb59d]/20 shrink-0 flex flex-col gap-3">
          <div className="flex items-center justify-between text-sm font-bakery-sans">
            <span className="text-[#bda995]">Total ({totalItems} items):</span>
            <span className="text-xl font-bold font-bakery-serif text-[#cbb59d]">
              Rp {subtotal.toLocaleString('id-ID')}
            </span>
          </div>

          <button
            id="btn-confirm-order"
            onClick={handleCheckout}
            disabled={totalItems === 0 || orderPlaced}
            type="button"
            className="w-full py-3.5 rounded-2xl bg-[#cbb59d] hover:bg-[#d9c5af] disabled:opacity-40 disabled:pointer-events-none text-[#1a1614] font-bakery-sans text-xs uppercase tracking-wider font-semibold shadow-lg shadow-black/40 flex items-center justify-center gap-2 transition-all duration-200 active:scale-98"
          >
            {orderPlaced ? (
              <>
                <Check className="w-4 h-4 text-emerald-800" />
                <span>Order Placed! Preparing in Kitchen...</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>Confirm Order for Pickup (${subtotal.toFixed(2)})</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
