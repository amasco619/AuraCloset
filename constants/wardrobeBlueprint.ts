import { ImageSourcePropType } from 'react-native';
import { ItemCategory } from '@/contexts/AppContext';

export interface WardrobeSlot {
  id: string;
  category: ItemCategory;
  subType: string;
  colorFamily: string;
  priority: number;
  label: string;
  description: string;
  sampleImage: ImageSourcePropType;
  status: 'needed' | 'owned';
  matchedItemId?: string;
}

const SAMPLE_IMAGES: Record<string, ImageSourcePropType> = {
  white_shirt: require('@/assets/recommendations/white_shirt.png'),
  blue_shirt: require('@/assets/recommendations/blue_shirt.png'),
  white_tee: require('@/assets/recommendations/white_tee.png'),
  cream_sweater: require('@/assets/recommendations/cream_sweater.png'),
  black_blouse: require('@/assets/recommendations/black_blouse.png'),
  dark_trousers: require('@/assets/recommendations/dark_trousers.png'),
  jeans: require('@/assets/recommendations/jeans.png'),
  beige_trousers: require('@/assets/recommendations/beige_trousers.png'),
  navy_blazer: require('@/assets/recommendations/navy_blazer.png'),
  camel_coat: require('@/assets/recommendations/camel_coat.png'),
  white_sneakers: require('@/assets/recommendations/white_sneakers.png'),
  loafers: require('@/assets/recommendations/loafers.png'),
  black_heels: require('@/assets/recommendations/black_heels.png'),
  brown_boots: require('@/assets/recommendations/brown_boots.png'),
  gold_hoops: require('@/assets/recommendations/gold_hoops.png'),
  gold_necklace: require('@/assets/recommendations/gold_necklace.png'),
  silver_watch: require('@/assets/recommendations/silver_watch.png'),
  black_dress: require('@/assets/recommendations/black_dress.png'),
  black_bag: require('@/assets/recommendations/black_bag.png'),
};

