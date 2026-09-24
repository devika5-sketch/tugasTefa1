import React from 'react';
import { X, Clock, Heart, Award, Sparkles } from 'lucide-react';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenOrder?: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({
  isOpen,
  onClose,
  onOpenOrder,
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="story-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="story-modal-dialog"
        className="relative w-full max-w-2xl bg-[#1a1614] border border-[#cbb59d]/40 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-black/90 text-[#f7f4ee] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="btn-close-story-modal"
          onClick={onClose}
          type="button"
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-[#e8ded1] flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="flex flex-col items-start mb-6">
          <div className="w-10 h-[2px] bg-[#cbb59d] mb-4" />
          <span className="text-[11px] uppercase tracking-[0.25em] font-bakery-sans text-[#cbb59d] font-semibold">
            OUR HERITAGE &bull; EST. 1928
          </span>
          <h2 className="font-bakery-serif text-3xl sm:text-4xl text-[#f7f4ee] font-normal italic mt-2">
            The Art of Patient Baking
          </h2>
        </div>

        {/* Story Paragraphs */}
        <div className="space-y-4 text-sm sm:text-base font-bakery-sans text-[#cfc2b4] leading-relaxed mb-8">
          <p>
            Nearly a century ago, our sourdough starter was cultivated with mountain
            spring water and unbleached grain. Through four generations of artisan
            bakers, that living heritage sourdough has been gently fed every single
            morning.
          </p>
          <p>
            We don’t believe in commercial yeast shortcuts or artificial improvers.
            Every brioche, French toast loaf, and rustic boule is hand-laminated with
            churned French pasture butter and slow-proofed over 36 hours for depth of
            flavor and effortless digestibility.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 pt-4 border-t border-[#cbb59d]/20">
          <div className="p-4 rounded-2xl bg-[#221c18] border border-[#cbb396]/15 flex flex-col gap-2">
            <Clock className="w-5 h-5 text-[#cbb59d]" />
            <h3 className="font-bakery-serif text-base font-semibold text-[#f7f4ee]">
              36-Hour Proof
            </h3>
            <p className="text-xs text-[#a89988] leading-normal font-bakery-sans">
              Slow cool fermentation developing complex lactic sweetness.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#221c18] border border-[#cbb396]/15 flex flex-col gap-2">
            <Heart className="w-5 h-5 text-[#cbb59d]" />
            <h3 className="font-bakery-serif text-base font-semibold text-[#f7f4ee]">
              Pure Pasture Butter
            </h3>
            <p className="text-xs text-[#a89988] leading-normal font-bakery-sans">
              84% butterfat French churned butter for golden flaky lamination.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#221c18] border border-[#cbb396]/15 flex flex-col gap-2">
            <Award className="w-5 h-5 text-[#cbb59d]" />
            <h3 className="font-bakery-serif text-base font-semibold text-[#f7f4ee]">
              Single-Estate Grain
            </h3>
            <p className="text-xs text-[#a89988] leading-normal font-bakery-sans">
              Stoneground heirloom grains maintaining the whole nutrient germ.
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenOrder?.();
            }}
            type="button"
            className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#cbb59d] hover:bg-[#d9c5af] text-[#120f0d] font-bakery-sans text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-md active:scale-98"
          >
            Explore Today&apos;s Bakes
          </button>
          <button
            onClick={onClose}
            type="button"
            className="w-full sm:w-auto px-6 py-3 rounded-full border border-white/20 text-[#e8ded1] hover:text-white hover:bg-white/10 font-bakery-sans text-xs uppercase tracking-[0.18em] transition-all"
          >
            Close Story
          </button>
        </div>
      </div>
    </div>
  );
};
