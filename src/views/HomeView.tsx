import React from 'react';
import { Compass, MapPin, ArrowRight, ShieldCheck, BookOpen, Sparkles, Building2, Scale, Check } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/products';
import { STORIES_DATA } from '../data/stories';
import { ProductCard } from '../components/ProductCard';
import { StoryCard } from '../components/StoryCard';
import { ArtisanCarousel } from '../components/ArtisanCarousel';
import { MeetTheArtisansSection } from '../components/MeetTheArtisansSection';

interface HomeViewProps {
  onNavigate: (
    view: string,
    params?: { stateId?: string; productId?: string; storyId?: string; category?: string; section?: string; tab?: 'odop' | 'gi' }
  ) => void;
  onOpenODOPInfo: () => void;
  onOpenSearch?: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenODOPInfo,
  onOpenSearch,
}) => {
  // 1. Featured Products for "Explore Heritage Products" (8 curated products)
  const featuredShopProducts = PRODUCTS_DATA.slice(0, 8);

  // 2. ODOP Products
  const odopProducts = PRODUCTS_DATA.filter((p) => p.isODOP).slice(0, 3);

  // 3. Featured Stories
  const featuredStories = STORIES_DATA.slice(0, 3);

  // 4. Bihar products for dedicated foundation showcase
  const biharProducts = PRODUCTS_DATA.filter((p) => p.featuredInBihar).slice(0, 3);

  return (
    <div className="space-y-12 sm:space-y-16 pb-16 bg-[#FAF8F5]">
      {/* ========================================================================= */}
      {/* 1. HERO / HOME: DISCOVER HERITAGE                                         */}
      {/* ========================================================================= */}
      <section className="relative min-h-[75vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#241C16]">
        {/* Verified authentic heritage visual background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Madhubani_Painting_Exhibition.jpg"
            alt="Heritage of India - Master artisan hands creating traditional craft"
            className="w-full h-full object-cover object-center opacity-30 scale-105"
          />
          {/* Editorial vignette overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-[#241C16]/70 to-[#241C16]/90" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#241C16]/50 to-[#241C16]/95" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 pb-14">
          {/* Tagline Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF8F5]/15 border border-[#FAF8F5]/30 text-[#EFE7DC] text-[11px] sm:text-xs uppercase tracking-widest font-semibold backdrop-blur-md mb-5">
            <span className="w-2 h-2 rounded-full bg-[#C45A34]" />
            <span>odophub.com &bull; Cultural Discovery &amp; Artisan Heritage</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#FAF8F5] tracking-tight leading-[1.15] max-w-4xl mx-auto drop-shadow-sm">
            Discover the Heritage <span className="italic font-light text-[#E8DCCF]">of India</span>
          </h1>

          {/* Subheading */}
          <p className="mt-4 text-base sm:text-lg md:text-xl text-[#DFD5C8] font-light max-w-2xl mx-auto leading-relaxed">
            Explore the indigenous crafts, district champions, GI-tagged treasures, and living traditions that define every region of India.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              id="hero-cta-explore-products"
              onClick={() => onNavigate('explore')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#B8502E] text-white font-semibold text-sm sm:text-base shadow-md hover:bg-[#A14120] active:scale-[0.98] transition-all"
            >
              <Compass className="w-4 h-4" />
              <span>Explore Products</span>
            </button>

            <button
              id="hero-cta-explore-by-state"
              onClick={() => onNavigate('states')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FAF8F5]/90 hover:bg-[#FAF8F5] text-[#2C241E] font-medium text-sm sm:text-base shadow-sm backdrop-blur-sm transition-all"
            >
              <MapPin className="w-4 h-4 text-[#B8502E]" />
              <span>Explore by State</span>
            </button>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                id="hero-cta-explore-odop"
                onClick={() => onNavigate('odop')}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#FAF8F5] border border-white/20 text-xs sm:text-sm font-medium backdrop-blur-sm transition-all"
              >
                <Building2 className="w-3.5 h-3.5 text-[#E0B885]" />
                <span>ODOP</span>
              </button>

              <button
                id="hero-cta-explore-gi"
                onClick={() => onNavigate('gi')}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#FAF8F5] border border-white/20 text-xs sm:text-sm font-medium backdrop-blur-sm transition-all"
              >
                <Scale className="w-3.5 h-3.5 text-[#73D8A4]" />
                <span>GI Tagged</span>
              </button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="mt-10 pt-6 border-t border-[#FAF8F5]/20 max-w-2xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-[#E8DCCF]">
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-bold block text-white">750+</span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#C7B7A6]">Districts</span>
            </div>
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-bold block text-white">450+</span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#C7B7A6]">GI Registrations</span>
            </div>
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-bold block text-white">28 + 8</span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#C7B7A6]">States &amp; UTs</span>
            </div>
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-bold block text-white">100%</span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#C7B7A6]">Artisan Focused</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. HANDS BEHIND THE HERITAGE (COMPACT)                                    */}
      {/* ========================================================================= */}
      <ArtisanCarousel onNavigate={onNavigate} />

      {/* ========================================================================= */}
      {/* 3. PRODUCTS / SHOP — MOVE THIS HIGHER                                     */}
      {/* ========================================================================= */}
      <section id="homepage-products-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 pb-4 border-b border-[#EAE0D2]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EFE3D5] text-[#8C4A27] text-[11px] font-semibold uppercase tracking-wider mb-1.5 border border-[#DFD0BE]">
              <Sparkles className="w-3 h-3 text-[#B8502E]" />
              <span>Authentic Marketplace Discovery</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C241E] tracking-tight">
              Explore Heritage Products
            </h2>
            <p className="text-xs sm:text-sm text-[#6A5849] mt-1 font-light leading-relaxed">
              Discover authentic handloom textiles, ritual folk paintings, golden grass creations, and traditional crafts directly from certified district clusters.
            </p>
          </div>

          <button
            id="home-explore-all-products-btn"
            onClick={() => onNavigate('explore')}
            className="self-start sm:self-end inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#B8502E] text-white text-xs sm:text-sm font-semibold hover:bg-[#A14120] active:scale-[0.98] transition-all shadow-sm whitespace-nowrap"
          >
            <span>Explore All Products</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 8 Authentic Heritage Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredShopProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={(id) => onNavigate('product-detail', { productId: id })}
            />
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. MEET THE ARTISANS (COMPACT SELECTION)                                  */}
      {/* ========================================================================= */}
      <MeetTheArtisansSection
        onNavigate={onNavigate}
        limit={3}
        compact={true}
      />

      {/* ========================================================================= */}
      {/* 5. ODOP & GI HERITAGE DISCOVERY (COMPACT SHOWCASE)                        */}
      {/* ========================================================================= */}
      <section id="odop-gi-discovery-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F8F4EE] rounded-3xl border border-[#E5DCD0] p-6 sm:p-8 shadow-sm">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#E2D6C6]">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE3D5] text-[#8C4A27] text-xs font-semibold uppercase tracking-wider mb-2 border border-[#DFD0BE]">
                <Building2 className="w-3.5 h-3.5 text-[#B8502E]" />
                <span>Protected Terroirs &amp; District Lineages</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C241E] tracking-tight">
                ODOP &amp; Certified GI Treasures
              </h2>
              <p className="text-xs sm:text-sm text-[#615144] mt-1 leading-relaxed font-light">
                Discover indigenous district specialties scaled under the One District One Product initiative and legally protected Geographical Indications.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 self-start sm:self-end">
              <button
                id="btn-odop-directory-nav"
                onClick={() => onNavigate('odop')}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#B8502E] text-white text-xs font-semibold hover:bg-[#A14120] transition-colors whitespace-nowrap shadow-xs"
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>ODOP Directory &rarr;</span>
              </button>
              <button
                id="btn-gi-directory-nav"
                onClick={() => onNavigate('gi')}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#246243] text-white text-xs font-semibold hover:bg-[#1C4E35] transition-colors whitespace-nowrap shadow-xs"
              >
                <Scale className="w-3.5 h-3.5" />
                <span>GI Registry &rarr;</span>
              </button>
              <button
                id="btn-dpiit-directory-nav"
                onClick={() => onNavigate('dpiit-directory')}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-[#D8CCBD] text-[#4A3E34] text-xs font-semibold hover:border-[#B8502E] hover:text-[#B8502E] transition-colors whitespace-nowrap"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#B8502E]" />
                <span>DPIIT Directory &rarr;</span>
              </button>
            </div>
          </div>

          {/* 3 Flagship ODOP Products Showcase */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
            {odopProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={(id) => onNavigate('product-detail', { productId: id })}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. STORIES OF THE ART (COMPACT)                                           */}
      {/* ========================================================================= */}
      <section id="stories-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-3 border-b border-[#EAE0D2]">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EFE3D5] text-[#8C4A27] text-[11px] font-semibold uppercase tracking-wider mb-1 border border-[#DFD0BE]">
              <BookOpen className="w-3 h-3 text-[#B8502E]" />
              <span>Living Chronicles</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C241E]">
              Story of the Art
            </h2>
            <p className="text-xs sm:text-sm text-[#6B5A4B] mt-0.5">
              Deep editorial journeys exploring origin folklore, 15-step techniques, and master artisan revivals.
            </p>
          </div>

          <button
            onClick={() => onNavigate('stories')}
            className="self-start sm:self-end inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#B8502E] hover:underline"
          >
            <span>Explore All Stories</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredStories.map((story) => (
            <StoryCard
              key={story.id}
              story={story}
              onSelectStory={(id) => onNavigate('story-detail', { storyId: id })}
            />
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. FEATURED BIHAR ARTS (COMPACT FOUNDATION SPOTLIGHT)                     */}
      {/* ========================================================================= */}
      <section id="bihar-spotlight-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F5EFEB] rounded-3xl border border-[#E8DFD3] p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 pb-4 border-b border-[#E0D5C7]">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FAF8F5] border border-[#DFD6C5] text-[11px] font-semibold text-[#B8502E] uppercase tracking-wider mb-1.5">
                <Sparkles className="w-3 h-3" />
                <span>Foundation State Spotlight</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C241E]">
                Featured Bihar: Crafts of Mithila, Anga &amp; Magadh
              </h2>
              <p className="text-xs sm:text-sm text-[#5A4D43] mt-1 leading-relaxed">
                Foundational focus of ODOP Hub celebrating sacred folk paintings, wild Tussar silks, and grassroots women&apos;s embroidery.
              </p>
            </div>

            <button
              onClick={() => onNavigate('state-detail', { stateId: 'bihar' })}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#2C241E] text-white text-xs font-semibold hover:bg-[#B8502E] transition-colors whitespace-nowrap self-start md:self-auto"
            >
              <span>Explore Complete Bihar Archive</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Compact 3 Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {biharProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={(id) => onNavigate('product-detail', { productId: id })}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. SELLER PARTNER SECTION (COMMERCE/ONBOARDING CTA)                       */}
      {/* ========================================================================= */}
      <section id="seller-partner-cta-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2C241E] text-[#FAF8F5] rounded-3xl p-6 sm:p-10 border border-[#44382E] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2.5 max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F5]/10 border border-[#FAF8F5]/15 text-[#EFE7DC] text-[11px] font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#C45A34]" />
              <span>Partner With ODOP Hub</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              Become an ODOP Hub Seller Partner
            </h2>
            <p className="text-xs sm:text-sm text-[#D8C7B5] font-light leading-relaxed">
              Are you an artisan, traditional producer or heritage-product seller? Join ODOP Hub and showcase your products to a wider audience.
            </p>
            <div className="pt-1 flex flex-wrap items-center justify-center md:justify-start gap-3 text-[11px] text-[#C7B7A6]">
              <span className="flex items-center gap-1">
                <Check className="w-3 h-3 text-[#25D366]" />
                <span>Zero Upfront Fees</span>
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Check className="w-3 h-3 text-[#25D366]" />
                <span>ODOP &amp; GI Verification</span>
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Check className="w-3 h-3 text-[#25D366]" />
                <span>Direct Artisan Network</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              id="btn-register-seller-partner"
              onClick={() => onNavigate('seller-partner')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#B8502E] text-white font-semibold text-xs sm:text-sm shadow-md hover:bg-[#A14120] active:scale-[0.98] transition-all whitespace-nowrap"
            >
              <span>Register as Seller Partner &rarr;</span>
            </button>
            <button
              onClick={() => onNavigate('about', { section: 'why-we-exist' })}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#FAF8F5] border border-white/20 text-xs sm:text-sm font-medium transition-all whitespace-nowrap"
            >
              <span>Learn About Our Mission</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
