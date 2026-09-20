import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Product } from '../types';
import { MapPin, ShieldCheck, Award, ArrowRight, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import {
  resolveProductImages,
  GENERIC_ODOP_HERITAGE_FALLBACK_IMAGE,
  FALLBACK_IMAGE_LABEL,
  ResolvedProductImageItem,
} from '../utils/imageUtils';

interface ProductCardProps {
  product: Product;
  onSelect: (productId: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  // Resolve image list using strict verification & fallback rules
  const initialImages: ResolvedProductImageItem[] = useMemo(() => {
    return resolveProductImages(product);
  }, [product]);

  // Track image list and dynamic error fallbacks
  const [imageList, setImageList] = useState<ResolvedProductImageItem[]>(initialImages);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const touchStartX = useRef<number | null>(null);

  // Sync with product updates
  useEffect(() => {
    setImageList(resolveProductImages(product));
    setCurrentIndex(0);
  }, [product]);

  const activeImage = imageList[currentIndex] || imageList[0] || {
    url: GENERIC_ODOP_HERITAGE_FALLBACK_IMAGE,
    alt: product.name,
    isFallback: true,
  };

  // Handle image load error seamlessly by falling back to the single canonical ODOP heritage image
  const handleImageError = (index: number) => {
    setImageList((prev) => {
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

  // Auto-slide every 3.5 seconds when there are multiple verified images, pausing on hover
  useEffect(() => {
    if (imageList.length <= 1 || isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageList.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [imageList.length, isHovered]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % imageList.length);
  };

  const handleDotClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchStartX.current - touchEndX;

    if (Math.abs(deltaX) > 40) {
      if (deltaX > 0) {
        // Swiped left -> next image
        setCurrentIndex((prev) => (prev + 1) % imageList.length);
      } else {
        // Swiped right -> previous image
        setCurrentIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
      }
    }
    touchStartX.current = null;
  };

  return (
    <div
      id={`product-card-${product.slug}`}
      onClick={() => onSelect(product.id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer bg-[#FDFDFB] rounded-xl border border-[#EAE2D5] overflow-hidden flex flex-col hover:border-[#C45A34]/40 hover:shadow-md transition-all duration-300"
    >
      {/* Visual Photography Container with Cross-Fade / Sliding Capability */}
      <div
        className="relative aspect-[4/3] w-full overflow-hidden bg-[#EFE9DE] select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Layered images with smooth cross-fade transitions */}
        {imageList.map((img, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={img.url + idx}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-0' : 'opacity-0 pointer-events-none'
              }`}
            >
              <img
                src={img.url}
                alt={img.alt || product.name}
                referrerPolicy="no-referrer"
                onError={() => handleImageError(idx)}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
            </div>
          );
        })}

        {/* Editorial gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-60 group-hover:opacity-45 transition-opacity pointer-events-none z-10" />

        {/* Badges Overlay on Top Left */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-20 pointer-events-none">
          {product.isGI && (
            <span
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-[#2C241E]/90 text-[#F5EFEB] backdrop-blur-sm shadow-sm"
              title="Geographical Indication (GI) Tagged Heritage"
            >
              <Award className="w-3 h-3 text-[#E2B777]" />
              <span>GI Tagged</span>
            </span>
          )}
          {product.isODOP && (
            <span
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-[#B8502E]/95 text-white backdrop-blur-sm shadow-sm"
              title="One District One Product (ODOP) Designated"
            >
              <ShieldCheck className="w-3 h-3 text-white" />
              <span>ODOP {product.district}</span>
            </span>
          )}
        </div>

        {/* Subtle Fallback Image Label on Top Right when Fallback Image is active */}
        {activeImage.isFallback && (
          <div className="absolute top-3 right-3 z-20 pointer-events-none">
            <span
              className="inline-flex items-center gap-1 text-[10px] font-medium tracking-wide bg-black/65 text-[#F2ECE4] px-2 py-0.5 rounded backdrop-blur-xs border border-white/10 shadow-xs"
              title="India ODOP / Traditional Handicrafts Heritage Archive"
            >
              <ImageIcon className="w-2.5 h-2.5 text-[#D5C2B0]" />
              <span>{FALLBACK_IMAGE_LABEL}</span>
            </span>
          </div>
        )}

        {/* Category Badge on Bottom Left */}
        <div className="absolute bottom-3 left-3 z-20 pointer-events-none">
          <span className="text-[11px] font-medium tracking-wide uppercase px-2.5 py-0.5 rounded bg-[#FAF8F5]/90 text-[#2C241E] backdrop-blur-sm">
            {product.category}
          </span>
        </div>

        {/* Carousel Navigation Arrows on Desktop Hover (if multiple images) */}
        {imageList.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous photograph"
              onClick={handlePrev}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-black/45 hover:bg-black/75 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 backdrop-blur-sm shadow"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              aria-label="Next photograph"
              onClick={handleNext}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-black/45 hover:bg-black/75 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 backdrop-blur-sm shadow"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Subtle Navigation Dots (Bottom Center) */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-2 py-1 rounded-full bg-black/30 backdrop-blur-sm">
              {imageList.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`View image ${idx + 1}`}
                  onClick={(e) => handleDotClick(e, idx)}
                  className={`transition-all duration-300 rounded-full ${
                    idx === currentIndex
                      ? 'w-4 h-1.5 bg-white shadow-sm'
                      : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Card Content - Accurately Preserved and Driven by Structured Data */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Location Line */}
          <div className="flex items-center gap-1.5 text-xs text-[#7A6451] font-medium mb-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#B8502E] shrink-0" />
            <span className="truncate">
              {product.district}, {product.state}
            </span>
          </div>

          {/* Product Title */}
          <h3 className="font-serif text-xl font-bold text-[#2C241E] leading-snug group-hover:text-[#B8502E] transition-colors">
            {product.name}
          </h3>

          {product.hindiName && (
            <p className="text-xs text-[#8C7662] mt-0.5 italic font-serif">
              {product.hindiName}
            </p>
          )}

          {/* Short Narrative Description */}
          <p className="text-xs sm:text-sm text-[#5A4D43] line-clamp-2 mt-2.5 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Action Bottom Bar */}
        <div className="mt-5 pt-3.5 border-t border-[#F0E9DF] flex items-center justify-between">
          <span className="text-[11px] font-medium text-[#8C7662] uppercase tracking-wider">
            {product.availability}
          </span>
          <button
            id={`btn-story-${product.slug}`}
            type="button"
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#B8502E] group-hover:translate-x-0.5 transition-transform"
          >
            <span>Discover Story</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

