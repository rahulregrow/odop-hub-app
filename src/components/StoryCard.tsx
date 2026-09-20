import React from 'react';
import { HeritageStory } from '../types';
import { Clock, MapPin, ArrowRight } from 'lucide-react';
import { GENERIC_ODOP_HERITAGE_FALLBACK_IMAGE } from '../utils/imageUtils';

interface StoryCardProps {
  story: HeritageStory;
  onSelectStory: (storyId: string) => void;
  featured?: boolean;
}

export const StoryCard: React.FC<StoryCardProps> = ({ story, onSelectStory, featured = false }) => {
  if (featured) {
    return (
      <div
        id={`story-card-featured-${story.slug}`}
        onClick={() => onSelectStory(story.id)}
        className="group cursor-pointer bg-[#FDFDFB] rounded-2xl border border-[#EAE2D5] overflow-hidden grid grid-cols-1 lg:grid-cols-12 hover:border-[#B8502E]/40 hover:shadow-lg transition-all duration-300"
      >
        <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto min-h-[300px] overflow-hidden bg-[#EFE9DE]">
          <img
            src={story.coverImage}
            alt={story.title}
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = GENERIC_ODOP_HERITAGE_FALLBACK_IMAGE;
            }}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-[#B8502E] text-white shadow-sm">
              Featured Story
            </span>
          </div>
        </div>

        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 text-xs text-[#7A6451] font-medium mb-3">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#B8502E]" />
                {story.district}, {story.state}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {story.readTime}
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C241E] group-hover:text-[#B8502E] transition-colors leading-tight">
              {story.title}
            </h3>

            <p className="text-sm text-[#5A4D43] mt-3 leading-relaxed line-clamp-3">
              {story.subtitle}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-[#F0E8DD] flex items-center justify-between">
            <div className="text-xs text-[#8C7662]">
              <span className="font-semibold text-[#4A3E34]">{story.author}</span>
              <span className="block">{story.date}</span>
            </div>

            <button
              id={`btn-read-featured-${story.slug}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#2C241E] text-white text-xs font-medium group-hover:bg-[#B8502E] transition-colors"
            >
              <span>Read Narrative</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      id={`story-card-${story.slug}`}
      onClick={() => onSelectStory(story.id)}
      className="group cursor-pointer bg-[#FDFDFB] rounded-xl border border-[#EAE2D5] overflow-hidden flex flex-col hover:border-[#B8502E]/40 hover:shadow-md transition-all duration-300"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EFE9DE]">
        <img
          src={story.coverImage}
          alt={story.title}
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = GENERIC_ODOP_HERITAGE_FALLBACK_IMAGE;
          }}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute bottom-3 left-3">
          <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded bg-[#FAF8F5]/90 text-[#2C241E] backdrop-blur-sm">
            {story.category}
          </span>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs text-[#7A6451] font-medium mb-2">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#B8502E]" />
              {story.district}, {story.state}
            </span>
            <span>•</span>
            <span>{story.readTime}</span>
          </div>

          <h3 className="font-serif text-xl font-bold text-[#2C241E] leading-snug group-hover:text-[#B8502E] transition-colors">
            {story.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#5A4D43] line-clamp-2 mt-2 leading-relaxed">
            {story.subtitle}
          </p>
        </div>

        <div className="mt-5 pt-3.5 border-t border-[#F0E9DF] flex items-center justify-between">
          <span className="text-xs text-[#8C7662]">
            By {story.author}
          </span>
          <button
            id={`btn-read-${story.slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#B8502E] group-hover:translate-x-1 transition-transform"
          >
            <span>Read Story</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
