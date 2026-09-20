import React from 'react';
import { BookOpen, Sparkles, Heart } from 'lucide-react';

interface StoryBehindODOPHubProps {
  onNavigate?: (view: string) => void;
}

export const StoryBehindODOPHub: React.FC<StoryBehindODOPHubProps> = ({ onNavigate }) => {
  return (
    <section id="story-behind-odop-hub-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#FAF4ED] rounded-3xl border border-[#E9DFD0] p-8 sm:p-14 shadow-sm relative overflow-hidden">
        {/* Subtle decorative watermark icon */}
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 opacity-5 pointer-events-none">
          <BookOpen className="w-96 h-96 text-[#2C241E]" />
        </div>

        <div className="relative z-10 max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE3D5] text-[#8C4A27] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#DFD0BE]">
            <BookOpen className="w-3.5 h-3.5 text-[#B8502E]" />
            <span>Our Origin &bull; Cultural Discovery</span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C241E] tracking-tight leading-tight">
            The Story Behind ODOP Hub
          </h2>

          {/* Exact Narrative provided by user */}
          <div className="mt-6 space-y-5 text-base sm:text-lg text-[#5A4D43] font-light leading-relaxed">
            <p>
              ODOP Hub began with a simple thought — India has never been short of art, craft, stories or skilled hands. What has often been missing is a bridge between those traditions and the people who can discover, understand and value them.
            </p>
            <p>
              Every traditional art carries more than a product. It carries a place, a community, a memory and generations of knowledge. But many of these traditions struggle to find the attention and reach they deserve.
            </p>
            <p>
              ODOP Hub was imagined as a place where people can discover these traditions before they disappear into history — where an art form is not just displayed, but understood through its story, its origin, its makers and the people who keep it alive.
            </p>

            {/* Core Credo Callout */}
            <div className="p-6 rounded-2xl bg-white/80 border-l-4 border-[#B8502E] border-y border-r border-[#E2D6C6] my-6 shadow-sm">
              <p className="font-serif text-lg sm:text-xl text-[#2C241E] font-medium leading-relaxed italic">
                &ldquo;Every craft tells a story. Every artisan keeps it alive. We bring these stories from their roots to the world.&rdquo;
              </p>
            </div>

            <p>
              ODOP Hub aims to build that connection — between heritage and the present, between artisans and the world, and between a traditional art form and the next generation that may discover it for the first time.
            </p>
          </div>

          {/* Value Flow Representation: PRODUCT -> ART -> STORY -> ARTISAN -> HERITAGE */}
          <div className="mt-8 pt-6 border-t border-[#DECFC0] flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7A6451]">
            <span className="px-2.5 py-1 rounded bg-white border border-[#D8C9B8] text-[#2C241E]">Product</span>
            <span>&rarr;</span>
            <span className="px-2.5 py-1 rounded bg-white border border-[#D8C9B8] text-[#2C241E]">Art</span>
            <span>&rarr;</span>
            <span className="px-2.5 py-1 rounded bg-white border border-[#D8C9B8] text-[#2C241E]">Story</span>
            <span>&rarr;</span>
            <span className="px-2.5 py-1 rounded bg-[#F4EDE2] border border-[#B8502E]/40 text-[#B8502E]">Artisan</span>
            <span>&rarr;</span>
            <span className="px-2.5 py-1 rounded bg-[#2C241E] text-white">Heritage</span>
          </div>
        </div>
      </div>
    </section>
  );
};
