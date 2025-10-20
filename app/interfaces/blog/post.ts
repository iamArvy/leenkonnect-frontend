import type { BlogCategory } from ".";

export interface Post {
    id: string,
    title: string,
    categoryId: string,
    image: string,
    content: string,
    slug: string,
    excerpt: string,
    category?: BlogCategory
    createdAt: string,
}

export type Posts = Post[];

export type PostFilters = {
    q: string,
    c: string[]
};