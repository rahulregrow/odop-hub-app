import React, { useState, useMemo } from 'react';
import { Shield, Award, Scale, BookCheck, ArrowRight, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/products';
import { ProductCard } from '../components/ProductCard';

interface GIViewProps {
  onSelectProduct: (productId: string) => void;
  onNavigate: (view: string, params?: { stateId?: string; productId?: string }) => void;
  onOpenODOPInfo?: () => void;
}

export const GIView: React.FC<GIViewProps> = ({
  onSelectProduct,
  onNavigate,
  onOpenODOPInfo,
}) => {
  const [selectedState, setSelectedState] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Filter only products that have GI registration
  const giProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((p) => p.isGI);
  }, []);

  const availableStates = useMemo(() => {
    const states = new Set(giProducts.map((p) => p.state));
    return ['All', ...Array.from(states).sort()];
  }, [giProducts]);

  const availableCategories = useMemo(() => {
    const cats = new Set(giProducts.map((p) => p.category));
    return ['All', ...Array.from(cats).sort()];
  }, [giProducts]);

  const filteredProducts = useMemo(() => {
    return giProducts.filter((p) => {
      const stateMatch = selectedState === 'All' || p.state === selectedState;
      const catMatch = selectedCategory === 'All' || p.category === selectedCategory;
      return stateMatch && catMatch;
    });
  }, [giProducts, selectedState, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Editorial Header */}
      <section className="bg-gradient-to-b from-[#EBF2EE] via-[#FAF8F5] to-[#FAF8F5] pt-12 pb-16 border-b border-[#E2DDD2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E2ECE6] text-[#246243] text-xs font-semibold tracking-wider uppercase mb-4 border border-[#CADBD1]">
              <Shield className="w-3.5 h-3.5" />
              <span>Legal Terroir &amp; Authenticity Protection</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#2C241E] leading-[1.15]">
              Geographical Indications (GI)
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#4A554E] leading-relaxed font-sans">
              India’s intellectual property seal certifying that the quality, reputation, or unique characteristics of a product are inextricably rooted in its specific geographical origin, local ecology, and centuries-old artisan traditions.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenODOPInfo}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#246243] text-white text-xs sm:text-sm font-medium hover:bg-[#1C4E35] transition-colors"
              >
                <Sparkles className="w-4 h-4 text-[#C1E2CE]" />
                <span>GI vs ODOP Comparison</span>
              </button>
              <button
                onClick={() => onNavigate('odop')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-[#DCD3C4] text-[#4A3E34] text-xs sm:text-sm font-medium hover:bg-[#F3EEE6] transition-colors"
              >
                <span>Explore ODOP Initiative</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* GI Pillars Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-[#DCE4DF] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-[#EAF2ED] text-[#246243] flex items-center justify-center mb-4">
              <Scale className="w-5 h-5" />
            </div>
            <h2 className="font-serif font-bold text-lg text-[#2C241E]">Statutory Legal Shield</h2>
            <p className="text-xs sm:text-sm text-[#57645C] mt-2 leading-relaxed">
              Enacted under the GI of Goods Act 1999 (administered from Chennai). Gives authorized user groups legal recourse against counterfeit imitations and deceptive labeling.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#DCE4DF] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-[#F5ECE2] text-[#B8502E] flex items-center justify-center mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h2 className="font-serif font-bold text-lg text-[#2C241E]">Terroir &amp; Ecological Purity</h2>
            <p className="text-xs sm:text-sm text-[#57645C] mt-2 leading-relaxed">
              Guarantees the intimate bond between raw material and regional ecosystem—like Darbhanga’s wetlands for Makhana or Koraput’s forest soil for Aal root dye.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#DCE4DF] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-[#F4EFE6] text-[#8C6D37] flex items-center justify-center mb-4">
              <BookCheck className="w-5 h-5" />
            </div>
            <h2 className="font-serif font-bold text-lg text-[#2C241E]">Generational Lineage</h2>
            <p className="text-xs sm:text-sm text-[#57645C] mt-2 leading-relaxed">
              Recognizes that the technique cannot be patented by a private corporation; it belongs in perpetuity to the community of traditional makers who inherited it.
            </p>
          </div>
        </div>
      </section>

      {/* Main GI Catalog Directory */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#EAE2D5]">
          <div>
            <div className="text-xs uppercase tracking-widest font-semibold text-[#246243] flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" />
              <span>Certified Registry</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C241E] mt-1">
              Explore GI-Tagged Heritage Products
            </h2>
            <p className="text-xs sm:text-sm text-[#6C5B4C] mt-1">
              Displaying {filteredProducts.length} authenticated GI products with certified registry references
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
              className="px-3 py-1.5 rounded-lg bg-white border border-[#DCD3C4] text-xs font-medium text-[#3E332A] focus:outline-none focus:border-[#246243]"
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
              className="px-3 py-1.5 rounded-lg bg-white border border-[#DCD3C4] text-xs font-medium text-[#3E332A] focus:outline-none focus:border-[#246243]"
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
            <p className="text-base font-medium">No GI products match your active filter.</p>
            <button
              onClick={() => {
                setSelectedState('All');
                setSelectedCategory('All');
              }}
              className="mt-3 text-xs text-[#246243] underline font-semibold"
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

        {/* Registry Educational Callout */}
        <div className="mt-16 bg-[#F2F7F4] border border-[#D3E3D9] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-[#246243]">
              Authenticity Standards
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2C241E] mt-1">
              How does an Indian craft or agricultural harvest earn a GI tag?
            </h3>
            <p className="text-xs sm:text-sm text-[#46574D] mt-2 max-w-2xl leading-relaxed">
              The applicant must be an association of producers or collective body representing genuine artisans. They submit historical proof spanning centuries, chemical or microscopic uniqueness, geographic boundary demarcation, and an inspection mechanism to maintain stringent quality standards.
            </p>
          </div>
          <button
            onClick={onOpenODOPInfo}
            className="px-5 py-2.5 rounded-lg bg-[#246243] text-white text-xs sm:text-sm font-medium hover:bg-[#1A4B33] whitespace-nowrap"
          >
            Read GI Registry Guide
          </button>
        </div>
      </section>
    </div>
  );
};
