import { Product, ProductCardImage } from '../types';

/**
 * Single Canonical Generic Fallback Image for India ODOP & Traditional Heritage.
 * Used whenever an accurate, verified, exact product photograph is unavailable or fails to load.
 */
export const GENERIC_ODOP_HERITAGE_FALLBACK_IMAGE = '/assets/odop_heritage_fallback.jpg';
export const GENERIC_ODOP_HERITAGE_FALLBACK_ALT = 'Traditional Indian ODOP & Handicraft Heritage';
export const FALLBACK_IMAGE_LABEL = 'ODOP Heritage Image';

/**
 * List of product IDs with officially verified, exact-match imagery.
 * If a product is not in this verified exact match list, or if its image URL is missing,
 * the application strictly applies the single generic ODOP heritage fallback.
 */
export const VERIFIED_EXACT_PRODUCT_IDS = new Set<string>([
  'bihar-madhubani-painting',
  'bihar-manjusha-art',
  'bihar-tikuli-art',
  'bihar-sikki-grass-craft',
  'bihar-bhagalpur-tussar-silk',
  'bihar-mithila-makhana',
  'bihar-sujuni-embroidery',
  'karnataka-channapatna-toys',
  'karnataka-kinnal-toys',
  'karnataka-ilkal-saree',
  'rajasthan-jaipur-blue-pottery',
  'odisha-kotpad-handloom',
  'jammu-kashmir-pashmina',
  'uttar-pradesh-banarasi-silk',
]);

/**
 * Checks whether an image URL is the generic fallback image.
 */
export function isGenericFallbackImage(url?: string): boolean {
  if (!url) return true;
  return (
    url === GENERIC_ODOP_HERITAGE_FALLBACK_IMAGE ||
    url.includes('odop_heritage_fallback') ||
    url.includes('Traditional_Indian_handicrafts')
  );
}

/**
 * Checks whether a given product has verified exact imagery.
 */
export function hasVerifiedProductImage(product?: Product | null): boolean {
  if (!product || !product.id) return false;
  return VERIFIED_EXACT_PRODUCT_IDS.has(product.id);
}

export interface ResolvedProductImageItem {
  url: string;
  alt: string;
  caption?: string;
  type?: 'primary' | 'artwork' | 'process' | 'detail';
  isFallback: boolean;
}

/**
 * Resolves images for a product strictly following the Fallback Rule:
 * 1. If verified exact product image exists -> returns exact product images (isFallback: false).
 * 2. Otherwise -> returns the single canonical generic ODOP heritage fallback image (isFallback: true).
 * 
 * Crucially, product metadata (name, state, district, ODOP/GI status) is never altered.
 */
export function resolveProductImages(product?: Product | null): ResolvedProductImageItem[] {
  if (!product) {
    return [
      {
        url: GENERIC_ODOP_HERITAGE_FALLBACK_IMAGE,
        alt: GENERIC_ODOP_HERITAGE_FALLBACK_ALT,
        caption: 'Traditional Indian Handicraft Heritage — ODOP Hub',
        type: 'primary',
        isFallback: true,
      },
    ];
  }

  const isVerified = hasVerifiedProductImage(product);

  if (isVerified) {
    // Collect images from product structured data
    let list: ResolvedProductImageItem[] = [];

    if (product.images && product.images.length > 0) {
      list = product.images.map((img) => ({
        url: img.url,
        alt: img.alt || `${product.name} — ${product.district}, ${product.state}`,
        caption: img.caption,
        type: img.type as any,
        isFallback: false,
      }));
    } else if (product.gallery && product.gallery.length > 0) {
      list = product.gallery.map((g, idx) => ({
        url: g.url,
        alt: g.caption || `${product.name} photograph ${idx + 1}`,
        caption: g.caption,
        type: (idx === 0 ? 'primary' : 'detail') as any,
        isFallback: false,
      }));
    } else {
      const primaryUrl = product.productImage || product.artworkImage || product.heroImage;
      if (primaryUrl) {
        list = [
          {
            url: primaryUrl,
            alt: `${product.name} — ${product.district}, ${product.state}`,
            caption: `${product.name} (${product.district}, ${product.state})`,
            type: 'primary',
            isFallback: false,
          },
        ];
      }
    }

    if (list.length > 0) {
      return list;
    }
  }

  // Fallback to Single Generic ODOP/Indian Heritage image
  return [
    {
      url: GENERIC_ODOP_HERITAGE_FALLBACK_IMAGE,
      alt: `${product.name} (${product.district}, ${product.state}) — ${GENERIC_ODOP_HERITAGE_FALLBACK_ALT}`,
      caption: `Traditional Indian ODOP Heritage (${product.district}, ${product.state})`,
      type: 'primary',
      isFallback: true,
    },
  ];
}

/**
 * Returns a single primary image for a product with fallback handling.
 */
export function getProductPrimaryImage(product?: Product | null): { url: string; alt: string; isFallback: boolean } {
  const images = resolveProductImages(product);
  const primary = images[0];
  return {
    url: primary.url,
    alt: primary.alt,
    isFallback: primary.isFallback,
  };
}
