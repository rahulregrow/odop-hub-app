import { CraftCategory } from '../types';

export interface CategoryInfo {
  name: CraftCategory;
  slug: string;
  description: string;
  count: number;
  image: string;
}

export const CRAFT_CATEGORIES: CategoryInfo[] = [
  {
    name: 'Paintings & Art',
    slug: 'paintings-and-art',
    description: 'Ancient folk and classical visual traditions executed on handmade paper, canvas, and natural plaster.',
    count: 14,
    // Authentic Mithila/Madhubani traditional painting with natural pigments
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Madhubani_painting.jpg',
  },
  {
    name: 'Handloom & Textiles',
    slug: 'handloom-and-textiles',
    description: 'Centuries of indigenous looms, natural fibers, vegetable dyes, and intricate weaves across districts.',
    count: 28,
    // Authentic Indian handloom pit-loom weaver in action
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Weaving_ilkal_saree.jpg',
  },
  {
    name: 'Traditional Crafts',
    slug: 'traditional-crafts',
    description: 'Eco-fiber weaving, bamboo, bell metal, lacquer work, and sustainable indigenous craft disciplines.',
    count: 22,
    // Authentic Sikki golden grass eco-fiber coiled craft vessel by master artisan Nazda Khatun
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Sikki_Grass_Craft_by_artisan_Nazda_Khatun_of_Bihar_14.jpg',
  },
  {
    name: 'Agricultural Products',
    slug: 'agricultural-products',
    description: 'Protected regional crops, heirloom grains, wetland superfoods, and geographical terroir harvests.',
    count: 16,
    // Authentic harvested and popped Mithila Phool Makhana fox nuts from North Bihar wetlands
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Phool_Makhana.JPG',
  },
  {
    name: 'Regional Foods',
    slug: 'regional-foods',
    description: 'Heritage confectioneries, stone-ground preparations, and centuries-old culinary heritage delicacies.',
    count: 12,
    // Authentic traditional Silao Khaja heritage multi-layered sweet pastry
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Khaja_sweet_dish.jpg',
  },
  {
    name: 'Toys & Traditional Craft',
    slug: 'toys-and-traditional-craft',
    description: 'Hand-sculpted wooden toys, eco-friendly lacquer crafts, and miniature folk sculptures.',
    count: 9,
    // Authentic Channapatna child-safe turned wooden lacquer toys
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Channapatna-toys.jpg',
  },
  {
    name: 'Embroidery',
    slug: 'embroidery',
    description: 'Narrative needlework, quilt stitching, and expressive community textile chronicles.',
    count: 11,
    // Authentic Sujani quilt narrative needlework embroidery
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Stamp_of_India_-_2019_-_Colnect_924655_-_Sujani_Embroidery.jpeg',
  },
  {
    name: 'Metal & Wood Craft',
    slug: 'metal-and-wood-craft',
    description: 'Lost-wax cast bronze, intricate walnut wood carvings, and high-tin bell metal metallurgy.',
    count: 15,
    // Authentic hand-carved Kinnal wooden craft artifacts by Chitragar master artisans
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Kinhal_toys%2C_Karnataka.jpeg',
  },
  {
    name: 'Heritage Products',
    slug: 'heritage-products',
    description: 'Botanical distillations, natural attars, handmade papers, and artisanal stone carving.',
    count: 8,
    // Authentic Jaipur Blue Pottery quartz and natural oxide glaze heritage ware
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Jaipur_Blue_Pottery_Vase_with_Raja-Rani_Design.jpg',
  },
];
