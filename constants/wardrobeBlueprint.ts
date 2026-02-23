import { ImageSourcePropType } from 'react-native';
import { ItemCategory, StyleGoal, BodyType, UserProfile } from '@/constants/types';

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

type BlueprintItem = Omit<WardrobeSlot, 'status' | 'matchedItemId'>;

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

const STYLE_BLUEPRINTS: Record<StyleGoal, BlueprintItem[]> = {
  minimal: [
    { id: 'min-top-white-tee', category: 'top', subType: 't-shirt', colorFamily: 'white', priority: 1, label: 'White Crew-Neck Tee', description: 'Clean lines, zero noise — the minimal essential', sampleImage: SAMPLE_IMAGES.white_tee },
    { id: 'min-top-cream-sweater', category: 'top', subType: 'sweater', colorFamily: 'cream', priority: 2, label: 'Cream Knit Sweater', description: 'Soft texture in a quiet neutral palette', sampleImage: SAMPLE_IMAGES.cream_sweater },
    { id: 'min-top-white-shirt', category: 'top', subType: 'shirt', colorFamily: 'white', priority: 3, label: 'Oversized White Shirt', description: 'Relaxed tailoring with clean appeal', sampleImage: SAMPLE_IMAGES.white_shirt },
    { id: 'min-bottom-dark-trousers', category: 'bottom', subType: 'trousers', colorFamily: 'navy', priority: 1, label: 'Straight-Leg Dark Trousers', description: 'Structured simplicity for any setting', sampleImage: SAMPLE_IMAGES.dark_trousers },
    { id: 'min-bottom-beige-trousers', category: 'bottom', subType: 'trousers', colorFamily: 'beige', priority: 2, label: 'Beige Relaxed Trousers', description: 'Neutral warmth with effortless drape', sampleImage: SAMPLE_IMAGES.beige_trousers },
    { id: 'min-bottom-jeans', category: 'bottom', subType: 'jeans', colorFamily: 'blue', priority: 3, label: 'Mid-Wash Straight Jeans', description: 'A pared-back denim for everyday wear', sampleImage: SAMPLE_IMAGES.jeans },
    { id: 'min-outerwear-coat', category: 'outerwear', subType: 'coat', colorFamily: 'camel', priority: 1, label: 'Camel Wool Coat', description: 'A clean silhouette in a warm neutral', sampleImage: SAMPLE_IMAGES.camel_coat },
    { id: 'min-outerwear-blazer', category: 'outerwear', subType: 'blazer', colorFamily: 'navy', priority: 2, label: 'Unstructured Navy Blazer', description: 'Soft tailoring for a minimal edge', sampleImage: SAMPLE_IMAGES.navy_blazer },
    { id: 'min-shoes-white-sneakers', category: 'shoes', subType: 'sneakers', colorFamily: 'white', priority: 1, label: 'White Leather Sneakers', description: 'The cornerstone of minimal footwear', sampleImage: SAMPLE_IMAGES.white_sneakers },
    { id: 'min-shoes-loafers', category: 'shoes', subType: 'loafers', colorFamily: 'brown', priority: 2, label: 'Tan Suede Loafers', description: 'Understated polish for warmer days', sampleImage: SAMPLE_IMAGES.loafers },
    { id: 'min-jewelry-watch', category: 'jewelry', subType: 'watch', colorFamily: 'silver', priority: 1, label: 'Silver Minimalist Watch', description: 'One refined accessory — nothing more', sampleImage: SAMPLE_IMAGES.silver_watch },
    { id: 'min-jewelry-necklace', category: 'jewelry', subType: 'necklace', colorFamily: 'gold', priority: 2, label: 'Fine Gold Chain', description: 'A whisper of gold for quiet luxury', sampleImage: SAMPLE_IMAGES.gold_necklace },
    { id: 'min-dress-black', category: 'dress', subType: 'midi-dress', colorFamily: 'black', priority: 1, label: 'Black Slip Dress', description: 'Streamlined elegance with zero excess', sampleImage: SAMPLE_IMAGES.black_dress },
    { id: 'min-bag-black', category: 'bag', subType: 'crossbody', colorFamily: 'black', priority: 1, label: 'Black Structured Bag', description: 'Clean geometry for daily carry', sampleImage: SAMPLE_IMAGES.black_bag },
  ],

  elevated: [
    { id: 'elv-top-white-shirt', category: 'top', subType: 'shirt', colorFamily: 'white', priority: 1, label: 'Crisp White Shirt', description: 'Impeccable tailoring signals sophistication', sampleImage: SAMPLE_IMAGES.white_shirt },
    { id: 'elv-top-black-blouse', category: 'top', subType: 'blouse', colorFamily: 'black', priority: 2, label: 'Silk Black Blouse', description: 'Luxe fabric for high-impact evenings', sampleImage: SAMPLE_IMAGES.black_blouse },
    { id: 'elv-top-cream-sweater', category: 'top', subType: 'sweater', colorFamily: 'cream', priority: 3, label: 'Cashmere Cream Knit', description: 'Premium texture that speaks quietly', sampleImage: SAMPLE_IMAGES.cream_sweater },
    { id: 'elv-bottom-dark-trousers', category: 'bottom', subType: 'trousers', colorFamily: 'navy', priority: 1, label: 'Tailored Navy Trousers', description: 'Sharp creases for a polished silhouette', sampleImage: SAMPLE_IMAGES.dark_trousers },
    { id: 'elv-bottom-beige-trousers', category: 'bottom', subType: 'trousers', colorFamily: 'beige', priority: 2, label: 'Wide-Leg Cream Trousers', description: 'Flowing lines with elevated drape', sampleImage: SAMPLE_IMAGES.beige_trousers },
    { id: 'elv-outerwear-blazer', category: 'outerwear', subType: 'blazer', colorFamily: 'navy', priority: 1, label: 'Structured Navy Blazer', description: 'The power piece that defines your look', sampleImage: SAMPLE_IMAGES.navy_blazer },
    { id: 'elv-outerwear-coat', category: 'outerwear', subType: 'coat', colorFamily: 'camel', priority: 2, label: 'Camel Overcoat', description: 'Investment outerwear with lasting appeal', sampleImage: SAMPLE_IMAGES.camel_coat },
    { id: 'elv-shoes-loafers', category: 'shoes', subType: 'loafers', colorFamily: 'brown', priority: 1, label: 'Leather Penny Loafers', description: 'Quiet luxury from the ground up', sampleImage: SAMPLE_IMAGES.loafers },
    { id: 'elv-shoes-heels', category: 'shoes', subType: 'heels', colorFamily: 'black', priority: 2, label: 'Black Pointed Heels', description: 'Sleek lines for elevated occasions', sampleImage: SAMPLE_IMAGES.black_heels },
    { id: 'elv-shoes-boots', category: 'shoes', subType: 'boots', colorFamily: 'brown', priority: 3, label: 'Cognac Chelsea Boots', description: 'Refined leather for cooler seasons', sampleImage: SAMPLE_IMAGES.brown_boots },
    { id: 'elv-jewelry-hoops', category: 'jewelry', subType: 'earrings', colorFamily: 'gold', priority: 1, label: 'Gold Hoop Earrings', description: 'Understated gold for everyday polish', sampleImage: SAMPLE_IMAGES.gold_hoops },
    { id: 'elv-jewelry-watch', category: 'jewelry', subType: 'watch', colorFamily: 'silver', priority: 2, label: 'Silver Dress Watch', description: 'A refined finishing touch', sampleImage: SAMPLE_IMAGES.silver_watch },
    { id: 'elv-dress-black', category: 'dress', subType: 'midi-dress', colorFamily: 'black', priority: 1, label: 'Black Midi Dress', description: 'Sophisticated silhouette for any event', sampleImage: SAMPLE_IMAGES.black_dress },
    { id: 'elv-bag-black', category: 'bag', subType: 'crossbody', colorFamily: 'black', priority: 1, label: 'Black Leather Satchel', description: 'Timeless craftsmanship you carry daily', sampleImage: SAMPLE_IMAGES.black_bag },
  ],

  bold: [
    { id: 'bld-top-black-blouse', category: 'top', subType: 'blouse', colorFamily: 'black', priority: 1, label: 'Dramatic Black Blouse', description: 'A statement piece that commands attention', sampleImage: SAMPLE_IMAGES.black_blouse },
    { id: 'bld-top-white-shirt', category: 'top', subType: 'shirt', colorFamily: 'white', priority: 2, label: 'Architectural White Shirt', description: 'Structured cuts for high visual impact', sampleImage: SAMPLE_IMAGES.white_shirt },
    { id: 'bld-top-cream-sweater', category: 'top', subType: 'sweater', colorFamily: 'cream', priority: 3, label: 'Oversized Knit Sweater', description: 'Bold proportions in a soft neutral', sampleImage: SAMPLE_IMAGES.cream_sweater },
    { id: 'bld-bottom-dark-trousers', category: 'bottom', subType: 'trousers', colorFamily: 'navy', priority: 1, label: 'High-Waist Wide Trousers', description: 'Strong lines for a powerful silhouette', sampleImage: SAMPLE_IMAGES.dark_trousers },
    { id: 'bld-bottom-jeans', category: 'bottom', subType: 'jeans', colorFamily: 'blue', priority: 2, label: 'Dark Statement Jeans', description: 'Denim with confidence and edge', sampleImage: SAMPLE_IMAGES.jeans },
    { id: 'bld-outerwear-blazer', category: 'outerwear', subType: 'blazer', colorFamily: 'navy', priority: 1, label: 'Oversized Power Blazer', description: 'Own the room before you say a word', sampleImage: SAMPLE_IMAGES.navy_blazer },
    { id: 'bld-outerwear-coat', category: 'outerwear', subType: 'coat', colorFamily: 'camel', priority: 2, label: 'Camel Maxi Coat', description: 'Floor-grazing drama for colder months', sampleImage: SAMPLE_IMAGES.camel_coat },
    { id: 'bld-shoes-heels', category: 'shoes', subType: 'heels', colorFamily: 'black', priority: 1, label: 'Black Platform Heels', description: 'Height and attitude in one step', sampleImage: SAMPLE_IMAGES.black_heels },
    { id: 'bld-shoes-boots', category: 'shoes', subType: 'boots', colorFamily: 'brown', priority: 2, label: 'Chunky Ankle Boots', description: 'Grounded edge for every outfit', sampleImage: SAMPLE_IMAGES.brown_boots },
    { id: 'bld-shoes-sneakers', category: 'shoes', subType: 'sneakers', colorFamily: 'white', priority: 3, label: 'Chunky White Sneakers', description: 'Bold soles for streetwear energy', sampleImage: SAMPLE_IMAGES.white_sneakers },
    { id: 'bld-jewelry-hoops', category: 'jewelry', subType: 'earrings', colorFamily: 'gold', priority: 1, label: 'Oversized Gold Hoops', description: 'Go big — gold that gets noticed', sampleImage: SAMPLE_IMAGES.gold_hoops },
    { id: 'bld-jewelry-necklace', category: 'jewelry', subType: 'necklace', colorFamily: 'gold', priority: 2, label: 'Chunky Gold Chain', description: 'A neck piece that makes a statement', sampleImage: SAMPLE_IMAGES.gold_necklace },
    { id: 'bld-dress-black', category: 'dress', subType: 'midi-dress', colorFamily: 'black', priority: 1, label: 'Black Bodycon Dress', description: 'Confident curves, unapologetic style', sampleImage: SAMPLE_IMAGES.black_dress },
    { id: 'bld-bag-black', category: 'bag', subType: 'crossbody', colorFamily: 'black', priority: 1, label: 'Black Oversized Bag', description: 'Big presence, everyday functionality', sampleImage: SAMPLE_IMAGES.black_bag },
  ],

  romantic: [
    { id: 'rom-top-cream-sweater', category: 'top', subType: 'sweater', colorFamily: 'cream', priority: 1, label: 'Soft Cream Sweater', description: 'Delicate knit with a dreamy feel', sampleImage: SAMPLE_IMAGES.cream_sweater },
    { id: 'rom-top-black-blouse', category: 'top', subType: 'blouse', colorFamily: 'black', priority: 2, label: 'Lace-Trim Blouse', description: 'Feminine details that whisper romance', sampleImage: SAMPLE_IMAGES.black_blouse },
    { id: 'rom-top-white-shirt', category: 'top', subType: 'shirt', colorFamily: 'white', priority: 3, label: 'Ruffled White Blouse', description: 'Soft ruffles add gentle charm', sampleImage: SAMPLE_IMAGES.white_shirt },
    { id: 'rom-bottom-beige-trousers', category: 'bottom', subType: 'trousers', colorFamily: 'beige', priority: 1, label: 'Flowing Beige Trousers', description: 'Soft movement with romantic drape', sampleImage: SAMPLE_IMAGES.beige_trousers },
    { id: 'rom-bottom-jeans', category: 'bottom', subType: 'jeans', colorFamily: 'blue', priority: 2, label: 'Light Wash Jeans', description: 'Soft denim with a feminine touch', sampleImage: SAMPLE_IMAGES.jeans },
    { id: 'rom-bottom-dark-trousers', category: 'bottom', subType: 'trousers', colorFamily: 'navy', priority: 3, label: 'Navy Pleated Trousers', description: 'Elegant pleats for graceful movement', sampleImage: SAMPLE_IMAGES.dark_trousers },
    { id: 'rom-outerwear-coat', category: 'outerwear', subType: 'coat', colorFamily: 'camel', priority: 1, label: 'Belted Camel Coat', description: 'Cinched waist for a flattering shape', sampleImage: SAMPLE_IMAGES.camel_coat },
    { id: 'rom-outerwear-blazer', category: 'outerwear', subType: 'blazer', colorFamily: 'navy', priority: 2, label: 'Cropped Navy Blazer', description: 'Fitted tailoring with feminine appeal', sampleImage: SAMPLE_IMAGES.navy_blazer },
    { id: 'rom-shoes-heels', category: 'shoes', subType: 'heels', colorFamily: 'black', priority: 1, label: 'Strappy Black Heels', description: 'Delicate straps for evening romance', sampleImage: SAMPLE_IMAGES.black_heels },
    { id: 'rom-shoes-boots', category: 'shoes', subType: 'boots', colorFamily: 'brown', priority: 2, label: 'Suede Ankle Boots', description: 'Soft suede with romantic character', sampleImage: SAMPLE_IMAGES.brown_boots },
    { id: 'rom-shoes-loafers', category: 'shoes', subType: 'loafers', colorFamily: 'brown', priority: 3, label: 'Bow-Detail Loafers', description: 'Sweet details for daytime dressing', sampleImage: SAMPLE_IMAGES.loafers },
    { id: 'rom-jewelry-necklace', category: 'jewelry', subType: 'necklace', colorFamily: 'gold', priority: 1, label: 'Dainty Gold Pendant', description: 'A delicate sparkle close to the heart', sampleImage: SAMPLE_IMAGES.gold_necklace },
    { id: 'rom-jewelry-hoops', category: 'jewelry', subType: 'earrings', colorFamily: 'gold', priority: 2, label: 'Small Gold Hoops', description: 'Gentle shimmer for every day', sampleImage: SAMPLE_IMAGES.gold_hoops },
    { id: 'rom-dress-black', category: 'dress', subType: 'midi-dress', colorFamily: 'black', priority: 1, label: 'Black Wrap Dress', description: 'Flowing fabric with flattering shape', sampleImage: SAMPLE_IMAGES.black_dress },
    { id: 'rom-bag-black', category: 'bag', subType: 'crossbody', colorFamily: 'black', priority: 1, label: 'Quilted Crossbody Bag', description: 'Soft texture with timeless charm', sampleImage: SAMPLE_IMAGES.black_bag },
  ],

  classic: [
    { id: 'cls-top-white-shirt', category: 'top', subType: 'shirt', colorFamily: 'white', priority: 1, label: 'White Button-Down', description: 'The timeless foundation of classic dressing', sampleImage: SAMPLE_IMAGES.white_shirt },
    { id: 'cls-top-blue-shirt', category: 'top', subType: 'shirt', colorFamily: 'blue', priority: 2, label: 'Blue Oxford Shirt', description: 'Reliable elegance for work and beyond', sampleImage: SAMPLE_IMAGES.blue_shirt },
    { id: 'cls-top-cream-sweater', category: 'top', subType: 'sweater', colorFamily: 'cream', priority: 3, label: 'Cable-Knit Cream Sweater', description: 'Heritage texture in a neutral tone', sampleImage: SAMPLE_IMAGES.cream_sweater },
    { id: 'cls-top-black-blouse', category: 'top', subType: 'blouse', colorFamily: 'black', priority: 4, label: 'Black Silk Blouse', description: 'Refined fabric for classic evenings', sampleImage: SAMPLE_IMAGES.black_blouse },
    { id: 'cls-bottom-dark-trousers', category: 'bottom', subType: 'trousers', colorFamily: 'navy', priority: 1, label: 'Dark Tailored Trousers', description: 'Sharp lines for a professional silhouette', sampleImage: SAMPLE_IMAGES.dark_trousers },
    { id: 'cls-bottom-jeans', category: 'bottom', subType: 'jeans', colorFamily: 'blue', priority: 2, label: 'Classic Straight-Leg Jeans', description: 'Timeless denim that never goes out of style', sampleImage: SAMPLE_IMAGES.jeans },
    { id: 'cls-bottom-beige-trousers', category: 'bottom', subType: 'trousers', colorFamily: 'beige', priority: 3, label: 'Beige Chinos', description: 'Polished casual in a warm neutral', sampleImage: SAMPLE_IMAGES.beige_trousers },
    { id: 'cls-outerwear-blazer', category: 'outerwear', subType: 'blazer', colorFamily: 'navy', priority: 1, label: 'Navy Blazer', description: 'The quintessential classic outer layer', sampleImage: SAMPLE_IMAGES.navy_blazer },
    { id: 'cls-outerwear-coat', category: 'outerwear', subType: 'coat', colorFamily: 'camel', priority: 2, label: 'Camel Trench Coat', description: 'An enduring coat for every season', sampleImage: SAMPLE_IMAGES.camel_coat },
    { id: 'cls-shoes-loafers', category: 'shoes', subType: 'loafers', colorFamily: 'brown', priority: 1, label: 'Brown Leather Loafers', description: 'Polished comfort that stands the test of time', sampleImage: SAMPLE_IMAGES.loafers },
    { id: 'cls-shoes-heels', category: 'shoes', subType: 'heels', colorFamily: 'black', priority: 2, label: 'Black Court Heels', description: 'The definitive shoe for formal occasions', sampleImage: SAMPLE_IMAGES.black_heels },
    { id: 'cls-shoes-boots', category: 'shoes', subType: 'boots', colorFamily: 'brown', priority: 3, label: 'Brown Riding Boots', description: 'Equestrian-inspired and endlessly elegant', sampleImage: SAMPLE_IMAGES.brown_boots },
    { id: 'cls-jewelry-watch', category: 'jewelry', subType: 'watch', colorFamily: 'silver', priority: 1, label: 'Silver Dress Watch', description: 'Timeless accessory for daily wear', sampleImage: SAMPLE_IMAGES.silver_watch },
    { id: 'cls-jewelry-hoops', category: 'jewelry', subType: 'earrings', colorFamily: 'gold', priority: 2, label: 'Gold Hoop Earrings', description: 'Classic gold for any occasion', sampleImage: SAMPLE_IMAGES.gold_hoops },
    { id: 'cls-jewelry-necklace', category: 'jewelry', subType: 'necklace', colorFamily: 'gold', priority: 3, label: 'Pearl Strand Necklace', description: 'The ultimate classic accessory', sampleImage: SAMPLE_IMAGES.gold_necklace },
    { id: 'cls-dress-black', category: 'dress', subType: 'midi-dress', colorFamily: 'black', priority: 1, label: 'Little Black Dress', description: 'The wardrobe icon that never fails', sampleImage: SAMPLE_IMAGES.black_dress },
    { id: 'cls-bag-black', category: 'bag', subType: 'crossbody', colorFamily: 'black', priority: 1, label: 'Black Leather Bag', description: 'Traditional craftsmanship, everyday use', sampleImage: SAMPLE_IMAGES.black_bag },
  ],

  youthful: [
    { id: 'yth-top-white-tee', category: 'top', subType: 't-shirt', colorFamily: 'white', priority: 1, label: 'Boxy White Tee', description: 'Easy-going basics with modern fit', sampleImage: SAMPLE_IMAGES.white_tee },
    { id: 'yth-top-cream-sweater', category: 'top', subType: 'sweater', colorFamily: 'cream', priority: 2, label: 'Cropped Cream Sweater', description: 'Playful proportions in a cozy knit', sampleImage: SAMPLE_IMAGES.cream_sweater },
    { id: 'yth-top-blue-shirt', category: 'top', subType: 'shirt', colorFamily: 'blue', priority: 3, label: 'Chambray Button-Up', description: 'Laid-back style with a fresh vibe', sampleImage: SAMPLE_IMAGES.blue_shirt },
    { id: 'yth-bottom-jeans', category: 'bottom', subType: 'jeans', colorFamily: 'blue', priority: 1, label: 'High-Waist Mom Jeans', description: 'Relaxed denim with retro energy', sampleImage: SAMPLE_IMAGES.jeans },
    { id: 'yth-bottom-beige-trousers', category: 'bottom', subType: 'trousers', colorFamily: 'beige', priority: 2, label: 'Cargo-Style Trousers', description: 'Utility-inspired and trend-forward', sampleImage: SAMPLE_IMAGES.beige_trousers },
    { id: 'yth-bottom-dark-trousers', category: 'bottom', subType: 'trousers', colorFamily: 'navy', priority: 3, label: 'Navy Track Trousers', description: 'Sporty comfort meets street style', sampleImage: SAMPLE_IMAGES.dark_trousers },
    { id: 'yth-outerwear-blazer', category: 'outerwear', subType: 'blazer', colorFamily: 'navy', priority: 1, label: 'Boyfriend Blazer', description: 'Oversized cool for effortless layering', sampleImage: SAMPLE_IMAGES.navy_blazer },
    { id: 'yth-outerwear-coat', category: 'outerwear', subType: 'coat', colorFamily: 'camel', priority: 2, label: 'Teddy Camel Coat', description: 'Cozy texture with a youthful vibe', sampleImage: SAMPLE_IMAGES.camel_coat },
    { id: 'yth-shoes-sneakers', category: 'shoes', subType: 'sneakers', colorFamily: 'white', priority: 1, label: 'White Platform Sneakers', description: 'Fresh kicks for everyday adventures', sampleImage: SAMPLE_IMAGES.white_sneakers },
    { id: 'yth-shoes-boots', category: 'shoes', subType: 'boots', colorFamily: 'brown', priority: 2, label: 'Lug-Sole Boots', description: 'Chunky soles with youthful attitude', sampleImage: SAMPLE_IMAGES.brown_boots },
    { id: 'yth-shoes-loafers', category: 'shoes', subType: 'loafers', colorFamily: 'brown', priority: 3, label: 'Platform Loafers', description: 'Preppy vibes with a modern lift', sampleImage: SAMPLE_IMAGES.loafers },
    { id: 'yth-jewelry-hoops', category: 'jewelry', subType: 'earrings', colorFamily: 'gold', priority: 1, label: 'Mixed Gold Hoops', description: 'Stack and layer for playful sparkle', sampleImage: SAMPLE_IMAGES.gold_hoops },
    { id: 'yth-jewelry-necklace', category: 'jewelry', subType: 'necklace', colorFamily: 'gold', priority: 2, label: 'Layered Chain Set', description: 'Multiple chains for a trendy neck stack', sampleImage: SAMPLE_IMAGES.gold_necklace },
    { id: 'yth-dress-black', category: 'dress', subType: 'midi-dress', colorFamily: 'black', priority: 1, label: 'Black T-Shirt Dress', description: 'Casual cool that goes anywhere', sampleImage: SAMPLE_IMAGES.black_dress },
    { id: 'yth-bag-black', category: 'bag', subType: 'crossbody', colorFamily: 'black', priority: 1, label: 'Nylon Crossbody Bag', description: 'Lightweight and ready to move', sampleImage: SAMPLE_IMAGES.black_bag },
  ],
};

