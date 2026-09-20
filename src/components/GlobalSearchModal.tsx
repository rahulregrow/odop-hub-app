import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Search, X, MapPin, Tag, Award, BookOpen, Compass, ArrowRight, Sparkles } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/products';
import { STATES_DATA } from '../data/states';
import { STORIES_DATA } from '../data/stories';
import { ARTISANS_DATA } from '../data/artisans';
import { getProductPrimaryImage, GENERIC_ODOP_HERITAGE_FALLBACK_IMAGE } from '../utils/imageUtils';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (
    view: string,
    params?: { stateId?: string; productId?: string; storyId?: string; category?: string }
  ) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setSearchQuery('');
    }
  }, [isOpen]);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const results = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return { products: [], states: [], stories: [], artisans: [] };

    const products = PRODUCTS_DATA.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        (p.hindiName && p.hindiName.toLowerCase().includes(q)) ||
        p.district.toLowerCase().includes(q) ||
        p.state.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        (p.odopDetails?.district && p.odopDetails.district.toLowerCase().includes(q))
    ).slice(0, 5);

    const states = STATES_DATA.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.code.toLowerCase().includes(q) ||
        s.region.toLowerCase().includes(q) ||
        s.capital.toLowerCase().includes(q) ||
        s.primaryDistricts.some((d) => d.toLowerCase().includes(q))
    ).slice(0, 4);

    const stories = STORIES_DATA.filter(
      (st) =>
        st.title.toLowerCase().includes(q) ||
        st.subtitle.toLowerCase().includes(q) ||
        st.state.toLowerCase().includes(q) ||
        st.district.toLowerCase().includes(q) ||
        st.category.toLowerCase().includes(q)
    ).slice(0, 4);

    const artisans = ARTISANS_DATA.filter(
      (a) =>
        a.name.toLowerCase().includes(q) ||
        a.craft.toLowerCase().includes(q) ||
        a.state.toLowerCase().includes(q) ||
        a.district.toLowerCase().includes(q) ||
        a.community.toLowerCase().includes(q) ||
        a.specialty.toLowerCase().includes(q)
    ).slice(0, 4);

    return { products, states, stories, artisans };
  }, [searchQuery]);

  const totalResultsCount =
    results.products.length +
    results.states.length +
    results.stories.length +
    results.artisans.length;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-[#1F1914]/70 backdrop-blur-sm animate-fadeIn">
      <div
        className="w-full max-w-2xl bg-[#FAF8F5] rounded-2xl shadow-2xl border border-[#E2D8C9] overflow-hidden flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#EAE2D5] bg-[#F5EFE6]/60 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#8C7662]" />
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search crafts, states, districts, ODOP, GI, artisans..."
            className="flex-1 bg-transparent border-none text-[#2C241E] placeholder-[#8C7662] text-base sm:text-lg focus:outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="p-1 rounded-full text-[#8C7662] hover:bg-[#EAE1D3]"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#665444] hover:bg-[#EAE1D3] text-xs font-semibold uppercase tracking-wider"
          >
            Esc
          </button>
        </div>

        {/* Search Results Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {!searchQuery ? (
            <div className="py-8 text-center space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#EFE8DD] text-[#B8502E]">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[#3A3027] font-medium text-base">Search India’s Cultural Heritage</p>
                <p className="text-[#7A6755] text-sm mt-1">
                  Try typing &ldquo;Madhubani&rdquo;, &ldquo;Manjusha&rdquo;, &ldquo;Tikuli&rdquo;, &ldquo;Bihar&rdquo;, &ldquo;Channapatna&rdquo;, or &ldquo;Pashmina&rdquo;
                </p>
              </div>

              {/* Quick Suggestion Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                {[
                  'Manjusha Art',
                  'Tikuli Art',
                  'Madhubani',
                  'Mithila Makhana',
                  'Bihar',
                  'Channapatna',
                  'Kotpad',
                  'GI Tagged',
                ].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchQuery(tag)}
                    className="px-3 py-1 rounded-full bg-[#EFE7DC] hover:bg-[#E4D9CA] text-[#4A3E34] text-xs font-medium transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : totalResultsCount === 0 ? (
            <div className="py-12 text-center text-[#7A6755]">
              <p className="text-base font-medium">No results found for &ldquo;{searchQuery}&rdquo;</p>
              <p className="text-xs mt-1">Try searching by craft name, district, state, or artisan.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Products / Crafts Results */}
              {results.products.length > 0 && (
                <div>
                  <div className="text-xs uppercase tracking-widest font-semibold text-[#8C7662] mb-2 flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-[#B8502E]" />
                    <span>Heritage Crafts &amp; Products ({results.products.length})</span>
                  </div>
                  <div className="space-y-2">
                    {results.products.map((p) => {
                      const imgInfo = getProductPrimaryImage(p);
                      return (
                        <button
                          key={p.id}
                          onClick={() => {
                            onNavigate('product-detail', { productId: p.id });
                            onClose();
                          }}
                          className="w-full text-left p-3 rounded-xl bg-white hover:bg-[#F7F2EB] border border-[#E9E1D4] hover:border-[#D5C6B1] transition-all flex items-center justify-between group"
                        >
                          <div className="flex items-center gap-3">
                            <img
                              src={imgInfo.url}
                              alt={p.name}
                              className="w-12 h-12 rounded-lg object-cover border border-[#E2D8C9]"
                              referrerPolicy="no-referrer"
                              onError={(e) => {
                                (e.currentTarget as HTMLImageElement).src = GENERIC_ODOP_HERITAGE_FALLBACK_IMAGE;
                              }}
                            />
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-serif font-bold text-[#2C241E] text-sm group-hover:text-[#B8502E] transition-colors">
                                  {p.name}
                                </span>
                                {p.isODOP && (
                                  <span className="text-[10px] uppercase font-bold bg-[#EFE3D5] text-[#8C4A27] px-1.5 py-0.5 rounded">
                                    ODOP
                                  </span>
                                )}
                                {p.isGI && (
                                  <span className="text-[10px] uppercase font-bold bg-[#E2ECE6] text-[#246243] px-1.5 py-0.5 rounded">
                                    GI
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-[#6F5D4E] mt-0.5">
                                {p.district}, {p.state} &bull; {p.category}
                              </p>
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-[#A89481] group-hover:text-[#B8502E] group-hover:translate-x-0.5 transition-all" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* States Results */}
              {results.states.length > 0 && (
                <div>
                  <div className="text-xs uppercase tracking-widest font-semibold text-[#8C7662] mb-2 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#B8502E]" />
                    <span>States &amp; Territories ({results.states.length})</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {results.states.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => {
                          onNavigate('state-detail', { stateId: s.id });
                          onClose();
                        }}
                        className="text-left p-3 rounded-xl bg-white hover:bg-[#F7F2EB] border border-[#E9E1D4] hover:border-[#D5C6B1] transition-all flex items-center gap-3 group"
                      >
                        <img
                          src={s.coverImage}
                          alt={s.name}
                          className="w-10 h-10 rounded-lg object-cover border border-[#E2D8C9]"
                          referrerPolicy="no-referrer"
                        />
                        <div className="min-w-0">
                          <p className="font-serif font-bold text-sm text-[#2C241E] truncate group-hover:text-[#B8502E]">
                            {s.name} {s.isUT && <span className="text-[10px] text-[#7A6755] font-sans font-normal">(UT)</span>}
                          </p>
                          <p className="text-xs text-[#7A6755] truncate">
                            {s.region} &bull; Cap: {s.capital}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Artisans Results */}
              {results.artisans.length > 0 && (
                <div>
                  <div className="text-xs uppercase tracking-widest font-semibold text-[#8C7662] mb-2 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#B8502E]" />
                    <span>Master Artisans &amp; Makers ({results.artisans.length})</span>
                  </div>
                  <div className="space-y-2">
                    {results.artisans.map((artisan) => (
                      <button
                        key={artisan.id}
                        onClick={() => {
                          onNavigate('artisans');
                          onClose();
                        }}
                        className="w-full text-left p-3 rounded-xl bg-white hover:bg-[#F7F2EB] border border-[#E9E1D4] hover:border-[#D5C6B1] transition-all flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={artisan.image}
                            alt={artisan.name}
                            className="w-10 h-10 rounded-full object-cover border border-[#E2D8C9]"
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-serif font-bold text-[#2C241E] text-sm group-hover:text-[#B8502E]">
                                {artisan.name}
                              </span>
                              {artisan.awards[0] && (
                                <span className="text-[10px] font-semibold bg-[#FAF1E3] text-[#916223] px-1.5 py-0.2 rounded border border-[#E7D6BE]">
                                  {artisan.awards[0]}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-[#6F5D4E]">
                              {artisan.craft} &bull; {artisan.district}, {artisan.state}
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#A89481] group-hover:text-[#B8502E]" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Stories Results */}
              {results.stories.length > 0 && (
                <div>
                  <div className="text-xs uppercase tracking-widest font-semibold text-[#8C7662] mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[#B8502E]" />
                    <span>Artisan Stories ({results.stories.length})</span>
                  </div>
                  <div className="space-y-2">
                    {results.stories.map((st) => (
                      <button
                        key={st.id}
                        onClick={() => {
                          onNavigate('story-detail', { storyId: st.id });
                          onClose();
                        }}
                        className="w-full text-left p-3 rounded-xl bg-white hover:bg-[#F7F2EB] border border-[#E9E1D4] hover:border-[#D5C6B1] transition-all flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={st.coverImage}
                            alt={st.title}
                            className="w-12 h-12 rounded-lg object-cover border border-[#E2D8C9]"
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <p className="font-serif font-bold text-sm text-[#2C241E] group-hover:text-[#B8502E] line-clamp-1">
                              {st.title}
                            </p>
                            <p className="text-xs text-[#6F5D4E] mt-0.5">
                              {st.district}, {st.state} &bull; {st.readTime}
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#A89481] group-hover:text-[#B8502E]" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 sm:px-6 bg-[#F3ECE0] border-t border-[#E4D9CA] flex items-center justify-between text-xs text-[#7A6755]">
          <span className="flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-[#B8502E]" />
            ODOP Hub — Celebrating India’s 750+ Districts
          </span>
          <span>Click any item to view details</span>
        </div>
      </div>
    </div>
  );
};
