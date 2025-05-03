export interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
  description: string
  rating: number
  reviews: number
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Shea Retention Shampoo',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&h=500&fit=crop',
    category: 'Shampoo',
    description: 'Professional grade shampoo for hair retention and growth',
    rating: 4.8,
    reviews: 234
  },
  {
    id: '2',
    name: 'Botoliss Biotin Hair Mask',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&h=500&fit=crop',
    category: 'Hair Mask',
    description: 'Deep conditioning mask with biotin for stronger hair',
    rating: 4.9,
    reviews: 189
  },
  {
    id: '3',
    name: 'ScalpSense Hair Fall Shampoo',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&h=500&fit=crop',
    category: 'Shampoo',
    description: 'Anti-hair fall shampoo with scalp care benefits',
    rating: 4.7,
    reviews: 156
  }
]

export const categories = [
  {
    id: '1',
    name: 'Shampoo',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&h=500&fit=crop',
    count: 12
  },
  {
    id: '2',
    name: 'Hair Mask',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&h=500&fit=crop',
    count: 8
  },
  {
    id: '3',
    name: 'Hair Oil',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&h=500&fit=crop',
    count: 6
  },
  {
    id: '4',
    name: 'Serum',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&h=500&fit=crop',
    count: 4
  }
] 