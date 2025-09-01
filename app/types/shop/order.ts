import { User } from "../user";
import { Product } from "./product";

interface OrderItem {
    id: number;
    order_id: number;
    product_id: number;
    quantity: number;
    price: number;
    order?: Order;
    product?: Product;
}

interface Order {
    id: number;
    order_number: string;
    user_id: number;
    total: number;
    status: string;
    user?: User | null;
    orderItems?: OrderItem[];
    date: string;
}

interface OrderFilters {
    orn: string;
    sts: string;
}
type Orders = Order[];
type OrderItems = OrderItem[];
export { Order, Orders, OrderItem, OrderItems, OrderFilters };
