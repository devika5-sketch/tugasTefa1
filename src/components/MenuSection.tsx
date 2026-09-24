import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Plus, Check } from 'lucide-react';
import toastFoodImg from '../assets/images/cinnamon_toast_food.jpg';
import sourdoughImg from '../assets/images/artisan_sourdough_loaf_1789977479085.jpg';
import croissantImg from '../assets/images/butter_croissant_bakery_1789977463987.jpg';
import seededBreadImg from '../assets/images/seeded_artisan_bread_1789977493152.jpg';

export interface ProductItem {
  id: string;
  name: string;
  description: string;
  price: string;
  rawPrice: number;
  image: string;
  tag?: string;
}

const PRODUCTS: ProductItem[] = [
  {
    id: 'cinnamon-toast',
    name: 'Cinnamon Toast',
    description: 'Golden caramelized toast with cinnamon, powdered sugar and whipped cream.',
    price: 'Rp 28.000',
    rawPrice: 28000,
    image: toastFoodImg,
    tag: 'Signature',
  },
  {
    id: 'artisan-sourdough',
    name: 'Artisan Sourdough',
    description: 'Rustic sourdough with a crisp crust and soft, airy center.',
    price: 'Rp 35.000',
    rawPrice: 35000,
    image: sourdoughImg,
    tag: 'Slow Ferment',
  },
  {
    id: 'butter-croissant',
    name: 'Butter Croissant',
    description: 'Flaky, golden layers baked with rich butter.',
    price: 'Rp 25.000',
    rawPrice: 25000,
    image: croissantImg,
    tag: 'Classic',
  },
  {
    id: 'seeded-bread',
    name: 'Seeded Bread',
    description: 'Soft artisan bread topped with a mix of wholesome seeds.',
    price: 'Rp 30.000',
    rawPrice: 30000,
    image: seededBreadImg,
    tag: 'Wholesome',
  },
];

