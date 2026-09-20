import React from 'react';
import { Compass, BookOpen, Award, Users, Heart } from 'lucide-react';

interface WhyWeExistProps {
  onNavigate?: (view: string) => void;
}

export const WhyWeExist: React.FC<WhyWeExistProps> = ({ onNavigate }) => {
  const pillars = [
    {
      id: 'pillar-discover',
      title: 'Discover',
      description: 'Find the crafts, products and traditions that make every region of India unique.',
      icon: Compass,
      accentBg: 'bg-[#F7EBE6]',
      accentColor: 'text-[#B8502E]',
      borderHover: 'hover:border-[#B8502E]/40',
    },
    {
      id: 'pillar-understand',
      title: 'Understand',
      description: 'Go beyond the product and discover its history, stories, techniques and cultural meaning.',
      icon: BookOpen,
      accentBg: 'bg-[#F5F0E8]',
      accentColor: 'text-[#8C6A33]',
      borderHover: 'hover:border-[#8C6A33]/40',
    },
    {
      id: 'pillar-recognise',
      title: 'Recognise',
      description: 'Give visibility to the people and communities whose hands keep these traditions alive.',
      icon: Award,
      accentBg: 'bg-[#FAF0E6]',
      accentColor: 'text-[#C45A34]',
      borderHover: 'hover:border-[#C45A34]/40',
    },
    {
      id: 'pillar-connect',
      title: 'Connect',
      description: "Create a bridge between India's artisans, their heritage and a wider world.",
      icon: Users,
      accentBg: 'bg-[#EAF3EE]',
      accentColor: 'text-[#246243]',
      borderHover: 'hover:border-[#246243]/40',
    },
  ];

  return (
    <section id="why-we-exist-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#F8F5F0] rounded-3xl border border-[#E7DDD0] p-8 sm:p-14 shadow-sm">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE4D6] text-[#8C4A27] text-xs font-semibold uppercase tracking-wider mb-2 border border-[#DFD1BF]">
            <Heart className="w-3.5 h-3.5 text-[#B8502E]" />
            <span>Guiding Purpose</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C241E] tracking-tight">
            Why We Exist
          </h2>
          <p className="text-base text-[#6A5849] mt-2 font-light">
            Four foundational pillars that drive our mission to document, honor, and sustain India&apos;s district traditions.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className={`bg-white rounded-2xl border border-[#E8DFC2]/80 p-7 shadow-sm transition-all duration-300 hover:shadow-md ${pillar.borderHover} flex flex-col justify-between`}
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl ${pillar.accentBg} ${pillar.accentColor} flex items-center justify-center mb-5 shadow-xs`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#2C241E] tracking-tight mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#5A4D43] leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Statement */}
        <div className="mt-12 pt-8 border-t border-[#DECFC0] text-center max-w-3xl mx-auto">
          <blockquote className="font-serif text-lg sm:text-xl md:text-2xl text-[#2C241E] font-normal leading-relaxed italic">
            &ldquo;We don&apos;t want heritage to become something people only read about in history books. We want it to remain something people can discover, understand and value today.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
};
