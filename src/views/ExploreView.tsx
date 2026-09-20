import React, { useState, useMemo } from 'react';
import { PRODUCTS_DATA } from '../data/products';
import { STATES_DATA } from '../data/states';
import { CRAFT_CATEGORIES } from '../data/categories';
import { CraftCategory } from '../types';
import { ProductCard } from '../components/ProductCard';
import { Search, Filter, X, RotateCcw, ShieldCheck, Award, MapPin, Sparkles } from 'lucide-react';

interface ExploreViewProps {
  onSelectProduct: (productId: string) => void;
  initialCategory?: string;
  initialState?: string;
  onOpenODOPInfo?: () => void;
}

export const ExploreView: React.FC<ExploreViewProps> = ({
  onSelectProduct,
  initialCategory,
  initialState,
  onOpenODOPInfo,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState<string>(initialState || 'ALL');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'ALL');
  const [filterODOPOnly, setFilterODOPOnly] = useState<boolean>(false);
  const [filterGIOnly, setFilterGIOnly] = useState<boolean>(false);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filter logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      // Search query matches product name, district, state, description, or tags
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesDistrict = product.district.toLowerCase().includes(q);
        const matchesState = product.state.toLowerCase().includes(q);
        const matchesDesc = product.shortDescription.toLowerCase().includes(q);
        const matchesTags = product.tags.some((t) => t.toLowerCase().includes(q));
        const matchesCategory = product.category.toLowerCase().includes(q);
        if (!matchesName && !matchesDistrict && !matchesState && !matchesDesc && !matchesTags && !matchesCategory) {
          return false;
        }
      }

      // State filter
      if (selectedState !== 'ALL') {
        if (product.state.toLowerCase() !== selectedState.toLowerCase() && product.stateCode !== selectedState) {
          return false;
        }
      }

      // Category filter
      if (selectedCategory !== 'ALL') {
        if (product.category !== selectedCategory) {
          return false;
        }
      }

      // ODOP filter
      if (filterODOPOnly && !product.isODOP) {
        return false;
      }

      // GI filter
      if (filterGIOnly && !product.isGI) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedState, selectedCategory, filterODOPOnly, filterGIOnly]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedState('ALL');
    setSelectedCategory('ALL');
    setFilterODOPOnly(false);
    setFilterGIOnly(false);
  };

  const hasActiveFilters =
    searchQuery.trim() !== '' ||
    selectedState !== 'ALL' ||
    selectedCategory !== 'ALL' ||
    filterODOPOnly ||
    filterGIOnly;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-24">
      {/* Header Section */}
      <div className="max-w-3xl mb-8">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#B8502E]">
          Cultural Discovery Catalog
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#2C241E] font-normal mt-1">
          Explore India’s Heritage
        </h1>
        <p className="text-sm sm:text-base text-[#6B5A4B] mt-2 leading-relaxed">
          Filter through centuries of handloom disciplines, GI-tagged masterpieces, ODOP district specialties, and living artisanal craft heritages.
        </p>
      </div>

      {/* Search & Quick Controls Bar */}
      <div className="bg-[#FDFDFB] rounded-2xl border border-[#EAE2D5] p-4 mb-8 shadow-sm">
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#8C7662] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="explore-search-input"
              type="text"
              placeholder="Search by craft, district, state, or material (e.g., Madhubani, Silk, Makhana)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#FAF8F5] border border-[#DFD6C5] text-sm text-[#2C241E] placeholder:text-[#9A8979] focus:outline-none focus:border-[#B8502E]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8C7662] hover:text-[#2C241E]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Toggle Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              id="filter-odop-toggle"
              onClick={() => setFilterODOPOnly(!filterODOPOnly)}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-colors border ${
                filterODOPOnly
                  ? 'bg-[#B8502E] text-white border-[#B8502E]'
                  : 'bg-[#FAF8F5] text-[#5A4D43] border-[#DFD6C5] hover:bg-[#F2ECE2]'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>ODOP Only</span>
            </button>

            <button
              id="filter-gi-toggle"
              onClick={() => setFilterGIOnly(!filterGIOnly)}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-colors border ${
                filterGIOnly
                  ? 'bg-[#2C241E] text-white border-[#2C241E]'
                  : 'bg-[#FAF8F5] text-[#5A4D43] border-[#DFD6C5] hover:bg-[#F2ECE2]'
              }`}
            >
              <Award className="w-3.5 h-3.5 text-[#E2B777]" />
              <span>GI Tagged Only</span>
            </button>

            {/* Mobile Filter Toggle */}
            <button
              id="mobile-filters-trigger"
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="md:hidden inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-[#FAF8F5] text-[#2C241E] border border-[#DFD6C5]"
            >
              <Filter className="w-3.5 h-3.5 text-[#B8502E]" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        {/* Desktop Filter Dropdowns Bar */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-3 mt-3 pt-3 border-t border-[#F2EDE5]">
          {/* State Filter */}
          <div>
            <label htmlFor="state-filter-select" className="text-[11px] font-semibold uppercase tracking-wider text-[#8C7662] block mb-1">
              State / Territory
            </label>
            <select
              id="state-filter-select"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full py-1.5 px-3 rounded-md bg-[#FAF8F5] border border-[#DFD6C5] text-xs text-[#2C241E] focus:outline-none focus:border-[#B8502E]"
            >
              <option value="ALL">All Indian States &amp; UTs</option>
              <option value="Bihar">Bihar (Featured Initial Focus)</option>
              <option value="Karnataka">Karnataka (Kinnal, Ilkal &amp; more)</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Odisha">Odisha</option>
              <option value="Jammu & Kashmir">Jammu &amp; Kashmir</option>
              <option value="Kerala">Kerala</option>
            </select>
          </div>

          {/* Category Filter */}
          <div>
            <label htmlFor="category-filter-select" className="text-[11px] font-semibold uppercase tracking-wider text-[#8C7662] block mb-1">
              Craft / Category
            </label>
            <select
              id="category-filter-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full py-1.5 px-3 rounded-md bg-[#FAF8F5] border border-[#DFD6C5] text-xs text-[#2C241E] focus:outline-none focus:border-[#B8502E]"
            >
              <option value="ALL">All Craft Disciplines</option>
              {CRAFT_CATEGORIES.map((cat) => (
                <option key={cat.name} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Designation Info Quick Access */}
          <div className="col-span-2 flex items-end justify-end">
            <button
              onClick={onOpenODOPInfo}
              className="text-xs text-[#8C7662] hover:text-[#B8502E] underline flex items-center gap-1 py-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>How are ODOP &amp; GI tags verified?</span>
            </button>
          </div>
        </div>

        {/* Mobile Filter Expandable Drawer */}
        {mobileFilterOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-[#F2EDE5] space-y-3">
            <div>
              <label htmlFor="mobile-state-select" className="text-xs font-semibold text-[#8C7662] block mb-1">State</label>
              <select
                id="mobile-state-select"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full py-2 px-3 rounded-md bg-[#FAF8F5] border border-[#DFD6C5] text-xs text-[#2C241E]"
              >
                <option value="ALL">All States</option>
                <option value="Bihar">Bihar (Featured Focus)</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Odisha">Odisha</option>
                <option value="Jammu & Kashmir">Jammu &amp; Kashmir</option>
                <option value="Kerala">Kerala</option>
              </select>
            </div>

            <div>
              <label htmlFor="mobile-category-select" className="text-xs font-semibold text-[#8C7662] block mb-1">Category</label>
              <select
                id="mobile-category-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full py-2 px-3 rounded-md bg-[#FAF8F5] border border-[#DFD6C5] text-xs text-[#2C241E]"
              >
                <option value="ALL">All Categories</option>
                {CRAFT_CATEGORIES.map((cat) => (
                  <option key={cat.name} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Visual Category Quick Select */}
      <div className="mb-6 -mt-3">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
          <button
            onClick={() => setSelectedCategory('ALL')}
            className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              selectedCategory === 'ALL'
                ? 'bg-[#B8502E] text-white shadow-sm'
                : 'bg-[#FAF8F5] text-[#6B5A4B] border border-[#DFD6C5] hover:border-[#B8502E]/60'
            }`}
          >
            All Disciplines
          </button>
          {CRAFT_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.name;
            return (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(isSelected ? 'ALL' : cat.name)}
                className={`shrink-0 flex items-center gap-2 pl-1 pr-3 py-1 rounded-full text-xs font-medium transition-all border ${
                  isSelected
                    ? 'bg-[#2C241E] text-white border-[#2C241E] shadow-sm'
                    : 'bg-[#FDFDFB] text-[#5A4D43] border-[#E2D8CB] hover:border-[#B8502E]/60'
                }`}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-5 h-5 rounded-full object-cover shrink-0"
                  referrerPolicy="no-referrer"
                />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Filter Chips & Results Count */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium text-[#7A6451]">
            Showing <strong className="text-[#2C241E]">{filteredProducts.length}</strong> heritage products
          </span>

          {/* Active chips */}
          {selectedState !== 'ALL' && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-[#EFE9DE] text-[#2C241E]">
              <span>State: {selectedState}</span>
              <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedState('ALL')} />
            </span>
          )}

          {selectedCategory !== 'ALL' && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-[#EFE9DE] text-[#2C241E]">
              <span>Category: {selectedCategory}</span>
              <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedCategory('ALL')} />
            </span>
          )}

          {filterODOPOnly && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-[#F7EBE6] text-[#B8502E]">
              <span>ODOP Only</span>
              <X className="w-3 h-3 cursor-pointer" onClick={() => setFilterODOPOnly(false)} />
            </span>
          )}

          {filterGIOnly && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-[#F5F0E8] text-[#8C6A33]">
              <span>GI Only</span>
              <X className="w-3 h-3 cursor-pointer" onClick={() => setFilterGIOnly(false)} />
            </span>
          )}
        </div>

        {hasActiveFilters && (
          <button
            id="btn-reset-filters"
            onClick={handleResetFilters}
            className="inline-flex items-center gap-1 text-xs text-[#B8502E] font-medium hover:underline"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset All Filters</span>
          </button>
        )}
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={(id) => onSelectProduct(id)}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-[#FDFDFB] rounded-2xl border border-[#EAE2D5] p-12 text-center max-w-lg mx-auto">
          <MapPin className="w-12 h-12 text-[#A89A8C] mx-auto mb-4 stroke-1" />
          <h3 className="font-serif text-2xl text-[#2C241E] font-bold">No Products Found</h3>
          <p className="text-xs sm:text-sm text-[#6B5A4B] mt-2 leading-relaxed">
            No heritage products match your current combination of filters. Try searching for a different district, clearing filters, or exploring all states.
          </p>
          <button
            onClick={handleResetFilters}
            className="mt-6 px-6 py-2.5 rounded-lg bg-[#B8502E] text-white text-xs font-semibold hover:bg-[#A14120] transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};
