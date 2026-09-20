import React from 'react';
import { STORIES_DATA } from '../data/stories';
import { PRODUCTS_DATA } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ArrowLeft, Clock, MapPin, Feather, Quote, BookOpen, CheckCircle2, Sparkles, Layers } from 'lucide-react';

interface StoryDetailViewProps {
  storyId: string;
  onBack: () => void;
  onSelectProduct: (productId: string) => void;
}

export const StoryDetailView: React.FC<StoryDetailViewProps> = ({
  storyId,
  onBack,
  onSelectProduct,
}) => {
  const story = STORIES_DATA.find((s) => s.id === storyId) || STORIES_DATA[0];

  // Related products mentioned in the story
  const relatedProducts = PRODUCTS_DATA.filter((p) =>
    story.relatedProductIds.includes(p.id)
  );

  return (
    <article className="pb-28 bg-[#FAF8F5]">
      {/* Back Navigation Bar */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#8C7662] hover:text-[#2C241E] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Stories</span>
        </button>
      </div>

      {/* Editorial Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10 space-y-4">
        <div className="flex flex-wrap items-center gap-3 text-xs text-[#7A6451] font-medium">
          <span className="px-2.5 py-1 rounded bg-[#F0E8DD] text-[#B8502E] font-semibold uppercase tracking-wider">
            {story.category}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#B8502E]" />
            {story.district}, {story.state}
          </span>
          <span>&bull;</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {story.readTime}
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#2C241E] font-bold tracking-tight leading-tight">
          {story.title}
        </h1>

        <p className="text-lg sm:text-2xl text-[#5A4D43] font-light leading-relaxed">
          {story.subtitle}
        </p>

        <div className="pt-4 flex items-center justify-between border-t border-[#EAE2D5] text-xs text-[#8C7662]">
          <div>
            <span className="font-semibold text-[#2C241E] block text-sm">{story.author}</span>
            <span>{story.date} &bull; Editorial Heritage Dispatch</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-[#8C7662]">ODOP Hub Archival Series</span>
          </div>
        </div>
      </header>

      {/* Cover Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative aspect-[16/10] sm:aspect-[21/10] w-full rounded-2xl overflow-hidden bg-[#EFE9DE] border border-[#EAE2D5]">
          <img
            src={story.coverImage}
            alt={story.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Narrative Body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-[#2C241E]">
        {/* Intro */}
        <p className="text-lg sm:text-xl text-[#3E342B] font-serif leading-relaxed italic border-l-2 border-[#B8502E] pl-6">
          {story.introduction}
        </p>

        {/* Narrative Sections */}
        {story.sections.map((sec, idx) => (
          <section key={idx} className="space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C241E]">
              {sec.heading}
            </h2>
            <p className="text-base sm:text-lg text-[#5A4D43] leading-relaxed">
              {sec.content}
            </p>

            {/* Optional Section Image */}
            {sec.image && (
              <div className="my-6 rounded-xl overflow-hidden border border-[#EAE2D5] bg-[#FDFDFB]">
                <img
                  src={sec.image}
                  alt={sec.imageCaption || sec.heading}
                  className="w-full aspect-[16/10] object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                {sec.imageCaption && (
                  <p className="p-3 text-xs text-[#6B5A4B] italic bg-[#F8F4EE]">
                    {sec.imageCaption}
                  </p>
                )}
              </div>
            )}
          </section>
        ))}

        {/* Pull Quote */}
        {story.quote && (
          <div className="bg-[#FAF4ED] rounded-2xl p-8 border border-[#E8DCCF] my-10 relative">
            <Quote className="w-10 h-10 text-[#B8502E]/20 absolute top-4 right-4" />
            <p className="font-serif text-xl sm:text-2xl text-[#2C241E] italic leading-relaxed">
              &ldquo;{story.quote.text}&rdquo;
            </p>
            <div className="mt-4 pt-3 border-t border-[#DFD5C5]">
              <span className="font-bold text-[#2C241E] text-sm block">
                {story.quote.speaker}
              </span>
              <span className="text-xs text-[#7A6451]">
                {story.quote.designation}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* COMPREHENSIVE 8-POINT "STORY OF THE ART" DEEP DIVE DOSSIER               */}
      {/* ========================================================================= */}
      {story.storyOfTheArt && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-12 border-t border-[#E5DACB]">
          <div className="bg-white rounded-3xl border border-[#E6DBCB] p-6 sm:p-10 shadow-sm space-y-8">
            <div className="border-b border-[#EAE2D5] pb-6 flex items-center justify-between">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#B8502E] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Editorial Dossier
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C241E] mt-1">
                  Story of the Art: Complete Cultural Analysis
                </h3>
              </div>
              <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-[#F4EDE4] text-[#8C6D37] text-xs font-semibold">
                8-Point Heritage Audit
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
              {/* Point 1: What is it? */}
              <div className="space-y-2">
                <div className="text-xs uppercase font-bold tracking-wider text-[#8C7662]">
                  1. What is it?
                </div>
                <p className="text-[#3A3027] leading-relaxed">
                  {story.storyOfTheArt.whatIsIt}
                </p>
              </div>

              {/* Point 2: Origin & Geography */}
              <div className="space-y-2">
                <div className="text-xs uppercase font-bold tracking-wider text-[#8C7662]">
                  2. Origin &amp; Geography
                </div>
                <p className="text-[#3A3027] leading-relaxed">
                  {story.storyOfTheArt.originGeography}
                </p>
              </div>

              {/* Point 3: Historical narrative & folklore */}
              <div className="space-y-2 md:col-span-2">
                <div className="text-xs uppercase font-bold tracking-wider text-[#8C7662]">
                  3. Historical Narrative &amp; Folklore
                </div>
                <p className="text-[#3A3027] leading-relaxed">
                  {story.storyOfTheArt.historicalNarrativeAndFolklore}
                </p>
              </div>

              {/* Point 4: Who Makes It */}
              <div className="space-y-2 md:col-span-2">
                <div className="text-xs uppercase font-bold tracking-wider text-[#8C7662]">
                  4. Who Makes It (Artisan Lineages &amp; Collectives)
                </div>
                <p className="text-[#3A3027] leading-relaxed">
                  {story.storyOfTheArt.whoMakesIt}
                </p>
              </div>

              {/* Point 5: How It Is Made */}
              <div className="space-y-3 md:col-span-2 bg-[#FAF6F0] p-5 rounded-2xl border border-[#EFE5D6]">
                <div className="text-xs uppercase font-bold tracking-wider text-[#B8502E]">
                  5. How It Is Made (Step-by-Step Technique)
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {story.storyOfTheArt.howItIsMade.map((step, idx) => (
                    <div key={idx} className="text-xs text-[#4A3E34] flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B8502E] mt-1.5 shrink-0" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Point 6: Motifs & Symbolism */}
              <div className="space-y-3 md:col-span-2 bg-[#F6FAF7] p-5 rounded-2xl border border-[#DCEBE2]">
                <div className="text-xs uppercase font-bold tracking-wider text-[#246243]">
                  6. Motifs &amp; Sacred Symbolism
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {story.storyOfTheArt.motifsAndSymbolism.map((motif, idx) => (
                    <div key={idx} className="text-xs text-[#354E3F] flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#246243] mt-1.5 shrink-0" />
                      <span>{motif}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Point 7: Survival & Revival */}
              <div className="space-y-2">
                <div className="text-xs uppercase font-bold tracking-wider text-[#8C7662]">
                  7. Survival &amp; Historic Revival
                </div>
                <p className="text-[#3A3027] leading-relaxed">
                  {story.storyOfTheArt.survivalAndRevival}
                </p>
              </div>

              {/* Point 8: The Craft Today */}
              <div className="space-y-2">
                <div className="text-xs uppercase font-bold tracking-wider text-[#8C7662]">
                  8. The Craft Today (ODOP &amp; GI)
                </div>
                <p className="text-[#3A3027] leading-relaxed">
                  {story.storyOfTheArt.theCraftToday}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Products from this Story */}
      {relatedProducts.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-16 border-t border-[#EAE2D5]">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#B8502E]">
              From the Story
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#2C241E] mt-1">
              Heritage Products Featured in this Narrative
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProducts.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onSelect={(id) => onSelectProduct(id)}
              />
            ))}
          </div>
        </section>
      )}
    </article>
  );
};
