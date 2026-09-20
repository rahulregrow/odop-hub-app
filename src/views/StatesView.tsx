import React, { useState } from 'react';
import { STATES_DATA } from '../data/states';
import { StateCard } from '../components/StateCard';
import { MapPin, Compass, Sparkles } from 'lucide-react';

interface StatesViewProps {
  onSelectState: (stateId: string) => void;
  onSelectProduct: (productId: string) => void;
}

export const StatesView: React.FC<StatesViewProps> = ({ onSelectState }) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('ALL');

  const regions = ['ALL', 'Eastern', 'Southern', 'Western', 'Northern'];

  const filteredStates = STATES_DATA.filter((state) => {
    if (selectedRegion === 'ALL') return true;
    return state.region === selectedRegion;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-24">
      {/* Page Header */}
      <div className="max-w-3xl mb-8">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#B8502E]">
          Geographic Archive
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#2C241E] font-normal mt-1">
          States of India
        </h1>
        <p className="text-sm sm:text-base text-[#6B5A4B] mt-2 leading-relaxed">
          Discover the distinct geographical terroirs, artisan guilds, handloom clusters, and cultural identities defining each state across the subcontinent.
        </p>
      </div>

      {/* Initial Focus Highlight Banner for Bihar & Karnataka */}
      <div className="bg-[#FAF4ED] border border-[#E8DCCF] rounded-2xl p-6 mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-[#B8502E] text-white flex items-center justify-center shrink-0 mt-0.5">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold text-[#2C241E]">
              Initial Discovery Focus: Bihar &amp; Karnataka
            </h3>
            <p className="text-xs sm:text-sm text-[#5A4D43] mt-0.5 leading-relaxed">
              ODOP Hub is actively archiving Bihar’s heritage (Madhubani, Mithila Makhana, Bhagalpur Silk, Sikki Craft, Sujuni Embroidery) and Karnataka’s craft legacies (Kinnal Woodcraft, Ilkal Sarees, Channapatna). The architecture is structured to scale across all 28 states and 8 union territories.
            </p>
          </div>
        </div>
      </div>

      {/* Region Filter Buttons */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 no-scrollbar">
        <span className="text-xs font-semibold text-[#8C7662] uppercase tracking-wider mr-1 shrink-0">
          Region:
        </span>
        {regions.map((reg) => (
          <button
            key={reg}
            onClick={() => setSelectedRegion(reg)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors border ${
              selectedRegion === reg
                ? 'bg-[#2C241E] text-white border-[#2C241E]'
                : 'bg-[#FDFDFB] text-[#5A4D43] border-[#EAE2D5] hover:bg-[#F2ECE2]'
            }`}
          >
            {reg === 'ALL' ? 'All Regions' : `${reg} India`}
          </button>
        ))}
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
