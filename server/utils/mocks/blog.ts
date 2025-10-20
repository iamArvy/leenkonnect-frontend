import { faker } from "@faker-js/faker";
import type { Post } from "~/interfaces";
function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}

// Pick N random unique elements
function sample<T>(arr: T[], count: number): T[] {
  return shuffle(arr).slice(0, count)
}
export const categories = [
  {
    id: '1',
    name: 'Cybersecurity',
    slug: 'cybersecurity'
  },
  {
    id: '2',
    name: 'Networking',
    slug: 'networking'
  },
  {
    id: '3',
    name: 'Cloud Computing',
    slug: 'cloud-computing'
  },
  { 
    id: '4',
    name: 'IT Management',
    slug: 'it-management'
  },
  {
    id: '5',
    name: 'Tech insights',
    slug: 'tech-insights'
  }
];
export const generatePost = (data?: Partial<Post>): Post => {
  const category =
    data?.categoryId
      ? categories.find((c) => c.id === data.categoryId) ?? shuffle(categories)[0]
      : shuffle(categories)[0]

  const title = data?.title ?? faker.lorem.sentence(5)
  const slug = data?.slug ?? faker.helpers.slugify(title).toLowerCase()

  return {
    id: data?.id ?? faker.string.uuid(),
    title,
    slug,
    excerpt: data?.excerpt ?? faker.lorem.lines(1),
    content: data?.content ?? faker.lorem.paragraphs(3),
    image: data?.image ?? faker.image.urlPicsumPhotos(),
    createdAt: data?.createdAt ?? faker.date.past().toDateString(),
    categoryId: data?.categoryId ?? category.id,
    category,
  }
}
const samples = [
  {
    title: "10 Cloud Migration Best Practices for 2024",
    excerpt:
      "Learn the essential strategies for a successful cloud migration journey.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500",
    categoryId: "3"
  },
  {
    title: "Cybersecurity Trends Every Business Should Know",
    excerpt:
      "Stay ahead of emerging threats with these cybersecurity insights.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500",
    categoryId: "1"
  },
  {
    title: "Choosing the Right Tech Stack for Your Startup",
    excerpt:
      "A comprehensive guide to selecting technologies that scale with your business.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500",
    categoryId: "4"
  }
]

export const getSamplePosts = () => {
  return samples.map(sample => {
    return generatePost(sample)
  })
}

export const getPosts = (count: number = 10, data?: Partial<Post>) => {
  return Array.from({ length: count }, () => generatePost(data))
}