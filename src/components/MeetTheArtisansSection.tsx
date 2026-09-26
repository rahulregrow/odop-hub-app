import React, { useState } from 'react';
import { Award, MapPin, ArrowRight, Feather, Clock, Users, Heart } from 'lucide-react';
import { ARTISANS_DATA } from '../data/artisans';
import { ArtisanProfile } from '../types';

interface MeetTheArtisansSectionProps {
  onNavigate: (view: string, params?: { stateId?: string; productId?: string }) => void;
  limit?: number;
  compact?: boolean;
}

export const MeetTheArtisansSection: React.FC<MeetTheArtisansSectionProps> = ({
  onNavigate,
  limit,
  compact = false,
}) => {
  const [selectedArtisan, setSelectedArtisan] = useState<ArtisanProfile | null>(null);

  const displayedArtisans = limit ? ARTISANS_DATA.slice(0, limit) : ARTISANS_DATA;

  return (
    <section id="meet-the-artisans-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className={`bg-[#FAF4ED] rounded-3xl border border-[#E8DFC2] ${compact ? 'p-6 sm:p-8' : 'p-8 sm:p-14'} shadow-sm`}>
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-4 ${compact ? 'mb-6 pb-4' : 'mb-12 pb-6'} border-b border-[#DECFC0]`}>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE4D6] text-[#8C4A27] text-xs font-semibold uppercase tracking-wider mb-2 border border-[#DFD1BF]">
              <Award className="w-3.5 h-3.5 text-[#B8502E]" />
              <span>Living Treasures of India</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C241E] tracking-tight">
              Meet the Artisans
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#6A5849] mt-1.5 font-light leading-relaxed">
              The real story of Indian heritage is written by the people who continue to make it.
            </p>
          </div>

          <button
            onClick={() => onNavigate('artisans')}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#2C241E] text-white text-xs sm:text-sm font-semibold hover:bg-[#4A3D32] transition-colors whitespace-nowrap self-start md:self-auto"
          >
            <span>Meet More Artisans</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Artisans Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${compact ? 'gap-6' : 'gap-8'}`}>
          {displayedArtisans.map((artisan) => (
            <div
              key={artisan.id}
              className="bg-white rounded-2xl border border-[#E9E0D4] overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group"
            >
              <div>
                {/* Header with Photo & Name */}
                <div className="p-6 pb-4 flex items-start gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-[#E7D6BE] shadow-xs">
                    <img
                      src={artisan.image}
                      alt={artisan.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif font-bold text-lg text-[#2C241E] truncate">
                      {artisan.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#8C4A27] truncate">
                      {artisan.craft}
                    </p>
                    <p className="text-[11px] text-[#7A6755] flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#B8502E]" />
                      <span>{artisan.district}, {artisan.state}</span>
                    </p>
                  </div>
                </div>

                {/* Details Pills */}
                <div className="px-6 py-2 flex flex-wrap items-center gap-2 text-[10px] font-semibold text-[#7A6755]">
                  {artisan.experienceYears && (
                    <span className="px-2 py-0.5 rounded bg-[#F7F2EB] border border-[#EAE1D3] flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5" />
                      <span>{artisan.experienceYears}</span>
                    </span>
                  )}
                  {artisan.awards && artisan.awards[0] && (
                    <span className="px-2 py-0.5 rounded bg-[#FAF1E3] text-[#87551C] border border-[#E8D5BC]">
                      {artisan.awards[0]}
                    </span>
                  )}
                </div>

                {/* Bio / Story Excerpt */}
                <div className="px-6 py-3 space-y-2">
                  <p className="text-xs text-[#524436] leading-relaxed line-clamp-3 font-light">
                    {artisan.bio}
                  </p>

                  {artisan.community && (
                    <p className="text-[11px] text-[#8C7662]">
                      <strong className="text-[#4A3E34]">Lineage:</strong> {artisan.community}
                    </p>
                  )}
                </div>
              </div>

              {/* Bottom Quote & Action */}
              <div className="p-6 pt-3 mt-2 border-t border-[#F4EDE2] bg-[#FAF8F5]/60 flex items-center justify-between">
                <span className="text-[11px] italic text-[#8C7662] line-clamp-1 max-w-[180px]">
                  &ldquo;{artisan.specialty}&rdquo;
                </span>
                <button
                  onClick={() => {
                    if (artisan.featuredProductSlug) {
                      onNavigate('product-detail', { productId: `bihar-${artisan.featuredProductSlug}` });
                    } else {
                      onNavigate('artisans');
                    }
                  }}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#B8502E] hover:underline"
                >
                  <span>Explore Craft</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
