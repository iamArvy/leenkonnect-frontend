export interface ProductCategory {
    name: string;
    description?: string;
    image?: string;
    id: string;
}

export type ProductCategories = ProductCategory[];