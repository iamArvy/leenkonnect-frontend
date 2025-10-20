export interface Testimonial {
    id: number;
    name: string;
    content: string;
    role: string;
    rating: number;
    image: string;
    createdAt?: string;
}

export type Testimonials = Testimonial[];

export interface TestimonialFilters {
    q: string
}