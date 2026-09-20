import React from 'react';
import { StateHeritage } from '../types';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { GENERIC_ODOP_HERITAGE_FALLBACK_IMAGE } from '../utils/imageUtils';

interface StateCardProps {
  state: StateHeritage;
  onSelectState: (stateId: string) => void;
}

export const StateCard: React.FC<StateCardProps> = ({ state, onSelectState }) => {
  return (
    <div
      id={`state-card-${state.id}`}
      onClick={() => onSelectState(state.id)}
      className="group cursor-pointer bg-[#FDFDFB] rounded-xl border border-[#EAE2D5] overflow-hidden flex flex-col hover:border-[#B8502E]/40 hover:shadow-md transition-all duration-300"
    >
      {/* Cover Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EFE9DE]">
        <img
          src={state.coverImage}
          alt={state.name}
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = GENERIC_ODOP_HERITAGE_FALLBACK_IMAGE;
          }}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* State Label & Region Overlay */}
        <div className="absolute bottom-3.5 left-4 right-4 flex items-end justify-between">
          <div>
            <span className="text-[10px] uppercase font-semibold tracking-widest text-[#E8DCCF] bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm">
              {state.region} India
            </span>
            <h3 className="font-serif text-2xl font-bold text-white mt-1 drop-shadow-sm">
              {state.name}
            </h3>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#FAF8F5]/90 text-[#2C241E] backdrop-blur-sm">
            {state.productCount} {state.productCount === 1 ? 'Craft' : 'Crafts'}
          </span>
        </div>

        {state.isFeatured && (
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-[#B8502E] text-white px-2.5 py-0.5 rounded shadow-sm">
              <Sparkles className="w-3 h-3" />
              <span>Initial Focus</span>
            </span>
          </div>
        )}
      </div>

      {/* Description & Featured Craft Tags */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-xs sm:text-sm text-[#5A4D43] line-clamp-2 leading-relaxed">
            {state.tagline}
          </p>

          <div className="mt-4 pt-3 border-t border-[#F2EDE5]">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#8C7662] block mb-2">
              Featured Heritage Crafts
            </span>
            <div className="flex flex-wrap gap-1.5">
              {state.featuredCrafts.map((craft, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-[#F5F0E8] text-[#4A3E34] px-2.5 py-1 rounded-md border border-[#E8DFD3]"
                >
                  {craft}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Explore Button */}
        <div className="mt-5 pt-3 flex items-center justify-between border-t border-[#F0E9DF]">
          <span className="text-xs text-[#7A6451] flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#B8502E]" />
            <span>Capital: {state.capital}</span>
          </span>
          <button
            id={`btn-explore-state-${state.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B8502E] group-hover:translate-x-1 transition-transform"
          >
            <span>Explore {state.name}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
