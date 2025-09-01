import type { Nav } from "~/types";

export const navs: Nav[] = [
    { label: 'Home', path: '/'},
    { label: 'Consultation', path: '/consultation'},
    { label: 'Shop', path: '/shop' },
    { label: 'Services', path: '/services'},
    { label: 'Blog', path: '/blog' },
    { label: 'About', path: '/about'},
    { label: 'Contact', path: '/contact'},
];

export const servicesnavs = [
    {
        title: 'Consultation',
        href: '/consultation',
        name: 'consultation'
    },
    {
        title: 'Shop',
        href: '/shop',
        name: 'shop'
    }
]

export const companynavs = [
    {
        title: 'About',
        href: '/about',
        name: 'about'
    },
    {
        title: 'Services',
        href: '/services',
        name: 'service'
    },
    {
        title: 'Contact',
        href: '/contact',
        name: 'contact'
    }
]

export const othernavs = [
    {
        title: 'Blog',
        href: '/blog',
        name: 'blog'
    }
]

export const footernavlist = [
    {
        title: 'Services',
        list: servicesnavs
    },
    {
        title: 'Company',
        list: companynavs
    },
    {
        title: 'Other',
        list: othernavs
    }
]

export interface aNav {
    name: string,
    href: string,
    children?: aNav[],
    icon?: string
}

export const adminNavs : aNav[] = [
    {
        name: 'Store',
        href: 'store.',
        children: [
            {
                name: 'Products',
                href: 'products.index',
                icon: 'heroicons:shopping-bag',
            },
            {
                name: 'Orders',
                href: 'orders.index',
                icon: 'heroicons:shopping-cart',
            },
            {
                name: 'Categories',
                href: 'categories.index',
            },
        ],
        // active: () => {
        //     return this.children.some((child) => child.active);
        // }
    },
    {
        name: 'Blog',
        href: 'blog.',
        children: [
            {
                name: 'Posts',
                href: 'posts.index',
                icon: ''
            },
            // {
            //     name: 'Categories',
            //     href: 'categories.index',
            // }
        ],
        // active: () => {
        //     return this.children.some((child) => child.active);
        // }
    },
    {
        name: 'Consultation',
        href: 'consultation.',
        children: [
            {
                name: 'Bookings',
                href: 'bookings.index',
                icon: ''
            },
            {
                name: 'Specialisations',
                href: 'specialisations.index',
                icon: ''
            }
        ],
        // active: () => {
        //     return this.children.some((child) => child.active);
        // }
    },
    {
        name: 'Services',
        href: 'admin.services.index',
        icon: ''
    },
    {
        name: 'Testimonials',
        href: 'admin.testimonials.index',
        icon: 'heroicons:chat-bubble-left-ellipsis'
    }
]
