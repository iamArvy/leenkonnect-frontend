import { Product } from "./product";

interface Review {
    id: number;
    product_id: number;
    name: string;
    content: string;
    rating: number;
    created_at: string;
    updated_at: string;
    date: string;
    product: Product;
}

export {
    Review
}
