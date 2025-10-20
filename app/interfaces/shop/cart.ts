import type { Product } from "./product";

export interface CartItem {
    product: Product;
    quantity: number;
    total: number;
}

export interface Cart {
    items: CartItem[];
    total: number;
}
