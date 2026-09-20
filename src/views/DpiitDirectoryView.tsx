import React, { useState, useMemo } from 'react';
import {
  Building2,
  Search,
  Filter,
  Award,
  ChevronRight,
  Sparkles,
  MapPin,
  Tag,
  Layers,
  BookOpen,
  Info,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  ArrowUpDown,
} from 'lucide-react';
import {
  DPIIT_DISTRICT_ODOP_DATA,
  STATE_GI_REGISTRY,
  DistrictODOP,
  StateGIRegistryItem,
} from '../data/dpiitDirectory';
import { CRAFT_CATEGORIES } from '../data/categories';

interface DpiitDirectoryViewProps {
  onNavigate: (view: any, params?: any) => void;
  initialTab?: 'odop' | 'gi';
}

export const DpiitDirectoryView: React.FC<DpiitDirectoryViewProps> = ({
  onNavigate,
  initialTab = 'odop',
}) => {
  const [activeTab, setActiveTab] = useState<'odop' | 'gi'>(initialTab);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState<string>('ALL');
  const [selectedTierFilter, setSelectedTierFilter] = useState<'all' | 'has-multi' | 'gi-only'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  // Extract list of all unique states in data
  const stateOptions = useMemo(() => {
    const statesSet = new Set<string>();
    DPIIT_DISTRICT_ODOP_DATA.forEach((item) => statesSet.add(item.state));
    Object.keys(STATE_GI_REGISTRY).forEach((state) => statesSet.add(state));
    return Array.from(statesSet).sort();
  }, []);

  // Filtered ODOP Districts
  const filteredODOPDistricts = useMemo(() => {
    return DPIIT_DISTRICT_ODOP_DATA.filter((item) => {
      // State filter
      if (selectedState !== 'ALL' && item.state !== selectedState) {
        return false;
      }

      // Tier filter
      if (selectedTierFilter === 'has-multi' && !item.secondaryProduct) {
        return false;
      }
      if (selectedTierFilter === 'gi-only' && !item.giCertified) {
        return false;
      }

      // Category filter
      if (
        selectedCategory !== 'ALL' &&
        item.primaryCategory !== selectedCategory &&
        item.secondaryCategory !== selectedCategory &&
        item.tertiaryCategory !== selectedCategory
      ) {
        return false;
      }

      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesDistrict = item.district.toLowerCase().includes(query);
        const matchesState = item.state.toLowerCase().includes(query);
        const matchesPrimary = item.primaryProduct.toLowerCase().includes(query);
        const matchesSecondary = item.secondaryProduct?.toLowerCase().includes(query) || false;
        const matchesTertiary = item.tertiaryProduct?.toLowerCase().includes(query) || false;
        const matchesCluster = item.dpiitFocalCluster?.toLowerCase().includes(query) || false;
        return (
          matchesDistrict ||
          matchesState ||
          matchesPrimary ||
          matchesSecondary ||
          matchesTertiary ||
          matchesCluster
        );
      }

      return true;
    });
  }, [searchQuery, selectedState, selectedTierFilter, selectedCategory]);

  // Filtered GI Items
  const filteredGIItems = useMemo(() => {
    const allGI: StateGIRegistryItem[] = [];
    Object.entries(STATE_GI_REGISTRY).forEach(([state, items]) => {
      if (selectedState === 'ALL' || selectedState === state) {
        allGI.push(...items);
      }
    });

    if (searchQuery.trim() === '') {
      return allGI;
    }

    const query = searchQuery.toLowerCase();
    return allGI.filter((gi) => {
      return (
        gi.name.toLowerCase().includes(query) ||
        gi.state.toLowerCase().includes(query) ||
        gi.districtsCovered.toLowerCase().includes(query) ||
        gi.category.toLowerCase().includes(query) ||
        gi.description.toLowerCase().includes(query)
      );
    });
  }, [selectedState, searchQuery]);

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#2C241E] pb-24">
      {/* Header Banner */}
      <section className="bg-[#2C241E] text-[#FAF8F5] pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#3E342B] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C45A34_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3E342B] border border-[#A87C38]/40 text-[#E2D2BE] text-xs font-semibold tracking-wider uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C45A34]" />
              <span>DPIIT &amp; GI Official Registry</span>
            </div>
            <span className="text-xs text-[#A89A8C]">
              Ministry of Commerce &amp; Industry &bull; Government of India
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F7F3EE] mb-4">
            District ODOP &amp; State GI Registry
          </h1>
          
          <p className="text-[#DFD6C9] text-sm sm:text-base max-w-3xl leading-relaxed">
            Explore the official DPIIT-designated <strong>Primary, Secondary, and Tertiary One District One Product (ODOP)</strong> classifications alongside registered <strong>Geographical Indications (GI)</strong> across Indian states and union territories.
          </p>

          {/* Tab Navigation */}
          <div className="mt-8 flex items-center gap-3">
            <button
              onClick={() => setActiveTab('odop')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-sm ${
                activeTab === 'odop'
                  ? 'bg-[#B8502E] text-white ring-2 ring-[#B8502E]/30'
                  : 'bg-[#3A3027] text-[#D8CCBD] hover:bg-[#483C31]'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>District ODOP Directory (Primary / Secondary / Tertiary)</span>
            </button>
            <button
              onClick={() => setActiveTab('gi')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-sm ${
                activeTab === 'gi'
                  ? 'bg-[#B8502E] text-white ring-2 ring-[#B8502E]/30'
                  : 'bg-[#3A3027] text-[#D8CCBD] hover:bg-[#483C31]'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>State GI Products Registry</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content & Filters */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-md border border-[#E8DFD3] mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-[#8C7662] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  activeTab === 'odop'
                    ? 'Search district, state, primary/secondary product...'
                    : 'Search registered GI product, state, or district...'
                }
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#D8CCBD] bg-[#FAF8F5] text-sm text-[#2C241E] focus:outline-none focus:ring-2 focus:ring-[#B8502E]/30 focus:border-[#B8502E]"
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

            {/* State Selector */}
            <div className="md:col-span-4">
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8CCBD] bg-[#FAF8F5] text-sm text-[#2C241E] font-medium focus:outline-none focus:ring-2 focus:ring-[#B8502E]/30 focus:border-[#B8502E]"
              >
                <option value="ALL">All States &amp; Union Territories ({stateOptions.length})</option>
                {stateOptions.map((st) => (
                  <option key={st} value={st}>
                    {st}
                  </option>
                ))}
              </select>
            </div>

            {/* Sub-Filters */}
            {activeTab === 'odop' && (
              <div className="md:col-span-3">
                <select
                  value={selectedTierFilter}
                  onChange={(e) => setSelectedTierFilter(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8CCBD] bg-[#FAF8F5] text-sm text-[#2C241E] font-medium focus:outline-none focus:ring-2 focus:ring-[#B8502E]/30 focus:border-[#B8502E]"
                >
                  <option value="all">All District Tiers</option>
                  <option value="has-multi">Multi-Product Districts (Secondary/Tertiary)</option>
                  <option value="gi-only">GI-Certified Districts Only</option>
                </select>
              </div>
            )}
          </div>

          {/* Quick Statistics Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#F2ECE4] text-xs text-[#6B5A4B]">
            <div className="flex items-center gap-2">
              <Info className="w-3.5 h-3.5 text-[#B8502E]" />
              <span>
                {activeTab === 'odop' ? (
                  <>
                    Showing <strong>{filteredODOPDistricts.length}</strong> official district entries
                    {selectedState !== 'ALL' && ` in ${selectedState}`}
                  </>
                ) : (
                  <>
                    Showing <strong>{filteredGIItems.length}</strong> registered GI products
                    {selectedState !== 'ALL' && ` in ${selectedState}`}
                  </>
                )}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setSelectedState('ALL');
                  setSearchQuery('');
                  setSelectedTierFilter('all');
                  setSelectedCategory('ALL');
                }}
                className="text-[#B8502E] hover:underline font-medium"
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div>

        {/* TAB 1: DISTRICT ODOP DIRECTORY */}
        {activeTab === 'odop' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredODOPDistricts.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-6 border border-[#E8DFD3] shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* District Header */}
                    <div className="flex items-start justify-between gap-3 mb-4 pb-3 border-b border-[#F2ECE4]">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-serif text-xl font-bold text-[#2C241E]">
                            {item.district}
                          </h3>
                          <span className="text-xs px-2 py-0.5 rounded bg-[#F4EDE2] text-[#7A6451] font-semibold">
                            {item.stateCode}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-[#7A6451] mt-0.5">
                          <MapPin className="w-3 h-3 text-[#B8502E]" />
                          <span>{item.state} &bull; {item.region} Region</span>
                        </div>
                      </div>

                      {item.giCertified && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#EBF5EE] text-[#1E7245] text-xs font-semibold border border-[#C5E5D1] shrink-0">
                          <Award className="w-3.5 h-3.5" />
                          <span>GI Verified</span>
                        </span>
                      )}
                    </div>

                    {/* Product Tiers List */}
                    <div className="space-y-3.5">
                      {/* 1. Primary Product */}
                      <div className="p-3.5 rounded-xl bg-[#FAF5EE] border border-[#ECDCC9]">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-[#B8502E] text-white">
                            <CheckCircle2 className="w-3 h-3" />
                            Primary ODOP Product
                          </span>
                          <span className="text-[11px] font-semibold text-[#8C7662]">
                            {item.primaryCategory}
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-[#2C241E]">
                          {item.primaryProduct}
                        </h4>
                      </div>

                      {/* 2. Secondary Product */}
                      {item.secondaryProduct && (
                        <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EAE3D6]">
                          <div className="flex items-center justify-between gap-2 mb-0.5">
                            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#544436] text-[#FAF8F5]">
                              Secondary ODOP Product
                            </span>
                            <span className="text-[11px] text-[#8C7662]">
                              {item.secondaryCategory}
                            </span>
                          </div>
                          <p className="text-sm font-semibold text-[#3C3026]">
                            {item.secondaryProduct}
                          </p>
                        </div>
                      )}

                      {/* 3. Tertiary Product */}
                      {item.tertiaryProduct && (
                        <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EAE3D6]">
                          <div className="flex items-center justify-between gap-2 mb-0.5">
                            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#7A6451] text-[#FAF8F5]">
                              Tertiary ODOP Product
                            </span>
                            <span className="text-[11px] text-[#8C7662]">
                              {item.tertiaryCategory}
                            </span>
                          </div>
                          <p className="text-sm font-semibold text-[#3C3026]">
                            {item.tertiaryProduct}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Highlights & Focal Cluster */}
                    {item.keyHighlight && (
                      <p className="text-xs text-[#6B5A4B] mt-4 leading-relaxed line-clamp-2">
                        {item.keyHighlight}
                      </p>
                    )}

                    {item.dpiitFocalCluster && (
                      <div className="mt-3 text-[11px] text-[#8C7662] bg-[#F7F3EE] p-2 rounded-lg border border-[#EAE3D6]">
                        <span className="font-semibold text-[#4A3E34]">Focal Clusters: </span>
                        {item.dpiitFocalCluster}
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 mt-4 border-t border-[#F2ECE4] flex items-center justify-between">
                    <button
                      onClick={() => onNavigate('explore', { search: item.district })}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B8502E] hover:underline"
                    >
                      <span>Explore {item.district} in Catalog</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onNavigate('states', { stateId: item.state.toLowerCase().replace(/\s+/g, '-') })}
                      className="text-xs text-[#7A6451] hover:text-[#2C241E] font-medium"
                    >
                      View {item.state} Heritage &rarr;
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredODOPDistricts.length === 0 && (
              <div className="text-center py-16 bg-white rounded-2xl border border-[#E8DFD3] p-8">
                <Building2 className="w-12 h-12 text-[#B8502E]/60 mx-auto mb-3" />
                <h3 className="font-serif text-xl font-bold text-[#2C241E] mb-1">
                  No District Matches Found
                </h3>
                <p className="text-sm text-[#7A6451] max-w-md mx-auto mb-4">
                  No districts matching &quot;{searchQuery}&quot; or the selected filters were found in the official registry.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedState('ALL');
                    setSelectedTierFilter('all');
                  }}
                  className="px-4 py-2 rounded-lg bg-[#B8502E] text-white text-xs font-semibold hover:bg-[#9E4224]"
                >
                  Reset Search &amp; Filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: STATE GI REGISTRY */}
        {activeTab === 'gi' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGIItems.map((gi) => (
                <div
                  key={gi.id}
                  className="bg-white rounded-2xl p-5 border border-[#E8DFD3] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#EBF5EE] text-[#1E7245] border border-[#C5E5D1]">
                        {gi.category}
                      </span>
                      <span className="text-xs font-semibold text-[#8C7662] bg-[#FAF5EE] px-2 py-0.5 rounded border border-[#ECDCC9]">
                        Reg. {gi.registrationYear}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-[#2C241E] mb-1">
                      {gi.name}
                    </h3>

                    <div className="flex items-center gap-1.5 text-xs text-[#B8502E] font-medium mb-3">
                      <MapPin className="w-3 h-3 shrink-0" />
                      <span>{gi.state} &bull; {gi.districtsCovered}</span>
                    </div>

                    <p className="text-xs text-[#5A4D43] leading-relaxed mb-4">
                      {gi.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#F2ECE4] flex items-center justify-between">
                    <button
                      onClick={() => onNavigate('explore', { search: gi.name })}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#B8502E] hover:underline"
                    >
                      <span>Find Products in Catalog</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredGIItems.length === 0 && (
              <div className="text-center py-16 bg-white rounded-2xl border border-[#E8DFD3] p-8">
                <Award className="w-12 h-12 text-[#B8502E]/60 mx-auto mb-3" />
                <h3 className="font-serif text-xl font-bold text-[#2C241E] mb-1">
                  No GI Products Found
                </h3>
                <p className="text-sm text-[#7A6451] max-w-md mx-auto mb-4">
                  No registered GI goods found matching your search. Try another state or clear search.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedState('ALL');
                  }}
                  className="px-4 py-2 rounded-lg bg-[#B8502E] text-white text-xs font-semibold hover:bg-[#9E4224]"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* DPIIT Regulatory & Reference Footnote */}
        <div className="mt-12 bg-[#F3EDE3] p-6 rounded-2xl border border-[#DFD6C9] text-xs text-[#6B5A4B] flex items-start gap-4">
          <Info className="w-5 h-5 text-[#B8502E] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-semibold text-[#2C241E] text-sm">
              Official Reference &amp; Institutional Governance
            </h4>
            <p className="leading-relaxed">
              The One District One Product (ODOP) initiative is administered by the <strong>Department for Promotion of Industry and Internal Trade (DPIIT)</strong>, Ministry of Commerce and Industry, Government of India. Geographical Indications are registered under the Geographical Indications of Goods (Registration and Protection) Act, 1999 by the Controller General of Patents, Designs and Trade Marks (CGPDTM), Chennai.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};
