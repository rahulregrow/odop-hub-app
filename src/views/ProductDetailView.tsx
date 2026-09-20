import React, { useState, useEffect, useMemo } from 'react';
import { Product } from '../types';
import { PRODUCTS_DATA } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import {
  resolveProductImages,
  GENERIC_ODOP_HERITAGE_FALLBACK_IMAGE,
  FALLBACK_IMAGE_LABEL,
  ResolvedProductImageItem,
} from '../utils/imageUtils';
import {
  ArrowLeft,
  MapPin,
  ShieldCheck,
  Award,
  Sparkles,
  Layers,
  Users,
  Feather,
  Info,
  Calendar,
  ExternalLink,
  ChevronRight,
  Image as ImageIcon,
} from 'lucide-react';

interface ProductDetailViewProps {
  productId: string;
  onBack: () => void;
  onSelectProduct: (id: string) => void;
  onSelectState?: (stateId: string) => void;
  onOpenODOPInfo?: () => void;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({
  productId,
  onBack,
  onSelectProduct,
  onSelectState,
  onOpenODOPInfo,
}) => {
  const product = PRODUCTS_DATA.find((p) => p.id === productId) || PRODUCTS_DATA[0];

  const resolvedImages = useMemo(() => {
    return resolveProductImages(product);
  }, [product]);

  const [images, setImages] = useState<ResolvedProductImageItem[]>(resolvedImages);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  useEffect(() => {
    const nextImages = resolveProductImages(product);
    setImages(nextImages);
    setActiveImageIndex(0);
  }, [product]);

  const handleImageError = (index: number) => {
    setImages((prev) => {
      const updated = [...prev];
      if (updated[index] && updated[index].url !== GENERIC_ODOP_HERITAGE_FALLBACK_IMAGE) {
        updated[index] = {
          ...updated[index],
          url: GENERIC_ODOP_HERITAGE_FALLBACK_IMAGE,
          isFallback: true,
        };
      }
      return updated;
    });
  };

  const currentImage = images[activeImageIndex] || images[0] || {
    url: GENERIC_ODOP_HERITAGE_FALLBACK_IMAGE,
    alt: product.name,
    caption: `${product.name} — Cultural Heritage`,
    isFallback: true,
  };

  // Related products from same state or category
  const relatedProducts = PRODUCTS_DATA.filter(
    (p) => p.id !== product.id && (p.state === product.state || p.category === product.category)
  ).slice(0, 3);


  return (
    <article className="pb-28">
      {/* Breadcrumb Navigation Bar */}
      <div className="border-b border-[#EAE2D5] bg-[#FAF8F5]/80 backdrop-blur-sm sticky top-20 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-xs text-[#7A6451]">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            <button
              onClick={onBack}
              className="hover:text-[#2C241E] font-medium flex items-center gap-1 shrink-0"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Catalog</span>
            </button>
            <span>/</span>
            <span
              onClick={() => onSelectState && onSelectState(product.state.toLowerCase())}
              className="hover:underline cursor-pointer font-medium text-[#2C241E] shrink-0"
            >
              {product.state}
            </span>
            <span>/</span>
            <span className="text-[#8C7662] truncate shrink-0">{product.district}</span>
            <span>/</span>
            <span className="text-[#B8502E] font-medium truncate shrink-0">{product.name}</span>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <span className="text-[11px] uppercase tracking-wider font-semibold text-[#8C7662]">
              {product.category}
            </span>
          </div>
        </div>
      </div>

      {/* Editorial Header & Hero Section */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-8">
        <div className="space-y-4">
          {/* Location and Category badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded bg-[#EFE9DE] text-[#2C241E]">
              <MapPin className="w-3.5 h-3.5 text-[#B8502E]" />
              <span>{product.district}, {product.state}</span>
            </span>
            <span className="text-xs font-medium px-2.5 py-1 rounded bg-[#F2EDE5] text-[#5A4D43]">
              {product.region}
            </span>
            <span className="text-xs font-medium px-2.5 py-1 rounded bg-[#FAF8F5] text-[#8C7662] border border-[#DFD6C5]">
              {product.category}
            </span>
          </div>

          {/* Product Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#2C241E] font-bold tracking-tight leading-tight">
            {product.name}
          </h1>

          {product.hindiName && (
            <p className="font-serif text-lg sm:text-xl text-[#8C7662] italic">
              {product.hindiName}
            </p>
          )}

          {/* Lead Summary paragraph */}
          <p className="text-base sm:text-xl text-[#5A4D43] leading-relaxed pt-2 max-w-4xl font-light">
            {product.description}
          </p>

          {/* Designation Badges Row */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            {product.isGI && product.giDetails && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#2C241E] text-white text-xs font-semibold shadow-sm">
                <Award className="w-4 h-4 text-[#E2B777]" />
                <span>GI Registered ({product.giDetails.giNumber || 'Official'})</span>
              </div>
            )}
            {product.isODOP && product.odopDetails && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#B8502E] text-white text-xs font-semibold shadow-sm">
                <ShieldCheck className="w-4 h-4 text-white" />
                <span>ODOP Designation: {product.district}</span>
              </div>
            )}
            <span className="text-xs font-medium text-[#7A6451] ml-1">
              Status: <strong className="text-[#2C241E]">{product.availability}</strong>
            </span>
          </div>
        </div>
      </header>

      {/* Main Large Visual Stage & Photography Showcase */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-[#FDFDFB] rounded-2xl border border-[#EAE2D5] overflow-hidden shadow-sm">
          {/* Active Image */}
          <div className="relative aspect-[16/10] sm:aspect-[21/10] w-full bg-[#EFE9DE] overflow-hidden">
            <img
              src={currentImage.url}
              alt={currentImage.alt || currentImage.caption || product.name}
              referrerPolicy="no-referrer"
              onError={() => handleImageError(activeImageIndex)}
              className="w-full h-full object-cover object-center transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
            
            {/* Fallback Image Label if fallback is in use */}
            {currentImage.isFallback && (
              <div className="absolute top-4 right-4 z-10">
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wide bg-black/65 text-[#F2ECE4] px-3 py-1 rounded-md backdrop-blur-xs border border-white/10 shadow-sm"
                  title="India ODOP / Traditional Handicrafts Heritage Archive"
                >
                  <ImageIcon className="w-3.5 h-3.5 text-[#D5C2B0]" />
                  <span>{FALLBACK_IMAGE_LABEL}</span>
                </span>
              </div>
            )}

            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-xs sm:text-sm text-white font-medium drop-shadow-sm">
                {currentImage.caption || `${product.name} — ${product.district}, ${product.state}`}
              </p>
            </div>
          </div>

          {/* Thumbnails Row if more than 1 image */}
          {images.length > 1 && (
            <div className="p-3 bg-[#F8F4EE] border-t border-[#EAE2D5] flex items-center gap-3 overflow-x-auto no-scrollbar">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative aspect-[4/3] w-20 sm:w-24 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                    activeImageIndex === idx ? 'border-[#B8502E] scale-95' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img.url} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Editorial Content Layout: Two Column Body */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Full Editorial Cultural Story */}
          <div className="lg:col-span-8 space-y-12 text-[#2C241E]">
            {/* 1. Origin */}
            <section className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#B8502E]">
                <Feather className="w-4 h-4" />
                <span>Geographical &amp; Historic Origin</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#2C241E]">
                Where the Tradition Comes From
              </h2>
              <p className="text-base text-[#5A4D43] leading-relaxed">
                {product.origin}
              </p>
            </section>

            {/* 2. The Story */}
            <section className="space-y-3 border-t border-[#EAE2D5] pt-10">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#B8502E]">
                The Cultural Chronicle
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#2C241E]">
                The Story Behind the Heritage
              </h2>
              <p className="text-base text-[#5A4D43] leading-relaxed">
                {product.story}
              </p>
            </section>

            {/* 3. The Craft Distinctiveness */}
            <section className="space-y-3 border-t border-[#EAE2D5] pt-10">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#B8502E]">
                Distinctive Character
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#2C241E]">
                What Makes This Craft Unique
              </h2>
              <p className="text-base text-[#5A4D43] leading-relaxed">
                {product.craftDetails}
              </p>
            </section>

            {/* 4. Technique */}
            <section className="space-y-3 border-t border-[#EAE2D5] pt-10">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#B8502E]">
                Master Technique
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#2C241E]">
                How It Is Traditionally Produced
              </h2>
              <p className="text-base text-[#5A4D43] leading-relaxed">
                {product.technique}
              </p>
            </section>

            {/* 5. Materials Used */}
            <section className="space-y-4 border-t border-[#EAE2D5] pt-10">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#B8502E]">
                Natural Ingredients &amp; Mediums
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#2C241E]">
                Traditional Materials
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.materials.map((mat, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg bg-[#FDFDFB] border border-[#EAE2D5] flex items-start gap-2.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B8502E] shrink-0 mt-2" />
                    <span className="text-xs sm:text-sm text-[#4A3E34] font-medium leading-normal">
                      {mat}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. Cultural Significance */}
            <section className="space-y-3 border-t border-[#EAE2D5] pt-10">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#B8502E]">
                Living Meaning
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#2C241E]">
                Cultural Significance to the Community
              </h2>
              <p className="text-base text-[#5A4D43] leading-relaxed">
                {product.culturalSignificance}
              </p>
            </section>

            {/* 7. The Makers & Communities */}
            {/* Who Keeps This Tradition Alive? Section */}
            <section id="who-keeps-tradition-alive" className="space-y-6 border-t border-[#EAE2D5] pt-10 bg-[#FAF4ED] p-6 sm:p-8 rounded-2xl border border-[#E8DCCF]">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#B8502E]">
                <Users className="w-4 h-4" />
                <span>Living Heritage Connection</span>
              </div>

              <div>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C241E] tracking-tight">
                  Who Keeps This Tradition Alive?
                </h2>
                <div className="mt-3 p-4 rounded-xl bg-white/90 border-l-4 border-[#B8502E] border border-[#E2D5C3]">
                  <p className="font-serif text-base sm:text-lg text-[#2C241E] font-medium italic">
                    &ldquo;This tradition continues because artists still create it by hand.&rdquo;
                  </p>
                </div>
              </div>

              {/* Structured Pathway: Art/Craft → Place → Artisan/Community → Story → Technique */}
              <div className="bg-white/80 p-5 rounded-xl border border-[#E5DCD0]">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C4A27] block mb-3">
                  Tradition Continuity Pathway
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
                  <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#EFE9DF]">
                    <span className="text-[10px] uppercase text-[#8C7662] block">1. Art / Craft</span>
                    <strong className="text-xs text-[#2C241E] mt-0.5 block truncate">{product.name}</strong>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#EFE9DF]">
                    <span className="text-[10px] uppercase text-[#8C7662] block">2. Place</span>
                    <strong className="text-xs text-[#2C241E] mt-0.5 block truncate">{product.district}, {product.state}</strong>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#EFE9DF]">
                    <span className="text-[10px] uppercase text-[#8C7662] block">3. Community</span>
                    <strong className="text-xs text-[#2C241E] mt-0.5 block truncate">{product.makers.community || 'Rural Guilds'}</strong>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#EFE9DF]">
                    <span className="text-[10px] uppercase text-[#8C7662] block">4. Story</span>
                    <strong className="text-xs text-[#2C241E] mt-0.5 block truncate">{product.makers.traditionAge || 'Ancient Roots'}</strong>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#EFE9DF] col-span-2 sm:col-span-1">
                    <span className="text-[10px] uppercase text-[#8C7662] block">5. Technique</span>
                    <strong className="text-xs text-[#2C241E] mt-0.5 block truncate">100% Handcrafted</strong>
                  </div>
                </div>
              </div>

              {/* Detailed Artisan & Lineage Information */}
              <div className="space-y-3.5 text-sm text-[#5A4D43] pt-2">
                {product.makers.community && (
                  <p className="leading-relaxed">
                    <strong className="text-[#2C241E]">Artisan Communities &amp; Lineages:</strong> {product.makers.community}
                  </p>
                )}
                {product.makers.artisanCountEstimate && (
                  <p className="leading-relaxed">
                    <strong className="text-[#2C241E]">Estimated Artisan Base:</strong> {product.makers.artisanCountEstimate}
                  </p>
                )}
                {product.makers.traditionAge && (
                  <p className="leading-relaxed">
                    <strong className="text-[#2C241E]">Historical Antiquity:</strong> {product.makers.traditionAge}
                  </p>
                )}
                {product.makers.notableArtisans && (
                  <p className="leading-relaxed">
                    <strong className="text-[#2C241E]">Master Craftspeople &amp; Honorees:</strong> {product.makers.notableArtisans}
                  </p>
                )}
                {product.makers.regionNotes && (
                  <p className="italic text-xs text-[#7A6451] pt-1">
                    {product.makers.regionNotes}
                  </p>
                )}
              </div>
            </section>
          </div>

          {/* Right Column: Structured Official Designation Dossier & Future Marketplace Readiness */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-36">
            {/* ODOP Official Dossier Card */}
            {product.isODOP && product.odopDetails && (
              <div className="bg-[#FDFDFB] rounded-2xl border border-[#EAE2D5] p-6 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B8502E]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>ODOP Designation Dossier</span>
                </div>

                <div className="space-y-2.5 text-xs text-[#5A4D43]">
                  <div className="flex justify-between border-b border-[#F2EDE5] pb-2">
                    <span className="text-[#8C7662]">Designated District:</span>
                    <strong className="text-[#2C241E]">{product.odopDetails.district}</strong>
                  </div>
                  <div className="flex justify-between border-b border-[#F2EDE5] pb-2">
                    <span className="text-[#8C7662]">State Territory:</span>
                    <strong className="text-[#2C241E]">{product.odopDetails.state}</strong>
                  </div>
                  <div className="flex justify-between border-b border-[#F2EDE5] pb-2">
                    <span className="text-[#8C7662]">Identified Sector:</span>
                    <strong className="text-[#2C241E] text-right">{product.odopDetails.sector}</strong>
                  </div>
                  {product.odopDetails.designationYear && (
                    <div className="flex justify-between border-b border-[#F2EDE5] pb-2">
                      <span className="text-[#8C7662]">Designation Year:</span>
                      <strong className="text-[#2C241E]">{product.odopDetails.designationYear}</strong>
                    </div>
                  )}
                </div>

                {product.odopDetails.officialReferenceNote && (
                  <p className="text-[11px] text-[#8C7662] italic bg-[#FAF8F5] p-2.5 rounded border border-[#EAE2D5]">
                    {product.odopDetails.officialReferenceNote}
                  </p>
                )}

                <button
                  onClick={onOpenODOPInfo}
                  className="w-full text-center text-xs font-semibold text-[#B8502E] hover:underline pt-1"
                >
                  Learn how ODOP districts are designated →
                </button>
              </div>
            )}

            {/* GI Registry Dossier Card */}
            {product.isGI && product.giDetails && (
              <div className="bg-[#FDFDFB] rounded-2xl border border-[#EAE2D5] p-6 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C6A33]">
                  <Award className="w-4 h-4 text-[#8C6A33]" />
                  <span>Geographical Indication Details</span>
                </div>

                <div className="space-y-2.5 text-xs text-[#5A4D43]">
                  {product.giDetails.giNumber && (
                    <div className="flex justify-between border-b border-[#F2EDE5] pb-2">
                      <span className="text-[#8C7662]">GI Registration No:</span>
                      <strong className="text-[#2C241E]">{product.giDetails.giNumber}</strong>
                    </div>
                  )}
                  {product.giDetails.registeredYear && (
                    <div className="flex justify-between border-b border-[#F2EDE5] pb-2">
                      <span className="text-[#8C7662]">Year Inscribed:</span>
                      <strong className="text-[#2C241E]">{product.giDetails.registeredYear}</strong>
                    </div>
                  )}
                  {product.giDetails.classCategory && (
                    <div className="flex justify-between border-b border-[#F2EDE5] pb-2">
                      <span className="text-[#8C7662]">Goods Class:</span>
                      <strong className="text-[#2C241E] text-right">{product.giDetails.classCategory}</strong>
                    </div>
                  )}
                  <div className="flex flex-col border-b border-[#F2EDE5] pb-2">
                    <span className="text-[#8C7662]">Certified Terroir Area:</span>
                    <span className="text-[#2C241E] font-medium mt-0.5">{product.giDetails.geographicalArea}</span>
                  </div>
                </div>

                {product.giDetails.certificateRef && (
                  <p className="text-[11px] text-[#8C7662] bg-[#FAF8F5] p-2.5 rounded border border-[#EAE2D5]">
                    Ref: {product.giDetails.certificateRef}
                  </p>
                )}
                {product.giDetails.officialRegistrySource && (
                  <p className="text-[10px] text-[#9E9081]">
                    Authority: {product.giDetails.officialRegistrySource}
                  </p>
                )}
              </div>
            )}

            {/* Non-Commercial Discovery Notice & Future Architecture */}
            <div className="bg-[#FAF8F5] rounded-2xl border border-[#DFD6C5] p-5 space-y-2 text-xs text-[#6B5A4B]">
              <div className="flex items-center gap-1.5 font-semibold text-[#2C241E]">
                <Info className="w-4 h-4 text-[#B8502E]" />
                <span>Discovery &amp; Preservation Platform</span>
              </div>
              <p className="leading-relaxed">
                ODOP Hub v1 is an educational discovery platform. In keeping with our mission, transactions and online purchases are not active at this stage.
              </p>
              <p className="text-[11px] text-[#8C7662] pt-1">
                We are building structured archives and establishing direct artisan collective liaisons for future direct-to-artisan initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Discover More: Related Crafts */}
      {relatedProducts.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-16 border-t border-[#EAE2D5]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#B8502E]">
                Related Traditions
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#2C241E] mt-1">
                Discover More Heritage from {product.state}
              </h2>
            </div>
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#B8502E] hover:underline"
            >
              <span>Explore All Products</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((rel) => (
              <ProductCard
                key={rel.id}
                product={rel}
                onSelect={(id) => {
                  onSelectProduct(id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            ))}
          </div>
        </section>
      )}
    </article>
  );
};
