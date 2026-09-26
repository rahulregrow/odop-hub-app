import React, { useState } from 'react';
import { STATES_DATA } from '../data/states';
import { StateCard } from '../components/StateCard';
import { MapPin, Search, Sparkles } from 'lucide-react';

interface StatesViewProps {
  onSelectState: (stateId: string) => void;
  onSelectProduct: (productId: string) => void;
}

export const StatesView: React.FC<StatesViewProps> = ({ onSelectState }) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const regions = [
    'ALL',
    'Eastern',
    'Southern',
    'Northern',
    'Western',
    'Central',
    'North-Eastern',
    'Islands & UTs',
  ];

  const filteredStates = STATES_DATA.filter((state) => {
    const matchesRegion = selectedRegion === 'ALL' || state.region === selectedRegion;
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !query ||
      state.name.toLowerCase().includes(query) ||
      state.capital.toLowerCase().includes(query) ||
      state.code.toLowerCase().includes(query) ||
      state.featuredCrafts?.some((c) => c.toLowerCase().includes(query)) ||
      state.primaryDistricts?.some((d) => d.toLowerCase().includes(query));

    return matchesRegion && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-24">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-[#E8DFC2]">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE3D5] text-[#8C4A27] text-xs font-semibold uppercase tracking-wider mb-2 border border-[#DFD0BE]">
            <MapPin className="w-3.5 h-3.5 text-[#B8502E]" />
            <span>Geographic Heritage Archive</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#2C241E] font-normal tracking-tight">
            Explore by State
          </h1>
          <p className="text-sm sm:text-base text-[#6B5A4B] mt-2 leading-relaxed font-light">
            Discover the distinct geographical terroirs, artisan guilds, handloom clusters, and cultural identities defining each state and union territory across India.
          </p>
        </div>

        {/* Quick Search */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C7662]" />
          <input
            type="text"
            placeholder="Search state, capital or craft..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#D8CCBD] bg-white text-xs sm:text-sm text-[#2C241E] placeholder:text-[#A89886] focus:outline-none focus:ring-2 focus:ring-[#B8502E] shadow-xs"
          />
        </div>
      </div>

      {/* Initial Focus Highlight Banner for Bihar & Karnataka */}
      <div className="bg-[#FAF4ED] border border-[#E8DCCF] rounded-2xl p-6 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-[#B8502E] text-white flex items-center justify-center shrink-0 mt-0.5">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold text-[#2C241E]">
              Regional Documentation &bull; Living District Lineages
            </h3>
            <p className="text-xs sm:text-sm text-[#5A4D43] mt-0.5 leading-relaxed">
              ODOP Hub is actively documenting district craft lineages, master artisans, and protected GI seals across all states and union territories. Select any state below to view its primary districts, registered GI goods, and authentic crafts.
            </p>
          </div>
        </div>
      </div>

      {/* Region Filter Buttons */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
        <span className="text-xs font-semibold text-[#8C7662] uppercase tracking-wider mr-1 shrink-0">
          Region:
        </span>
        {regions.map((reg) => (
          <button
            key={reg}
            onClick={() => setSelectedRegion(reg)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors border ${
              selectedRegion === reg
                ? 'bg-[#2C241E] text-white border-[#2C241E] shadow-xs'
                : 'bg-white text-[#5A4D43] border-[#EAE2D5] hover:bg-[#F2ECE2]'
            }`}
          >
            {reg === 'ALL' ? 'All Regions' : `${reg} India`}
          </button>
        ))}
      </div>

      {/* States Count */}
      <div className="mb-6 flex items-center justify-between text-xs text-[#8C7662]">
        <span>
          Showing <strong>{filteredStates.length}</strong> {filteredStates.length === 1 ? 'state' : 'states & union territories'}
        </span>
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="text-[#B8502E] hover:underline font-semibold"
          >
            Clear Search
          </button>
        )}
      </div>

      {/* States Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredStates.map((state) => (
          <StateCard
            key={state.id}
            state={state}
            onSelectState={(id) => onSelectState(id)}
          />
        ))}
      </div>
    </div>
  );
};
