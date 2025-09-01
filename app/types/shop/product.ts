import type { Category } from "..";

export interface ProductFeature {
    name: string;
    value: string;
}

export interface Product {
    id: string;
    name: string;
    image: string;
    category_id: string;
    description: string;
    price: number;
    gallery: string[];
    stock: number;
    features: ProductFeature[];
    slug: string;
    category?: Category;
    deletedAt?: string | null;
    createdAt: string;
}

export type Products = Product[];

export type ProductFilters = {
    q: string,
    pr: {
        min: number,
        max: number,
    }
    c: string[]
}