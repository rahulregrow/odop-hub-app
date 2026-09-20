import React, { useState } from 'react';
import { Users, Compass, Cpu, Heart, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FounderProfile {
  name: string;
  role: string;
  focus: string;
  initials: string;
  icon: React.ElementType;
  accentBg: string;
  accentText: string;
  profileParagraphs: string[];
}

const FOUNDERS: FounderProfile[] = [
  {
    name: 'Samrat Singh',
    role: 'Co-Founder',
    focus: 'Field Grounding & Community Outreach',
    initials: 'S',
    icon: Compass,
    accentBg: 'bg-[#F5F0E8]',
    accentText: 'text-[#8C6A33]',
    profileParagraphs: [
      'Brings grassroots field experience and community outreach across craft clusters, dedicated to ensuring traditional artisans receive genuine recognition and fair value for their generational mastery.',
    ],
  },
  {
    name: 'Amandeep',
    role: 'Co-Founder',
    focus: 'Technology & Digital Architecture',
    initials: 'AD',
    icon: Cpu,
    accentBg: 'bg-[#EAF3EE]',
    accentText: 'text-[#246243]',
    profileParagraphs: [
      'Leads digital architecture and technology systems, dedicated to building simple, accessible platforms that help India’s artisan heritage reach a wider modern audience.',
    ],
  },
];

interface FounderSectionProps {
  defaultOpen?: boolean;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ defaultOpen = true }) => {
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);

  return (
    <section id="founder-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#FAF6F0] rounded-3xl border border-[#E7DDD0] p-6 sm:p-10 lg:p-12 shadow-sm transition-all duration-300">
        {/* Clickable Header Button / Accordion Toggle */}
        <button
          id="btn-toggle-founder-section"
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-full text-left flex flex-col md:flex-row md:items-center justify-between gap-6 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8502E] rounded-2xl"
          aria-expanded={isOpen}
          aria-controls="founder-section-content"
        >
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE4D6] text-[#8C4A27] text-xs font-semibold uppercase tracking-wider mb-2 border border-[#DFD1BF]">
              <Users className="w-3.5 h-3.5 text-[#B8502E]" />
              <span>People Behind the Mission</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C241E] tracking-tight group-hover:text-[#B8502E] transition-colors">
              The People Behind ODOP Hub
            </h2>
            <p className="text-sm sm:text-base text-[#6A5849] mt-2 font-light leading-relaxed">
              ODOP Hub is being built by people who believe that India&apos;s heritage deserves to be discovered, understood and carried forward.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 self-start md:self-center">
            <span className="text-xs sm:text-sm font-semibold text-[#8C4A27] group-hover:text-[#B8502E] transition-colors">
              {isOpen ? 'Hide Team & Vision' : 'View Founders & Vision'}
            </span>
            <div
              className={`w-10 h-10 rounded-full border border-[#D8C7B5] bg-white flex items-center justify-center text-[#2C241E] group-hover:border-[#B8502E] group-hover:text-[#B8502E] transition-all duration-300 ${
                isOpen ? 'rotate-180 bg-[#F5EFE6]' : ''
              }`}
            >
              <ChevronDown className="w-5 h-5 transition-transform duration-300" />
            </div>
          </div>
        </button>

        {/* Collapsible Content */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id="founder-section-content"
              key="founder-content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="pt-10 mt-8 border-t border-[#DECFC0]">
                {/* Founder Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {FOUNDERS.map((founder) => {
                    const Icon = founder.icon;
                    return (
                      <div
                        key={founder.name}
                        className="bg-white rounded-2xl border border-[#E8DFC2]/90 p-7 sm:p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300 relative group"
                      >
                        <div>
                          {/* Top Avatar / Monogram Header */}
                          <div className="flex items-center gap-4 pb-6 mb-6 border-b border-[#F0EAE1]">
                            <div
                              className={`w-14 h-14 rounded-full ${founder.accentBg} ${founder.accentText} flex items-center justify-center font-serif text-xl font-bold border border-current/20 shadow-xs shrink-0`}
                            >
                              <span>{founder.initials}</span>
                            </div>
                            <div>
                              <h3 className="font-serif text-2xl font-bold text-[#2C241E] tracking-tight">
                                {founder.name}
                              </h3>
                              <div className="flex items-center gap-2 mt-0.5">
                                <span className="text-xs font-bold uppercase tracking-wider text-[#B8502E]">
                                  {founder.role}
                                </span>
                                <span className="text-[#C7B5A0]">&bull;</span>
                                <span className="text-xs text-[#7A6755] font-medium">
                                  {founder.focus}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Body Paragraphs - Warm and Purpose-Driven */}
                          <div className="space-y-4 text-sm text-[#524436] font-light leading-relaxed">
                            {founder.profileParagraphs.map((para, i) => (
                              <p key={i}>
                                {para}
                              </p>
                            ))}
                          </div>
                        </div>

                        {/* Subtle Card Footer Indicator */}
                        <div className="mt-6 pt-4 border-t border-[#F5EFE8] flex items-center justify-between text-xs text-[#8C7662]">
                          <span className="inline-flex items-center gap-1.5 font-medium">
                            <Icon className="w-3.5 h-3.5 text-[#B8502E]" />
                            <span>ODOP Hub Team</span>
                          </span>
                          <span className="text-[11px] italic">Dedicated to Artisans</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Founder Section Closing */}
                <div className="mt-12 pt-8 border-t border-[#DECFC0] text-center max-w-3xl mx-auto space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3EBE0] text-[#7A624E] text-xs font-semibold tracking-wider uppercase">
                    <Heart className="w-3 h-3 text-[#B8502E]" />
                    <span>Shared Commitment</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C241E]">
                    Shared Vision. One Purpose.
                  </h3>
                  <p className="text-base sm:text-lg text-[#5A4D43] font-light leading-relaxed">
                    Different journeys brought us here, but the purpose is shared — to help India&apos;s traditional arts, crafts and artisans find the recognition, understanding and reach they deserve.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
