import React, { useState } from 'react';
import { Menu, X, Compass, MapPin, BookOpen, Info, Search, Sparkles, Building2, Scale, Users, Mail, Heart, ChevronDown, ArrowRight, ShieldCheck, Layers, Award } from 'lucide-react';
import { DpiitDropdownMenu } from './DpiitDropdownMenu';

interface NavbarProps {
  currentView: string;
  onNavigate: (
    view: string,
    params?: { stateId?: string; productId?: string; storyId?: string; category?: string; section?: string; tab?: 'odop' | 'gi' }
  ) => void;
  onOpenODOPInfo?: () => void;
  onOpenSearch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenODOPInfo,
  onOpenSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutSubmenuOpen, setAboutSubmenuOpen] = useState(true);
  const [desktopAboutDropdown, setDesktopAboutDropdown] = useState(false);

  const handleNavClick = (
    view: string,
    params?: { stateId?: string; productId?: string; storyId?: string; category?: string; section?: string }
  ) => {
    onNavigate(view, params);
    setMobileMenuOpen(false);
    setDesktopAboutDropdown(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EAE3D6] transition-all">
      {/* Top Notification Bar */}
      <div className="bg-[#2C241E] text-[#EFEAE1] px-4 py-1.5 text-xs text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C45A34]" />
        <span>India’s Living Heritage Discovery Platform — Celebrating ODOP &amp; GI Artisans</span>
        <button
          onClick={onOpenODOPInfo}
          className="underline hover:text-[#C45A34] transition-colors ml-2 hidden sm:inline"
        >
          Learn about ODOP &amp; GI tags
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Tagline */}
          <div
            id="brand-logo"
            onClick={() => handleNavClick('home')}
            className="cursor-pointer flex items-center gap-2.5 sm:gap-3.5 group"
          >
            {/* Visual Emblem */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#2C241E] text-[#FAF8F5] flex items-center justify-center border border-[#A87C38]/40 shadow-sm group-hover:scale-105 transition-transform shrink-0">
              <span className="font-serif text-base sm:text-lg font-bold tracking-tighter text-[#EFE4D8]">O</span>
              <span className="font-serif text-xs italic text-[#C45A34] -ml-0.5">H</span>
            </div>

            <div className="flex items-center gap-2 sm:gap-2.5 flex-nowrap">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#2C241E] whitespace-nowrap">
                ODOP Hub
              </span>
              <span className="text-[#B5A492] font-light text-xs sm:text-sm select-none" aria-hidden="true">
                &bull;
              </span>
              <span className="text-[10px] sm:text-xs font-medium tracking-wider sm:tracking-widest uppercase text-[#8C7662] whitespace-nowrap">
                Discover the Heritage of India
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1">
            <button
              id="nav-home"
              onClick={() => handleNavClick('home')}
              className={`px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                currentView === 'home'
                  ? 'text-[#B8502E] bg-[#F4EDE2]'
                  : 'text-[#4A3E34] hover:text-[#2C241E] hover:bg-[#F4EDE2]/60'
              }`}
            >
              Home
            </button>

            <button
              id="nav-explore"
              onClick={() => handleNavClick('explore')}
              className={`px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                currentView === 'explore'
                  ? 'text-[#B8502E] bg-[#F4EDE2]'
                  : 'text-[#4A3E34] hover:text-[#2C241E] hover:bg-[#F4EDE2]/60'
              }`}
            >
              Explore
            </button>

            <button
              id="nav-states"
              onClick={() => handleNavClick('states')}
              className={`px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                currentView === 'states' || currentView === 'state-detail'
                  ? 'text-[#B8502E] bg-[#F4EDE2]'
                  : 'text-[#4A3E34] hover:text-[#2C241E] hover:bg-[#F4EDE2]/60'
              }`}
            >
              States
            </button>

            <button
              id="nav-odop"
              onClick={() => handleNavClick('odop')}
              className={`px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                currentView === 'odop'
                  ? 'text-[#B8502E] bg-[#F4EDE2]'
                  : 'text-[#4A3E34] hover:text-[#2C241E] hover:bg-[#F4EDE2]/60'
              }`}
            >
              ODOP Products
            </button>

            <button
              id="nav-gi"
              onClick={() => handleNavClick('gi')}
              className={`px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                currentView === 'gi'
                  ? 'text-[#246243] bg-[#E5EFE8]'
                  : 'text-[#4A3E34] hover:text-[#246243] hover:bg-[#F4EDE2]/60'
              }`}
            >
              GI Products
            </button>

            <button
              id="nav-stories"
              onClick={() => handleNavClick('stories')}
              className={`px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                currentView === 'stories' || currentView === 'story-detail'
                  ? 'text-[#B8502E] bg-[#F4EDE2]'
                  : 'text-[#4A3E34] hover:text-[#2C241E] hover:bg-[#F4EDE2]/60'
              }`}
            >
              Stories of the Art
            </button>

            <button
              id="nav-makers"
              onClick={() => handleNavClick('artisans')}
              className={`px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                currentView === 'artisans'
                  ? 'text-[#B8502E] bg-[#F4EDE2]'
                  : 'text-[#4A3E34] hover:text-[#2C241E] hover:bg-[#F4EDE2]/60'
              }`}
            >
              Meet the Makers
            </button>

            {/* Desktop "About ODOP Hub" with Dropdown Sub-menu */}
            <div
              className="relative"
              onMouseEnter={() => setDesktopAboutDropdown(true)}
              onMouseLeave={() => setDesktopAboutDropdown(false)}
            >
              <button
                id="nav-about"
                onClick={() => handleNavClick('about')}
                className={`px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors inline-flex items-center gap-1 ${
                  currentView === 'about'
                    ? 'text-[#B8502E] bg-[#F4EDE2]'
                    : 'text-[#4A3E34] hover:text-[#2C241E] hover:bg-[#F4EDE2]/60'
                }`}
              >
                <span>About ODOP Hub</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>

              {/* Dropdown Menu */}
              {desktopAboutDropdown && (
                <div className="absolute left-0 top-full mt-1 w-64 rounded-xl bg-white border border-[#E5DFD3] shadow-lg py-2 z-50 animate-in fade-in-50 duration-150">
                  <button
                    onClick={() => handleNavClick('about')}
                    className="w-full text-left px-4 py-2.5 text-xs font-semibold text-[#2C241E] hover:bg-[#FAF6F0] flex items-center justify-between"
                  >
                    <span>About ODOP Hub Overview</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#B8502E]" />
                  </button>
                  <div className="my-1 border-t border-[#F0EAE1]" />
                  <button
                    onClick={() => handleNavClick('about', { section: 'why-we-exist' })}
                    className="w-full text-left px-4 py-2 text-xs text-[#5C4C3E] hover:text-[#B8502E] hover:bg-[#FAF6F0] flex items-center gap-2"
                  >
                    <Heart className="w-3.5 h-3.5 text-[#B8502E]" />
                    <span>Why We Exist</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('about', { section: 'people-behind' })}
                    className="w-full text-left px-4 py-2 text-xs text-[#5C4C3E] hover:text-[#B8502E] hover:bg-[#FAF6F0] flex items-center gap-2"
                  >
                    <Users className="w-3.5 h-3.5 text-[#8C6A33]" />
                    <span>People Behind ODOP Hub</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('about', { section: 'lets-connect' })}
                    className="w-full text-left px-4 py-2 text-xs text-[#5C4C3E] hover:text-[#B8502E] hover:bg-[#FAF6F0] flex items-center gap-2"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#246243]" />
                    <span>Let’s Connect</span>
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* Action CTAs: Search, DPIIT ODOP Directory Dropdown & Explore */}
          <div className="hidden lg:flex items-center gap-2.5">
            {onOpenSearch && (
              <button
                id="header-search-btn"
                onClick={onOpenSearch}
                className="p-2.5 rounded-lg border border-[#E2D8C9] hover:bg-[#F3EDE3] text-[#5C4D3F] hover:text-[#2C241E] transition-colors flex items-center gap-2 text-xs font-medium"
                title="Search crafts, states, artisans..."
              >
                <Search className="w-4 h-4 text-[#8C7662]" />
                <span className="hidden xl:inline text-[#7A6755]">Search...</span>
              </button>
            )}

            {/* DPIIT ODOP & GI Directory Dropdown (Right Corner Button) */}
            <DpiitDropdownMenu onNavigate={handleNavClick} />

            <button
              id="header-explore-heritage-btn"
              onClick={() => handleNavClick('explore')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#B8502E] text-white font-medium text-xs sm:text-sm tracking-wide shadow-sm hover:bg-[#A14120] active:scale-[0.99] transition-all"
            >
              <Compass className="w-4 h-4" />
              <span>Explore Heritage</span>
            </button>
          </div>

          {/* Mobile Header Controls: DPIIT Dropdown + Search + Clear Three-line Hamburger button */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2">
            <DpiitDropdownMenu onNavigate={handleNavClick} />

            {onOpenSearch && (
              <button
                id="mobile-search-btn"
                onClick={onOpenSearch}
                className="p-2 rounded-lg text-[#4A3E34] hover:text-[#2C241E] hover:bg-[#EFE7DC] transition-colors"
                aria-label="Search crafts and states"
              >
                <Search className="w-5 h-5 text-[#6B5A4B]" />
              </button>
            )}

            {/* Clear Three-line Hamburger menu button (☰) */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg border border-[#DECFC0] bg-[#F7F2EB] text-[#2C241E] hover:bg-[#EFE5D8] focus:outline-none focus:ring-2 focus:ring-[#B8502E] transition-all flex items-center justify-center"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu (☰)'}
              title="Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#2C241E]" />
              ) : (
                <div className="w-6 h-5 flex flex-col justify-between items-center py-0.5" aria-hidden="true">
                  <span className="w-5 h-0.5 bg-[#2C241E] rounded-full transition-all" />
                  <span className="w-5 h-0.5 bg-[#2C241E] rounded-full transition-all" />
                  <span className="w-5 h-0.5 bg-[#2C241E] rounded-full transition-all" />
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay / Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E5DFD3] bg-[#FAF8F5] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto">
          <div className="flex items-center justify-between pb-3 border-b border-[#EAE2D5] px-1">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8C7662]">
              Navigation Menu
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs text-[#8C7662] hover:text-[#2C241E] flex items-center gap-1 font-semibold"
            >
              <X className="w-4 h-4" />
              <span>Close</span>
            </button>
          </div>

          <nav className="pt-2 space-y-1" aria-label="Mobile Navigation">
            {/* 1. Home */}
            <button
              id="mobile-nav-home"
              onClick={() => handleNavClick('home')}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium flex items-center justify-between transition-colors ${
                currentView === 'home' ? 'bg-[#F2E8DC] text-[#B8502E] font-semibold' : 'text-[#3E342B] hover:bg-[#F5EFE6]'
              }`}
            >
              <span>Home</span>
              <span className="text-xs text-[#8C7662]">Overview</span>
            </button>

            {/* 2. Explore */}
            <button
              id="mobile-nav-explore"
              onClick={() => handleNavClick('explore')}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium flex items-center justify-between transition-colors ${
                currentView === 'explore' ? 'bg-[#F2E8DC] text-[#B8502E] font-semibold' : 'text-[#3E342B] hover:bg-[#F5EFE6]'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <Compass className="w-4 h-4 text-[#B8502E]" />
                Explore
              </span>
              <span className="text-xs bg-[#E8DFD3] px-2 py-0.5 rounded text-[#705D4D]">All Crafts</span>
            </button>

            {/* 3. States */}
            <button
              id="mobile-nav-states"
              onClick={() => handleNavClick('states')}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium flex items-center justify-between transition-colors ${
                currentView === 'states' || currentView === 'state-detail' ? 'bg-[#F2E8DC] text-[#B8502E] font-semibold' : 'text-[#3E342B] hover:bg-[#F5EFE6]'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#B8502E]" />
                States
              </span>
              <span className="text-xs text-[#8C7662]">28 States &amp; 8 UTs</span>
            </button>

            {/* 4. ODOP Products */}
            <button
              id="mobile-nav-odop"
              onClick={() => handleNavClick('odop')}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium flex items-center justify-between transition-colors ${
                currentView === 'odop' ? 'bg-[#F2E8DC] text-[#B8502E] font-semibold' : 'text-[#3E342B] hover:bg-[#F5EFE6]'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <Building2 className="w-4 h-4 text-[#B8502E]" />
                ODOP Products
              </span>
              <span className="text-xs bg-[#EFE3D5] text-[#8C4A27] px-2 py-0.5 rounded font-bold">
                Districts
              </span>
            </button>

            {/* 5. GI Products */}
            <button
              id="mobile-nav-gi"
              onClick={() => handleNavClick('gi')}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium flex items-center justify-between transition-colors ${
                currentView === 'gi' ? 'bg-[#E5EFE8] text-[#246243] font-semibold' : 'text-[#3E342B] hover:bg-[#F5EFE6]'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <Scale className="w-4 h-4 text-[#246243]" />
                GI Products
              </span>
              <span className="text-xs bg-[#D8EADB] text-[#246243] px-2 py-0.5 rounded font-bold">
                Certified
              </span>
            </button>

            {/* DPIIT District ODOP & GI Directory */}
            <button
              id="mobile-nav-dpiit-directory"
              onClick={() => handleNavClick('dpiit-directory')}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium flex items-center justify-between transition-colors ${
                currentView === 'dpiit-directory' ? 'bg-[#F2E8DC] text-[#B8502E] font-semibold' : 'text-[#3E342B] hover:bg-[#F5EFE6]'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#B8502E]" />
                DPIIT ODOP Directory
              </span>
              <span className="text-[10px] bg-[#B8502E] text-white px-2 py-0.5 rounded font-bold uppercase">
                1°, 2°, 3° Tiers
              </span>
            </button>

            {/* 6. Stories of the Art */}
            <button
              id="mobile-nav-stories"
              onClick={() => handleNavClick('stories')}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium flex items-center justify-between transition-colors ${
                currentView === 'stories' || currentView === 'story-detail' ? 'bg-[#F2E8DC] text-[#B8502E] font-semibold' : 'text-[#3E342B] hover:bg-[#F5EFE6]'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <BookOpen className="w-4 h-4 text-[#B8502E]" />
                Stories of the Art
              </span>
              <span className="text-xs text-[#8C7662]">Editorial</span>
            </button>

            {/* 7. Meet the Makers */}
            <button
              id="mobile-nav-makers"
              onClick={() => handleNavClick('artisans')}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium flex items-center justify-between transition-colors ${
                currentView === 'artisans' ? 'bg-[#F2E8DC] text-[#B8502E] font-semibold' : 'text-[#3E342B] hover:bg-[#F5EFE6]'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <Users className="w-4 h-4 text-[#B8502E]" />
                Meet the Makers
              </span>
              <span className="text-xs text-[#8C7662]">Artisans</span>
            </button>

            {/* 8. About ODOP Hub (Expandable Section with 3 sub-items) */}
            <div className="pt-2">
              <div className="rounded-xl border border-[#E7DDD0] bg-[#F7F2EA] overflow-hidden">
                <button
                  id="mobile-nav-about-header"
                  onClick={() => setAboutSubmenuOpen(!aboutSubmenuOpen)}
                  className="w-full text-left px-4 py-3 text-sm font-bold text-[#2C241E] flex items-center justify-between hover:bg-[#EFE7DC] transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <Info className="w-4 h-4 text-[#B8502E]" />
                    <span>About ODOP Hub</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#7A6451] transition-transform duration-200 ${
                      aboutSubmenuOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {aboutSubmenuOpen && (
                  <div className="px-3 pb-3 space-y-1 bg-white border-t border-[#EAE2D5] pt-2">
                    {/* Main About page link */}
                    <button
                      id="mobile-nav-about-main"
                      onClick={() => handleNavClick('about')}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold flex items-center justify-between transition-colors ${
                        currentView === 'about' ? 'text-[#B8502E] bg-[#F4EDE2]' : 'text-[#3E342B] hover:bg-[#F7F2EB]'
                      }`}
                    >
                      <span>About ODOP Hub (Overview)</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#8C7662]" />
                    </button>

                    {/* Sub-section 1: Why We Exist */}
                    <button
                      id="mobile-nav-why-we-exist"
                      onClick={() => handleNavClick('about', { section: 'why-we-exist' })}
                      className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-[#4A3E34] hover:text-[#B8502E] hover:bg-[#F4EDE2] transition-colors flex items-center gap-2.5"
                    >
                      <Heart className="w-3.5 h-3.5 text-[#B8502E]" />
                      <span>Why We Exist</span>
                    </button>

                    {/* Sub-section 2: People Behind ODOP Hub */}
                    <button
                      id="mobile-nav-people-behind"
                      onClick={() => handleNavClick('about', { section: 'people-behind' })}
                      className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-[#4A3E34] hover:text-[#B8502E] hover:bg-[#F4EDE2] transition-colors flex items-center gap-2.5"
                    >
                      <Users className="w-3.5 h-3.5 text-[#8C6A33]" />
                      <span>People Behind ODOP Hub</span>
                    </button>

                    {/* Sub-section 3: Let's Connect */}
                    <button
                      id="mobile-nav-lets-connect"
                      onClick={() => handleNavClick('about', { section: 'lets-connect' })}
                      className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-[#4A3E34] hover:text-[#246243] hover:bg-[#EAF3EE] transition-colors flex items-center gap-2.5"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#246243]" />
                      <span>Let’s Connect</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </nav>

          <div className="mt-4 pt-3 border-t border-[#EAE2D5]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenODOPInfo) onOpenODOPInfo();
              }}
              className="w-full py-2.5 px-4 rounded-lg bg-[#EFE9DE] text-[#4A3E34] text-xs font-medium flex items-center justify-center gap-2 hover:bg-[#E8DFD0] transition-colors"
            >
              <Sparkles className="w-4 h-4 text-[#B8502E]" />
              <span>What is ODOP &amp; GI Tag?</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
