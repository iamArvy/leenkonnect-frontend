interface DeliverAddress {
    city: string;
    state: string;
    street: string;
}
interface Delivery {
    id: number;
    name: string;
    order_id: number;
    status: string;
    address: DeliverAddress;
    phone: string;
    email: string;
    created_at: string;
    updated_at: string;
}

export {
    Delivery,
    DeliverAddress
}
