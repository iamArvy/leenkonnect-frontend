export interface Testimonial {
    id: number;
    name: string;
    content: string;
    occupation: string;
    rating: number;
    createdAt?: string;
}

export type Testimonials = Testimonial[];

export interface TestimonialFilters {
    q: string
}