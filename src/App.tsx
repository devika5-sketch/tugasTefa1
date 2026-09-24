import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Navbar } from './components/Navbar';
import { OrderModal } from './components/OrderModal';
import { MenuSection, ProductItem } from './components/MenuSection';
import { JournalSection } from './components/JournalSection';
import { AtelierSection } from './components/AtelierSection';
import { PrivateOrdersSection } from './components/PrivateOrdersSection';
import { AboutSection } from './components/AboutSection';
import { HeritageSection } from './components/HeritageSection';
import { StoryModal } from './components/StoryModal';
import { FinalClosingSection } from './components/FinalClosingSection';
import cinnamonToastImg from './assets/images/cinnamon_toast_food.jpg';

export default function App() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [cartCount, setCartCount] = useState(1);
  const [activeSection, setActiveSection] = useState<'hero' | 'about' | 'heritage' | 'menu' | 'journal' | 'atelier' | 'private-orders'>('hero');

  // Subtle parallax effect on scroll
  const { scrollY } = useScroll({
    container: containerRef,
  });
  const yText = useTransform(scrollY, [0, 600], [0, -35]);
  const yFood = useTransform(scrollY, [0, 600], [0, 25]);

  // Autoplay video silently on mount
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Safe fallback for strict browser autoplay policies
      });
    }
  }, []);

  // Track active section for the Navbar highlight based on the page sequence
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const checkActive = () => {
      const scrollPos = container.scrollTop;
      const height = container.clientHeight;

      const heroEl = document.getElementById('hero-section');
      const aboutEl = document.getElementById('about-section');
      const heritageEl = document.getElementById('heritage-section');
      const menuEl = document.getElementById('menu-section');
      const journalEl = document.getElementById('journal-section');
      const atelierEl = document.getElementById('atelier-section');
      const privateOrdersEl = document.getElementById('private-orders-section');

      if (privateOrdersEl && scrollPos >= privateOrdersEl.offsetTop - height * 0.4) {
        setActiveSection('private-orders');
      } else if (atelierEl && scrollPos >= atelierEl.offsetTop - height * 0.4) {
        setActiveSection('atelier');
      } else if (journalEl && scrollPos >= journalEl.offsetTop - height * 0.4) {
        setActiveSection('journal');
      } else if (menuEl && scrollPos >= menuEl.offsetTop - height * 0.4) {
        setActiveSection('menu');
      } else if (heritageEl && scrollPos >= heritageEl.offsetTop - height * 0.4) {
        setActiveSection('heritage');
      } else if (aboutEl && scrollPos >= aboutEl.offsetTop - height * 0.4) {
        setActiveSection('about');
      } else {
        setActiveSection('hero');
      }
    };

    container.addEventListener('scroll', checkActive, { passive: true });
    checkActive();

    return () => {
      container.removeEventListener('scroll', checkActive);
    };
  }, []);

  const handleAddToCart = (product: ProductItem) => {
    setCartCount((prev) => prev + 1);
  };

  const toggleSound = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);

    if (!nextMuted && videoRef.current.paused) {
      videoRef.current.play();
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen min-h-screen overflow-x-hidden overflow-y-auto scroll-smooth bg-[#120f0d] flex flex-col"
    >
      {/* 
        Single-Row 16:9 Fixed Navbar:
        - Sits within the centered page grid (max-w-[1320px]) with px-6 sm:px-10 lg:px-12 horizontal padding
        - Equal spacing, vertically centered items, no layout interference
      */}
      <Navbar
        onOpenOrder={() => setIsOrderOpen(true)}
        onOpenStory={() => setIsStoryOpen(true)}
        cartCount={cartCount}
        activeSection={activeSection}
        onSelectSection={(sec) => setActiveSection(sec as 'hero' | 'about' | 'heritage' | 'menu' | 'journal' | 'atelier' | 'private-orders')}
      />

      {/* 
        Hero Section:
        - Exactly 100vh height on 16:9 desktop screen (1920x1080)
        - Clean 50/50 split composition aligned to the centered max-width grid (max-w-[1320px])
        - Left: BAKERY title & subtitle completely visible and vertically centered
        - Right: Food composition naturally framed with object-contain (never over-zoomed)
        - No horizontal scroll, perfectly balanced spacing
      */}
      <main
        id="hero-section"
        className="relative w-full h-screen min-h-[640px] md:h-screen md:max-h-screen flex flex-col md:flex-row overflow-hidden shrink-0"
      >
        {/* Full-bleed 50/50 Background Split */}
        <div
          aria-hidden="true"
          className="absolute inset-0 w-full h-full flex flex-col md:flex-row pointer-events-none z-0"
        >
          <div className="w-full md:w-1/2 h-1/2 md:h-full paper-texture paper-grain border-b md:border-b-0 md:border-r border-[#cbb396]/30" />
          <div className="w-full md:w-1/2 h-1/2 md:h-full bg-[#120f0d]" />
        </div>

        {/* Centered Max-Width Content Grid (16:9 Desktop Alignment: 1320px) */}
        <div className="relative z-10 w-full max-w-[1320px] mx-auto h-full flex flex-col md:flex-row pt-16 md:pt-0 px-6 sm:px-10 lg:px-12">
          {/* ========================================================================= */}
          {/* LEFT HALF (50% Desktop): Artisanal Cream Typography Area                  */}
          {/* ========================================================================= */}
          <section
            id="hero-text-area"
            aria-label="Bakery introduction"
            className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center pr-2 sm:pr-6 md:pr-8 lg:pr-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              style={{ y: yText }}
              className="w-full max-w-md lg:max-w-lg flex flex-col items-start justify-center"
            >
              {/* Brand Title: Responsive clamp font size, never cropped (1.25x enlarged) */}
              <h1
                id="hero-brand-title"
                className="font-bakery-serif text-[#cbb59d] font-medium tracking-[0.06em] uppercase leading-[0.94] select-none text-[clamp(3.5rem,5.6vw,5.6rem)]"
                style={{
                  textShadow: '0 1px 2px rgba(203, 181, 157, 0.2)',
                }}
              >
                BAKERY
              </h1>

              {/* Tagline: Balanced vertical spacing with clean line-height */}
              <p
                id="hero-brand-tagline"
                className="font-bakery-sans text-[#1c1714] font-normal leading-[1.24] tracking-[-0.015em] text-[clamp(1.52rem,2.5vw,2.55rem)] mt-3 sm:mt-4 md:mt-5"
              >
                Freshly baked,
                <br />
                made with love.
              </p>
            </motion.div>
          </section>

          {/* ========================================================================= */}
          {/* RIGHT HALF (50% Desktop): Cinnamon Toast Food Composition                 */}
          {/* ========================================================================= */}
          <section
            id="hero-food-area"
            aria-label="Bakery cinnamon toast feature"
            className="relative w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center pl-2 sm:pl-6 md:pl-8 lg:pl-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              style={{ y: yFood }}
              className="relative w-full h-full flex items-center justify-center"
            >
              {/* 
                Cinnamon Toast Composition:
                - Natural framing with object-contain (never excessively zoomed)
                - Whipped cream, cinnamon spiral, maple syrup drizzle, and fork remain fully visible
              */}
              <video
                id="hero-cinnamon-toast-video"
                ref={videoRef}
                src="/assets/toast_food_loop.mp4"
                poster={cinnamonToastImg}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                preload="auto"
                className="w-auto h-auto max-h-[54vh] md:max-h-[66vh] max-w-full object-contain drop-shadow-2xl transition-transform duration-500 select-none pointer-events-none"
              />

              {/* Subtle soft dark vignette overlay */}
              <div
                className="absolute inset-0 pointer-events-none shadow-[inset_0_0_70px_rgba(0,0,0,0.35)]"
                aria-hidden="true"
              />
            </motion.div>

            {/* Minimalist Sound Toggle Control */}
            <button
              id="btn-sound-toggle"
              onClick={toggleSound}
              type="button"
              className="absolute bottom-6 right-2 sm:right-6 lg:bottom-8 lg:right-6 z-20 w-9 h-9 rounded-full bg-[#1a1614]/80 hover:bg-[#1a1614] text-[#e8ded1] hover:text-white backdrop-blur-sm border border-[#cbb396]/25 flex items-center justify-center transition-all duration-200 active:scale-95 shadow-lg shadow-black/40 cursor-pointer"
              title={isMuted ? 'Turn ambient bakery sound on' : 'Mute sound'}
              aria-label={isMuted ? 'Turn ambient bakery sound on' : 'Mute sound'}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-[#cbb59d]" />
              ) : (
                <Volume2 className="w-4 h-4 text-[#cbb59d]" />
              )}
            </button>
          </section>
        </div>
      </main>
      
      {/* 
        SLIDE 2: ABOUT SECTION
        - Directly below the homepage hero section
        - Full-screen 100vh editorial-style section with a smooth scroll transition
        - Split layout: Left side large elegant bakery photo, Right side editorial story text
        - Same warm cream, beige, brown, and dark chocolate palette
      */}
      <AboutSection
        onOpenStoryModal={() => setIsStoryOpen(true)}
      />

      {/* 
        SLIDE 3: OUR HERITAGE (16:9 Desktop Fullscreen Spread)
        - Full-screen 100vh editorial section on 1920x1080 16:9 display
        - 45% left: Large vintage artisan bakery photograph with subtle rounded corners
        - 55% right: Heritage story ("Baked with Tradition") and staggered 3-part timeline (1998, 2008, Today)
        - Warm cream background, dark brown typography, thin decorative lines
      */}
      <HeritageSection
        onOpenStoryModal={() => setIsStoryOpen(true)}
      />

      {/* 
        SLIDE 4: OUR BAKES / MENU (16:9 Desktop Fullscreen Spread)
        - Full-screen 100vh menu section on 1920x1080 16:9 display
        - Clean editorial product grid featuring 4 bakery creations:
          1. Cinnamon Toast (Rp 28.000)
          2. Artisan Sourdough (Rp 35.000)
          3. Butter Croissant (Rp 25.000)
          4. Seeded Bread (Rp 30.000)
        - Clean cream cards, subtle rounded corners, large product images, elegant typography, minimalist buttons
      */}
      <MenuSection
        onAddToCart={handleAddToCart}
        onOpenOrderModal={() => setIsOrderOpen(true)}
      />

      {/* 
        SLIDE 5: JOURNAL (16:9 Desktop Fullscreen Spread)
        - Full-screen 100vh editorial bakery journal section on 1920x1080 16:9 display
        - Header: "THE JOURNAL" eyebrow, "FROM OUR OVEN" serif title, "Stories, moments, and little rituals from our bakery."
        - 3 compact editorial cards:
          1. "The Art of Slow Baking" (BAKING)
          2. "Made With Simple Things" (INGREDIENTS)
          3. "A Morning at the Bakery" (BAKERY LIFE)
        - Matching warm cream/beige palette, dark brown typography, smooth reveal animations
      */}
      <JournalSection
        onOpenStoryModal={() => setIsStoryOpen(true)}
      />

      {/* 
        SLIDE 6: ATELIER & HOURS (16:9 Desktop Fullscreen Spread)
        - Full-screen 100vh editorial bakery atelier section on 1920x1080 16:9 display
        - 50% left: Large atmospheric bakery interior photo with soft morning sunlight
        - 50% right: Clean editorial typography with Location ("Depan Joni Jaya Kharisma, Jl. Arif Rahman Hakim No.84, Solokpandan, Kec. Cianjur, Kabupaten Cianjur, Jawa Barat 43214"),
          Hours ("07:00 — 18:00" weekdays, "07:00 — 20:00" weekends), Contact, and "GET DIRECTIONS" button
      */}
      <AtelierSection />

      {/* 
        SLIDE 7: PRIVATE ORDERS (16:9 Desktop Fullscreen Spread)
        - Full-screen 100vh editorial private orders section on 1920x1080 16:9 display
        - 50% left: Curated pastry table spread photo for celebrations and events
        - 50% right: Header ("MADE FOR YOUR MOMENTS"), 3 service items (Celebrations, Events & Gatherings, Corporate Orders),
          "MAKE AN INQUIRY" button, and subtle subtext
      */}
      <PrivateOrdersSection
        onOpenInquiry={() => setIsOrderOpen(true)}
      />

      {/* 
        SLIDE 8: FINAL CINEMATIC ENDING SECTION & MINIMAL FOOTER (16:9 Desktop Fullscreen Spread)
        - Full-screen 100vh section on 1920x1080 16:9 display
        - Background: Atmospheric artisanal bakery interior near twilight with warm amber glow
        - Eyebrow: "UNTIL WE BAKE AGAIN"
        - Heading: "COME BACK FOR SOMETHING WARM"
        - Short description: "Freshly baked, thoughtfully made, and always waiting to be shared."
        - Primary button: "ORDER ONLINE"
        - Secondary link: "VISIT OUR ATELIER"
        - Bottom area: Minimal footer with "BAKERY" • "BAKED WITH PATIENCE. SHARED WITH HEART." and copyright
      */}
      <FinalClosingSection
        onOpenOrder={() => setIsOrderOpen(true)}
      />

      {/* Story & Heritage Modal */}
      <StoryModal
        isOpen={isStoryOpen}
        onClose={() => setIsStoryOpen(false)}
        onOpenOrder={() => {
          setIsStoryOpen(false);
          setIsOrderOpen(true);
        }}
      />

      {/* Interactive Order & Menu Modal */}
      <OrderModal
        isOpen={isOrderOpen}
        onClose={() => setIsOrderOpen(false)}
        onUpdateCartCount={setCartCount}
      />
    </div>
  );
}
