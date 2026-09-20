import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
  ShieldCheck,
  ChevronDown,
  Layers,
  Award,
  Search,
  MapPin,
  ExternalLink,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  X,
} from 'lucide-react';
import {
  DPIIT_DISTRICT_ODOP_DATA,
  STATE_GI_REGISTRY,
  DistrictODOP,
  StateGIRegistryItem,
} from '../data/dpiitDirectory';

interface DpiitDropdownMenuProps {
  onNavigate: (view: string, params?: any) => void;
}

export const DpiitDropdownMenu: React.FC<DpiitDropdownMenuProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'odop' | 'gi'>('odop');
  const [selectedState, setSelectedState] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isOpen]);

  // Unique state names
  const statesList = useMemo(() => {
    const states = new Set<string>();
    DPIIT_DISTRICT_ODOP_DATA.forEach((d) => states.add(d.state));
    Object.keys(STATE_GI_REGISTRY).forEach((s) => states.add(s));
    return Array.from(states).sort();
  }, []);

  // Filtered ODOP districts for quick preview
  const filteredDistricts = useMemo(() => {
    return DPIIT_DISTRICT_ODOP_DATA.filter((item) => {
      if (selectedState !== 'ALL' && item.state !== selectedState) return false;
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        return (
          item.district.toLowerCase().includes(q) ||
          item.state.toLowerCase().includes(q) ||
          item.primaryProduct.toLowerCase().includes(q) ||
          (item.secondaryProduct && item.secondaryProduct.toLowerCase().includes(q)) ||
          (item.tertiaryProduct && item.tertiaryProduct.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [selectedState, searchQuery]);

  // Filtered GI registry items for quick preview
  const filteredGI = useMemo(() => {
    const all: StateGIRegistryItem[] = [];
    Object.entries(STATE_GI_REGISTRY).forEach(([state, items]) => {
      if (selectedState === 'ALL' || selectedState === state) {
        all.push(...items);
      }
    });
    if (searchQuery.trim() === '') return all;
    const q = searchQuery.toLowerCase();
    return all.filter(
      (gi) =>
        gi.name.toLowerCase().includes(q) ||
        gi.state.toLowerCase().includes(q) ||
        gi.districtsCovered.toLowerCase().includes(q) ||
        gi.category.toLowerCase().includes(q)
    );
  }, [selectedState, searchQuery]);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Right Corner Button */}
      <button
        id="dpiit-odop-dropdown-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={`inline-flex items-center gap-2 px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-lg border text-xs sm:text-sm font-semibold transition-all shadow-sm ${
          isOpen
            ? 'bg-[#2C241E] text-white border-[#2C241E] ring-2 ring-[#B8502E]/40'
            : 'bg-[#F5EFE6] text-[#2C241E] border-[#DECFC0] hover:bg-[#EFE5D8] hover:border-[#C4B29E]'
        }`}
        title="DPIIT District ODOP Product Tiers & State GI Registry"
      >
        <ShieldCheck className={`w-4 h-4 ${isOpen ? 'text-[#C45A34]' : 'text-[#B8502E]'}`} />
        <span className="hidden sm:inline">DPIIT ODOP &amp; GI List</span>
        <span className="sm:hidden">ODOP List</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-[#8C7662] transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-white' : ''
          }`}
        />
      </button>

      {/* Floating Dropdown Panel */}
      {isOpen && (
        <div
          id="dpiit-odop-dropdown-panel"
          className="absolute right-0 top-full mt-2 w-[92vw] sm:w-[500px] md:w-[560px] bg-white rounded-2xl border border-[#D8CCBD] shadow-2xl z-50 overflow-hidden animate-in fade-in-50 duration-150 flex flex-col max-h-[85vh]"
        >
          {/* Header */}
          <div className="bg-[#2C241E] text-[#FAF8F5] p-4 sm:p-4.5 border-b border-[#3E342B] flex items-start justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-[#D8C7B5] font-semibold mb-0.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C45A34]" />
                <span>Ministry of Commerce &amp; Industry &bull; DPIIT</span>
              </div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-white leading-tight">
                Official District ODOP &amp; GI Directory
              </h3>
              <p className="text-xs text-[#BCACA0] mt-0.5">
                Primary, Secondary &amp; Tertiary products by District &amp; State GI Registry
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-[#BCACA0] hover:text-white hover:bg-[#3E342B] transition-colors"
              aria-label="Close dropdown"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Tabs & Filters */}
          <div className="p-3 bg-[#FAF7F2] border-b border-[#EAE2D5] space-y-2.5">
            {/* Tab buttons */}
            <div className="flex rounded-lg bg-[#EFE8DD] p-1 gap-1">
              <button
                onClick={() => setActiveTab('odop')}
                className={`flex-1 py-1.5 px-2 rounded-md text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                  activeTab === 'odop'
                    ? 'bg-white text-[#2C241E] shadow-sm'
                    : 'text-[#6B5A4B] hover:text-[#2C241E]'
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-[#B8502E]" />
                <span>District ODOP (1°, 2°, 3°)</span>
              </button>
              <button
                onClick={() => setActiveTab('gi')}
                className={`flex-1 py-1.5 px-2 rounded-md text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                  activeTab === 'gi'
                    ? 'bg-white text-[#2C241E] shadow-sm'
                    : 'text-[#6B5A4B] hover:text-[#2C241E]'
                }`}
              >
                <Award className="w-3.5 h-3.5 text-[#246243]" />
                <span>State GI Products</span>
              </button>
            </div>

            {/* Filter Bar: State Selector + Search */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
              <div className="sm:col-span-5">
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full text-xs font-medium px-2.5 py-1.5 rounded-lg border border-[#D5C7B5] bg-white text-[#2C241E] focus:outline-none focus:ring-1 focus:ring-[#B8502E]"
                >
                  <option value="ALL">All States/UTs ({statesList.length})</option>
                  {statesList.map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-7 relative">
                <Search className="w-3.5 h-3.5 text-[#8C7662] absolute left-2.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={
                    activeTab === 'odop' ? 'Search district or product...' : 'Search GI item...'
                  }
                  className="w-full pl-8 pr-3 py-1.5 rounded-lg border border-[#D5C7B5] bg-white text-xs text-[#2C241E] focus:outline-none focus:ring-1 focus:ring-[#B8502E]"
                />
              </div>
            </div>
          </div>

          {/* Scrollable Results List */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 divide-y divide-[#F0EAE1]">
            {activeTab === 'odop' ? (
              filteredDistricts.length > 0 ? (
                filteredDistricts.map((item) => (
                  <div key={item.id} className="pt-3 first:pt-0 space-y-2">
                    {/* District Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#B8502E]" />
                        <span className="font-bold text-sm text-[#2C241E]">{item.district}</span>
                        <span className="text-[11px] text-[#7A6451]">
                          ({item.state})
                        </span>
                      </div>
                      {item.giCertified && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#EBF5EE] text-[#1E7245] border border-[#C5E5D1]">
                          GI Tagged
                        </span>
                      )}
                    </div>

                    {/* Tier Products Grid */}
                    <div className="space-y-1.5 pl-5">
                      {/* Primary Product */}
                      <div className="flex items-start gap-2 bg-[#FAF5EE] p-2 rounded-lg border border-[#ECDCC9]">
                        <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-[#B8502E] text-white shrink-0">
                          1° Primary
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-[#2C241E] truncate">
                            {item.primaryProduct}
                          </p>
                          <p className="text-[10px] text-[#7A6451]">{item.primaryCategory}</p>
                        </div>
                      </div>

                      {/* Secondary Product (if exists) */}
                      {item.secondaryProduct && (
                        <div className="flex items-start gap-2 bg-[#F9F7F4] p-1.5 rounded-lg border border-[#EBE3D8]">
                          <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-[#544436] text-white shrink-0">
                            2° Secondary
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold text-[#3C3026] truncate">
                              {item.secondaryProduct}
                            </p>
                            <p className="text-[10px] text-[#8C7662]">{item.secondaryCategory}</p>
                          </div>
                        </div>
                      )}

                      {/* Tertiary Product (if exists) */}
                      {item.tertiaryProduct && (
                        <div className="flex items-start gap-2 bg-[#F9F7F4] p-1.5 rounded-lg border border-[#EBE3D8]">
                          <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-[#7A6451] text-white shrink-0">
                            3° Tertiary
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold text-[#3C3026] truncate">
                              {item.tertiaryProduct}
                            </p>
                            <p className="text-[10px] text-[#8C7662]">{item.tertiaryCategory}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-xs text-[#7A6451]">
                  No districts found for current filter.
                </div>
              )
            ) : filteredGI.length > 0 ? (
              filteredGI.map((gi) => (
                <div key={gi.id} className="pt-2.5 first:pt-0 space-y-1">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-xs font-bold text-[#2C241E] flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-[#246243] shrink-0" />
                      <span>{gi.name}</span>
                    </h4>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#EBF5EE] text-[#1E7245] font-semibold shrink-0">
                      {gi.category}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#7A6451] pl-5">
                    <strong>{gi.state}</strong> &bull; {gi.districtsCovered}
                  </p>
                  <p className="text-[11px] text-[#5A4D43] pl-5 line-clamp-2 leading-relaxed">
                    {gi.description}
                  </p>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-xs text-[#7A6451]">
                No registered GI items found for current filter.
              </div>
            )}
          </div>

          {/* Footer View All CTA */}
          <div className="p-3 bg-[#FAF8F5] border-t border-[#EAE2D5] flex items-center justify-between">
            <span className="text-[11px] text-[#7A6451]">
              Ref: DPIIT &bull; Govt. of India
            </span>
            <button
              id="open-full-dpiit-directory-btn"
              onClick={() => {
                setIsOpen(false);
                onNavigate('dpiit-directory', { tab: activeTab });
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#B8502E] text-white text-xs font-semibold hover:bg-[#9E4224] transition-colors shadow-sm"
            >
              <span>Open Full Directory View</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
