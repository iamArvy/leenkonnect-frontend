import type { Product } from "./product";

export interface CartItem {
    id: string;
    product: Product;
    quantity: number;
    total: number;
}

export interface Cart {
    items: CartItem[];
    total: number;
}
