export * from './user'
export * from './pagination'
export * from './blog/category'
export * from './service'
export * from './blog'
export * from './consultation'
export * from './shop'
export * from './nav'
export * from './testimonials'
export interface Flash {
    success: string;
    error: string;
    message: string;
}

export interface Hero {
    title: string;
    description: string;
    bg: string;
}