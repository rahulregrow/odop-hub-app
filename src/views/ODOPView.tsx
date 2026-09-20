import React, { useState, useMemo } from 'react';
import { Compass, MapPin, Building2, TrendingUp, ShieldCheck, ArrowRight, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/products';
import { ProductCard } from '../components/ProductCard';

interface ODOPViewProps {
  onSelectProduct: (productId: string) => void;
  onNavigate: (view: string, params?: { stateId?: string; productId?: string }) => void;
  onOpenODOPInfo?: () => void;
}

export const ODOPView: React.FC<ODOPViewProps> = ({
  onSelectProduct,
  onNavigate,
  onOpenODOPInfo,
}) => {
  const [selectedState, setSelectedState] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Filter only products that have ODOP designation
  const odopProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((p) => p.isODOP);
  }, []);

  const availableStates = useMemo(() => {
    const states = new Set(odopProducts.map((p) => p.state));
    return ['All', ...Array.from(states).sort()];
  }, [odopProducts]);

  const availableCategories = useMemo(() => {
    const cats = new Set(odopProducts.map((p) => p.category));
    return ['All', ...Array.from(cats).sort()];
  }, [odopProducts]);

  const filteredProducts = useMemo(() => {
    return odopProducts.filter((p) => {
      const stateMatch = selectedState === 'All' || p.state === selectedState;
      const catMatch = selectedCategory === 'All' || p.category === selectedCategory;
      return stateMatch && catMatch;
    });
  }, [odopProducts, selectedState, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Editorial Header */}
      <section className="bg-gradient-to-b from-[#F3EDE2] via-[#FAF8F5] to-[#FAF8F5] pt-12 pb-16 border-b border-[#EAE2D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE3D5] text-[#8C4A27] text-xs font-semibold tracking-wider uppercase mb-4 border border-[#DFD0BE]">
              <span className="w-2 h-2 rounded-full bg-[#B8502E]" />
              National Economic &amp; Cultural Initiative
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#2C241E] leading-[1.15]">
              One District One Product (ODOP)
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#5A493B] leading-relaxed font-sans">
              Transforming every one of India’s 750+ districts into an autonomous, self-reliant economic and cultural powerhouse by unlocking indigenous craft clusters, agricultural superfoods, and artisanal heritage.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenODOPInfo}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2C241E] text-white text-xs sm:text-sm font-medium hover:bg-[#43372E] transition-colors"
              >
                <Sparkles className="w-4 h-4 text-[#C45A34]" />
                <span>ODOP vs GI: The Comparative Guide</span>
              </button>
              <button
                onClick={() => onNavigate('gi')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-[#DCD3C4] text-[#4A3E34] text-xs sm:text-sm font-medium hover:bg-[#F3EEE6] transition-colors"
              >
                <span>Explore GI Tagged Products</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-[#E8DFD3] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-[#F5ECE2] text-[#B8502E] flex items-center justify-center mb-4">
              <Building2 className="w-5 h-5" />
            </div>
            <h2 className="font-serif font-bold text-lg text-[#2C241E]">District-Led Growth</h2>
            <p className="text-xs sm:text-sm text-[#6C5B4C] mt-2 leading-relaxed">
              Decentralizes industrial development by establishing specialized common facility centers, testing labs, and processing units in the home district of the craft.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E8DFD3] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-[#E8F0EB] text-[#246243] flex items-center justify-center mb-4">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h2 className="font-serif font-bold text-lg text-[#2C241E]">Global Export Readiness</h2>
            <p className="text-xs sm:text-sm text-[#6C5B4C] mt-2 leading-relaxed">
              Provides master artisans and micro-enterprises with barcode integration, eco-friendly packaging, quality certifications, and direct links to global markets.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E8DFD3] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-[#F4EFE6] text-[#8C6D37] flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="font-serif font-bold text-lg text-[#2C241E]">Living Heritage Preservation</h2>
            <p className="text-xs sm:text-sm text-[#6C5B4C] mt-2 leading-relaxed">
              Protects ancient matrilineal and community techniques—from Tikuli and Sikki to Channapatna—ensuring continuous inter-generational livelihoods.
            </p>
          </div>
        </div>
      </section>

      {/* Main ODOP Product Directory */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#EAE2D5]">
          <div>
            <div className="text-xs uppercase tracking-widest font-semibold text-[#8C7662]">
              District Champions
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C241E] mt-1">
              Explore ODOP Designated Products
            </h2>
            <p className="text-xs sm:text-sm text-[#6C5B4C] mt-1">
              Displaying {filteredProducts.length} verified ODOP products from across India
            </p>
          </div>

          {/* Filter dropdowns */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs font-medium text-[#6C5B4C]">
              <Filter className="w-3.5 h-3.5" />
              <span>Filter:</span>
            </div>

            {/* State Filter */}
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="px-3 py-1.5 rounded-lg bg-white border border-[#DCD3C4] text-xs font-medium text-[#3E332A] focus:outline-none focus:border-[#B8502E]"
            >
              {availableStates.map((st) => (
                <option key={st} value={st}>
                  {st === 'All' ? 'All States' : st}
                </option>
              ))}
            </select>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-1.5 rounded-lg bg-white border border-[#DCD3C4] text-xs font-medium text-[#3E332A] focus:outline-none focus:border-[#B8502E]"
            >
              {availableCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === 'All' ? 'All Categories' : cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 text-[#7A6755]">
            <p className="text-base font-medium">No ODOP products match your active filter.</p>
            <button
              onClick={() => {
                setSelectedState('All');
                setSelectedCategory('All');
              }}
              className="mt-3 text-xs text-[#B8502E] underline font-semibold"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={(id) => onSelectProduct(id)}
              />
            ))}
          </div>
        )}

        {/* Informational Callout */}
        <div className="mt-16 bg-[#F5EFE6] border border-[#E5DACB] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-[#8C4A27]">
              District Governance &amp; Scale
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2C241E] mt-1">
              Are you an artisan cooperative or district administrator?
            </h3>
            <p className="text-xs sm:text-sm text-[#5C4C3F] mt-2 max-w-2xl leading-relaxed">
              ODOP Hub is dedicated to building a comprehensive digital repository for India’s 750+ districts. We provide master artisans with storytelling, photographic archival documentation, and international visibility.
            </p>
          </div>
          <button
            onClick={() => onNavigate('about')}
            className="px-5 py-2.5 rounded-lg bg-[#2C241E] text-white text-xs sm:text-sm font-medium hover:bg-[#43372E] whitespace-nowrap"
          >
            Learn About the Project
          </button>
        </div>
      </section>
    </div>
  );
};
