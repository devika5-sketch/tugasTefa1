import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import bakeryStoryImg from '../assets/images/artisan_bakery_story_1789976102951.jpg';

interface AboutSectionProps {
  onOpenStoryModal?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenStoryModal }) => {
  const sectionRef = useRef<HTMLElement | null>(null);

  // Parallax tracking specifically for this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Slow, cinematic parallax shifts
  const imageY = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1.02, 1]);

  return (
    <section
      id="about-section"
      ref={sectionRef}
      className="relative w-full min-h-screen md:h-screen md:max-h-screen flex flex-col md:flex-row overflow-hidden bg-[#120f0d] border-t border-[#cbb396]/25 shrink-0"
    >
      {/* Full-bleed 45/55 Background Split for 16:9 Viewport */}
      <div
        aria-hidden="true"
        className="absolute inset-0 w-full h-full flex flex-col md:flex-row pointer-events-none z-0"
      >
        <div className="w-full md:w-[45%] h-[46vh] md:h-full bg-[#15110f]" />
        <div className="w-full md:w-[55%] h-[54vh] md:h-full bg-[#f7f4ee] paper-texture paper-grain border-t md:border-t-0 md:border-l border-[#cbb396]/30" />
      </div>

      {/* Centered Max-Width Grid Alignment (Consistent 1320px grid matching Navbar, Hero & Menu) */}
      <div className="relative z-10 w-full max-w-[1320px] mx-auto h-full flex flex-col md:flex-row items-center px-6 sm:px-10 lg:px-12">
        {/* ========================================================================= */}
        {/* LEFT SIDE (45% Desktop): Large Elegant Bakery Photo                        */}
        {/* ========================================================================= */}
        <div className="relative w-full md:w-[45%] h-[44vh] md:h-full flex items-center justify-center pr-0 md:pr-6 lg:pr-10 py-6 md:py-0 overflow-hidden order-1 md:order-1 shrink-0">
          {/* Subtle warm background glow */}
          <div
            className="absolute inset-0 bg-radial from-[#2a221c]/40 via-transparent to-transparent pointer-events-none"
            aria-hidden="true"
          />

          {/* Animated photo container sliding gently from the left */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: imageY }}
            className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg flex items-center justify-center"
          >
            <div className="relative w-full aspect-[4/3] max-h-[50vh] lg:max-h-[56vh] rounded-xl overflow-hidden shadow-2xl shadow-black/80 border border-[#cbb396]/30 group">
              {/* Parallax scaled image */}
              <motion.img
                style={{ scale: imageScale }}
                src={bakeryStoryImg}
                alt="Artisan baker crafting slow-fermented sourdough bread on dark wooden flour-dusted counter"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Editorial dark vignette overlay for depth */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"
                aria-hidden="true"
              />

              {/* Minimalist artisan stamp caption in corner */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-10 flex flex-col">
                <span className="font-bakery-sans text-[9.5px] sm:text-[10px] tracking-[0.22em] text-[#cbb59d] uppercase font-semibold">
                  Slow Fermentation &bull; 36 Hours
                </span>
                <span className="font-bakery-serif text-xs sm:text-sm text-[#f7f4ee] font-medium tracking-wide">
                  Natural Stoneground Grains
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* RIGHT SIDE (55% Desktop): Editorial Text Content with Generous Whitespace  */}
        {/* ========================================================================= */}
        <div className="relative w-full md:w-[55%] min-h-[48vh] md:h-full flex flex-col justify-center pl-0 md:pl-6 lg:pl-10 py-8 md:py-0 order-2 md:order-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.0, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-lg lg:max-w-xl flex flex-col items-start"
          >
            {/* Decorative Warm Sand Accent Line */}
            <div
              className="w-8 h-[1.5px] bg-[#cbb59d] rounded-full mb-3 sm:mb-3.5"
              aria-hidden="true"
            />

            {/* Section Eyebrow Title */}
            <span className="font-bakery-sans text-[10.5px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8e7a68] mb-2 sm:mb-2.5">
              ABOUT OUR BAKERY
            </span>

            {/* Editorial Quote Heading */}
            <h2 className="font-bakery-serif text-2xl sm:text-3xl lg:text-[2.5rem] text-[#221c18] font-normal italic tracking-[-0.01em] leading-[1.2] mb-3 sm:mb-4">
              &ldquo;Made slowly, shared warmly.&rdquo;
            </h2>

            {/* Body Paragraphs with Constrained Width for Readability */}
            <div className="font-bakery-sans text-[#4a4038] text-[13px] sm:text-[14px] leading-[1.65] space-y-2 max-w-lg mb-5 sm:mb-6">
              <p className="font-semibold text-[#2a221d]">
                We believe great bread takes time.
              </p>
              <p className="text-[#594c42] font-normal">
                Our bakery brings together traditional baking techniques, carefully
                selected ingredients, and a love for creating simple moments worth
                remembering.
              </p>
            </div>

            {/* Small Editorial Call-to-Action Button */}
            <button
              id="btn-discover-story"
              onClick={onOpenStoryModal}
              type="button"
              className="group inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-[#221c18]/35 hover:border-[#221c18] hover:bg-[#221c18] text-[#221c18] hover:text-[#f7f4ee] font-bakery-sans text-[10.5px] sm:text-[11px] uppercase tracking-[0.18em] font-semibold transition-all duration-200 active:scale-95 shadow-sm cursor-pointer"
            >
              <span>DISCOVER OUR STORY</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#8e7a68] group-hover:text-[#cbb59d] transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
