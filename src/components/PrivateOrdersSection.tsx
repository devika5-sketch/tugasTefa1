import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import privateOrdersImg from '../assets/images/private_orders_event_1790050438478.jpg';

interface PrivateOrdersSectionProps {
  onOpenInquiry?: () => void;
}

export const PrivateOrdersSection: React.FC<PrivateOrdersSectionProps> = ({ onOpenInquiry }) => {
  const sectionRef = useRef<HTMLElement>(null);

  // Subtle cinematic parallax scroll tracking matching other editorial sections
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-3%', '3%']);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.03, 1, 1.03]);

  return (
    <section
      id="private-orders-section"
      ref={sectionRef}
      aria-label="Private orders, celebrations, and events"
      className="relative w-full min-h-screen md:h-screen md:max-h-screen flex flex-col md:flex-row overflow-hidden bg-[#f7f4ee] paper-texture paper-grain border-t border-[#cbb396]/30 shrink-0 select-none py-10 md:py-0"
    >
      {/* Decorative ambient background glows */}
      <div
        className="absolute top-0 right-1/3 w-96 h-96 rounded-full bg-[#ebdccb]/30 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-[#dfd0be]/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Centered Max-Width Grid Container (Consistent 1320px grid matching all sections) */}
      <div className="relative z-10 w-full max-w-[1320px] mx-auto h-full flex flex-col md:flex-row items-center px-6 sm:px-10 lg:px-12">
        {/* ========================================================================= */}
        {/* LEFT COLUMN (approx 50% Desktop): Curated Pastry Event Spread Photo       */}
        {/* ========================================================================= */}
        <div className="relative w-full md:w-1/2 h-[42vh] md:h-full flex items-center justify-center pr-0 md:pr-6 lg:pr-10 py-4 md:py-0 overflow-hidden order-1 shrink-0">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg flex items-center justify-center"
          >
            {/* Elegant bakery frame with rounded corners matching visual style */}
            <div className="relative w-full aspect-[4/3] max-h-[50vh] lg:max-h-[55vh] rounded-xl overflow-hidden shadow-2xl shadow-[#292019]/15 border border-[#cbb59d]/40 group bg-[#221c18]">
              {/* Parallax scaled event photograph */}
              <motion.img
                style={{ y: imageY, scale: imageScale }}
                src={privateOrdersImg}
                alt="Curated bakery spread of artisanal pastries and sourdough on a linen celebration table"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 select-none"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Editorial vignette overlay for warm depth */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* Minimalist corner stamp */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-10 flex flex-col">
                <span className="font-bakery-sans text-[9px] sm:text-[9.5px] tracking-[0.22em] text-[#cbb59d] uppercase font-semibold">
                  Curated Spread &bull; Made to Share
                </span>
                <span className="font-bakery-serif text-xs sm:text-sm text-[#f7f4ee] font-medium tracking-wide">
                  Private Gatherings &amp; Events
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* RIGHT COLUMN (approx 50% Desktop): Information & Three Service Items      */}
        {/* ========================================================================= */}
        <div className="relative w-full md:w-1/2 min-h-[48vh] md:h-full flex flex-col justify-center pl-0 md:pl-6 lg:pl-10 py-6 md:py-0 order-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.0, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-lg flex flex-col items-start"
          >
            {/* Small Eyebrow Label with delicate warm sand lines */}
            <div className="flex items-center gap-2.5 mb-1.5">
              <span className="w-6 h-[1px] bg-[#cbb59d] rounded-full" aria-hidden="true" />
              <span className="font-bakery-sans text-[10.5px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8e7a68]">
                PRIVATE ORDERS
              </span>
              <span className="w-6 h-[1px] bg-[#cbb59d] rounded-full" aria-hidden="true" />
            </div>

            {/* Main Heading in Serif */}
            <h2 className="font-bakery-serif text-2xl sm:text-3xl lg:text-[2.25rem] text-[#221c18] font-normal tracking-[0.03em] uppercase leading-tight mb-1.5 sm:mb-2">
              MADE FOR YOUR MOMENTS
            </h2>

            {/* Short Description */}
            <p className="font-bakery-serif text-xs sm:text-[13.5px] text-[#6b5a4d] italic font-normal leading-relaxed mb-5 sm:mb-6 max-w-md">
              &ldquo;From intimate gatherings to special celebrations, we create thoughtfully baked treats made to share.&rdquo;
            </p>

            {/* Structured Service Items */}
            <div className="w-full max-w-md space-y-3 sm:space-y-3.5">
              {/* ITEM 01: CELEBRATIONS */}
              <div className="flex items-start gap-3 sm:gap-3.5">
                <span className="font-bakery-sans text-[11px] sm:text-[11.5px] font-semibold text-[#8e5d32] tracking-widest shrink-0 mt-0.5 w-6">
                  01
                </span>
                <div className="flex flex-col">
                  <span className="font-bakery-sans text-[10.5px] uppercase tracking-[0.2em] font-semibold text-[#221c18] mb-0.5">
                    CELEBRATIONS
                  </span>
                  <span className="font-bakery-sans text-xs sm:text-[12.5px] text-[#716154] leading-relaxed">
                    Custom bakes for birthdays, dinners, and meaningful celebrations.
                  </span>
                </div>
              </div>

              {/* Subtle Divider */}
              <div className="h-[1px] w-full bg-[#cbb59d]/30" aria-hidden="true" />

              {/* ITEM 02: EVENTS & GATHERINGS */}
              <div className="flex items-start gap-3 sm:gap-3.5">
                <span className="font-bakery-sans text-[11px] sm:text-[11.5px] font-semibold text-[#8e5d32] tracking-widest shrink-0 mt-0.5 w-6">
                  02
                </span>
                <div className="flex flex-col">
                  <span className="font-bakery-sans text-[10.5px] uppercase tracking-[0.2em] font-semibold text-[#221c18] mb-0.5">
                    EVENTS &amp; GATHERINGS
                  </span>
                  <span className="font-bakery-sans text-xs sm:text-[12.5px] text-[#716154] leading-relaxed">
                    Curated pastry selections for meetings, gatherings, and special occasions.
                  </span>
                </div>
              </div>

              {/* Subtle Divider */}
              <div className="h-[1px] w-full bg-[#cbb59d]/30" aria-hidden="true" />

              {/* ITEM 03: CORPORATE ORDERS */}
              <div className="flex items-start gap-3 sm:gap-3.5">
                <span className="font-bakery-sans text-[11px] sm:text-[11.5px] font-semibold text-[#8e5d32] tracking-widest shrink-0 mt-0.5 w-6">
                  03
                </span>
                <div className="flex flex-col">
                  <span className="font-bakery-sans text-[10.5px] uppercase tracking-[0.2em] font-semibold text-[#221c18] mb-0.5">
                    CORPORATE ORDERS
                  </span>
                  <span className="font-bakery-sans text-xs sm:text-[12.5px] text-[#716154] leading-relaxed">
                    Thoughtfully prepared bakery boxes for teams, clients, and private events.
                  </span>
                </div>
              </div>
            </div>

            {/* MAKE AN INQUIRY Button & Subtext */}
            <div className="pt-4 sm:pt-5 flex flex-col items-start gap-2">
              <button
                id="btn-make-inquiry"
                type="button"
                onClick={onOpenInquiry}
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#221c18] hover:border-[#8e5d32] bg-[#221c18] text-[#f7f4ee] hover:bg-[#8e5d32] font-bakery-sans text-[11px] uppercase tracking-[0.2em] font-semibold transition-all duration-200 cursor-pointer shadow-md shadow-[#221c18]/10 active:scale-95"
              >
                <span>MAKE AN INQUIRY</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#cbb59d] group-hover:text-[#f7f4ee] group-hover:translate-x-0.5 transition-all duration-200" />
              </button>
              <span className="font-bakery-serif text-xs text-[#8e7a68] italic">
                Tell us what you&apos;re planning and we&apos;ll take care of the rest.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
