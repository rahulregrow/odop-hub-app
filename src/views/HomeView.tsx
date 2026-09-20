import React, { useState } from 'react';
import { Compass, MapPin, ArrowRight, ShieldCheck, Award, BookOpen, Sparkles, Feather, Layers, Users, Building2, Scale, ExternalLink, Search, ChevronDown, Check } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/products';
import { STATES_DATA } from '../data/states';
import { STORIES_DATA } from '../data/stories';
import { ARTISANS_DATA } from '../data/artisans';
import { CRAFT_CATEGORIES } from '../data/categories';
import { ProductCard } from '../components/ProductCard';
import { StateCard } from '../components/StateCard';
import { StoryCard } from '../components/StoryCard';
import { ArtisanCarousel } from '../components/ArtisanCarousel';
import { MeetTheArtisansSection } from '../components/MeetTheArtisansSection';

interface HomeViewProps {
  onNavigate: (
    view: string,
    params?: { stateId?: string; productId?: string; storyId?: string; category?: string }
  ) => void;
  onOpenODOPInfo: () => void;
  onOpenSearch?: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenODOPInfo,
  onOpenSearch,
}) => {
  const [selectedRegionTab, setSelectedRegionTab] = useState<string>('All');
  const [stateSearchQuery, setStateSearchQuery] = useState<string>('');
  const [isStateDropdownOpen, setIsStateDropdownOpen] = useState<boolean>(false);
  const [showAllCategories, setShowAllCategories] = useState<boolean>(false);

  // Bihar products for the dedicated focus section
  const biharProducts = PRODUCTS_DATA.filter((p) => p.featuredInBihar);

  // ODOP Products
  const odopProducts = PRODUCTS_DATA.filter((p) => p.isODOP).slice(0, 3);

  // GI Products
  const giProducts = PRODUCTS_DATA.filter((p) => p.isGI).slice(0, 3);

  // Featured stories
  const featuredStories = STORIES_DATA.slice(0, 3);

  // Artisans
  const featuredArtisans = ARTISANS_DATA.slice(0, 3);

  // States filtered by region
  const filteredStates =
    selectedRegionTab === 'All'
      ? STATES_DATA.slice(0, 6)
      : STATES_DATA.filter((s) => s.region === selectedRegionTab).slice(0, 6);

  const regionTabs = ['All', 'Eastern', 'Southern', 'Northern', 'Western', 'Central', 'North-Eastern', 'Islands & UTs'];

  return (
    <div className="space-y-20 sm:space-y-28 pb-24 bg-[#FAF8F5]">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION: DISCOVER HERITAGE                                        */}
      {/* ========================================================================= */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#241C16]">
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

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
          {/* Tagline Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF8F5]/15 border border-[#FAF8F5]/30 text-[#EFE7DC] text-xs uppercase tracking-widest font-semibold backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-[#C45A34]" />
            <span>odophub.com &bull; Cultural Discovery &amp; Artisan Heritage</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-[#FAF8F5] tracking-tight leading-[1.1] max-w-4xl mx-auto drop-shadow-sm">
            Discover the Heritage <span className="italic font-light text-[#E8DCCF]">of India</span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg sm:text-xl text-[#DFD5C8] font-light max-w-2xl mx-auto leading-relaxed">
            Explore the indigenous crafts, district champions, GI-tagged treasures, and living traditions that define every region of India.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="hero-cta-explore-heritage"
              onClick={() => onNavigate('explore')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg bg-[#B8502E] text-white font-medium text-base shadow-md hover:bg-[#A14120] active:scale-[0.98] transition-all"
            >
              <Compass className="w-5 h-5" />
              <span>Explore All Crafts</span>
            </button>

            <button
              id="hero-cta-explore-odop"
              onClick={() => onNavigate('odop')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg bg-[#FAF8F5]/90 hover:bg-[#FAF8F5] text-[#2C241E] font-medium text-base shadow-sm backdrop-blur-sm transition-all"
            >
              <Building2 className="w-4 h-4 text-[#B8502E]" />
              <span>Explore ODOP</span>
            </button>

            <button
              id="hero-cta-explore-gi"
              onClick={() => onNavigate('gi')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg bg-[#FAF8F5]/90 hover:bg-[#FAF8F5] text-[#2C241E] font-medium text-base shadow-sm backdrop-blur-sm transition-all"
            >
              <Scale className="w-4 h-4 text-[#246243]" />
              <span>Explore GI</span>
            </button>
          </div>

          {/* Key Metrics */}
          <div className="mt-14 pt-8 border-t border-[#FAF8F5]/20 max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-[#E8DCCF]">
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-bold block text-white">750+</span>
              <span className="text-[11px] uppercase tracking-wider text-[#C7B7A6]">Districts</span>
            </div>
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-bold block text-white">450+</span>
              <span className="text-[11px] uppercase tracking-wider text-[#C7B7A6]">GI Registrations</span>
            </div>
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-bold block text-white">28 + 8</span>
              <span className="text-[11px] uppercase tracking-wider text-[#C7B7A6]">States &amp; UTs</span>
            </div>
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-bold block text-white">100%</span>
              <span className="text-[11px] uppercase tracking-wider text-[#C7B7A6]">Artisan Focused</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. ARTISAN CAROUSEL: THE HANDS BEHIND THE HERITAGE                        */}
      {/* ========================================================================= */}
      <ArtisanCarousel onNavigate={onNavigate} />

      {/* ========================================================================= */}
      {/* 3. PROMINENT STATE DISCOVERY: KNOW YOUR STATE                             */}
      {/* ========================================================================= */}
      <section id="know-your-state-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F8F4EE] rounded-3xl border border-[#E5DCD0] p-6 sm:p-10 shadow-sm">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#E2D6C6]">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE3D5] text-[#8C4A27] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#DFD0BE]">
                <MapPin className="w-3.5 h-3.5 text-[#B8502E]" />
                <span>Pan-India Heritage Exploration</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C241E] tracking-tight">
                Know Your State
              </h2>
              <p className="text-base sm:text-lg text-[#615144] mt-2.5 leading-relaxed font-light">
                Explore the unique products, crafts, traditions and heritage of your state or discover treasures across India.
              </p>
            </div>

            {/* Explore All States Action */}
            <div className="flex items-center gap-3 self-start lg:self-end">
              <button
                id="know-state-explore-all-btn"
                onClick={() => onNavigate('states')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#2C241E] text-white text-xs sm:text-sm font-semibold hover:bg-[#43372E] active:scale-[0.98] transition-all shadow-sm whitespace-nowrap"
              >
                <span>Explore All States</span>
                <ArrowRight className="w-4 h-4 text-[#C45A34]" />
              </button>
            </div>
          </div>

          {/* Prominent Quick-Search & State Picker Tool */}
          <div className="py-6 border-b border-[#EAE0D2]">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-2xl relative">
              {/* Dropdown Toggle Button */}
              <div className="relative flex-1">
                <button
                  id="select-your-state-btn"
                  onClick={() => setIsStateDropdownOpen(!isStateDropdownOpen)}
                  className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl border border-[#D8CCBD] bg-[#FFFFFF] text-left hover:border-[#B8502E] focus:outline-none focus:ring-2 focus:ring-[#B8502E] transition-all shadow-xs"
                  aria-expanded={isStateDropdownOpen}
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <MapPin className="w-5 h-5 text-[#B8502E] shrink-0" />
                    <span className="text-sm font-semibold text-[#2C241E] truncate">
                      Select Your State or Union Territory
                    </span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-[#8C7662] transition-transform duration-200 ${isStateDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* State Dropdown Popover */}
                {isStateDropdownOpen && (
                  <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl border border-[#D8CCBD] shadow-2xl z-50 p-3 max-h-80 flex flex-col">
                    {/* Quick Search inside picker */}
                    <div className="relative mb-2 shrink-0">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#8C7662]" />
                      <input
                        type="text"
                        placeholder="Search state name or capital..."
                        value={stateSearchQuery}
                        onChange={(e) => setStateSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-[#E2D8C9] bg-[#FAF8F5] focus:outline-none focus:ring-1 focus:ring-[#B8502E] text-[#2C241E]"
                        autoFocus
                      />
                    </div>

                    {/* Scrollable list of 28 States & 8 Union Territories */}
                    <div className="overflow-y-auto space-y-1 pr-1 divide-y divide-[#F4EFE6]">
                      {STATES_DATA.filter((s) =>
                        s.name.toLowerCase().includes(stateSearchQuery.toLowerCase()) ||
                        s.capital.toLowerCase().includes(stateSearchQuery.toLowerCase()) ||
                        s.region.toLowerCase().includes(stateSearchQuery.toLowerCase())
                      ).map((state) => (
                        <button
                          key={state.id}
                          onClick={() => {
                            setIsStateDropdownOpen(false);
                            setStateSearchQuery('');
                            onNavigate('state-detail', { stateId: state.id });
                          }}
                          className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-[#F8F4EE] flex items-center justify-between group transition-colors"
                        >
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-[#2C241E] group-hover:text-[#B8502E]">
                                {state.name}
                              </span>
                              <span className="text-[10px] text-[#8C7662] bg-[#EFE7DC] px-1.5 py-0.2 rounded font-mono">
                                {state.code}
                              </span>
                            </div>
                            <span className="text-[11px] text-[#7A6A5C] block">
                              Capital: {state.capital} &bull; {state.region} India
                            </span>
                          </div>
                          <span className="text-[11px] text-[#B8502E] font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            View State &rarr;
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Direct Quick State Selector Input */}
              <div className="relative sm:w-56">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#8C7662]" />
                <input
                  type="text"
                  placeholder="Quick find state..."
                  value={stateSearchQuery}
                  onChange={(e) => {
                    setStateSearchQuery(e.target.value);
                    if (!isStateDropdownOpen && e.target.value) {
                      setIsStateDropdownOpen(true);
                    }
                  }}
                  className="w-full pl-9 pr-3 py-3.5 text-xs rounded-xl border border-[#D8CCBD] bg-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#B8502E] text-[#2C241E] shadow-xs"
                />
              </div>
            </div>
          </div>

          {/* Direct Links & Visual Cards for Prominent States */}
          <div className="pt-8 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8C7662]">
                Prominent State Heritage Centers
              </span>
              <span className="text-xs text-[#7A6A5C]">
                Click to explore district crafts &amp; GI treasures
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3.5">
              {[
                {
                  id: 'bihar',
                  name: 'Bihar',
                  badge: 'Mithila & Bodhgaya',
                  iconCraft: 'Madhubani & Makhana',
                  image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Mahabodhi_Temple_Complex%2C_Bodhgaya_%288716403651%29.jpg',
                },
                {
                  id: 'uttar-pradesh',
                  name: 'Uttar Pradesh',
                  badge: 'Varanasi & Awadh',
                  iconCraft: 'Banarasi & Zari',
                  image: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Banarasi_Silk_Saree.jpg',
                },
                {
                  id: 'rajasthan',
                  name: 'Rajasthan',
                  badge: 'Jaipur & Marwar',
                  iconCraft: 'Blue Pottery & Prints',
                  image: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Jaipur_Blue_Pottery_Vase_with_Raja-Rani_Design.jpg',
                },
                {
                  id: 'karnataka',
                  name: 'Karnataka',
                  badge: 'Mysuru & Badami',
                  iconCraft: 'Channapatna & Ilkal',
                  image: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Channapatna-toys.jpg',
                },
                {
                  id: 'jammu-kashmir',
                  name: 'Jammu & Kashmir',
                  badge: 'Srinagar & Valley',
                  iconCraft: 'Pashmina & Kani',
                  image: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Kashmiri_pashmina_weaver_in_Srinagar.jpg',
                },
                {
                  id: 'odisha',
                  name: 'Odisha',
                  badge: 'Puri & Koraput',
                  iconCraft: 'Kotpad & Pattachitra',
                  image: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Kotpad_Weaving.jpg',
                },
                {
                  id: 'gujarat',
                  name: 'Gujarat',
                  badge: 'Kutch & Patan',
                  iconCraft: 'Patola & Rogan Art',
                  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Patan_Patola_Weaving.jpg/800px-Patan_Patola_Weaving.jpg',
                },
              ].map((item) => (
                <button
                  key={item.id}
                  id={`prominent-state-btn-${item.id}`}
                  onClick={() => onNavigate('state-detail', { stateId: item.id })}
                  className="group relative rounded-2xl overflow-hidden border border-[#DECFC0] bg-white text-left hover:shadow-md hover:border-[#B8502E] transition-all flex flex-col h-44"
                >
                  {/* State Image Thumbnail */}
                  <div className="h-24 w-full relative overflow-hidden bg-[#241C16]">
                    <img
                      src={item.image}
                      alt={`${item.name} craft heritage`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <span className="absolute bottom-2 left-2 text-[10px] font-semibold text-white uppercase tracking-wider bg-black/50 px-2 py-0.5 rounded backdrop-blur-xs">
                      {item.badge}
                    </span>
                  </div>

                  {/* State Details */}
                  <div className="p-3 flex flex-col justify-between flex-1 bg-[#FAF8F5]">
                    <div>
                      <h4 className="font-serif text-sm font-bold text-[#2C241E] group-hover:text-[#B8502E] transition-colors line-clamp-1">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-[#6A5A4D] line-clamp-1 mt-0.5">
                        {item.iconCraft}
                      </p>
                    </div>
                    <span className="text-[10px] text-[#B8502E] font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      Explore State &rarr;
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Quick State Chips for Quick Access */}
            <div className="pt-3 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-[#8C7662] font-semibold text-[11px] uppercase tracking-wider mr-1">
                More States:
              </span>
              {[
                { id: 'west-bengal', name: 'West Bengal' },
                { id: 'assam', name: 'Assam' },
                { id: 'tamil-nadu', name: 'Tamil Nadu' },
                { id: 'kerala', name: 'Kerala' },
                { id: 'maharashtra', name: 'Maharashtra' },
                { id: 'madhya-pradesh', name: 'Madhya Pradesh' },
                { id: 'punjab', name: 'Punjab' },
                { id: 'telangana', name: 'Telangana' },
              ].map((s) => (
                <button
                  key={s.id}
                  onClick={() => onNavigate('state-detail', { stateId: s.id })}
                  className="px-2.5 py-1 rounded-full bg-white border border-[#D8CCBD] text-[#4A3E34] hover:bg-[#B8502E] hover:text-white hover:border-[#B8502E] text-xs font-medium transition-colors"
                >
                  {s.name}
                </button>
              ))}
              <button
                onClick={() => onNavigate('states')}
                className="px-2.5 py-1 rounded-full bg-[#EFE3D5] text-[#8C4A27] font-semibold text-xs hover:bg-[#E2D2C0] transition-colors"
              >
                + View All States &amp; UTs &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. EXPLORE INDIA BY CRAFT CATEGORY                                        */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#B8502E]">
              Disciplines &amp; Media
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C241E] mt-1">
              Explore by Craft &amp; Category
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowAllCategories(!showAllCategories)}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#B8502E] hover:underline"
            >
              <span>{showAllCategories ? 'Show Top 6 Categories' : 'View All Categories (9)'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('explore')}
              className="hidden sm:inline-flex text-xs font-semibold text-[#7A6451] hover:text-[#2C241E] border border-[#D8CCBD] px-3 py-1.5 rounded-lg hover:bg-[#F2E8DC] transition-colors"
            >
              Explore Full Catalog &rarr;
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(showAllCategories ? CRAFT_CATEGORIES : CRAFT_CATEGORIES.slice(0, 6)).map((cat) => (
            <div
              key={cat.slug}
              onClick={() => onNavigate('explore', { category: cat.name })}
              className="group cursor-pointer bg-[#FDFDFB] rounded-xl border border-[#EAE2D5] overflow-hidden p-6 flex flex-col justify-between hover:border-[#B8502E]/40 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#2C241E] group-hover:text-[#B8502E] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-[#6B5A4B] mt-2 leading-relaxed line-clamp-2">
                    {cat.description}
                  </p>
                </div>
                <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-[#EFE9DE]">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="mt-6 pt-3.5 border-t border-[#F2EDE5] flex items-center justify-between text-xs">
                <span className="text-[#8C7662] font-medium">
                  {cat.count} Documented Traditions
                </span>
                <span className="inline-flex items-center gap-1 font-semibold text-[#B8502E]">
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. EXPLORE ODOP (One District One Product Section)                        */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F6EFE7] rounded-3xl border border-[#E8DDCF] p-8 sm:p-12 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#DFD2C2]">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE3D5] text-[#8C4A27] text-xs font-semibold uppercase tracking-wider mb-2 border border-[#DFD0BE]">
                <Building2 className="w-3.5 h-3.5 text-[#B8502E]" />
                <span>District Empowerment</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C241E]">
                Explore ODOP: One District, One Product
              </h2>
              <p className="text-sm sm:text-base text-[#6A5849] mt-2 leading-relaxed">
                A national economic initiative by the Ministry of Commerce &amp; Industry to foster balanced regional growth by scaling indigenous district crafts and agricultural superfoods into global export champions.
              </p>
            </div>

            <button
              onClick={() => onNavigate('odop')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#B8502E] text-white text-xs sm:text-sm font-semibold hover:bg-[#A14120] transition-colors whitespace-nowrap"
            >
              <span>View All ODOP Products</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {odopProducts.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onSelect={(id) => onNavigate('product-detail', { productId: id })}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. EXPLORE GI (Geographical Indications Section)                          */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EEF5F1] rounded-3xl border border-[#D5E3DB] p-8 sm:p-12 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#CBDCD2]">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0ECE5] text-[#246243] text-xs font-semibold uppercase tracking-wider mb-2 border border-[#CADBD1]">
                <Scale className="w-3.5 h-3.5" />
                <span>Intellectual Property &amp; Terroir</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C241E]">
                Explore GI: Certified Geographical Indications
              </h2>
              <p className="text-sm sm:text-base text-[#4C5D53] mt-2 leading-relaxed">
                Statutory legal seals granted under the GI of Goods Act 1999 (Chennai Registry) guaranteeing that the product&apos;s extraordinary qualities belong inextricably to its local terroir and community lineage.
              </p>
            </div>

            <button
              onClick={() => onNavigate('gi')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#246243] text-white text-xs sm:text-sm font-semibold hover:bg-[#1C4E35] transition-colors whitespace-nowrap"
            >
              <span>View All GI Registrations</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {giProducts.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onSelect={(id) => onNavigate('product-detail', { productId: id })}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. DISCOVER INDIA / ALL STATES & UNION TERRITORIES                         */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#B8502E]">
              Pan-India Directory
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C241E] mt-1">
              Explore India Through Its States &amp; Union Territories
            </h2>
            <p className="text-xs sm:text-sm text-[#6B5A4B] mt-1">
              Covering all 28 States and 8 Union Territories with verified photographic archives and primary district craft hubs.
            </p>
          </div>
          <button
            onClick={() => onNavigate('states')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#B8502E] hover:underline whitespace-nowrap"
          >
            <span>View All States &amp; UTs</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Region Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-[#EAE2D5] scrollbar-none">
          {regionTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedRegionTab(tab)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedRegionTab === tab
                  ? 'bg-[#2C241E] text-white'
                  : 'bg-[#F2ECE3] text-[#5C4C3E] hover:bg-[#EAE2D5]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* States Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStates.map((state) => (
            <StateCard
              key={state.id}
              state={state}
              onSelectState={(id) => onNavigate('state-detail', { stateId: id })}
            />
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. READ STORIES ("STORY OF THE ART" EDITORIAL SYSTEM)                     */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#B8502E]">
              Living Chronicles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C241E] mt-1">
              Story of the Art
            </h2>
            <p className="text-xs sm:text-sm text-[#6B5A4B] mt-1">
              Deep editorial journeys exploring origin folklore, 15-step techniques, and master artisan revivals.
            </p>
          </div>
          <button
            onClick={() => onNavigate('stories')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#B8502E] hover:underline"
          >
            <span>Browse All Stories</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      {/* 9. FEATURED BIHAR: THE CRADLE OF TRADITION                                */}
      {/* ========================================================================= */}
      <section className="bg-[#F5EFEB] py-16 sm:py-20 border-y border-[#E8DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FAF8F5] border border-[#DFD6C5] text-xs font-semibold text-[#B8502E] uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Foundation Heritage Showcase</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#2C241E] font-normal leading-tight">
              Featured Bihar: Ancient Crafts of Mithila, Anga &amp; Magadh
            </h2>
            <p className="text-base sm:text-lg text-[#5A4D43] mt-3 leading-relaxed">
              Bihar stands as the foundational focus of ODOP Hub — a state celebrated for its millennia-old lineages of ritual folk painting, sacred wetland aquatic agriculture, handloom wild silks, and grassroots women&apos;s empowerment embroidery.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-medium text-[#7A6451]">
              <span>Featured Districts: Madhubani, Bhagalpur, Patna, Darbhanga, Sitamarhi, Muzaffarpur</span>
              <span>&bull;</span>
              <button
                onClick={() => onNavigate('state-detail', { stateId: 'bihar' })}
                className="text-[#B8502E] font-semibold hover:underline inline-flex items-center gap-1"
              >
                <span>Full Bihar Archive</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Products Grid for Bihar (including Manjusha Art and Tikuli Art) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {biharProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={(id) => onNavigate('product-detail', { productId: id })}
              />
            ))}
          </div>

          {/* Bihar Regional Context Card */}
          <div className="mt-12 bg-[#FAF8F5] rounded-2xl p-6 sm:p-8 border border-[#DFD6C5] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="font-serif text-xl font-bold text-[#2C241E]">
                Living Heritage in the Floodplains of Mithila, Anga and Magadh
              </h3>
              <p className="text-xs sm:text-sm text-[#5A4D43] mt-1.5 leading-relaxed">
                From the Angika sequential snake scrolls of Manjusha and the 800-year royal gold bindis of Tikuli to the golden wild Sikki grass and hand-loomed Tussar of Bhagalpur, Bihar&apos;s crafts reflect deep ecological balance and generational memory.
              </p>
            </div>
            <button
              id="btn-bihar-deep-dive"
              onClick={() => onNavigate('state-detail', { stateId: 'bihar' })}
              className="px-6 py-3 rounded-lg bg-[#2C241E] text-white font-medium text-xs sm:text-sm whitespace-nowrap hover:bg-[#B8502E] transition-colors"
            >
              Explore Complete Bihar Archive
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. MEET THE ARTISANS / MAKERS                                             */}
      {/* ========================================================================= */}
      <MeetTheArtisansSection onNavigate={onNavigate} />

      {/* ========================================================================= */}
      {/* 10. CLEAN MARKETPLACE & ARCHIVE DISCOVERY CALLOUT                         */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2C241E] text-[#FAF8F5] rounded-3xl p-8 sm:p-12 border border-[#44382E] shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F5]/10 border border-[#FAF8F5]/15 text-[#EFE7DC] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#C45A34]" />
              <span>India’s Living Heritage</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              Discover Crafts Across 28 States &amp; 8 UTs
            </h3>
            <p className="text-sm sm:text-base text-[#D8C7B5] font-light leading-relaxed">
              Explore authentic district specialties, Geographical Indications, and stories directly from the master artisans keeping these traditions alive.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('explore')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#B8502E] text-white font-medium text-sm hover:bg-[#A14120] transition-colors shadow-sm flex items-center justify-center gap-2"
            >
              <Compass className="w-4 h-4" />
              <span>Explore All Crafts</span>
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-[#FAF8F5]/10 hover:bg-[#FAF8F5]/20 text-white font-medium text-sm border border-[#FAF8F5]/20 transition-colors flex items-center justify-center gap-2"
            >
              <span>About ODOP Hub</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
