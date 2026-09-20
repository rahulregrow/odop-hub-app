import React, { useState } from 'react';
import { STORIES_DATA } from '../data/stories';
import { StoryCard } from '../components/StoryCard';
import { BookOpen, Sparkles, Filter } from 'lucide-react';

interface StoriesViewProps {
  onSelectStory: (storyId: string) => void;
}

export const StoriesView: React.FC<StoriesViewProps> = ({ onSelectStory }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = ['ALL', 'Paintings & Art', 'Toys & Traditional Craft', 'Agricultural Products', 'Handloom & Textiles'];

  const filteredStories = STORIES_DATA.filter((story) => {
    if (selectedCategory === 'ALL') return true;
    return story.category === selectedCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-24">
      {/* Header */}
      <div className="max-w-3xl mb-8">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#B8502E]">
          Living Chronicles
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#2C241E] font-normal mt-1">
          Artisan Stories &amp; Cultural Narratives
        </h1>
        <p className="text-sm sm:text-base text-[#6B5A4B] mt-2 leading-relaxed">
          Behind every GI tag and ODOP district specialty are master craftspeople, indigenous memories, and traditions nurtured across centuries.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-10 no-scrollbar">
        <span className="text-xs font-semibold text-[#8C7662] uppercase tracking-wider mr-1 shrink-0">
          Filter Story:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors border ${
              selectedCategory === cat
                ? 'bg-[#2C241E] text-white border-[#2C241E]'
                : 'bg-[#FDFDFB] text-[#5A4D43] border-[#EAE2D5] hover:bg-[#F2ECE2]'
            }`}
          >
            {cat === 'ALL' ? 'All Stories' : cat}
          </button>
        ))}
      </div>

      {/* Stories Editorial Grid */}
      {filteredStories.length > 0 && (
        <div className="space-y-8">
          {/* Primary Lead Story (if first is available) */}
          <StoryCard
            story={filteredStories[0]}
            onSelectStory={(id) => onSelectStory(id)}
            featured={true}
          />

          {/* Remaining Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
            {filteredStories.slice(1).map((story) => (
              <StoryCard
                key={story.id}
                story={story}
                onSelectStory={(id) => onSelectStory(id)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
