import type { BlogCategory } from ".";

export interface Post {
    id: string,
    title: string,
    category_id: string,
    image: string,
    content: string,
    slug: string,
    description: string,
    category?: BlogCategory
    createdAt: string,
}

export type Posts = Post[];

export type PostFilters = {
    q: string,
    c: string[]
};