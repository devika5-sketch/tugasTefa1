import React, { useState } from 'react';
import { ShoppingBag, X, Menu, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenOrder?: () => void;
  onOpenStory?: () => void;
  cartCount?: number;
  activeSection?: string;
  onSelectSection?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenOrder,
  onOpenStory,
  cartCount = 0,
  activeSection = '',
  onSelectSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToMenu = () => {
    onSelectSection?.('menu');
    document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHeritage = () => {
    onSelectSection?.('heritage');
    document.getElementById('heritage-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToJournal = () => {
    onSelectSection?.('journal');
    document.getElementById('journal-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAtelier = () => {
    onSelectSection?.('atelier');
    document.getElementById('atelier-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPrivateOrders = () => {
    onSelectSection?.('private-orders');
    document.getElementById('private-orders-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    onSelectSection?.('about');
    document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* 
        Single-Row 16:9 Desktop Navbar:
        - Perfectly aligned logo, navigation links, and cart in one clean horizontal row.
        - Sits within the centered page grid (max-w-[1320px]) with consistent px-6 sm:px-10 lg:px-12 padding.
        - Frosted glass warmth ensures 100% legibility on cream, dark wood, or scrolled sections.
        - Fixed at 68px (h-[68px]) with clean, balanced spacing and elegant typography.
      */}
      <header
        id="main-navbar"
        className="fixed top-0 inset-x-0 z-40 w-full h-[68px] flex items-center bg-[#14100e]/90 backdrop-blur-md border-b border-[#cbb59d]/20 transition-all duration-300"
      >
        <div className="w-full max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between">
          {/* Logo / Brand Mark */}
          <a
            href="#hero-section"
            className="flex items-center gap-2 font-bakery-serif text-xl sm:text-2xl font-bold tracking-[0.18em] text-[#cbb59d] hover:text-[#f7f4ee] transition-colors select-none"
          >
            BAKERY
          </a>

          {/* Center Navigation Links with Balanced, Refined Spacing */}
          <nav
            id="navbar-desktop-nav"
            aria-label="Main navigation"
            className="hidden md:flex items-center gap-6 lg:gap-7 xl:gap-8"
          >
            <button
              id="nav-link-about"
              type="button"
              onClick={scrollToAbout}
              className={`relative font-bakery-sans text-[11px] sm:text-[11.5px] uppercase tracking-[0.2em] transition-colors duration-200 whitespace-nowrap cursor-pointer py-1 ${
                activeSection === 'about'
                  ? 'text-[#cbb59d] font-bold'
                  : 'text-[#e8ded1] hover:text-[#cbb59d] font-medium'
              }`}
            >
              ABOUT
              {activeSection === 'about' && (
                <span className="absolute bottom-0 inset-x-0 h-[1.5px] bg-[#cbb59d] rounded-full" />
              )}
            </button>
            <button
              id="nav-link-heritage"
              type="button"
              onClick={scrollToHeritage}
              className={`relative font-bakery-sans text-[11px] sm:text-[11.5px] uppercase tracking-[0.2em] transition-colors duration-200 whitespace-nowrap cursor-pointer py-1 ${
                activeSection === 'heritage'
                  ? 'text-[#cbb59d] font-bold'
                  : 'text-[#e8ded1] hover:text-[#cbb59d] font-medium'
              }`}
            >
              HERITAGE
              {activeSection === 'heritage' && (
                <span className="absolute bottom-0 inset-x-0 h-[1.5px] bg-[#cbb59d] rounded-full" />
              )}
            </button>
            <button
              id="nav-link-bakes"
              type="button"
              onClick={scrollToMenu}
              className={`relative font-bakery-sans text-[11px] sm:text-[11.5px] uppercase tracking-[0.2em] transition-colors duration-200 whitespace-nowrap cursor-pointer py-1 ${
                activeSection === 'menu'
                  ? 'text-[#cbb59d] font-bold'
                  : 'text-[#e8ded1] hover:text-[#cbb59d] font-medium'
              }`}
            >
              OUR BAKES
              {activeSection === 'menu' && (
                <span className="absolute bottom-0 inset-x-0 h-[1.5px] bg-[#cbb59d] rounded-full" />
              )}
            </button>
            <button
              id="nav-link-journal"
              type="button"
              onClick={scrollToJournal}
              className={`relative font-bakery-sans text-[11px] sm:text-[11.5px] uppercase tracking-[0.2em] transition-colors duration-200 whitespace-nowrap cursor-pointer py-1 ${
                activeSection === 'journal'
                  ? 'text-[#cbb59d] font-bold'
                  : 'text-[#e8ded1] hover:text-[#cbb59d] font-medium'
              }`}
            >
              JOURNAL
              {activeSection === 'journal' && (
                <span className="absolute bottom-0 inset-x-0 h-[1.5px] bg-[#cbb59d] rounded-full" />
              )}
            </button>
            <button
              id="nav-link-atelier"
              type="button"
              onClick={scrollToAtelier}
              className={`relative font-bakery-sans text-[11px] sm:text-[11.5px] uppercase tracking-[0.2em] transition-colors duration-200 whitespace-nowrap cursor-pointer py-1 ${
                activeSection === 'atelier'
                  ? 'text-[#cbb59d] font-bold'
                  : 'text-[#e8ded1] hover:text-[#cbb59d] font-medium'
              }`}
            >
              ATELIER &amp; HOURS
              {activeSection === 'atelier' && (
                <span className="absolute bottom-0 inset-x-0 h-[1.5px] bg-[#cbb59d] rounded-full" />
              )}
            </button>
            <button
              id="nav-link-private-orders"
              type="button"
              onClick={scrollToPrivateOrders}
              className={`relative font-bakery-sans text-[11px] sm:text-[11.5px] uppercase tracking-[0.2em] transition-colors duration-200 whitespace-nowrap cursor-pointer py-1 ${
                activeSection === 'private-orders'
                  ? 'text-[#cbb59d] font-bold'
                  : 'text-[#e8ded1] hover:text-[#cbb59d] font-medium'
              }`}
            >
              PRIVATE ORDERS
              {activeSection === 'private-orders' && (
                <span className="absolute bottom-0 inset-x-0 h-[1.5px] bg-[#cbb59d] rounded-full" />
              )}
            </button>
          </nav>

          {/* Right Action Group: ORDER ONLINE Button + Cart Icon */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              id="btn-navbar-order-online"
              onClick={onOpenOrder}
              type="button"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#cbb59d]/70 hover:border-[#cbb59d] hover:bg-[#cbb59d] text-[#e8ded1] hover:text-[#120f0d] font-bakery-sans text-[10.5px] sm:text-[11px] uppercase tracking-[0.18em] font-semibold transition-all duration-200 active:scale-95 shadow-sm whitespace-nowrap cursor-pointer"
            >
              <span>ORDER ONLINE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Cart Icon with badge */}
            <button
              id="btn-navbar-cart"
              onClick={onOpenOrder}
              type="button"
              aria-label="View shopping bag"
              className="relative p-2 text-[#e8ded1] hover:text-[#cbb59d] transition-colors duration-200 active:scale-95 cursor-pointer"
            >
              <ShoppingBag className="w-4.5 h-4.5" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-0 w-4 h-4 rounded-full bg-[#cbb59d] text-[#120f0d] text-[9.5px] font-bold flex items-center justify-center font-bakery-sans shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Menu Button */}
            <button
              id="btn-mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(true)}
              type="button"
              aria-label="Open mobile menu"
              className="md:hidden p-2 text-[#e8ded1] hover:text-[#cbb59d] transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Clean Mobile Fullscreen Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-overlay"
          className="fixed inset-0 z-50 bg-[#120f0d]/98 backdrop-blur-2xl flex flex-col justify-between p-8 sm:p-12 animate-in fade-in duration-200 text-[#f7f4ee]"
        >
          {/* Top Bar of Mobile Menu */}
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="font-bakery-serif text-2xl tracking-[0.1em] text-[#cbb59d] font-bold">
                BAKERY
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#9c8976] uppercase font-bakery-sans">
                Artisanal &bull; Est. 1928
              </span>
            </div>
            <button
              id="btn-close-mobile-menu"
              onClick={() => setMobileMenuOpen(false)}
              type="button"
              aria-label="Close navigation"
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-[#e8ded1] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links in Mobile Drawer */}
          <nav className="flex flex-col gap-5 my-auto">
            {[
              { label: 'ABOUT', action: () => { setMobileMenuOpen(false); scrollToAbout(); } },
              { label: 'HERITAGE', action: () => { setMobileMenuOpen(false); scrollToHeritage(); } },
              { label: 'OUR BAKES', action: () => { setMobileMenuOpen(false); scrollToMenu(); } },
              { label: 'JOURNAL', action: () => { setMobileMenuOpen(false); scrollToJournal(); } },
              { label: 'ATELIER & HOURS', action: () => { setMobileMenuOpen(false); scrollToAtelier(); } },
              { label: 'PRIVATE ORDERS', action: () => { setMobileMenuOpen(false); scrollToPrivateOrders(); } },
              { label: 'ORDER ONLINE', action: () => { setMobileMenuOpen(false); onOpenOrder?.(); } },
            ].map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={item.action}
                className="text-left font-bakery-serif text-2xl sm:text-3xl text-[#e8ded1] hover:text-[#cbb59d] transition-colors flex items-center justify-between group py-1"
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#cbb59d]" />
              </button>
            ))}
          </nav>

          {/* Bottom Footer Info in Mobile Drawer */}
          <div className="flex flex-col gap-4 border-t border-white/10 pt-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrder?.();
              }}
              type="button"
              className="w-full py-3.5 rounded-full bg-[#cbb59d] hover:bg-[#d9c5af] text-[#120f0d] font-bakery-sans text-xs uppercase tracking-[0.2em] font-semibold text-center transition-all shadow-lg"
            >
              Open Order Menu
            </button>
            <p className="text-center text-[11px] text-[#8e7e6e] font-bakery-sans tracking-wider">
              Open Daily: 07:00 AM &ndash; 08:00 PM &bull; 42 Rue de la Boulangerie
            </p>
          </div>
        </div>
      )}
    </>
  );
};
