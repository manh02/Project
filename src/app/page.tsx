import Image from 'next/image'
import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import CategoryCard from '@/components/CategoryCard'
import { products, categories } from '@/data/products'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=1920&h=1080&fit=crop"
            alt="Beauty Garage Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">
              Get your hair right and then take on the world.
            </h1>
            <p className="text-xl mb-8">
              Your hair deserves more than solutions. It needs a routine.
            </p>
            <Link href="/shop" className="btn-primary">
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Best-Selling Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} {...category} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 