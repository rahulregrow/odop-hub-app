import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Compass, MapPin, Feather, Eye, ArrowRight } from 'lucide-react';

export interface CarouselSlide {
  id: string;
  craftName: string;
  artisanRole: string;
  quote: string;
  processDescription: string;
  handsFocus: string;
  materialsUsed: string;
  location: string;
  state: string;
  imageUrl: string;
  imageCredit: string;
  productSlug?: string;
  relatedStateId?: string;
}

const ARTISAN_SLIDES: CarouselSlide[] = [
  {
    id: 'slide-potter',
    craftName: 'Traditional Terracotta & Pottery',
    artisanRole: 'Master Potter at the Wheel',
    quote: 'Behind every craft is a pair of hands.',
    processDescription: 'Centering wet alluvial clay by touch and hand-shaping vessels on a revolving manual potter’s wheel.',
    handsFocus: 'Wet clay-coated palms guiding the neck and rim with rhythmic thumb pressure',
    materialsUsed: 'Riverbed alluvial clay, manual revolving stone wheel, wooden paddles, open firing kilns',
    location: 'Rural Artisans Cluster',
    state: 'India',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Potter_shaping_clay_on_a_traditional_manual_potter%E2%80%99s_wheel_in_India_02.jpg',
    imageCredit: 'Documentary Archive • Traditional Indian Potter at Work',
    productSlug: 'terracotta-craft',
    relatedStateId: 'rajasthan',
  },
  {
    id: 'slide-madhubani',
    craftName: 'Mithila / Madhubani Painting',
    artisanRole: 'Traditional Folk Painter',
    quote: 'Tradition survives when someone continues to create it.',
    processDescription: 'Painting sacred flora, fauna, and cosmic deities freehand using fine nibs, natural pigments, and homemade soot black.',
    handsFocus: 'Artisan’s fingers steadying the brush and drawing micro-fine double outlines across handmade paper',
    materialsUsed: 'Bamboo twigs, cotton swabs, soot lamp-black, natural berry and turmeric pigments',
    location: 'Madhubani District',
    state: 'Bihar',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Dilli_Haat_Madhubani_Mithila_Painting_Artist.jpg',
    imageCredit: 'Editorial Heritage Archive • Mithila Artist Creating Madhubani Art by Hand',
    productSlug: 'madhubani-painting',
    relatedStateId: 'bihar',
  },
  {
    id: 'slide-sikki',
    craftName: 'Sikki Golden Grass Craft',
    artisanRole: 'Mithila Riparian Grass Artisan',
    quote: 'Meet the hands that carry India’s heritage forward.',
    processDescription: 'Harvesting wild riverbank golden grass and coiling it with brass Takua needles into ritual dowry containers and folk forms.',
    handsFocus: 'Moistened fingers splitting and tightly coiling golden grass reeds through structural Munj cores',
    materialsUsed: 'Wild riparian Sikki grass (Chrysopogon zizanioides), Munj grass core, Takua brass needle',
    location: 'Sitamarhi & Madhubani',
    state: 'Bihar',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Sikki_Grass_Craft_by_artisan_Nazda_Khatun_of_Bihar_11.jpg',
    imageCredit: 'Documentary Record • Master Artisan Nazda Khatun Weaving Sikki Grass',
    productSlug: 'sikki-craft',
    relatedStateId: 'bihar',
  },
  {
    id: 'slide-textile',
    craftName: 'Kotpad Tribal Handloom Weaving',
    artisanRole: 'Mirgan Master Pit-Loom Weaver',
    quote: 'Art cannot survive without the artisans who create it.',
    processDescription: 'Hand-weaving unbleached organic cotton dyed with the roots of the forest Aal tree on ancient wooden pit-looms.',
    handsFocus: 'Weaver’s hands throwing the wooden shuttle and picking extra-weft tribal nature motifs',
    materialsUsed: 'Aal tree root bark (Morinda citrifolia), unbleached hand-spun cotton, castor oil, wood ash, pit-loom',
    location: 'Koraput District',
    state: 'Odisha',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Kotpad_Weaving.jpg',
    imageCredit: 'Documentary Archive • Master Mirgan Weaver at Traditional Pit-Loom in Koraput',
    productSlug: 'kotpad-handloom',
    relatedStateId: 'odisha',
  },
  {
    id: 'slide-tikuli',
    craftName: 'Tikuli Lacquer & Enamel Art',
    artisanRole: 'Patna Master Enamel Craftsman',
    quote: 'The future is incomplete without history.',
    processDescription: 'Translating ancient 800-year-old royal forehead bindi miniatures onto multi-coated lacquer wood using fine steel needles.',
    handsFocus: 'Master craftsman holding sharpened bamboo needle applying micro-strokes of pure gold leaf and enamel',
    materialsUsed: 'Hardboard sanded to mirror finish, zinc oxide, clear lacquer varnish, enamel paints, gold foil leafing',
    location: 'Patna District',
    state: 'Bihar',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/TIkuli_Art_by_Ashok_Kumar_Biswas.jpg',
    imageCredit: 'Heritage Documentation • Master Artisan Ashok Kumar Biswas Demonstrating Tikuli Art',
    productSlug: 'tikuli-art',
    relatedStateId: 'bihar',
  },
];

