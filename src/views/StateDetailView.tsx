import React, { useState } from 'react';
import { STATES_DATA } from '../data/states';
import { PRODUCTS_DATA } from '../data/products';
import { STORIES_DATA } from '../data/stories';
import { ARTISANS_DATA } from '../data/artisans';
import { getStateHeritage } from '../data/stateHeritage';
import { ProductCard } from '../components/ProductCard';
import { StoryCard } from '../components/StoryCard';
import { GENERIC_ODOP_HERITAGE_FALLBACK_IMAGE } from '../utils/imageUtils';
import {
  ArrowLeft,
  MapPin,
  Sparkles,
  Award,
  ShieldCheck,
  Camera,
  BookOpen,
  ArrowRight,
  Compass,
  Utensils,
  Layers,
  Users,
  Building2,
  Scale,
  ScrollText,
  Calendar,
  Filter,
} from 'lucide-react';

interface StateDetailViewProps {
  stateId: string;
  onBack: () => void;
  onSelectProduct: (productId: string) => void;
  onSelectStory: (storyId: string) => void;
  onNavigate?: (view: string, params?: { stateId?: string; productId?: string; storyId?: string; category?: string }) => void;
}

export const StateDetailView: React.FC<StateDetailViewProps> = ({
  stateId,
  onBack,
  onSelectProduct,
  onSelectStory,
  onNavigate,
}) => {
  const state = STATES_DATA.find((s) => s.id === stateId) || STATES_DATA[0];

  // Tab and District filter states
  const [selectedDistrict, setSelectedDistrict] = useState<string>('All');
  const [activeHeritageTab, setActiveHeritageTab] = useState<'all' | 'odop' | 'gi' | 'arts' | 'foods'>('all');

  // Enriched State Heritage data
  const heritageInfo = getStateHeritage(state.id, state.name, state.primaryDistricts);

  // Products belonging to this state
  const stateProducts = PRODUCTS_DATA.filter(
    (p) => p.state.toLowerCase() === state.name.toLowerCase() || p.stateCode === state.code
  );

  // Filtered by selected district
  const filteredProducts = stateProducts.filter((p) => {
    if (selectedDistrict === 'All') return true;
    return p.district.toLowerCase() === selectedDistrict.toLowerCase();
  });

  // ODOP Products
  const odopProducts = stateProducts.filter((p) => p.isODOP);

  // GI Products
  const giProducts = stateProducts.filter((p) => p.isGI);

  // Stories belonging to this state
  const stateStories = STORIES_DATA.filter(
    (s) => s.state.toLowerCase() === state.name.toLowerCase()
  );

  // Artisans belonging to this state
  const stateArtisans = ARTISANS_DATA.filter(
    (a) => a.state.toLowerCase() === state.name.toLowerCase()
  );

  // Handler for "Explore State" CTA
  const handleExploreState = () => {
    const explorerEl = document.getElementById('state-heritage-explorer');
    if (explorerEl) {
      explorerEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pb-24 bg-[#FAF8F5]">
      {/* Top Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#8C7662] hover:text-[#2C241E] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All States Directory</span>
          </button>

          {/* Quick Jump Action */}
          <button
            id="top-explore-state-cta"
            onClick={handleExploreState}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#B8502E] hover:text-[#913B1E] transition-colors"
          >
            <span>Explore {state.name} Heritage</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. STATE HERO BANNER WITH PROMINENT "EXPLORE [STATE]" CTA                 */}
      {/* ========================================================================= */}
      <div className="relative min-h-[460px] sm:min-h-[520px] flex items-end overflow-hidden bg-[#241C16]">
        <img
          src={state.coverImage}
          alt={state.name}
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = GENERIC_ODOP_HERITAGE_FALLBACK_IMAGE;
          }}
          className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-[#241C16]/70 to-[#241C16]/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 w-full">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="text-xs uppercase tracking-widest font-semibold text-white bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
              {state.region} India
            </span>
            <span className="text-xs font-medium text-white bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#E08A68]" />
              Capital: {state.capital}
            </span>
            <span className="text-xs font-medium text-white bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
              {state.primaryDistricts.length} Heritage Districts
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight drop-shadow-md">
            {state.name}
          </h1>

          <p className="mt-3.5 text-base sm:text-xl text-[#F4ECE3] max-w-3xl font-light leading-relaxed drop-shadow">
            {state.tagline}
          </p>

          {/* Prominent "Explore State" Call to Action */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              id={`hero-explore-cta-${state.id}`}
              onClick={handleExploreState}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#B8502E] text-white text-sm sm:text-base font-semibold hover:bg-[#A14120] active:scale-[0.98] transition-all shadow-lg hover:shadow-xl"
            >
              <Compass className="w-5 h-5 text-white" />
              <span>Explore {state.name}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#district-exploration-section"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/20 text-white text-xs sm:text-sm font-semibold hover:bg-white/30 backdrop-blur-sm transition-all border border-white/30"
            >
              <span>District Breakdown</span>
            </a>

            <a
              href="#artisans-section"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/20 text-white text-xs sm:text-sm font-semibold hover:bg-white/30 backdrop-blur-sm transition-all border border-white/30"
            >
              <span>Artisans &amp; Makers</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-20">
        {/* ========================================================================= */}
        {/* 2. STATE OVERVIEW & CULTURAL IDENTITY                                     */}
        {/* ========================================================================= */}
        <section id="state-overview" className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE3D5] text-[#8C4A27] text-xs font-semibold uppercase tracking-wider border border-[#DFD0BE]">
              <Sparkles className="w-3.5 h-3.5 text-[#B8502E]" />
              <span>Cultural Identity &amp; History</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#2C241E] font-bold">
              Living Heritage &amp; Traditions of {state.name}
            </h2>

            <p className="text-base text-[#5A4D43] leading-relaxed">
              {state.introduction}
            </p>

            <p className="text-base text-[#5A4D43] leading-relaxed">
              {state.craftCultureDescription}
            </p>

            {/* Cultural Festivals & Celebrations */}
            {state.culturalFestivals && state.culturalFestivals.length > 0 && (
              <div className="pt-6 border-t border-[#EAE2D5] space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8C7662] flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#B8502E]" />
                  <span>Cultural Celebrations &amp; Heritage Rituals</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  {state.culturalFestivals.map((fest, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-white text-[#3D322A] px-3.5 py-1.5 rounded-lg border border-[#DECFC0] font-medium shadow-xs"
                    >
                      {fest}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Quick Facts Sidebar */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-[#E5DACD] p-6 space-y-5 h-fit shadow-xs">
            <div className="border-b border-[#F0E6DA] pb-3">
              <span className="text-xs uppercase tracking-wider text-[#8C7662] font-semibold">
                State Geographic Registry
              </span>
              <h3 className="font-serif text-xl font-bold text-[#2C241E] mt-0.5">
                {state.name} Quick Facts
              </h3>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between py-1 border-b border-[#FAF5EE]">
                <span className="text-[#6B5A4B]">Capital City</span>
                <strong className="text-[#2C241E]">{state.capital}</strong>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-[#FAF5EE]">
                <span className="text-[#6B5A4B]">Geographic Zone</span>
                <strong className="text-[#2C241E]">{state.region} India</strong>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-[#FAF5EE]">
                <span className="text-[#6B5A4B]">Documented Crafts</span>
                <strong className="text-[#2C241E]">{state.productCount}+ Categories</strong>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-[#FAF5EE]">
                <span className="text-[#6B5A4B]">Primary Artisan Hubs</span>
                <strong className="text-[#2C241E]">{state.primaryDistricts.length} Districts</strong>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-[#6B5A4B]">ODOP &amp; GI Focus</span>
                <span className="text-[#246243] bg-[#EAF2ED] px-2 py-0.5 rounded font-semibold text-[11px]">
                  Legally Registered
                </span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-xs text-[#8C7662] font-bold uppercase tracking-wider block mb-2">
                Featured Craft Disciplines
              </span>
              <div className="flex flex-wrap gap-1.5">
                {state.featuredCrafts.map((craft, i) => (
                  <span
                    key={i}
                    className="text-[11px] bg-[#FAF8F5] text-[#3D322A] px-2.5 py-1 rounded border border-[#E8DEC0]"
                  >
                    {craft}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. DISTRICT-WISE EXPLORATION                                              */}
        {/* ========================================================================= */}
        <section id="district-exploration-section" className="space-y-8 bg-white rounded-3xl border border-[#E5DACD] p-6 sm:p-10 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#EAE2D5] pb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE3D5] text-[#8C4A27] text-xs font-semibold uppercase tracking-wider mb-2 border border-[#DFD0BE]">
                <Building2 className="w-3.5 h-3.5 text-[#B8502E]" />
                <span>District Artisan Clusters</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C241E]">
                District-Wise Heritage &amp; ODOP Exploration
              </h2>
              <p className="text-sm text-[#6B5A4B] mt-1">
                Select any district to explore its indigenous craft traditions and official One District One Product designations.
              </p>
            </div>

            {/* District Filter Selector */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-[#8C7662]" />
              <select
                id="district-filter-select"
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="text-xs font-semibold rounded-lg border border-[#D5C9BA] bg-[#FAF8F5] px-3 py-2 text-[#2C241E] focus:outline-none focus:ring-1 focus:ring-[#B8502E]"
              >
                <option value="All">All Districts ({state.primaryDistricts.length})</option>
                {state.primaryDistricts.map((d) => (
                  <option key={d} value={d}>
                    {d} District
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* District Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {heritageInfo.districtProfiles
              .filter((dp) => selectedDistrict === 'All' || dp.district.toLowerCase() === selectedDistrict.toLowerCase())
              .map((dp, i) => (
                <div
                  key={i}
                  className={`p-5 rounded-2xl border transition-all ${
                    selectedDistrict === dp.district
                      ? 'bg-[#FDF9F5] border-[#B8502E] shadow-sm'
                      : 'bg-[#FAF8F5] border-[#E8DEC0] hover:border-[#B8502E]/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-serif text-lg font-bold text-[#2C241E]">
                      {dp.district}
                    </span>
                    <span className="text-[10px] font-bold text-[#B8502E] bg-[#F8EDE7] px-2 py-0.5 rounded border border-[#EACEC1]">
                      ODOP Cluster
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-[#8C4A27] mb-1.5 line-clamp-1">
                    {dp.odopFocus}
                  </p>

                  <p className="text-xs text-[#6A5A4D] leading-relaxed line-clamp-2 mb-3">
                    {dp.craftHeritage}
                  </p>

                  <div className="pt-2 border-t border-[#EAE2D5] flex items-center justify-between text-[11px] text-[#8C7662]">
                    <span>Hub: {dp.clusterLocation}</span>
                    <button
                      onClick={() => setSelectedDistrict(dp.district === selectedDistrict ? 'All' : dp.district)}
                      className="text-[#B8502E] font-semibold hover:underline"
                    >
                      {selectedDistrict === dp.district ? 'Reset' : 'Filter &rarr;'}
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. DEEP HERITAGE EXPLORER: ODOP, GI, CRAFTS & FOODS                       */}
        {/* ========================================================================= */}
        <section id="state-heritage-explorer" className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#EAE2D5] pb-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#B8502E]">
                State Catalog &amp; Certifications
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C241E] mt-1">
                Explore the Heritage of {state.name}
              </h2>
              <p className="text-sm text-[#6B5A4B] mt-1">
                Browse official ODOP champions, certified GI registrations, traditional handicrafts, and regional culinary treasures.
              </p>
            </div>

            {/* Interactive Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: `All Products (${stateProducts.length})` },
                { id: 'odop', label: `ODOP (${odopProducts.length})` },
                { id: 'gi', label: `GI Registrations (${giProducts.length})` },
                { id: 'foods', label: `Regional Foods & Crops (${heritageInfo.foods.length})` },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveHeritageTab(tab.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    activeHeritageTab === tab.id
                      ? 'bg-[#B8502E] text-white shadow-sm'
                      : 'bg-white text-[#6B5A4B] border border-[#DECFC0] hover:bg-[#F6EFE7]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Render Products when Tab is 'all', 'odop', or 'gi' */}
          {(activeHeritageTab === 'all' || activeHeritageTab === 'odop' || activeHeritageTab === 'gi') && (
            <div>
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {(activeHeritageTab === 'odop'
                    ? odopProducts
                    : activeHeritageTab === 'gi'
                    ? giProducts
                    : filteredProducts
                  ).map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onSelect={(id) => onSelectProduct(id)}
                    />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-[#DECFC0] p-10 text-center max-w-lg mx-auto">
                  <Compass className="w-8 h-8 text-[#8C7662] mx-auto mb-3" />
                  <h3 className="font-serif text-lg font-bold text-[#2C241E]">
                    No Products matching &apos;{selectedDistrict}&apos;
                  </h3>
                  <p className="text-xs text-[#6B5A4B] mt-1 mb-4">
                    Reset your district filter to view all products listed for {state.name}.
                  </p>
                  <button
                    onClick={() => setSelectedDistrict('All')}
                    className="px-4 py-2 rounded-lg bg-[#B8502E] text-white text-xs font-semibold"
                  >
                    View All {state.name} Products
                  </button>
                </div>
              )}
            </div>
          )}

          {/* ========================================================================= */}
          {/* 5. TRADITIONAL REGIONAL FOODS & AGRARIAN SUPERFOODS (GI)                  */}
          {/* ========================================================================= */}
          {(activeHeritageTab === 'all' || activeHeritageTab === 'foods') && (
            <div className="space-y-6 pt-6">
              <div className="flex items-center gap-2">
                <Utensils className="w-5 h-5 text-[#8C4A27]" />
                <h3 className="font-serif text-2xl font-bold text-[#2C241E]">
                  Traditional Foods &amp; Agrarian GI Superfoods of {state.name}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {heritageInfo.foods.map((food, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-[#E5DACD] p-6 shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-serif text-base font-bold text-[#2C241E]">
                          {food.name}
                        </span>
                        {food.isGI && (
                          <span className="text-[10px] font-bold text-[#246243] bg-[#EAF2ED] px-2 py-0.5 rounded border border-[#CDE1D6] shrink-0">
                            GI Certified
                          </span>
                        )}
                      </div>

                      {food.district && (
                        <span className="text-[11px] text-[#8C7662] block mb-2 font-medium">
                          Origin: {food.district}
                        </span>
                      )}

                      <p className="text-xs text-[#5A4D43] leading-relaxed">
                        {food.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-[#F0E6DA] text-[11px] text-[#8C4A27] font-semibold flex items-center justify-between">
                      <span>Heritage Nutrition</span>
                      <span>Verified Terroir &bull; {state.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* ========================================================================= */}
        {/* 6. STORIES & LEGENDS ASSOCIATED WITH THE STATE                            */}
        {/* ========================================================================= */}
        <section id="legends-section" className="space-y-6">
          <div className="border-b border-[#EAE2D5] pb-4">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#B8502E] flex items-center gap-1.5">
              <ScrollText className="w-3.5 h-3.5" />
              <span>Cultural Folklore &amp; Lore</span>
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#2C241E] mt-1 font-bold">
              Stories &amp; Legends of {state.name}
            </h2>
            <p className="text-xs sm:text-sm text-[#6B5A4B] mt-1">
              Ancient epics, royal patronage legends, and folklore that shape the spiritual essence of {state.name}&apos;s arts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {heritageInfo.legends.map((legend, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E5DACD] p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold text-[#B8502E] uppercase tracking-wider bg-[#F9EFE9] px-2 py-0.5 rounded">
                    {legend.association}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#2C241E] mt-3 mb-2">
                    {legend.title}
                  </h3>
                  <p className="text-xs text-[#5A4D43] leading-relaxed">
                    {legend.excerpt}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#F0E6DA] text-[11px] text-[#8C7662]">
                  Documented Oral History &bull; {state.name}
                </div>
              </div>
            ))}
          </div>

          {/* Curated Editorial Stories if available */}
          {stateStories.length > 0 && (
            <div className="pt-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8C7662] block mb-4">
                Long-form Cultural Chronicles
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {stateStories.map((story) => (
                  <StoryCard
                    key={story.id}
                    story={story}
                    onSelectStory={(id) => onSelectStory(id)}
                  />
                ))}
              </div>
            </div>
          )}
        </section>

        {/* ========================================================================= */}
        {/* 7. ARTISANS, COMMUNITIES & MAKERS OF THE STATE                            */}
        {/* ========================================================================= */}
        <section id="artisans-section" className="space-y-8 bg-[#F6EFE7] rounded-3xl border border-[#E8DDCF] p-6 sm:p-10">
          <div className="border-b border-[#DFD2C2] pb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE3D5] text-[#8C4A27] text-xs font-semibold uppercase tracking-wider mb-2 border border-[#DFD0BE]">
              <Users className="w-3.5 h-3.5 text-[#B8502E]" />
              <span>Guardians of the Craft</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C241E]">
              Artisans, Communities &amp; Makers of {state.name}
            </h2>
            <p className="text-sm text-[#6A5849] mt-1">
              Meet the hereditary guilds, women cooperatives, and master craftspersons keeping the traditions alive.
            </p>
          </div>

          {/* Master Artisan Profiles if available */}
          {stateArtisans.length > 0 && (
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8C4A27]">
                Master Craftspersons &amp; Awardees
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {stateArtisans.map((artisan) => (
                  <div
                    key={artisan.id}
                    className="bg-white rounded-2xl border border-[#DECFC0] p-5 shadow-xs flex flex-col sm:flex-row gap-5"
                  >
                    <div className="w-full sm:w-36 h-36 rounded-xl overflow-hidden bg-[#241C16] shrink-0">
                      <img
                        src={artisan.image}
                        alt={artisan.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <h4 className="font-serif text-base font-bold text-[#2C241E]">
                            {artisan.name}
                          </h4>
                          <span className="text-[10px] bg-[#FAF8F5] text-[#8C4A27] px-2 py-0.5 rounded border border-[#DFD0BE]">
                            {artisan.experienceYears}
                          </span>
                        </div>
                        <p className="text-xs text-[#B8502E] font-semibold mb-2">
                          {artisan.craft} &bull; {artisan.district}
                        </p>
                        <p className="text-xs text-[#5A4D43] leading-relaxed line-clamp-3">
                          {artisan.bio}
                        </p>
                      </div>
                      <div className="pt-3 mt-2 border-t border-[#F0E6DA] text-[11px] text-[#8C7662]">
                        Community: {artisan.community}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Traditional Artisan Lineages & Guilds */}
          <div className="space-y-4 pt-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8C4A27]">
              Hereditary Guilds &amp; Community Collectives
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {heritageInfo.communities.map((comm, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#DECFC0] p-5 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-serif text-base font-bold text-[#2C241E] mb-1">
                      {comm.name}
                    </h4>
                    <span className="text-xs text-[#B8502E] font-semibold block mb-2">
                      {comm.craft}
                    </span>
                    <p className="text-xs text-[#5A4D43] leading-relaxed">
                      {comm.heritage}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-[#F0E6DA] text-[11px] text-[#8C7662]">
                    Generational Lineage &bull; {state.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. DOCUMENTARY PHOTOGRAPHY ARCHIVE                                        */}
        {/* ========================================================================= */}
        {state.gallery && state.gallery.length > 0 && (
          <section className="space-y-6">
            <div className="border-b border-[#EAE2D5] pb-4">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#B8502E] flex items-center gap-1.5">
                <Camera className="w-3.5 h-3.5" />
                <span>Documentary Photography</span>
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#2C241E] mt-1 font-bold">
                Visual Archive: {state.name} at Work
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {state.gallery.map((img, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-[#EAE2D5] overflow-hidden shadow-xs">
                  <div className="aspect-[4/3] bg-[#241C16] overflow-hidden">
                    <img
                      src={img.url}
                      alt={img.caption}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = GENERIC_ODOP_HERITAGE_FALLBACK_IMAGE;
                      }}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-[#5A4D43] leading-relaxed italic">
                      {img.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Bottom Navigation & Explore More States Action */}
        <div className="pt-12 pb-6 border-t border-[#DECFC0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#8C7662] hover:text-[#2C241E] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to States &amp; Union Territories Directory</span>
          </button>

          <button
            id="bottom-explore-state-cta"
            onClick={handleExploreState}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2C241E] text-white text-xs sm:text-sm font-semibold hover:bg-[#3D322A] transition-all shadow-sm"
          >
            <span>Explore More of {state.name}</span>
            <ArrowRight className="w-4 h-4 text-[#C45A34]" />
          </button>
        </div>
      </div>
    </div>
  );
};
