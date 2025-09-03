import type { Product, ProductCategories } from "~/types";

export const mockProduct: Product = {
  id: '1',
  name: 'Sample Product',
  price: 100,
  image: 'https://via.placeholder.com/150',
  description: 'This is a sample product description.',
  category_id: 'cat1',
  gallery: [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/200',
  ],
  stock: 20,
  features: [
    { name: 'Color', value: 'Red' },
    { name: 'Size', value: 'Medium' },
  ],
  slug: 'sample-product',
  createdAt: new Date().toISOString(),
};

export const mockCategories = [
  { id: 'laptops', name: 'Laptops' },
  { id: 'smartphones', name: 'Smartphones' },
  { id: 'tablets', name: 'Tablets' },
  { id: 'accessories', name: 'Accessories' },
];


const mockProducts: Product[] = [
  {
    id: "product-1",
    name: "Asus ROG Zephyrus G14 2023 - Moonlight White",
    slug: "asus-rog-zephyrus-g14-2023-moonlight-white",
    category_id: "laptops",
    image: "/images/product/laptopimage.jpg",
    description:
      "The Asus ROG Zephyrus G14 is a powerful gaming laptop featuring an AMD Ryzen 9 5900HS processor, NVIDIA GeForce RTX 3060 GPU, and a 14-inch 120Hz display, offering top-tier gaming and multitasking performance.",
    price: 50,
    gallery: ["/images/product/laptopgallery1.jpg", "images/product/laptopgallery2.jpg"],
    stock: 5,
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
    category_id: "laptops",
    image: "/images/product/laptopimage.jpg",
    description:
      "The Lenovo ThinkPad X1 Carbon Gen 9 is designed for business professionals, featuring a 14-inch 4K display, Intel Core i7 processor, and 16GB RAM, all in a sleek and lightweight body.",
    price: 50,
    gallery: ["/images/product/laptopgallery1.jpg", "/images/product/laptopgallery2.jpg"],
    stock: 7,
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
    category_id: "laptops",
    image: "/images/product/laptopimage.jpg",
    description:
      "The Microsoft Surface Laptop 4 is perfect for everyday use, featuring a 15-inch PixelSense display, Intel Core i7 processor, and premium build quality, making it ideal for work and entertainment.",
    price: 50,
    gallery: ["/images/product/laptopgallery1.jpg", "/images/product/laptopgallery2.jpg"],
    stock: 10,
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
    category_id: "laptops",
    image: "/images/product/laptopimage.jpg",
    description:
      "The HP Omen 15 is a powerful gaming laptop with an Intel Core i7 processor, NVIDIA GeForce RTX 3070 graphics, and a 15.6-inch 144Hz display, providing high frame rates for gaming and a great visual experience.",
    price: 50,
    gallery: ["/images/product/laptopgallery1.jpg", "/images/product/laptopgallery2.jpg"],
    stock: 8,
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
    category_id: "laptops",
    image: "/images/product/laptopimage.jpg",
    description:
      "The Acer Aspire 5 is an affordable laptop with a 15.6-inch Full HD display, Intel Core i3 processor, and 4GB RAM, making it perfect for daily tasks and light multitasking.",
    price: 50,
    gallery: ["/images/product/laptopgallery1.jpg", "/images/product/laptopgallery2.jpg"],
    stock: 20,
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
    category_id: "laptops",
    image: "/images/product/laptopimage.jpg",
    description:
      "The HP Pavilion x360 14 is a versatile 2-in-1 laptop with a 14-inch touchscreen, Intel Core i3 processor, and 4GB RAM, offering flexibility and portability.",
    price: 50,
    gallery: ["/images/product/laptopgallery1.jpg", "/images/product/laptopgallery2.jpg"],
    stock: 15,
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
    category_id: "laptops",
    image: "/images/product/laptopimage.jpg",
    description:
      "The Lenovo IdeaPad 3 15 is a budget-friendly laptop with a 15.6-inch HD display, AMD Ryzen 3 processor, and 4GB RAM, ideal for everyday tasks and entertainment.",
    price: 50,
    gallery: ["/images/product/laptopgallery1.jpg", "/images/product/laptopgallery2.jpg"],
    stock: 25,
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
    category_id: "laptops",
    image: "/images/product/laptopimage.jpg",
    description:
      "The Dell Inspiron 15 3000 is an entry-level laptop with a 15.6-inch HD display, Intel Celeron processor, and 4GB RAM, ideal for students and basic office tasks.",
    price: 50,
    gallery: ["/images/product/laptopgallery1.jpg", "/images/product/laptopgallery2.jpg"],
    stock: 18,
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
    category_id: "laptops",
    image: "/images/product/laptopimage.jpg",
    description:
      "The Samsung Galaxy Book Go is a lightweight laptop powered by a Qualcomm Snapdragon processor, featuring a 14-inch Full HD display and long battery life.",
    price: 50,
    gallery: ["/images/product/laptopgallery1.jpg", "/images/product/laptopgallery2.jpg"],
    stock: 12,
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
    category_id: "laptops",
    image: "/images/product/laptopimage.jpg",
    description:
      "The ASUS VivoBook 14 is a compact and stylish laptop with a 14-inch HD display, Intel Pentium Silver processor, and a lightweight design for everyday tasks.",
    price: 50,
    gallery: ["/images/product/laptopgallery1.jpg", "/images/product/laptopgallery2.jpg"],
    stock: 20,
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
    category_id: "laptops",
    image: "/images/product/laptopimage.jpg",
    description:
      "The Microsoft Surface Laptop Go is a sleek and portable device featuring a 12.4-inch PixelSense touchscreen, Intel Core i5 processor, and 4GB RAM, ideal for students and professionals on the go.",
    price: 50,
    gallery: ["/images/product/laptopgallery1.jpg", "/images/product/laptopgallery2.jpg"],
    stock: 10,
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
    category_id: "laptops",
    image: "/images/product/laptopimage.jpg",
    description:
      "The Lenovo Chromebook Duet 3 is a 2-in-1 detachable laptop with a 10.1-inch touchscreen, Snapdragon 7c processor, and long battery life, perfect for casual browsing and cloud-based work.",
    price: 50,
    gallery: ["/images/product/laptopgallery1.jpg", "/images/product/laptopgallery2.jpg"],
    stock: 15,
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
    category_id: "laptops",
    image: "/images/product/laptopimage.jpg",
    description:
      "The HP Stream 14 is a budget-friendly laptop with a 14-inch HD display, Intel Celeron processor, and lightweight design, ideal for students and basic productivity tasks.",
    price: 50,
    gallery: ["/images/product/laptopgallery1.jpg", "/images/product/laptopgallery2.jpg"],
    stock: 22,
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
export const mockFetchProduct = async (slug: string): Promise<Product> => {
  return mockProducts.find(product => product.slug === slug) || mockProduct;
};

export const mockFetchProductById = async (id: string): Promise<Product> => {
  return mockProducts.find(product => product.id === id) || mockProduct;
};

export const mockGetFeaturedProducts = async (): Promise<Product[]> => {
  return mockProducts.slice(0, 8);
};

export const mockListProducts = async (): Promise<Product[]> => {
  return mockProducts;
};

export const mockListProductsByCategory = async (categoryId: string): Promise<Product[]> => {
  return mockProducts.filter(product => product.category_id === categoryId);
};

export const mockSearchProducts = async (query: string): Promise<Product[]> => {
  return mockProducts.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase())
  );
};

export const mockListCategories = async (): Promise<ProductCategories> => {
  return mockCategories;
};