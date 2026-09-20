import React, { useEffect } from 'react';
import { Compass, BookOpen, Users, Mail, Heart, Sparkles, Award, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { FounderSection } from '../components/FounderSection';
import { ContactSection } from '../components/ContactSection';

interface AboutViewProps {
  onNavigate: (
    view: string,
    params?: { stateId?: string; productId?: string; storyId?: string; section?: string }
  ) => void;
  onOpenODOPInfo: () => void;
  targetSection?: string;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onNavigate,
  onOpenODOPInfo,
  targetSection,
}) => {
  // Smooth scroll to target section if provided
  useEffect(() => {
    if (targetSection) {
      const timer = setTimeout(() => {
        const el = document.getElementById(targetSection);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [targetSection]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const pillars = [
    {
      id: 'pillar-discover',
      title: 'Discover',
      description: 'Find the authentic crafts, GI-tagged treasures and district champions that make every region of India unique.',
      icon: Compass,
      accentBg: 'bg-[#F7EBE6]',
      accentColor: 'text-[#B8502E]',
    },
    {
      id: 'pillar-understand',
      title: 'Understand',
      description: 'Go beyond the physical item and discover its folklore, 15-step craft lineages, raw materials and cultural meaning.',
      icon: BookOpen,
      accentBg: 'bg-[#F5F0E8]',
      accentColor: 'text-[#8C6A33]',
    },
    {
      id: 'pillar-recognise',
      title: 'Recognise',
      description: 'Give transparent visibility and credit to master artisans, women cooperatives and generational maker communities.',
      icon: Award,
      accentBg: 'bg-[#FAF0E6]',
      accentColor: 'text-[#C45A34]',
    },
    {
      id: 'pillar-connect',
      title: 'Connect',
      description: "Create an authentic digital bridge connecting India's artisan communities and district traditions with a worldwide audience.",
      icon: Users,
      accentBg: 'bg-[#EAF3EE]',
      accentColor: 'text-[#246243]',
    },
  ];

  return (
    <div className="bg-[#FAF8F5] min-h-screen pb-28">
      {/* ========================================================================= */}
      {/* PAGE HERO HEADER & QUICK SECTION JUMP TABS                                */}
      {/* ========================================================================= */}
      <section className="relative bg-[#241C16] text-[#FAF8F5] pt-16 pb-20 sm:pt-20 sm:pb-24 overflow-hidden border-b border-[#3D3025]">
        {/* Subtle background heritage imagery */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Madhubani_Painting_Exhibition.jpg"
            alt="Traditional Indian Crafts"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#241C16] via-[#241C16]/80 to-[#241C16]/95" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF8F5]/10 border border-[#FAF8F5]/20 text-[#EFE7DC] text-xs uppercase tracking-widest font-semibold backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#C45A34]" />
            <span>About ODOP Hub &bull; odophub.com</span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#FAF8F5] font-normal tracking-tight leading-tight max-w-4xl mx-auto">
            Preserving &amp; Connecting India’s <span className="italic text-[#E8DCCF]">District Heritage</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#D8C7B5] font-light max-w-3xl mx-auto leading-relaxed">
            A dedicated digital discovery platform celebrating the crafts, master artisans, One District One Product (ODOP) champions, and GI-certified treasures across India’s 28 States and 8 Union Territories.
          </p>

          {/* Quick Jump In-Page Anchor Tabs */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-medium">
            <button
              onClick={() => scrollToSection('why-we-exist')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF8F5]/15 hover:bg-[#FAF8F5]/25 text-white border border-[#FAF8F5]/20 transition-all cursor-pointer"
            >
              <Heart className="w-3.5 h-3.5 text-[#C45A34]" />
              <span>1. Why We Exist</span>
            </button>
            <button
              onClick={() => scrollToSection('people-behind')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF8F5]/15 hover:bg-[#FAF8F5]/25 text-white border border-[#FAF8F5]/20 transition-all cursor-pointer"
            >
              <Users className="w-3.5 h-3.5 text-[#E0C09E]" />
              <span>2. People Behind ODOP Hub</span>
            </button>
            <button
              onClick={() => scrollToSection('lets-connect')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF8F5]/15 hover:bg-[#FAF8F5]/25 text-white border border-[#FAF8F5]/20 transition-all cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-[#88C7A0]" />
              <span>3. Let’s Connect</span>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 1: WHY WE EXIST                                                   */}
      {/* ========================================================================= */}
      <section id="why-we-exist" className="pt-16 sm:pt-24 space-y-12">
        {/* Narrative & Origin Box */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF4ED] rounded-3xl border border-[#E9DFD0] p-8 sm:p-14 shadow-sm relative overflow-hidden">
            {/* Subtle decorative watermark icon */}
            <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 opacity-5 pointer-events-none">
              <BookOpen className="w-96 h-96 text-[#2C241E]" />
            </div>

            <div className="relative z-10 max-w-4xl space-y-6">
              {/* Section Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE3D5] text-[#8C4A27] text-xs font-semibold uppercase tracking-wider border border-[#DFD0BE]">
                <Heart className="w-3.5 h-3.5 text-[#B8502E]" />
                <span>1. Guiding Purpose &bull; Why We Exist</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C241E] tracking-tight leading-tight">
                India has a story in every district.
              </h2>

              <div className="space-y-5 text-base sm:text-lg text-[#5A4D43] font-light leading-relaxed">
                <p>
                  ODOP Hub began with a simple thought — India has never been short of art, craft, stories or skilled hands. What has often been missing is a dignified digital bridge between those traditions and the people who can discover, understand and value them.
                </p>
                <p>
                  Across India’s 750+ districts, millions of artisans, weavers, potters, and sculptors nurture generational skills that exist nowhere else on earth. A single village in Koppal still sculpts softwood with boiled tamarind seed paste. A wetland in Mithila produces sacred fox nuts popped by hand over open clay hearths. A handloom in Bhagalpur turns wild forest cocoons into Ahimsa silk that breathes with the seasons.
                </p>
                <p>
                  Every traditional craft carries more than a finished product. It carries a place, a community, a memory, and generations of knowledge. But many of these traditions struggle to find the visibility and reach they deserve in modern digital spaces.
                </p>

                {/* Core Credo Callout */}
                <div className="p-6 sm:p-8 rounded-2xl bg-white/90 border-l-4 border-[#B8502E] border-y border-r border-[#E2D6C6] my-6 shadow-sm">
                  <p className="font-serif text-xl sm:text-2xl text-[#2C241E] font-medium leading-relaxed italic">
                    &ldquo;Every craft tells a story. Every artisan keeps it alive. We bring these stories from their roots to the world.&rdquo;
                  </p>
                </div>

                <p>
                  ODOP Hub was created to build that enduring connection — between heritage and the present, between artisans and connoisseurs, and between a traditional craft lineage and the next generation discovering it for the first time.
                </p>
              </div>

              {/* Value Flow Representation */}
              <div className="pt-6 border-t border-[#DECFC0] space-y-3">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#8C7662]">
                  The Cultural Value Chain:
                </span>
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7A6451]">
                  <span className="px-3 py-1.5 rounded-lg bg-white border border-[#D8C9B8] text-[#2C241E] shadow-2xs">Product</span>
                  <span>&rarr;</span>
                  <span className="px-3 py-1.5 rounded-lg bg-white border border-[#D8C9B8] text-[#2C241E] shadow-2xs">Art &amp; Technique</span>
                  <span>&rarr;</span>
                  <span className="px-3 py-1.5 rounded-lg bg-white border border-[#D8C9B8] text-[#2C241E] shadow-2xs">Living Story</span>
                  <span>&rarr;</span>
                  <span className="px-3 py-1.5 rounded-lg bg-[#F4EDE2] border border-[#B8502E]/40 text-[#B8502E] shadow-2xs">Master Artisan</span>
                  <span>&rarr;</span>
                  <span className="px-3 py-1.5 rounded-lg bg-[#2C241E] text-white shadow-2xs">India’s Heritage</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Guiding Pillars */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F8F5F0] rounded-3xl border border-[#E7DDD0] p-8 sm:p-14 shadow-sm space-y-10">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#B8502E]">
                Platform Foundations
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C241E] mt-1">
                Our Four Foundational Pillars
              </h3>
              <p className="text-sm sm:text-base text-[#6A5849] mt-2 font-light">
                How ODOP Hub structures discovery, preservation, artisan dignity, and authentic community connections.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.id}
                    className="bg-white rounded-2xl border border-[#E8DFC2]/80 p-7 shadow-sm transition-all duration-300 hover:shadow-md flex flex-col justify-between"
                  >
                    <div>
                      <div
                        className={`w-12 h-12 rounded-xl ${pillar.accentBg} ${pillar.accentColor} flex items-center justify-center mb-5 shadow-xs`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="font-serif text-2xl font-bold text-[#2C241E] tracking-tight mb-3">
                        {pillar.title}
                      </h4>
                      <p className="text-sm text-[#5A4D43] leading-relaxed font-light">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Platform Independence & Vision Notice */}
            <div className="pt-8 border-t border-[#DECFC0] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-[#FAF4ED] p-6 rounded-2xl border border-[#E8DCCF]">
              <div className="space-y-1.5 max-w-3xl">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B8502E]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Independent Cultural Initiative</span>
                </div>
                <p className="text-xs sm:text-sm text-[#5A4D43] leading-relaxed font-light">
                  ODOP Hub indexes official One District One Product (ODOP) and Geographical Indications (GI) registries recognized across India, operating as an independent cultural discovery space and bridge for artisan communities.
                </p>
              </div>
              <button
                onClick={onOpenODOPInfo}
                className="px-4 py-2.5 rounded-lg bg-[#2C241E] text-white font-medium text-xs whitespace-nowrap hover:bg-[#B8502E] transition-colors"
              >
                Learn about ODOP &amp; GI
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: PEOPLE BEHIND ODOP HUB                                         */}
      {/* ========================================================================= */}
      <section id="people-behind" className="pt-16 sm:pt-24">
        <FounderSection defaultOpen={true} />
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: LET'S CONNECT                                                  */}
      {/* ========================================================================= */}
      <section id="lets-connect" className="pt-16 sm:pt-24">
        <ContactSection embedded={false} onNavigate={onNavigate} />
      </section>
    </div>
  );
};
