import React, { useState } from 'react';
import { Layers, ArrowRight, Compass, Search, Sparkles, Filter } from 'lucide-react';
import { CRAFT_CATEGORIES } from '../data/categories';
import { PRODUCTS_DATA } from '../data/products';
import { ProductCard } from '../components/ProductCard';

interface TraditionalArtsViewProps {
  onNavigate: (
    view: string,
    params?: { stateId?: string; productId?: string; category?: string }
  ) => void;
}

export const TraditionalArtsView: React.FC<TraditionalArtsViewProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const filteredCategories = CRAFT_CATEGORIES.filter((cat) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return cat.name.toLowerCase().includes(q) || cat.description.toLowerCase().includes(q);
  });

  // Sample products matching selected category or top highlights
  const displayedProducts = selectedCategory === 'ALL'
    ? PRODUCTS_DATA.slice(0, 4)
    : PRODUCTS_DATA.filter((p) => p.category === selectedCategory).slice(0, 6);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-24">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-[#E8DFC2]">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE3D5] text-[#8C4A27] text-xs font-semibold uppercase tracking-wider mb-2 border border-[#DFD0BE]">
            <Layers className="w-3.5 h-3.5 text-[#B8502E]" />
            <span>Disciplines &amp; Media</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#2C241E] font-normal tracking-tight">
            Traditional Disciplines &amp; Media
          </h1>
          <p className="text-sm sm:text-base text-[#6B5A4B] mt-2 leading-relaxed font-light">
            Explore India&apos;s living heritage classified by medium and material lineage. Discover ancient lineages of ritual folk painting, handloom textiles, natural fibers, pottery, metalware, and superfoods.
          </p>
        </div>

        {/* Quick Search inside Categories */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C7662]" />
          <input
            type="text"
            placeholder="Search disciplines or media..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#D8CCBD] bg-white text-xs sm:text-sm text-[#2C241E] placeholder:text-[#A89886] focus:outline-none focus:ring-2 focus:ring-[#B8502E] shadow-xs"
          />
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
        {filteredCategories.map((cat) => (
          <div
            key={cat.slug}
            onClick={() => onNavigate('explore', { category: cat.name })}
            className="group cursor-pointer bg-white rounded-2xl border border-[#EAE2D5] overflow-hidden p-6 flex flex-col justify-between hover:border-[#B8502E]/60 hover:shadow-md transition-all duration-300"
          >
            <div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-serif text-xl font-bold text-[#2C241E] group-hover:text-[#B8502E] transition-colors">
                    {cat.name}
                  </h2>
                  <p className="text-xs text-[#6B5A4B] mt-2 leading-relaxed line-clamp-3">
                    {cat.description}
                  </p>
                </div>
                <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-[#EFE9DE] border border-[#E5DFD3]">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F2EDE5] flex items-center justify-between text-xs">
              <span className="text-[#8C7662] font-medium">
                {cat.count} Documented Traditions
              </span>
              <span className="inline-flex items-center gap-1 font-semibold text-[#B8502E] group-hover:translate-x-0.5 transition-transform">
                <span>Explore Crafts</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Products from Selected Discipline Banner */}
      <div className="bg-[#F8F4EE] rounded-3xl border border-[#E5DCD0] p-6 sm:p-10 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 pb-4 border-b border-[#E2D6C6]">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EFE3D5] text-[#8C4A27] text-[11px] font-semibold uppercase tracking-wider mb-1.5 border border-[#DFD0BE]">
              <Sparkles className="w-3 h-3 text-[#B8502E]" />
              <span>Living Masterpieces</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#2C241E]">
              Featured Masterpieces by Discipline
            </h3>
            <p className="text-xs sm:text-sm text-[#6A5849] mt-1 font-light">
              Explore authentic district specialties created with ancient indigenous techniques.
            </p>
          </div>

          <button
            onClick={() => onNavigate('explore')}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#B8502E] text-white text-xs font-semibold hover:bg-[#A14120] transition-colors whitespace-nowrap self-start sm:self-auto"
          >
            <span>Explore All in Catalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={(id) => onNavigate('product-detail', { productId: id })}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
