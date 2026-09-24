import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import atelierInteriorImg from '../assets/images/bakery_atelier_interior_1790050172184.jpg';

interface AtelierSectionProps {
  onOpenDirections?: () => void;
}

export const AtelierSection: React.FC<AtelierSectionProps> = ({ onOpenDirections }) => {
  const sectionRef = useRef<HTMLElement>(null);

  // Subtle cinematic parallax scroll tracking matching About & Heritage sections
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-3%', '3%']);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.03, 1, 1.03]);

  return (
    <section
      id="atelier-section"
      ref={sectionRef}
      aria-label="Atelier location and opening hours"
      className="relative w-full min-h-screen md:h-screen md:max-h-screen flex flex-col md:flex-row overflow-hidden bg-[#f7f4ee] paper-texture paper-grain border-t border-[#cbb396]/30 shrink-0 select-none py-10 md:py-0"
    >
      {/* Decorative ambient background glows */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#ebdccb]/30 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-[#dfd0be]/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Centered Max-Width Grid Container (Consistent 1320px grid matching Navbar, Hero, Menu, Journal, About & Heritage) */}
      <div className="relative z-10 w-full max-w-[1320px] mx-auto h-full flex flex-col md:flex-row items-center px-6 sm:px-10 lg:px-12">
        {/* ========================================================================= */}
        {/* LEFT COLUMN (approx 50% Desktop): Large Atmospheric Bakery Interior Photo */}
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
              {/* Parallax scaled interior photograph */}
              <motion.img
                style={{ y: imageY, scale: imageScale }}
                src={atelierInteriorImg}
                alt="Atmospheric bakery atelier interior with morning sunlight, warm wooden counter and freshly baked artisan loaves"
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
                  Morning Light &bull; Hearth &amp; Mill
                </span>
                <span className="font-bakery-serif text-xs sm:text-sm text-[#f7f4ee] font-medium tracking-wide">
                  The Cianjur Atelier
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* RIGHT COLUMN (approx 50% Desktop): Information Area with Clean Typography */}
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
                ATELIER &amp; HOURS
              </span>
              <span className="w-6 h-[1px] bg-[#cbb59d] rounded-full" aria-hidden="true" />
            </div>

            {/* Main Heading in Serif */}
            <h2 className="font-bakery-serif text-2xl sm:text-3xl lg:text-[2.25rem] text-[#221c18] font-normal tracking-[0.03em] uppercase leading-tight mb-1.5 sm:mb-2">
              COME VISIT OUR BAKERY
            </h2>

            {/* Short Description */}
            <p className="font-bakery-serif text-xs sm:text-[13.5px] text-[#6b5a4d] italic font-normal leading-relaxed mb-5 sm:mb-6 max-w-md">
              &ldquo;A quiet little space where fresh bread, warm pastries, and slow mornings come together.&rdquo;
            </p>

            {/* Structured Information Blocks */}
            <div className="w-full max-w-md space-y-4">
              {/* BLOCK 1: LOCATION */}
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#ebdccb]/60 flex items-center justify-center shrink-0 mt-0.5 border border-[#cbb59d]/40 text-[#8e5d32]">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bakery-sans text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8e7a68] mb-0.5">
                    THE ATELIER
                  </span>
                  <span className="font-bakery-serif text-base sm:text-[17px] text-[#221c18] font-medium leading-snug">
                    Depan Joni Jaya Kharisma, Jl. Arif Rahman Hakim No.84, Solokpandan, Kec. Cianjur, Kabupaten Cianjur, Jawa Barat 43214
                  </span>
                </div>
              </div>

              {/* Subtle Divider */}
              <div className="h-[1px] w-full bg-[#cbb59d]/30" aria-hidden="true" />

              {/* BLOCK 2: HOURS */}
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#ebdccb]/60 flex items-center justify-center shrink-0 mt-0.5 border border-[#cbb59d]/40 text-[#8e5d32]">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col w-full">
                  <span className="font-bakery-sans text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8e7a68] mb-1">
                    HOURS
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
                    <div>
                      <span className="block font-bakery-sans text-[11px] text-[#716154] font-normal">
                        Monday &mdash; Friday
                      </span>
                      <span className="font-bakery-serif text-sm sm:text-[15px] font-semibold text-[#221c18]">
                        07:00 &mdash; 18:00
                      </span>
                    </div>
                    <div>
                      <span className="block font-bakery-sans text-[11px] text-[#716154] font-normal">
                        Saturday &mdash; Sunday
                      </span>
                      <span className="font-bakery-serif text-sm sm:text-[15px] font-semibold text-[#221c18]">
                        07:00 &mdash; 20:00
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle Divider */}
              <div className="h-[1px] w-full bg-[#cbb59d]/30" aria-hidden="true" />

              {/* BLOCK 3: CONTACT */}
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#ebdccb]/60 flex items-center justify-center shrink-0 mt-0.5 border border-[#cbb59d]/40 text-[#8e5d32]">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bakery-sans text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8e7a68] mb-0.5">
                    CONTACT
                  </span>
                  <a
                    href="tel:081390868699"
                    className="font-bakery-sans text-sm sm:text-[14px] font-medium text-[#221c18] hover:text-[#8e5d32] transition-colors tracking-wide"
                  >
                    081390868699
                  </a>
                </div>
              </div>
            </div>

            {/* GET DIRECTIONS Button */}
            <div className="pt-4 sm:pt-5">
              <a
                id="btn-get-directions"
                href="https://maps.google.com/?q=Depan+Joni+Jaya+Kharisma,+Jl.+Arif+Rahman+Hakim+No.84,+Solokpandan,+Kec.+Cianjur,+Kabupaten+Cianjur,+Jawa+Barat+43214"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (onOpenDirections) {
                    e.preventDefault();
                    onOpenDirections();
                  }
                }}
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#221c18] hover:border-[#8e5d32] bg-[#221c18] text-[#f7f4ee] hover:bg-[#8e5d32] font-bakery-sans text-[11px] uppercase tracking-[0.2em] font-semibold transition-all duration-200 cursor-pointer shadow-md shadow-[#221c18]/10 active:scale-95"
              >
                <span>GET DIRECTIONS</span>
                <Navigation className="w-3.5 h-3.5 text-[#cbb59d] group-hover:text-[#f7f4ee] group-hover:translate-x-0.5 transition-all duration-200" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
