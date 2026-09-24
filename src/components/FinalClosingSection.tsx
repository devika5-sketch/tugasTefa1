import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ArrowUp, ArrowUpRight } from 'lucide-react';
import closingBakeryImg from '../assets/images/bakery_closing_evening_1790051675575.jpg';

interface FinalClosingSectionProps {
  onOpenOrder?: () => void;
}

export const FinalClosingSection: React.FC<FinalClosingSectionProps> = ({ onOpenOrder }) => {
  const sectionRef = useRef<HTMLElement>(null);

  // Subtle cinematic parallax and scale on scroll into view
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end end'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-4%', '2%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.01]);

  const scrollToAtelier = () => {
    document.getElementById('atelier-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    document.getElementById('hero-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="final-ending-section"
      ref={sectionRef}
      aria-label="Until we bake again - Closing"
      className="relative w-full min-h-screen md:h-screen md:max-h-screen flex flex-col justify-between overflow-hidden bg-[#100d0b] text-[#f7f4ee] select-none shrink-0"
    >
      {/* ========================================================================= */}
      {/* CINEMATIC BACKGROUND IMAGE WITH SUBTLE PARALLAX & WARM OVERLAY            */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.img
          style={{ y: imageY, scale: imageScale }}
          src={closingBakeryImg}
          alt="Warm artisanal bakery interior with ambient evening lights and fresh bakes"
          className="w-full h-[115%] -top-[7.5%] relative object-cover object-center filter brightness-[0.78] contrast-[1.05]"
          loading="lazy"
          referrerPolicy="no-referrer"
        />

        {/* Multi-layered warm dark vignette overlays for pristine legibility */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#100d0b]/80 via-[#120f0d]/65 to-[#100d0b]/92 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_rgba(16,13,11,0.75)_80%)] pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Top spacer / breathing space for balanced vertical alignment */}
      <div className="relative z-10 pt-10 sm:pt-14 md:pt-16" aria-hidden="true" />

      {/* ========================================================================= */}
      {/* CENTER CONTENT: Cinematic editorial closing invitation                    */}
      {/* ========================================================================= */}
      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-12 flex flex-col items-center justify-center text-center my-auto py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-2xl flex flex-col items-center"
        >
          {/* Eyebrow: "UNTIL WE BAKE AGAIN" flanked by refined golden sand accents */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-5">
            <span className="w-8 sm:w-12 h-[1px] bg-[#cbb59d]/40" aria-hidden="true" />
            <span className="font-bakery-sans text-[10.5px] sm:text-[11.5px] font-semibold uppercase tracking-[0.28em] text-[#cbb59d]">
              UNTIL WE BAKE AGAIN
            </span>
            <span className="w-8 sm:w-12 h-[1px] bg-[#cbb59d]/40" aria-hidden="true" />
          </div>

          {/* Main Heading: "COME BACK FOR SOMETHING WARM" */}
          <h2
            id="heading-final-ending"
            className="font-bakery-serif text-[2.2rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] text-[#f7f4ee] font-medium tracking-[0.03em] uppercase leading-[1.08] text-center mb-4 sm:mb-5"
            style={{
              textShadow: '0 2px 20px rgba(0,0,0,0.6), 0 1px 4px rgba(0,0,0,0.8)',
            }}
          >
            COME BACK FOR
            <br />
            SOMETHING WARM
          </h2>

          {/* Short Description: "Freshly baked, thoughtfully made, and always waiting to be shared." */}
          <p className="font-bakery-serif text-base sm:text-lg md:text-xl text-[#dfd4c5] italic font-normal text-center max-w-lg leading-relaxed mb-7 sm:mb-9 text-balance">
            &ldquo;Freshly baked, thoughtfully made, and always waiting to be shared.&rdquo;
          </p>

          {/* Action Group: Primary Button + Secondary Link */}
          <div className="flex flex-col items-center gap-4 sm:gap-4.5">
            {/* Primary Action: ORDER ONLINE */}
            <button
              id="btn-final-order-online"
              type="button"
              onClick={onOpenOrder}
              className="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#cbb59d] hover:bg-[#e8ded1] text-[#14100d] font-bakery-sans text-[11px] sm:text-[11.5px] uppercase tracking-[0.2em] font-semibold transition-all duration-200 shadow-xl shadow-black/40 hover:shadow-2xl hover:shadow-[#cbb59d]/20 active:scale-95 cursor-pointer"
            >
              <span>ORDER ONLINE</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#14100d] group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            {/* Secondary Action: VISIT OUR ATELIER */}
            <button
              id="btn-final-visit-atelier"
              type="button"
              onClick={scrollToAtelier}
              className="group inline-flex items-center gap-1.5 font-bakery-sans text-[10.5px] sm:text-[11px] uppercase tracking-[0.22em] text-[#cbb59d]/85 hover:text-[#f7f4ee] transition-colors py-1 cursor-pointer border-b border-transparent hover:border-[#cbb59d]/50 active:scale-95"
            >
              <span>VISIT OUR ATELIER</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#cbb59d]/60 group-hover:text-[#f7f4ee] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* ========================================================================= */}
      {/* BOTTOM AREA: Minimal Footer Line                                          */}
      {/* ========================================================================= */}
      <footer
        id="final-minimal-footer"
        className="relative z-10 w-full border-t border-[#cbb59d]/15 bg-[#100d0b]/80 backdrop-blur-sm py-5 sm:py-6 px-6 sm:px-10 lg:px-12"
      >
        <div className="w-full max-w-[1320px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
          {/* Brand & Tagline */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3.5">
            <span className="font-bakery-serif text-base sm:text-lg font-bold tracking-[0.2em] text-[#e8ded1]">
              BAKERY
            </span>
            <span className="hidden sm:inline text-[#cbb59d]/30" aria-hidden="true">
              &bull;
            </span>
            <span className="font-bakery-sans text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#cbb59d]/75">
              BAKED WITH PATIENCE. SHARED WITH HEART.
            </span>
          </div>

          {/* Copyright & Ergonomic Scroll To Top */}
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="font-bakery-sans text-[10px] sm:text-[11px] text-[#8e7a68] tracking-wider">
              &copy; 2026 Bakery. All rights reserved.
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex items-center gap-1 font-bakery-sans text-[10px] sm:text-[10.5px] uppercase tracking-[0.18em] text-[#cbb59d]/75 hover:text-[#f7f4ee] transition-colors py-0.5 cursor-pointer"
              aria-label="Back to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </footer>
    </section>
  );
};
