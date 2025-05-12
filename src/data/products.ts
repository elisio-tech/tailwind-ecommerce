export interface Product {
  name: string;
  colors: string[];
  price: number;
  image: string;
  size: string[];
}

export const products: Product[] = [
  {
    name: "Essential Hoodie",
    colors: ["Black", "Gray", "Olive"],
    price: 89.99,
    image: "/images/swiper-1.jpg",
    size: ["S", "M", "L", "XL"],
  },
  {
    name: "Flow Jogger Pants",
    colors: ["Navy", "Beige", "Charcoal"],
    price: 74.99,
    image: "/images/swiper-2.jpg",
    size: ["XS", "S", "M", "L"],
  },
  {
    name: "Blade Course Polo",
    colors: ["White", "Sky Blue", "Sage"],
    price: 59.99,
    image: "/images/swiper-3.jpg",
    size: ["M", "L", "XL"],
  },
  {
    name: "Performance Tee",
    colors: ["Red", "Black", "Stone"],
    price: 39.99,
    image: "/images/swiper-4.jpg",
    size: ["S", "M", "L", "XL", "XXL"],
  },
  {
    name: "Urban Cargo Shorts",
    colors: ["Khaki", "Camo", "Dark Green"],
    price: 49.99,
    image: "/images/swiper-5.jpg",
    size: ["M", "L", "XL"],
  },
];

export interface DatabaseItem {
  name: string;
  category: string;
  colors: string[];
  price: number;
  image: string;
  size: string[];
  features?: string[]; 
}

export const database: DatabaseItem[] = [
  {
    name: "Essential Hoodie",
    category: "Jackets",
    colors: ["Black", "Gray", "Olive"],
    price: 89.99,
    image: "/images/swiper-1.jpg",
    size: ["S", "M", "L", "XL"],
  },
  {
    name: "Performance Windbreaker",
    category: "Jackets",
    colors: ["Navy", "Red", "Electric Blue"],
    price: 125.50,
    image: "/images/swiper-2.jpg",
    size: ["XS", "S", "M", "L"],
    features: ["Water-resistant", "Lightweight"],
  },
  {
    name: "Training Track Jacket",
    category: "Jackets",
    colors: ["Charcoal", "Teal", "White"],
    price: 75.00,
    image: "/images/swiper-3.jpg",
    size: ["S", "M", "L", "XL", "XXL"],
    features: ["Breathable fabric", "Zip pockets"],
  },
  {
    name: "Active Running Shorts",
    category: "Shorts",
    colors: ["Black", "Neon Green", "Dark Gray"],
    price: 35.99,
    image: "/images/swiper-4.jpg",
    size: ["S", "M", "L"],
    features: ["Moisture-wicking", "Reflective details"],
  },
  {
    name: "Basketball Performance Shorts",
    category: "Shorts",
    colors: ["Blue", "White", "Red"],
    price: 42.75,
    image: "/images/swiper-5.jpg",
    size: ["M", "L", "XL"],
    features: ["Lightweight", "Ventilated"],
  },
  {
    name: "Yoga Training Shorts",
    category: "Shorts",
    colors: ["Purple", "Pink", "Heather Gray"],
    price: 39.50,
    image: "/images/swiper-6.jpg",
    size: ["XS", "S", "M", "L"],
    features: ["Stretchy fabric", "Comfort fit"],
  },
  {
    name: "Everyday Sport Socks - 3 Pack",
    category: "Socks",
    colors: ["White", "Black", "Gray"],
    price: 15.00,
    image: "/images/swiper-7.jpg",
    size: ["M", "L"],
    features: ["Arch support", "Breathable"],
  },
  {
    name: "Performance Ankle Socks - 2 Pack",
    category: "Socks",
    colors: ["Black/Red", "Blue/Yellow"],
    price: 12.50,
    image: "/images/swiper-8.jpg",
    size: ["S", "M", "L"],
    features: ["Moisture-wicking", "Cushioned"],
  },
  {
    name: "Crew Training Socks",
    category: "Socks",
    colors: ["Navy", "White", "Charcoal"],
    price: 18.00,
    image: "/images/swiper-9.jpg",
    size: ["M", "L", "XL"],
    features: ["Reinforced heel and toe", "Comfort fit"],
  },
  {
    name: "Lightweight Running Jacket",
    category: "Jackets",
    colors: ["Lime Green", "Silver", "Black"],
    price: 99.00,
    image: "/images/swiper-10.jpg",
    size: ["S", "M", "L"],
    features: ["Windproof", "Packable"],
  },
  {
    name: "Fleece Training Jacket",
    category: "Jackets",
    colors: ["Royal Blue", "Dark Green", "Black Heather"],
    price: 85.00,
    image: "/images/swiper-11.jpg",
    size: ["XS", "S", "M", "L", "XL"],
    features: ["Warm fleece", "Soft feel"],
  },
  {
    name: "Compression Running Shorts",
    category: "Shorts",
    colors: ["Black", "Electric Blue", "Red"],
    price: 45.50,
    image: "/images/swiper-12.jpg",
    size: ["S", "M", "L", "XL"],
    features: ["Muscle support", "Quick-dry"],
  },
  {
    name: "Athletic Knit Shorts",
    category: "Shorts",
    colors: ["Gray", "Navy", "Maroon"],
    price: 32.00,
    image: "/images/swiper-13.jpg",
    size: ["M", "L", "XL", "XXL"],
    features: ["Breathable knit", "Drawstring waist"],
  },
  {
    name: "No-Show Sport Socks - 3 Pack",
    category: "Socks",
    colors: ["Black", "White", "Multi-color"],
    price: 16.50,
    image: "/images/swiper-6.jpg",
    size: ["S", "M"],
    features: ["Invisible fit", "Anti-slip"],
  },
  {
    name: "Thick Cushion Training Socks",
    category: "Socks",
    colors: ["White/Gray", "Black/Blue"],
    price: 20.00,
    image: "/images/swiper-15.jpg",
    size: ["M", "L"],
    features: ["Extra cushioning", "Blister protection"],
  },
  {
    name: "Waterproof Shell Jacket",
    category: "Jackets",
    colors: ["Yellow", "Black", "Forest Green"],
    price: 149.99,
    image: "/images/swiper-16.jpg",
    size: ["S", "M", "L", "XL"],
    features: ["Fully waterproof", "Adjustable hood"],
  },
  {
    name: "Retro Track Pants",
    category: "Pants",
    colors: ["Black/White Stripe", "Navy/Red Stripe"],
    price: 69.00,
    image: "/images/swiper-17.jpg",
    size: ["S", "M", "L", "XL"],
    features: ["Classic style", "Comfortable fit"],
  },
  {
    name: "Performance Training Pants",
    category: "Pants",
    colors: ["Charcoal Gray", "Black", "Dark Navy"],
    price: 79.50,
    image: "/images/swiper-18.jpg",
    size: ["XS", "S", "M", "L", "XL"],
    features: ["Stretch fabric", "Tapered leg"],
  },
  {
    name: "Athletic Joggers",
    category: "Pants",
    colors: ["Light Gray", "Olive Green", "Black"],
    price: 59.99,
    image: "/images/swiper-19.jpg",
    size: ["S", "M", "L"],
    features: ["Soft knit", "Adjustable waistband"],
  },
  {
    name: "Long Sleeve Running Top",
    category: "Tops",
    colors: ["Blue", "Orange", "Heather Gray"],
    price: 49.00,
    image: "/images/swiper-20.jpg",
    size: ["S", "M", "L", "XL"],
    features: ["Moisture-wicking", "Thumbholes"],
  },
];