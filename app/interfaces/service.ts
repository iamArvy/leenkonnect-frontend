export interface Service{
    id: number;
    name: string;
    summary: string;
    features: string[];
    wikiLink: string;
}

export type Services = Service[];