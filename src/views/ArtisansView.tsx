import React from 'react';
import { Award, MapPin, Sparkles, ArrowRight, Quote, Clock, CheckCircle2 } from 'lucide-react';
import { ARTISANS_DATA } from '../data/artisans';

interface ArtisansViewProps {
  onNavigate: (view: string, params?: { productId?: string; stateId?: string }) => void;
}

export const ArtisansView: React.FC<ArtisansViewProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Editorial Header */}
      <section className="bg-gradient-to-b from-[#F4EEE4] via-[#FAF8F5] to-[#FAF8F5] pt-12 pb-16 border-b border-[#EAE2D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE3D5] text-[#8C4A27] text-xs font-semibold tracking-wider uppercase mb-4 border border-[#DFD0BE]">
              <Award className="w-3.5 h-3.5" />
              <span>Custodians of India&apos;s Living Heritage</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#2C241E] leading-[1.15]">
              Meet the Makers
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#5A493B] leading-relaxed font-sans">
              Behind every intricate brushstroke, hand-turned wooden curve, and natural forest dye is an artisan family dedicating lifetimes to preserving our cultural inheritance. Meet the Padma Shri awardees, master craftspeople, and community elders keeping India&apos;s heritage alive.
            </p>
          </div>
        </div>
      </section>

      {/* Artisans Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTISANS_DATA.map((artisan) => (
            <div
              key={artisan.id}
              className="bg-white rounded-2xl border border-[#E9DFD0] overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group"
            >
              {/* Artisan Image Header */}
              <div className="relative h-64 overflow-hidden bg-[#EFE9DF]">
                <img
                  src={artisan.image}
                  alt={artisan.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Badges on image */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  {artisan.awards.map((award, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-full bg-[#FAF1E3]/95 backdrop-blur-sm text-[#87551C] text-[11px] font-bold tracking-wide shadow-sm flex items-center gap-1 border border-[#E5D2B8]"
                    >
                      <Award className="w-3 h-3 text-[#A87C38]" />
                      {award}
                    </span>
                  ))}
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h3 className="font-serif text-2xl font-bold tracking-tight">
                    {artisan.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-white/90 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#E69B7D]" />
                    <span>
                      {artisan.district}, {artisan.state}
                    </span>
                    {artisan.experienceYears && (
                      <>
                        <span className="text-white/40">&bull;</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {artisan.experienceYears}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs uppercase font-bold tracking-widest text-[#B8502E]">
                      {artisan.craft}
                    </span>
                    <span className="text-xs text-[#7A6755] bg-[#F4EFE6] px-2 py-0.5 rounded-full">
                      {artisan.community}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#4A3E34] leading-relaxed">
                    {artisan.bio}
                  </p>

                  <div className="mt-3 text-xs font-medium text-[#7A6755]">
                    <span className="font-bold text-[#2C241E]">Specialty:</span>{' '}
                    {artisan.specialty}
                  </div>
                </div>

                {/* Quote Box */}
                <div className="bg-[#FAF6F0] p-3.5 rounded-xl border border-[#EBE2D4] relative">
                  <Quote className="w-4 h-4 text-[#A87C38]/40 absolute top-2 right-2" />
                  <p className="text-xs italic text-[#5C4A3A] leading-relaxed pr-3">
                    &ldquo;{artisan.quote}&rdquo;
                  </p>
                </div>

                {/* Footer action */}
                {artisan.featuredProductSlug && (
                  <button
                    onClick={() =>
                      onNavigate('product-detail', {
                        productId: artisan.featuredProductSlug,
                      })
                    }
                    className="w-full pt-3 border-t border-[#EAE2D5] flex items-center justify-between text-xs font-semibold text-[#B8502E] hover:text-[#9A3D1E] transition-colors group-hover:translate-x-0.5"
                  >
                    <span>Explore {artisan.craft}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Community Stewardship Callout */}
        <div className="mt-16 bg-[#2C241E] text-[#FAF8F5] rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-2xl relative z-10">
            <span className="text-xs uppercase font-bold tracking-widest text-[#E5A88B]">
              Artisan Guilds &amp; Cooperatives
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold mt-2 leading-tight text-[#FAF8F5]">
              Empowering India&apos;s 7 Million Handloom &amp; Handicraft Artisans
            </h2>
            <p className="text-sm sm:text-base text-[#D5C7B8] mt-4 leading-relaxed font-sans">
              Handicrafts and handlooms represent India&apos;s second-largest employment sector after agriculture. By providing verified educational documentation, direct district attribution, and national visibility, ODOP Hub champions the economic dignity and cultural legacy of every maker.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('explore')}
                className="px-5 py-2.5 rounded-lg bg-[#B8502E] text-white text-xs sm:text-sm font-semibold hover:bg-[#A14120] transition-colors"
              >
                Explore All Living Crafts
              </button>
              <button
                onClick={() => onNavigate('stories')}
                className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition-colors border border-white/20"
              >
                Read Artisan Stories
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