interface MenuSectionProps {
  onAddToCart?: (product: ProductItem) => void;
  onOpenOrderModal?: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onAddToCart,
  onOpenOrderModal,
}) => {
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  const handleAdd = (product: ProductItem) => {
    onAddToCart?.(product);
    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 1600);
  };

  return (
    <section
      id="menu-section"
      aria-label="Bakery menu and fresh bakes"
      className="relative w-full min-h-screen lg:h-screen lg:max-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#120f0d] border-t border-[#cbb396]/25 shrink-0 select-none py-10 lg:py-0"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute inset-0 bg-radial from-[#221a14]/60 via-transparent to-transparent pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#cbb59d]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Centered Container: aligned to the consistent max-w-[1320px] page grid */}
      <div className="relative z-10 w-full max-w-[1320px] mx-auto flex flex-col justify-center items-center px-6 sm:px-10 lg:px-12">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER: Compact, Refined Editorial Header                          */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center mb-4 sm:mb-5 lg:mb-6 shrink-0"
        >
          {/* Small Label with delicate warm sand accents */}
          <div className="flex items-center gap-2.5 mb-1 sm:mb-1.5">
            <span className="w-6 h-[1px] bg-[#cbb59d]/70 rounded-full" aria-hidden="true" />
            <span className="font-bakery-sans text-[10.5px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-[#cbb59d]">
              OUR BAKES
            </span>
            <span className="w-6 h-[1px] bg-[#cbb59d]/70 rounded-full" aria-hidden="true" />
          </div>

          {/* Main Heading in Serif - compact and elegant */}
          <h2 className="font-bakery-serif text-2xl sm:text-3xl lg:text-[2.2rem] text-[#f7f4ee] font-normal tracking-[0.03em] uppercase leading-tight mb-1 sm:mb-1.5">
            FRESH FROM THE OVEN
          </h2>

          {/* Short Description */}
          <p className="font-bakery-serif text-xs sm:text-[13px] text-[#d6c7b2] italic font-normal max-w-md">
            &ldquo;Simple ingredients, carefully baked, and made to be enjoyed.&rdquo;
          </p>
        </motion.div>

        {/* ========================================================================= */}
        {/* COMPACT PRODUCT GRID: 4 cards, 220-250px each, 380-420px height           */}
        {/* ========================================================================= */}
        <div className="w-full max-w-[1040px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 lg:gap-5 justify-center items-stretch">
          {PRODUCTS.map((product, index) => {
            const isAdded = !!addedIds[product.id];

            return (
              <motion.article
                key={product.id}
                id={`product-card-${product.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: 0.1 + index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative flex flex-col w-full max-w-[250px] mx-auto min-h-[380px] max-h-[415px] bg-[#fbf8f3] paper-texture rounded-xl overflow-hidden border border-[#cbb396]/35 shadow-lg shadow-black/35 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 hover:border-[#cbb396]/60"
              >
                {/* Compact Product Image Area: complete product visible, no harsh crop */}
                <div className="relative w-full h-[155px] sm:h-[165px] overflow-hidden bg-[#241c17] shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105 select-none"
                    loading="lazy"
                  />

                  {/* Soft subtle bottom vignette */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Category Tag Pill */}
                  {product.tag && (
                    <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-[#181310]/80 backdrop-blur-md border border-[#cbb59d]/30 font-bakery-sans text-[9px] uppercase tracking-[0.18em] font-semibold text-[#f7f4ee]">
                      {product.tag}
                    </span>
                  )}
                </div>

                {/* Card Content Area with compact padding */}
                <div className="p-3.5 sm:p-4 flex flex-col flex-grow justify-between bg-[#fbf8f3]">
                  {/* Title & Description */}
                  <div>
                    <h3 className="font-bakery-serif text-[17px] sm:text-[18px] text-[#221c18] font-semibold tracking-tight leading-snug mb-1 group-hover:text-[#8e5d32] transition-colors duration-200">
                      {product.name}
                    </h3>

                    <p className="font-bakery-sans text-[11.5px] sm:text-[12px] text-[#594c42] leading-[1.55] line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  {/* Bottom Row: Price & Action Button */}
                  <div className="pt-2.5 border-t border-[#cbb59d]/25 flex items-center justify-between gap-1.5 mt-2">
                    {/* Price in dark chocolate typography */}
                    <span className="font-bakery-serif text-[14.5px] sm:text-[15.5px] font-bold text-[#221c18] tracking-tight whitespace-nowrap">
                      {product.price}
                    </span>

                    {/* Small Minimalist "ADD TO ORDER" Button */}
                    <button
                      id={`btn-add-${product.id}`}
                      onClick={() => handleAdd(product)}
                      type="button"
                      aria-label={`Add ${product.name} to order`}
                      className={`group/btn inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[9.5px] uppercase tracking-[0.18em] font-semibold font-bakery-sans transition-all duration-200 active:scale-95 cursor-pointer whitespace-nowrap ${
                        isAdded
                          ? 'bg-[#3b6b4c] text-white border border-[#3b6b4c]'
                          : 'bg-[#221c18] text-[#f7f4ee] hover:bg-[#8e5d32] hover:text-white border border-[#221c18]'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-2.5 h-2.5 text-white" />
                          <span>ADDED</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-2.5 h-2.5 text-[#cbb59d] group-hover/btn:text-white transition-colors" />
                          <span>ADD TO ORDER</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Small subtle caption/callout below grid */}
        <div className="flex items-center justify-center mt-4 sm:mt-5 shrink-0">
          <button
            onClick={onOpenOrderModal}
            type="button"
            className="inline-flex items-center gap-1.5 text-[11px] font-bakery-sans uppercase tracking-[0.2em] text-[#cbb59d] hover:text-[#f7f4ee] transition-colors duration-200 cursor-pointer"
          >
            <span>VIEW FULL ARTISAN ATELIER MENU &rarr;</span>
          </button>
        </div>

      </div>
    </section>
  );
};
