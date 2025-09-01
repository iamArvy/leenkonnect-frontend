export interface Service{
    id: number;
    name: string;
    summary: string;
    image?: string;
    content: string;
}

export type Services = Service[];