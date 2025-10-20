export interface ProductCategory {
    name: string;
    description?: string;
    image?: string;
    id: string;
    icon: string;
    count?: number;
    slug: string
}

export type ProductCategoriesResponse = {
    items: ProductCategory[];
    total: number;
}
export type ProductCategories = ProductCategory[];