export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  specs?: Record<string, string>;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  image: string;
  productCount: number;
}

export const categories: Category[] = [
  {
    id: "smartphones",
    name: "Smartphones",
    icon: "📱",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=60",
    productCount: 124,
  },
  {
    id: "laptops",
    name: "Laptops",
    icon: "💻",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop&q=60",
    productCount: 89,
  },
  {
    id: "audio",
    name: "Audio",
    icon: "🎧",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60",
    productCount: 156,
  },
  {
    id: "wearables",
    name: "Wearables",
    icon: "⌚",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=60",
    productCount: 67,
  },
  {
    id: "cameras",
    name: "Cameras",
    icon: "📷",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=60",
    productCount: 45,
  },
  {
    id: "gaming",
    name: "Gaming",
    icon: "🎮",
    image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=800&auto=format&fit=crop&q=60",
    productCount: 203,
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "iPhone 15 Pro Max",
    description: "The most powerful iPhone ever with A17 Pro chip, titanium design, and advanced camera system.",
    price: 134900,
    originalPrice: 149900,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&auto=format&fit=crop&q=60",
    category: "smartphones",
    rating: 4.9,
    reviews: 2847,
    inStock: true,
    isNew: true,
    isFeatured: true,
    specs: {
      "Display": "6.7-inch Super Retina XDR",
      "Chip": "A17 Pro",
      "Storage": "256GB",
      "Camera": "48MP Main + 12MP Ultra Wide + 12MP Telephoto",
    },
  },
  {
    id: "2",
    name: "MacBook Pro 16\"",
    description: "Supercharged by M3 Max chip for unprecedented performance. The ultimate pro laptop.",
    price: 249900,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=60",
    category: "laptops",
    rating: 4.8,
    reviews: 1256,
    inStock: true,
    isFeatured: true,
    specs: {
      "Display": "16.2-inch Liquid Retina XDR",
      "Chip": "Apple M3 Max",
      "RAM": "36GB",
      "Storage": "512GB SSD",
    },
  },
  {
    id: "3",
    name: "Sony WH-1000XM5",
    description: "Industry-leading noise cancellation with exceptional sound quality and all-day comfort.",
    price: 29990,
    originalPrice: 34990,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&auto=format&fit=crop&q=60",
    category: "audio",
    rating: 4.7,
    reviews: 3421,
    inStock: true,
    isFeatured: true,
    specs: {
      "Driver": "30mm",
      "Battery": "30 hours",
      "Noise Cancellation": "Industry-leading",
      "Weight": "250g",
    },
  },
  {
    id: "4",
    name: "Apple Watch Ultra 2",
    description: "The most rugged and capable Apple Watch for extreme adventures and professional athletes.",
    price: 89900,
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&auto=format&fit=crop&q=60",
    category: "wearables",
    rating: 4.9,
    reviews: 892,
    inStock: true,
    isNew: true,
    specs: {
      "Display": "49mm Always-On Retina",
      "Battery": "36 hours",
      "Water Resistance": "100m",
      "GPS": "Precision dual-frequency",
    },
  },
  {
    id: "5",
    name: "Sony Alpha A7 IV",
    description: "Full-frame mirrorless camera with 33MP sensor and advanced autofocus for creators.",
    price: 249990,
    originalPrice: 279990,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&auto=format&fit=crop&q=60",
    category: "cameras",
    rating: 4.8,
    reviews: 567,
    inStock: true,
    isFeatured: true,
    specs: {
      "Sensor": "33MP Full-Frame",
      "ISO": "100-51200",
      "Video": "4K 60fps",
      "Autofocus": "759 phase-detection points",
    },
  },
  {
    id: "6",
    name: "PlayStation 5",
    description: "Experience lightning-fast loading, deeper immersion with haptic feedback, and a new generation of games.",
    price: 49990,
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800&auto=format&fit=crop&q=60",
    category: "gaming",
    rating: 4.9,
    reviews: 8934,
    inStock: false,
    specs: {
      "CPU": "AMD Zen 2 8-core",
      "GPU": "10.28 TFLOPs RDNA 2",
      "Storage": "825GB SSD",
      "Resolution": "Up to 8K",
    },
  },
  {
    id: "7",
    name: "Samsung Galaxy S24 Ultra",
    description: "Galaxy AI is here. The ultimate AI companion with built-in Galaxy AI features.",
    price: 129999,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&auto=format&fit=crop&q=60",
    category: "smartphones",
    rating: 4.7,
    reviews: 1823,
    inStock: true,
    isNew: true,
    specs: {
      "Display": "6.8-inch Dynamic AMOLED 2X",
      "Processor": "Snapdragon 8 Gen 3",
      "Storage": "256GB",
      "Camera": "200MP Main",
    },
  },
  {
    id: "8",
    name: "AirPods Pro (2nd Gen)",
    description: "Rebuilt from the sound up with H2 chip. Active Noise Cancellation up to 2x more effective.",
    price: 24900,
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800&auto=format&fit=crop&q=60",
    category: "audio",
    rating: 4.8,
    reviews: 5621,
    inStock: true,
    specs: {
      "Chip": "H2",
      "Battery": "6 hours (30 with case)",
      "ANC": "Up to 2x more effective",
      "Spatial Audio": "Personalized",
    },
  },
];

export const featuredProducts = products.filter(p => p.isFeatured);
export const newArrivals = products.filter(p => p.isNew);
export const deals = products.filter(p => p.originalPrice && p.originalPrice > p.price);