interface ArtisanCarouselProps {
  onNavigate: (view: string, params?: { stateId?: string; productId?: string }) => void;
}

export const ArtisanCarousel: React.FC<ArtisanCarouselProps> = ({ onNavigate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ARTISAN_SLIDES.length);
    }, 5500);
  };

  useEffect(() => {
    if (isPlaying) {
      startTimer();
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + ARTISAN_SLIDES.length) % ARTISAN_SLIDES.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % ARTISAN_SLIDES.length);
  };

  const handleSelect = (index: number) => {
    setCurrentIndex(index);
  };

  const currentSlide = ARTISAN_SLIDES[currentIndex];

  return (
    <section
      id="artisan-carousel-section"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Section Header: The Hands Behind the Heritage (Compact) */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-4">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F4EDE2] text-[#8C4A27] text-[11px] font-semibold uppercase tracking-wider mb-1.5 border border-[#E8DEC8]">
            <Feather className="w-3 h-3 text-[#B8502E]" />
            <span>Living Heritage &bull; Human Craft Process</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C241E] tracking-tight">
            The Hands Behind the Heritage
          </h2>
          <p className="text-xs sm:text-sm text-[#6A5849] mt-1 font-light leading-relaxed">
            Behind every piece of art is a master artisan carrying centuries of living tradition forward.
          </p>
        </div>

        <button
          onClick={() => onNavigate('artisans')}
          className="self-start sm:self-end inline-flex items-center gap-1 text-xs font-semibold text-[#B8502E] hover:underline whitespace-nowrap"
        >
          <span>Meet All Artisans</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Institutional Auto-Sliding Carousel Canvas (Compact) */}
      <div className="relative rounded-2xl overflow-hidden bg-[#1E1712] border border-[#3A2E24] shadow-md h-[270px] sm:h-[310px] md:h-[340px]">
        {/* Slide Image with Smooth Cross-Fade */}
        <div className="absolute inset-0">
          {ARTISAN_SLIDES.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.imageUrl}
                alt={`${slide.craftName} - ${slide.artisanRole}`}
                className="w-full h-full object-cover object-center"
                loading={idx === 0 ? 'eager' : 'lazy'}
                referrerPolicy="no-referrer"
              />
              {/* Authentic Documentary Vignette: Deep dark left gradient for text readability, subtle bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#140E0A]/95 via-[#140E0A]/75 to-transparent sm:w-3/4" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140E0A]/90 via-transparent to-black/30" />
            </div>
          ))}
        </div>

        {/* Minimal Documentary Overlay Content */}
        <div className="relative z-20 h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 text-[#FAF8F5] max-w-2xl">
          {/* Top Pill Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full bg-[#FAF8F5]/15 backdrop-blur-md border border-[#FAF8F5]/25 text-xs font-semibold tracking-wider uppercase text-[#EFE7DC]">
              Slide {currentIndex + 1} of {ARTISAN_SLIDES.length}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B8502E]/80 backdrop-blur-md text-xs font-semibold text-white">
              <MapPin className="w-3 h-3" />
              <span>{currentSlide.location}, {currentSlide.state}</span>
            </span>
          </div>

          {/* Center Emotional Quote & Craft Process Details */}
          <div className="my-auto py-4 space-y-3">
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#FBF6EE] font-normal leading-snug tracking-tight drop-shadow-sm">
              &ldquo;{currentSlide.quote}&rdquo;
            </p>

            <div className="pt-1">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#E6B87E] tracking-tight">
                {currentSlide.craftName}
              </h3>
              <p className="text-xs sm:text-sm text-[#DFD5C8] font-medium mt-0.5">
                {currentSlide.artisanRole}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#CDBEAF] leading-relaxed hidden sm:block max-w-lg">
              <strong className="text-white">Hands at work:</strong> {currentSlide.handsFocus}.
            </p>
          </div>

          {/* Bottom Controls & Metadata */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/15">
            <div className="flex items-center gap-2 text-[11px] text-[#A89886]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
              <span className="line-clamp-1">{currentSlide.imageCredit}</span>
            </div>

            {/* Quick Action to discover craft */}
            {currentSlide.productSlug && (
              <button
                onClick={() => onNavigate('product-detail', { productId: `bihar-${currentSlide.productSlug}` })}
                className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/20 hover:bg-white text-white hover:text-[#2C241E] text-xs font-semibold backdrop-blur-md transition-colors"
              >
                <span>Discover Craft Story</span>
                <Compass className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Carousel Navigation Arrows */}
        <button
          id="carousel-prev-btn"
          onClick={handlePrev}
          aria-label="Previous artisan slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-[#B8502E]"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          id="carousel-next-btn"
          onClick={handleNext}
          aria-label="Next artisan slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-[#B8502E]"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Bottom Carousel Indicator Dots & Pause/Play */}
        <div className="absolute bottom-4 right-4 sm:right-8 z-30 flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="text-white/80 hover:text-white p-1 transition-colors"
            title={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>

          <div className="h-3 w-px bg-white/30 mx-1" />

          {ARTISAN_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => handleSelect(idx)}
              className={`transition-all rounded-full ${
                idx === currentIndex
                  ? 'w-6 h-2 bg-[#E2B777]'
                  : 'w-2 h-2 bg-white/40 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${idx + 1}: ${slide.craftName}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
