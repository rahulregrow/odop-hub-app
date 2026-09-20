export type CraftCategory = 
  | 'Traditional Crafts'
  | 'Handloom & Textiles'
  | 'Paintings & Art'
  | 'Regional Foods'
  | 'Agricultural Products'
  | 'Toys & Traditional Craft'
  | 'Embroidery'
  | 'Metal & Wood Craft'
  | 'Heritage Products';

export interface ProductImage {
  url: string;
  caption: string;
  credit?: string;
  isCover?: boolean;
}

export interface ProductCardImage {
  url: string;
  type?: 'primary' | 'detail' | 'process' | 'artwork';
  alt: string;
  source?: string;
  credit?: string;
  license?: string;
  caption?: string;
}

export interface ODOPDetails {
  district: string;
  state: string;
  sector: string;
  designationYear?: string;
  officialReferenceNote?: string;
}

export interface GIDetails {
  giNumber?: string;
  registeredYear?: string;
  classCategory?: string;
  geographicalArea: string;
  certificateRef?: string;
  officialRegistrySource?: string;
}

export interface ProductMakers {
  community?: string;
  artisanCountEstimate?: string;
  notableArtisans?: string;
  traditionAge?: string;
  regionNotes?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  hindiName?: string;
  alsoKnownAs?: string;
  state: string;
  stateCode: string;
  district: string;
  region: string;
  category: CraftCategory;
  isODOP: boolean;
  odopDetails?: ODOPDetails;
  isGI: boolean;
  giDetails?: GIDetails;
  shortDescription: string;
  description: string;
  heroImage: string;
  // Distinct separated image types
  productImage?: string;
  artworkImage?: string;
  artisanImage?: string;
  processImage?: string;
  exhibitionImage?: string;
  locationImage?: string;
  gallery: ProductImage[];
  images?: ProductCardImage[];
  origin: string;
  story: string;
  craftDetails: string;
  technique: string;
  materials: string[];
  culturalSignificance: string;
  makers: ProductMakers;
  availability: 'Living Craft' | 'Heritage Craft' | 'Seasonal Harvest' | 'Endangered Tradition';
  tags: string[];
  featuredInBihar?: boolean;
  featuredInHome?: boolean;
  
  // Future marketplace structured readiness fields
  _futureMarketplace?: {
    sellerType?: 'Master Artisan Collective' | 'Regional Cooperative' | 'Heritage Guild';
    samplePriceRange?: string;
    inventoryTrackable?: boolean;
    shippingClass?: 'Standard' | 'Fragile Art' | 'Temperature Controlled';
  };
}

export interface StateHeritage {
  id: string;
  code: string;
  name: string;
  capital: string;
  region: 'Northern' | 'Eastern' | 'Western' | 'Southern' | 'Central' | 'North-Eastern' | 'Islands & UTs';
  coverImage: string;
  tagline: string;
  introduction: string;
  craftCultureDescription: string;
  primaryDistricts: string[];
  productCount: number;
  featuredCrafts: string[];
  gallery: ProductImage[];
  culturalFestivals?: string[];
  isFeatured?: boolean;
  isUT?: boolean;
}

export interface ArtisanProfile {
  id: string;
  name: string;
  craft: string;
  state: string;
  district: string;
  community: string;
  experienceYears?: string;
  awards: string[];
  bio: string;
  quote: string;
  image: string;
  featuredProductSlug?: string;
  specialty: string;
}

export interface StoryOfTheArtDetails {
  whatIsIt: string;
  originGeography: string;
  historicalNarrativeAndFolklore: string;
  whoMakesIt: string;
  howItIsMade: string[];
  motifsAndSymbolism: string[];
  survivalAndRevival: string;
  theCraftToday: string;
}

export interface HeritageStory {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  date: string;
  readTime: string;
  coverImage: string;
  state: string;
  district: string;
  category: CraftCategory;
  introduction: string;
  storyOfTheArt?: StoryOfTheArtDetails;
  sections: {
    heading: string;
    content: string;
    image?: string;
    imageCaption?: string;
  }[];
  quote?: {
    text: string;
    speaker: string;
    designation: string;
  };
  relatedProductIds: string[];
}
