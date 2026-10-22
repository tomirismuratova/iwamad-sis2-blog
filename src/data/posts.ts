export type BlogPost = {
  id: number
  title: string
  category: string
  excerpt: string
  content: string
  date: string
  image: string
}

export const posts: BlogPost[] = [
  {
    id: 1,
    title: 'The Beauty of Minimalism',
    category: 'DESIGN',
    excerpt: 'Exploring how simplicity can create powerful and meaningful spaces.',
    content: 'Minimalism is about thoughtful choices, natural materials and spaces that balance beauty with everyday function.',
    date: 'October 12, 2026',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000'
  },
  {
    id: 2,
    title: 'Architecture and Emotion',
    category: 'ARCHITECTURE',
    excerpt: 'How buildings, materials and light influence the way we feel.',
    content: 'Architecture affects how we experience a place. Light, proportions, texture and circulation all influence our emotions.',
    date: 'October 15, 2026',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1000'
  },
  {
    id: 3,
    title: 'My Creative Process',
    category: 'CREATIVITY',
    excerpt: 'From the first sketch to the final concept: finding inspiration.',
    content: 'My creative process begins with research and sketches, followed by experimentation, feedback and refinement.',
    date: 'October 19, 2026',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1000'
  }
]