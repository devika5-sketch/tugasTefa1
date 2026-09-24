import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

import journalSlowBakingImg from '../assets/images/journal_slow_baking_1790049647135.jpg';
import journalIngredientsImg from '../assets/images/journal_ingredients_1790049661246.jpg';
import journalMorningImg from '../assets/images/journal_morning_1790049674767.jpg';

export interface JournalArticle {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  readTime: string;
}

const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'slow-baking',
    category: 'BAKING',
    title: 'The Art of Slow Baking',
    description: 'Why patience, good ingredients, and time make every loaf worth waiting for.',
    image: journalSlowBakingImg,
    readTime: '4 min read',
  },
  {
    id: 'simple-things',
    category: 'INGREDIENTS',
    title: 'Made With Simple Things',
    description: 'A closer look at the ingredients and traditions behind our everyday bakes.',
    image: journalIngredientsImg,
    readTime: '3 min read',
  },
  {
    id: 'bakery-morning',
    category: 'BAKERY LIFE',
    title: 'A Morning at the Bakery',
    description: 'From the first light of morning to the warmth of a freshly opened oven.',
    image: journalMorningImg,
    readTime: '5 min read',
  },
];

interface JournalSectionProps {
  onOpenStoryModal?: () => void;
}

export const JournalSection: React.FC<JournalSectionProps> = ({
  onOpenStoryModal,
}) => {
  return (
    <section
      id="journal-section"
      aria-label="Bakery journal and stories"
      className="relative w-full min-h-screen lg:h-screen lg:max-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#f7f4ee] paper-texture paper-grain border-t border-[#cbb396]/30 shrink-0 select-none py-12 lg:py-0"
    >
      {/* Decorative ambient background accents */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#ebdccb]/35 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-[#dfd0be]/25 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Centered Max-Width Grid Container (Consistent 1320px grid matching entire website) */}
      <div className="relative z-10 w-full max-w-[1320px] mx-auto flex flex-col justify-center items-center px-6 sm:px-10 lg:px-12">
        {/* ========================================================================= */}
        {/* SECTION HEADER: Editorial Header matching Our Bakes & Heritage             */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center mb-5 sm:mb-6 lg:mb-7 shrink-0"
        >
          {/* Small Eyebrow Label with delicate warm sand accents */}
          <div className="flex items-center gap-2.5 mb-1 sm:mb-1.5">
            <span className="w-6 h-[1px] bg-[#cbb59d] rounded-full" aria-hidden="true" />
            <span className="font-bakery-sans text-[10.5px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8e7a68]">
              THE JOURNAL
            </span>
            <span className="w-6 h-[1px] bg-[#cbb59d] rounded-full" aria-hidden="true" />
          </div>

          {/* Main Heading in Serif */}
          <h2 className="font-bakery-serif text-2xl sm:text-3xl lg:text-[2.2rem] text-[#221c18] font-normal tracking-[0.03em] uppercase leading-tight mb-1 sm:mb-1.5">
            FROM OUR OVEN
          </h2>

          {/* Short Description */}
          <p className="font-bakery-serif text-xs sm:text-[13px] text-[#6b5a4d] italic font-normal max-w-md">
            &ldquo;Stories, moments, and little rituals from our bakery.&rdquo;
          </p>
        </motion.div>

        {/* ========================================================================= */}
        {/* 3 EDITORIAL JOURNAL CARDS: 300-340px width, 400-450px height               */}
        {/* ========================================================================= */}
        <div className="w-full max-w-[1080px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 justify-center items-stretch">
          {JOURNAL_ARTICLES.map((article, index) => (
            <motion.article
              key={article.id}
              id={`journal-card-${article.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: 0.1 + index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative flex flex-col w-full max-w-[340px] mx-auto min-h-[410px] max-h-[445px] bg-[#fbf9f5] rounded-xl overflow-hidden border border-[#cbb396]/35 shadow-md shadow-[#221c18]/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#221c18]/12 hover:border-[#cbb396]/60"
            >
              {/* Card Image Area at Top: Large proportional bakery photograph */}
              <div className="relative w-full h-[180px] sm:h-[190px] overflow-hidden bg-[#241c17] shrink-0">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 select-none"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle soft gradient overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Category Tag Pill */}
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#181310]/80 backdrop-blur-md border border-[#cbb59d]/30 font-bakery-sans text-[9px] uppercase tracking-[0.2em] font-semibold text-[#f7f4ee]">
                  {article.category}
                </span>

                {/* Reading Time Stamp */}
                <span className="absolute bottom-2.5 right-3 font-bakery-sans text-[10px] text-[#e8ded1] font-medium tracking-wide drop-shadow-sm">
                  {article.readTime}
                </span>
              </div>

              {/* Card Content Area with refined typography and padding */}
              <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between bg-[#fbf9f5]">
                {/* Title & Description */}
                <div>
                  <h3 className="font-bakery-serif text-[18px] sm:text-[19px] text-[#221c18] font-semibold tracking-tight leading-snug mb-1.5 group-hover:text-[#8e5d32] transition-colors duration-200">
                    {article.title}
                  </h3>

                  <p className="font-bakery-sans text-[12px] sm:text-[12.5px] text-[#594c42] leading-[1.6] line-clamp-3">
                    {article.description}
                  </p>
                </div>

                {/* Bottom Row: Minimalist "READ STORY" Button */}
                <div className="pt-3 border-t border-[#cbb59d]/25 flex items-center justify-between mt-3">
                  <button
                    id={`btn-read-${article.id}`}
                    onClick={onOpenStoryModal}
                    type="button"
                    className="group/link inline-flex items-center gap-1.5 text-[10.5px] font-bakery-sans font-semibold uppercase tracking-[0.18em] text-[#221c18] hover:text-[#8e5d32] transition-colors duration-200 cursor-pointer"
                  >
                    <span>READ STORY</span>
                    <ArrowRight className="w-3 h-3 text-[#8e7a68] group-hover/link:text-[#8e5d32] group-hover/link:translate-x-1 transition-transform duration-200" />
                  </button>

                  <span className="font-bakery-serif text-[11.5px] text-[#a89988] italic">
                    Artisan Note
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Small subtle caption/callout below grid */}
        <div className="flex items-center justify-center mt-5 sm:mt-6 shrink-0">
          <button
            onClick={onOpenStoryModal}
            type="button"
            className="inline-flex items-center gap-1.5 text-[11px] font-bakery-sans uppercase tracking-[0.2em] text-[#8e7a68] hover:text-[#221c18] transition-colors duration-200 cursor-pointer"
          >
            <span>DISCOVER ALL JOURNAL ENTRIES &amp; RECIPES &rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
};
