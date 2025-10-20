import type { Product, ProductCategories, ProductCategory } from "~/interfaces";

const categories = [
    {
      id: "1",
      name: "Laptops",
      description: "High-performance laptops for business",
      icon: "lucide:laptop",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
      count: 50,
      slug: 'laptops'
    },
    {
      id: "2",
      name: "Accessories",
      description: "Essential tech accessories",
      icon: "lucide:mouse",
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
      count: 100,
      slug: 'accessories'
    },
    {
      id: "3",
      name: "Monitors",
      description: "Professional displays & monitors",
      icon: "lucide:monitor",
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
      count: 30,
      slug: 'monitors'
    },
    {
      id: "4",
      name: "Keyboards",
      description: "Mechanical & wireless keyboards",
      icon: "lucide:keyboard",
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
      count: 40,
      slug: 'keyboards'
    },
    {
      id: "5",
      name: "Audio",
      description: "Headphones & audio equipment",
      icon: "lucide:headphones",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
      count: 35,
      slug: 'audio'
    },
    {
      id: "6",
      name: "Storage",
      description: "External drives & storage solutions",
      icon: "lucide:hard-drive",
      image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500",
      count: 25,
      slug: 'storage'
    },
  ]


const products: Product[] = [
  {
    id: "product-1",
    name: "Asus ROG Zephyrus G14 2023 - Moonlight White",
    slug: "asus-rog-zephyrus-g14-2023-moonlight-white",
    categoryId: "laptops",
    image: "/images/product/laptopimage.jpg",
    description:
      "The Asus ROG Zephyrus G14 is a powerful gaming laptop featuring an AMD Ryzen 9 5900HS processor, NVIDIA GeForce RTX 3060 GPU, and a 14-inch 120Hz display, offering top-tier gaming and multitasking performance.",
    price: 50,
    gallery: ["/images/product/laptopgallery1.jpg", "images/product/laptopgallery2.jpg"],
    stock: 5,
    rating: 3,
    createdAt: "2023-11-15T10:24:00Z",
    features: [
      { name: "Brand", value: "Asus" },
      { name: "Model", value: "ROG Zephyrus G14" },
      { name: "Processor", value: "AMD Ryzen 9 5900HS" },
      { name: "Graphics", value: "NVIDIA GeForce RTX 3060" },
      { name: "Display", value: "14-inch 120Hz" },
      { name: "RAM", value: "16GB" },
      { name: "Storage", value: "1TB SSD" },
    ],
  },
  {
    id: "product-2",
    name: "Lenovo ThinkPad X1 Carbon Gen 9 - Black",
    slug: "lenovo-thinkpad-x1-carbon-gen-9-black",
    categoryId: "laptops",
    image: "/images/product/laptopimage.jpg",
    description:
      "The Lenovo ThinkPad X1 Carbon Gen 9 is designed for business professionals, featuring a 14-inch 4K display, Intel Core i7 processor, and 16GB RAM, all in a sleek and lightweight body.",
    price: 50,
    gallery: ["/images/product/laptopgallery1.jpg", "/images/product/laptopgallery2.jpg"],
    stock: 7,
    rating: 3,
    createdAt: "2023-08-03T14:10:00Z",
    features: [
      { name: "Brand", value: "Lenovo" },
      { name: "Model", value: "ThinkPad X1 Carbon Gen 9" },
      { name: "Processor", value: "Intel Core i7" },
      { name: "Display", value: "14-inch 4K" },
      { name: "RAM", value: "16GB" },
      { name: "Storage", value: "512GB SSD" },
    ],
  },
  {
    id: "product-3",
    name: "Microsoft Surface Laptop 4 - Platinum",
    slug: "microsoft-surface-laptop-4-platinum",
    categoryId: "laptops",
    image: "/images/product/laptopimage.jpg",
    description:
      "The Microsoft Surface Laptop 4 is perfect for everyday use, featuring a 15-inch PixelSense display, Intel Core i7 processor, and premium build quality, making it ideal for work and entertainment.",
    price: 50,
    gallery: ["/images/product/laptopgallery1.jpg", "/images/product/laptopgallery2.jpg"],
    stock: 10,
    rating: 3,
    createdAt: "2024-01-09T09:42:00Z",
    features: [
      { name: "Brand", value: "Microsoft" },
      { name: "Model", value: "Surface Laptop 4" },
      { name: "Processor", value: "Intel Core i7" },
      { name: "Display", value: "15-inch PixelSense" },
      { name: "RAM", value: "16GB" },
      { name: "Storage", value: "512GB SSD" },
    ],
  },
  {
    id: "product-4",
    name: "HP Omen 15 2023 - Shadow Black",
    slug: "hp-omen-15-2023-shadow-black",
    categoryId: "laptops",
    image: "/images/product/laptopimage.jpg",
    description:
      "The HP Omen 15 is a powerful gaming laptop with an Intel Core i7 processor, NVIDIA GeForce RTX 3070 graphics, and a 15.6-inch 144Hz display, providing high frame rates for gaming and a great visual experience.",
    price: 50,
    gallery: ["/images/product/laptopgallery1.jpg", "/images/product/laptopgallery2.jpg"],
    stock: 8,
    rating: 3,
    createdAt: "2022-12-21T12:05:00Z",
    features: [
      { name: "Brand", value: "HP" },
      { name: "Model", value: "Omen 15" },
      { name: "Processor", value: "Intel Core i7" },
      { name: "Graphics", value: "NVIDIA GeForce RTX 3070" },
      { name: "Display", value: "15.6-inch 144Hz" },
      { name: "RAM", value: "16GB" },
      { name: "Storage", value: "1TB SSD" },
    ],
  },
  {
    id: "product-5",
    name: "Acer Aspire 5 - Silver",
    slug: "acer-aspire-5-silver",
    categoryId: "laptops",
    image: "/images/product/laptopimage.jpg",
    description:
      "The Acer Aspire 5 is an affordable laptop with a 15.6-inch Full HD display, Intel Core i3 processor, and 4GB RAM, making it perfect for daily tasks and light multitasking.",
    price: 50,
    gallery: ["/images/product/laptopgallery1.jpg", "/images/product/laptopgallery2.jpg"],
    stock: 20,
    rating: 3,
    createdAt: "2023-06-11T18:22:00Z",
    features: [
      { name: "Brand", value: "Acer" },
      { name: "Model", value: "Aspire 5" },
      { name: "Processor", value: "Intel Core i3" },
      { name: "Display", value: "15.6-inch Full HD" },
      { name: "RAM", value: "4GB" },
      { name: "Storage", value: "128GB SSD" },
    ],
  },
  {
    id: "product-6",
    name: "HP Pavilion x360 14 - Natural Silver",
    slug: "hp-pavilion-x360-14-natural-silver",
    categoryId: "laptops",
    image: "/images/product/laptopimage.jpg",
    description:
      "The HP Pavilion x360 14 is a versatile 2-in-1 laptop with a 14-inch touchscreen, Intel Core i3 processor, and 4GB RAM, offering flexibility and portability.",
    price: 50,
    gallery: ["/images/product/laptopgallery1.jpg", "/images/product/laptopgallery2.jpg"],
    stock: 15,
    rating: 3,
    createdAt: "2023-05-19T11:47:00Z",
    features: [
      { name: "Brand", value: "HP" },
      { name: "Model", value: "Pavilion x360 14" },
      { name: "Processor", value: "Intel Core i3" },
      { name: "Display", value: "14-inch touchscreen" },
      { name: "RAM", value: "4GB" },
      { name: "Storage", value: "128GB SSD" },
    ],
  },
  {
    id: "product-7",
    name: "Lenovo IdeaPad 3 15 - Platinum Grey",
    slug: "lenovo-ideapad-3-15-platinum-grey",
    categoryId: "laptops",
    image: "/images/product/laptopimage.jpg",
    description:
      "The Lenovo IdeaPad 3 15 is a budget-friendly laptop with a 15.6-inch HD display, AMD Ryzen 3 processor, and 4GB RAM, ideal for everyday tasks and entertainment.",
    price: 50,
    gallery: ["/images/product/laptopgallery1.jpg", "/images/product/laptopgallery2.jpg"],
    stock: 25,
    rating: 3,
    createdAt: "2022-09-08T16:33:00Z",
    features: [
      { name: "Brand", value: "Lenovo" },
      { name: "Model", value: "IdeaPad 3 15" },
      { name: "Processor", value: "AMD Ryzen 3" },
      { name: "Display", value: "15.6-inch HD" },
      { name: "RAM", value: "4GB" },
      { name: "Storage", value: "256GB SSD" },
    ],
  },
  {
    id: "product-8",
    name: "Dell Inspiron 15 3000 - Black",
    slug: "dell-inspiron-15-3000-black",
    categoryId: "laptops",
    image: "/images/product/laptopimage.jpg",
    description:
      "The Dell Inspiron 15 3000 is an entry-level laptop with a 15.6-inch HD display, Intel Celeron processor, and 4GB RAM, ideal for students and basic office tasks.",
    price: 50,
    gallery: ["/images/product/laptopgallery1.jpg", "/images/product/laptopgallery2.jpg"],
    stock: 18,
    rating: 3,
    createdAt: "2023-03-27T08:15:00Z",
    features: [
      { name: "Brand", value: "Dell" },
      { name: "Model", value: "Inspiron 15 3000" },
      { name: "Processor", value: "Intel Celeron" },
      { name: "Display", value: "15.6-inch HD" },
      { name: "RAM", value: "4GB" },
      { name: "Storage", value: "128GB SSD" },
    ],
  },
  {
    id: "product-9",
    name: "Samsung Galaxy Book Go - Mystic Silver",
    slug: "samsung-galaxy-book-go-mystic-silver",
    categoryId: "laptops",
    image: "/images/product/laptopimage.jpg",
    description:
      "The Samsung Galaxy Book Go is a lightweight laptop powered by a Qualcomm Snapdragon processor, featuring a 14-inch Full HD display and long battery life.",
    price: 50,
    gallery: ["/images/product/laptopgallery1.jpg", "/images/product/laptopgallery2.jpg"],
    stock: 12,
    rating: 3,
    createdAt: "2022-11-14T20:50:00Z",
    features: [
      { name: "Brand", value: "Samsung" },
      { name: "Model", value: "Galaxy Book Go" },
      { name: "Processor", value: "Qualcomm Snapdragon 7c" },
      { name: "Display", value: "14-inch Full HD" },
      { name: "RAM", value: "4GB" },
      { name: "Storage", value: "128GB eUFS" },
    ],
  },
  {
    id: "product-10",
    name: "ASUS VivoBook 14 - Slate Grey",
    slug: "asus-vivobook-14-slate-grey",
    categoryId: "laptops",
    image: "/images/product/laptopimage.jpg",
    description:
      "The ASUS VivoBook 14 is a compact and stylish laptop with a 14-inch HD display, Intel Pentium Silver processor, and a lightweight design for everyday tasks.",
    price: 50,
    gallery: ["/images/product/laptopgallery1.jpg", "/images/product/laptopgallery2.jpg"],
    stock: 20,
    rating: 3,
    createdAt: "2023-07-02T13:29:00Z",
    features: [
      { name: "Brand", value: "ASUS" },
      { name: "Model", value: "VivoBook 14" },
      { name: "Processor", value: "Intel Pentium Silver N6000" },
      { name: "Display", value: "14-inch HD" },
      { name: "RAM", value: "4GB" },
      { name: "Storage", value: "256GB SSD" },
    ],
  },
  {
    id: "product-11",
    name: "Microsoft Surface Laptop Go - Ice Blue",
    slug: "microsoft-surface-laptop-go-ice-blue",
    categoryId: "laptops",
    image: "/images/product/laptopimage.jpg",
    description:
      "The Microsoft Surface Laptop Go is a sleek and portable device featuring a 12.4-inch PixelSense touchscreen, Intel Core i5 processor, and 4GB RAM, ideal for students and professionals on the go.",
    price: 50,
    gallery: ["/images/product/laptopgallery1.jpg", "/images/product/laptopgallery2.jpg"],
    stock: 10,
    rating: 3,
    createdAt: "2023-02-18T09:55:00Z",
    features: [
      { name: "Brand", value: "Microsoft" },
      { name: "Model", value: "Surface Laptop Go" },
      { name: "Processor", value: "Intel Core i5" },
      { name: "Display", value: "12.4-inch PixelSense touchscreen" },
      { name: "RAM", value: "4GB" },
      { name: "Storage", value: "128GB SSD" },
    ],
  },
  {
    id: "product-12",
    name: "Lenovo Chromebook Duet 3 - Storm Grey",
    slug: "lenovo-chromebook-duet-3-storm-grey",
    categoryId: "laptops",
    image: "/images/product/laptopimage.jpg",
    description:
      "The Lenovo Chromebook Duet 3 is a 2-in-1 detachable laptop with a 10.1-inch touchscreen, Snapdragon 7c processor, and long battery life, perfect for casual browsing and cloud-based work.",
    price: 50,
    gallery: ["/images/product/laptopgallery1.jpg", "/images/product/laptopgallery2.jpg"],
    stock: 15,
    rating: 3,
    createdAt: "2022-10-07T15:44:00Z",
    features: [
      { name: "Brand", value: "Lenovo" },
      { name: "Model", value: "Chromebook Duet 3" },
      { name: "Processor", value: "Qualcomm Snapdragon 7c" },
      { name: "Display", value: "10.1-inch touchscreen" },
      { name: "RAM", value: "4GB" },
      { name: "Storage", value: "64GB eMMC" },
    ],
  },
  {
    id: "product-13",
    name: "HP Stream 14 - Royal Blue",
    slug: "hp-stream-14-royal-blue",
    categoryId: "laptops",
    image: "/images/product/laptopimage.jpg",
    description:
      "The HP Stream 14 is a budget-friendly laptop with a 14-inch HD display, Intel Celeron processor, and lightweight design, ideal for students and basic productivity tasks.",
    price: 50,
    gallery: ["/images/product/laptopgallery1.jpg", "/images/product/laptopgallery2.jpg"],
    stock: 22,
    rating: 3,
    createdAt: "2023-04-25T07:18:00Z",
    features: [
      { name: "Brand", value: "HP" },
      { name: "Model", value: "Stream 14" },
      { name: "Processor", value: "Intel Celeron N4000" },
      { name: "Display", value: "14-inch HD" },
      { name: "RAM", value: "4GB" },
      { name: "Storage", value: "64GB eMMC" },
    ],
  },
];

// Simulate API calls with mock data
export const getProduct = (slug: string):Product | null => {
  return products.find(product => product.slug === slug) || null;
};

export const getProducts = () => {
  return products;
};

export const getCategories = () => {
  return categories;
};

export const getCategory = (slug: string):ProductCategory | null => {
  return categories.find(category => category.slug === slug) || null;
};