export const WARDROBE_BLUEPRINT: Omit<WardrobeSlot, 'status' | 'matchedItemId'>[] = [
  {
    id: 'top-white-shirt',
    category: 'top',
    subType: 'shirt',
    colorFamily: 'white',
    priority: 1,
    label: 'White Button-Down',
    description: 'The foundation of any polished wardrobe',
    sampleImage: SAMPLE_IMAGES.white_shirt,
  },
  {
    id: 'top-blue-shirt',
    category: 'top',
    subType: 'shirt',
    colorFamily: 'blue',
    priority: 2,
    label: 'Blue Oxford Shirt',
    description: 'Versatile for work and smart-casual',
    sampleImage: SAMPLE_IMAGES.blue_shirt,
  },
  {
    id: 'top-white-tee',
    category: 'top',
    subType: 't-shirt',
    colorFamily: 'white',
    priority: 3,
    label: 'White T-Shirt',
    description: 'A quality basic for layering or solo',
    sampleImage: SAMPLE_IMAGES.white_tee,
  },
  {
    id: 'top-cream-sweater',
    category: 'top',
    subType: 'sweater',
    colorFamily: 'cream',
    priority: 4,
    label: 'Cream Sweater',
    description: 'Soft knitwear for cooler days',
    sampleImage: SAMPLE_IMAGES.cream_sweater,
  },
  {
    id: 'top-black-blouse',
    category: 'top',
    subType: 'blouse',
    colorFamily: 'black',
    priority: 5,
    label: 'Black Blouse',
    description: 'Elegant for evening and office',
    sampleImage: SAMPLE_IMAGES.black_blouse,
  },
  {
    id: 'bottom-dark-trousers',
    category: 'bottom',
    subType: 'trousers',
    colorFamily: 'navy',
    priority: 1,
    label: 'Dark Tailored Trousers',
    description: 'Sharp lines for a professional silhouette',
    sampleImage: SAMPLE_IMAGES.dark_trousers,
  },
  {
    id: 'bottom-jeans',
    category: 'bottom',
    subType: 'jeans',
    colorFamily: 'blue',
    priority: 2,
    label: 'Classic Blue Jeans',
    description: 'Timeless denim for every day',
    sampleImage: SAMPLE_IMAGES.jeans,
  },
  {
    id: 'bottom-beige-trousers',
    category: 'bottom',
    subType: 'trousers',
    colorFamily: 'beige',
    priority: 3,
    label: 'Beige Wide-Leg Trousers',
    description: 'Relaxed elegance for warm months',
    sampleImage: SAMPLE_IMAGES.beige_trousers,
  },
  {
    id: 'outerwear-navy-blazer',
    category: 'outerwear',
    subType: 'blazer',
    colorFamily: 'navy',
    priority: 1,
    label: 'Navy Blazer',
    description: 'Instantly elevates any outfit',
    sampleImage: SAMPLE_IMAGES.navy_blazer,
  },
  {
    id: 'outerwear-camel-coat',
    category: 'outerwear',
    subType: 'coat',
    colorFamily: 'camel',
    priority: 2,
    label: 'Camel Overcoat',
    description: 'Refined outerwear for colder seasons',
    sampleImage: SAMPLE_IMAGES.camel_coat,
  },
  {
    id: 'shoes-white-sneakers',
    category: 'shoes',
    subType: 'sneakers',
    colorFamily: 'white',
    priority: 1,
    label: 'White Sneakers',
    description: 'Clean, minimal footwear for casual days',
    sampleImage: SAMPLE_IMAGES.white_sneakers,
  },
  {
    id: 'shoes-loafers',
    category: 'shoes',
    subType: 'loafers',
    colorFamily: 'brown',
    priority: 2,
    label: 'Brown Loafers',
    description: 'Polished comfort from office to weekend',
    sampleImage: SAMPLE_IMAGES.loafers,
  },
  {
    id: 'shoes-black-heels',
    category: 'shoes',
    subType: 'heels',
    colorFamily: 'black',
    priority: 3,
    label: 'Black Heels',
    description: 'Essential for evening occasions',
    sampleImage: SAMPLE_IMAGES.black_heels,
  },
  {
    id: 'shoes-brown-boots',
    category: 'shoes',
    subType: 'boots',
    colorFamily: 'brown',
    priority: 4,
    label: 'Brown Ankle Boots',
    description: 'Versatile boots for fall and winter',
    sampleImage: SAMPLE_IMAGES.brown_boots,
  },
  {
    id: 'jewelry-gold-hoops',
    category: 'jewelry',
    subType: 'earrings',
    colorFamily: 'gold',
    priority: 1,
    label: 'Gold Hoop Earrings',
    description: 'Subtle elegance for any occasion',
    sampleImage: SAMPLE_IMAGES.gold_hoops,
  },
  {
    id: 'jewelry-gold-necklace',
    category: 'jewelry',
    subType: 'necklace',
    colorFamily: 'gold',
    priority: 2,
    label: 'Gold Chain Necklace',
    description: 'A delicate layer of quiet luxury',
    sampleImage: SAMPLE_IMAGES.gold_necklace,
  },
  {
    id: 'jewelry-silver-watch',
    category: 'jewelry',
    subType: 'watch',
    colorFamily: 'silver',
    priority: 3,
    label: 'Silver Watch',
    description: 'Timeless accessory for daily wear',
    sampleImage: SAMPLE_IMAGES.silver_watch,
  },
  {
    id: 'dress-black',
    category: 'dress',
    subType: 'midi-dress',
    colorFamily: 'black',
    priority: 1,
    label: 'Black Midi Dress',
    description: 'The ultimate wardrobe staple',
    sampleImage: SAMPLE_IMAGES.black_dress,
  },
  {
    id: 'bag-black',
    category: 'bag',
    subType: 'crossbody',
    colorFamily: 'black',
    priority: 1,
    label: 'Black Crossbody Bag',
    description: 'Effortless everyday carry',
    sampleImage: SAMPLE_IMAGES.black_bag,
  },
];

export function initializeSlots(wardrobeItems: { category: ItemCategory; subType: string; colorFamily: string; id: string }[]): WardrobeSlot[] {
  return WARDROBE_BLUEPRINT.map(blueprint => {
    const match = wardrobeItems.find(
      item =>
        item.category === blueprint.category &&
        (item.subType === blueprint.subType || item.colorFamily === blueprint.colorFamily)
    );
    return {
      ...blueprint,
      status: match ? 'owned' as const : 'needed' as const,
      matchedItemId: match?.id,
    };
  });
}

export function updateSlotsAfterAdd(
  slots: WardrobeSlot[],
  newItem: { category: ItemCategory; subType: string; colorFamily: string; id: string }
): WardrobeSlot[] {
  let matched = false;
  return slots.map(slot => {
    if (
      !matched &&
      slot.status === 'needed' &&
      slot.category === newItem.category &&
      (slot.subType === newItem.subType || slot.colorFamily === newItem.colorFamily)
    ) {
      matched = true;
      return { ...slot, status: 'owned' as const, matchedItemId: newItem.id };
    }
    return slot;
  });
}

export function getFirstNeededByCategory(slots: WardrobeSlot[]): Record<string, WardrobeSlot | undefined> {
  const result: Record<string, WardrobeSlot | undefined> = {};
  const categories: ItemCategory[] = ['top', 'bottom', 'outerwear', 'shoes', 'jewelry'];
  for (const cat of categories) {
    const catSlots = slots
      .filter(s => s.category === cat && s.status === 'needed')
      .sort((a, b) => a.priority - b.priority);
    result[cat] = catSlots[0];
  }
  return result;
}