const BODY_TYPE_PRIORITY_BOOSTS: Record<BodyType, Record<string, number>> = {
  hourglass: { 'dress': -1, 'bottom': 0, 'top': 0 },
  pear: { 'top': -1, 'jewelry': -1, 'outerwear': -1 },
  apple: { 'outerwear': -1, 'bottom': -1, 'dress': 1 },
  rectangle: { 'outerwear': -1, 'dress': -1, 'jewelry': -1 },
  'inverted-triangle': { 'bottom': -1, 'shoes': -1, 'dress': 0 },
  athletic: { 'dress': -1, 'outerwear': -1, 'jewelry': -1 },
};

const LIFESTYLE_CATEGORY_WEIGHTS: Record<string, Record<ItemCategory, number>> = {
  work: { top: 1, bottom: 1, outerwear: 2, shoes: 1, jewelry: 1, dress: 1, bag: 1 },
  casual: { top: 1, bottom: 1, outerwear: 0, shoes: 2, jewelry: 0, dress: 0, bag: 1 },
  events: { top: 0, bottom: 0, outerwear: 0, shoes: 1, jewelry: 2, dress: 2, bag: 1 },
};

export const WARDROBE_BLUEPRINT: BlueprintItem[] = STYLE_BLUEPRINTS.classic;

