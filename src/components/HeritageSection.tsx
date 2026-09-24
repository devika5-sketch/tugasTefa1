import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import vintageBakeryImg from '../assets/images/vintage_bakery_heritage_1789976764623.jpg';

interface HeritageSectionProps {
  onOpenStoryModal?: () => void;
}

export const HeritageSection: React.FC<HeritageSectionProps> = ({ onOpenStoryModal }) => {
  const sectionRef = useRef<HTMLElement>(null);

  // Subtle Parallax Scroll Effect for the vintage photograph
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-4%', '4%']);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.04]);

  const timelineEvents = [
    {
      year: '1998',
      title: 'Where it began',
      detail: 'A solitary stone hearth and a starter nurtured with care.',
    },
    {
      year: '2008',
      title: 'A growing tradition',
      detail: 'Expanding our community table while keeping our craft slow.',
    },
    {
      year: 'Today',
      title: 'Still baked with heart',
      detail: 'Honoring pure flour, spring water, and patient fermentation.',
    },
  ];

  return (
    <section
      id="heritage-section"
      ref={sectionRef}
      aria-label="Bakery heritage and history"
      className="relative w-full min-h-screen md:h-screen md:max-h-screen flex flex-col md:flex-row overflow-hidden bg-[#f7f4ee] paper-texture paper-grain border-t border-[#cbb396]/30 shrink-0 select-none"
    >
      {/* Decorative ambient background accents */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#ebdccb]/30 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#dfd0be]/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Centered Max-Width Grid Container (Consistent 1320px grid matching Navbar, Hero, Menu & About) */}
      <div className="relative z-10 w-full max-w-[1320px] mx-auto h-full flex flex-col md:flex-row items-center px-6 sm:px-10 lg:px-12 py-10 md:py-0">
        
        {/* ========================================================================= */}
        {/* LEFT COLUMN (approx 45% Desktop): Vintage Artisan Bakery Photograph       */}
        {/* ========================================================================= */}
        <div className="relative w-full md:w-[45%] h-[40vh] md:h-full flex items-center justify-center pr-0 md:pr-6 lg:pr-10 py-4 md:py-0 overflow-hidden order-1 shrink-0">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg flex items-center justify-center"
          >
            {/* Subtle vintage photo frame with delicate rounded corners */}
            <div className="relative w-full aspect-[4/3] max-h-[50vh] lg:max-h-[56vh] rounded-xl overflow-hidden shadow-2xl shadow-[#292019]/15 border border-[#cbb59d]/40 group">
              {/* Parallax scaled vintage image */}
              <motion.img
                style={{ y: imageY, scale: imageScale }}
                src={vintageBakeryImg}
                alt="Vintage artisan bakery with stone hearth oven, wooden baker's table, flour dusted sourdough loaves"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Editorial warm sepia vignette for vintage bakery mood */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#221c18]/50 via-transparent to-[#221c18]/15 pointer-events-none"
                aria-hidden="true"
              />

              {/* Minimalist vintage stamp corner caption */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-10 flex flex-col">
                <span className="font-bakery-sans text-[9.5px] sm:text-[10px] tracking-[0.22em] text-[#e8ded1] uppercase font-semibold">
                  EST. 1998 &bull; ARTISAN HEARTH
                </span>
                <span className="font-bakery-serif text-xs sm:text-sm text-[#f7f4ee] font-normal italic tracking-wide">
                  Natural Wild Yeast &bull; Ancient Heritage Grains
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* RIGHT COLUMN (approx 55% Desktop): Heritage Story & Small Timeline        */}
        {/* ========================================================================= */}
        <div className="relative w-full md:w-[55%] min-h-[48vh] md:h-full flex flex-col justify-center pl-0 md:pl-6 lg:pl-10 py-6 md:py-0 order-2">
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.0, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-lg lg:max-w-xl flex flex-col items-start"
          >
            {/* Small Label with delicate warm sand accent line */}
            <div className="flex items-center gap-2.5 mb-2.5 sm:mb-3">
              <span className="w-8 h-[1.5px] bg-[#cbb59d] rounded-full" aria-hidden="true" />
              <span className="font-bakery-sans text-[10.5px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8e7a68]">
                OUR HERITAGE
              </span>
            </div>

            {/* Main Heading in Serif */}
            <h2 className="font-bakery-serif text-2xl sm:text-3xl lg:text-[2.2rem] text-[#221c18] font-normal tracking-[0.03em] uppercase leading-tight mb-2 sm:mb-2.5">
              BAKED WITH TRADITION
            </h2>

            {/* Description Quote */}
            <p className="font-bakery-serif text-[14px] sm:text-[15.5px] text-[#3a2f27] italic font-normal leading-snug mb-2.5 sm:mb-3">
              &ldquo;From a small neighborhood oven to a place where every loaf tells a story.&rdquo;
            </p>

            {/* Body Text in clean sans-serif with comfortable leading */}
            <p className="font-bakery-sans text-[#52453a] text-[12.5px] sm:text-[13.5px] leading-[1.65] max-w-lg mb-4 sm:mb-5">
              Our bakery was built around a simple belief: good bread should be made with patience.
              Inspired by traditional baking techniques and the warmth of homemade recipes, we create every bake with carefully selected ingredients and time-honored methods.
            </p>

            {/* Thin Decorative Divider Line */}
            <div className="w-full h-[1px] bg-[#cbb59d]/35 mb-3.5 sm:mb-4" aria-hidden="true" />

            {/* Small Timeline Underneath (3 Columns with clean spacing) */}
            <div className="w-full grid grid-cols-3 gap-2.5 sm:gap-4 lg:gap-5">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.25 + index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex flex-col items-start group"
                >
                  {/* Subtle timeline year marker */}
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#cbb59d] group-hover:scale-125 transition-transform" />
                    <span className="font-bakery-serif text-base sm:text-lg lg:text-xl font-bold text-[#221c18] tracking-wide">
                      {event.year}
                    </span>
                  </div>

                  {/* Timeline Title */}
                  <span className="font-bakery-sans text-[11.5px] sm:text-xs font-semibold text-[#3a2f27] tracking-tight mb-0.5">
                    {event.title}
                  </span>

                  {/* Micro Detail */}
                  <span className="font-bakery-sans text-[10.5px] sm:text-[11px] text-[#756658] leading-[1.45] hidden sm:block">
                    {event.detail}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
