import type { ProductCategory } from ".";

export interface ProductFeature {
    name: string;
    value: string;
}

export interface Product {
    id: string;
    name: string;
    image: string;
    categoryId: string;
    description: string;
    price: number;
    gallery: string[];
    stock: number;
    features: ProductFeature[];
    slug: string;
    rating: number;
    category?: ProductCategory;
    deletedAt?: string | null;
    createdAt: string;
}

export type Products = Product[];

export type ProductsResponse = {
    items: Product[];
    total: number;
}

export type ProductFilters = {
    q: string,
    pr: number[],
    r: number[],
    cid: string,

}