export function getProfileBlueprint(profile: UserProfile): BlueprintItem[] {
  const primaryGoal = profile.styleGoalPrimary;
  if (!primaryGoal) return WARDROBE_BLUEPRINT;

  let items = [...STYLE_BLUEPRINTS[primaryGoal]];

  if (profile.styleGoalSecondary) {
    const secondaryItems = STYLE_BLUEPRINTS[profile.styleGoalSecondary];
    const existingIds = new Set(items.map(i => `${i.category}-${i.subType}-${i.colorFamily}`));
    for (const sItem of secondaryItems) {
      const key = `${sItem.category}-${sItem.subType}-${sItem.colorFamily}`;
      if (!existingIds.has(key)) {
        items.push({ ...sItem, priority: sItem.priority + 10 });
        existingIds.add(key);
      }
    }
  }

  if (profile.bodyType) {
    const boosts = BODY_TYPE_PRIORITY_BOOSTS[profile.bodyType];
    items = items.map(item => {
      const boost = boosts[item.category];
      if (boost !== undefined && boost !== 0) {
        return { ...item, priority: Math.max(1, item.priority + boost) };
      }
      return item;
    });
  }

  const workPct = profile.lifestyleWork / 100;
  const casualPct = profile.lifestyleCasual / 100;
  const eventsPct = profile.lifestyleEvents / 100;

  if (workPct > 0 || casualPct > 0 || eventsPct > 0) {
    items = items.map(item => {
      const workWeight = (LIFESTYLE_CATEGORY_WEIGHTS.work[item.category] || 0) * workPct;
      const casualWeight = (LIFESTYLE_CATEGORY_WEIGHTS.casual[item.category] || 0) * casualPct;
      const eventsWeight = (LIFESTYLE_CATEGORY_WEIGHTS.events[item.category] || 0) * eventsPct;
      const totalBoost = workWeight + casualWeight + eventsWeight;
      const adjustment = totalBoost > 1.5 ? -1 : totalBoost < 0.5 ? 1 : 0;
      return { ...item, priority: Math.max(1, item.priority + adjustment) };
    });
  }

  if (profile.constraints.maxHeelHeight === 'flat') {
    items = items.filter(item => item.subType !== 'heels');
  }
  if (profile.constraints.noSleeveless) {
    items = items.filter(item => item.subType !== 'tank-top');
  }
  if (profile.constraints.noShortSkirts) {
    items = items.map(item => {
      if (item.subType === 'mini-dress') {
        return { ...item, subType: 'midi-dress', label: item.label.replace('Mini', 'Midi') };
      }
      return item;
    });
  }

  items.sort((a, b) => {
    if (a.category !== b.category) return a.category.localeCompare(b.category);
    return a.priority - b.priority;
  });

  return items;
}

export function initializeSlots(
  wardrobeItems: { category: ItemCategory; subType: string; colorFamily: string; id: string }[],
  blueprint?: BlueprintItem[]
): WardrobeSlot[] {
  const bp = blueprint || WARDROBE_BLUEPRINT;
  return bp.map(bpItem => {
    const match = wardrobeItems.find(
      item =>
        item.category === bpItem.category &&
        (item.subType === bpItem.subType || item.colorFamily === bpItem.colorFamily)
    );
    return {
      ...bpItem,
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
