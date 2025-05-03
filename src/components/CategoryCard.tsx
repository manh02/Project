import Image from 'next/image'
import Link from 'next/link'

interface CategoryCardProps {
  id: string
  name: string
  image: string
  count: number
}

export default function CategoryCard({ id, name, image, count }: CategoryCardProps) {
  return (
    <Link href={`/category/${id}`} className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-sm mt-2">{count} Products</p>
          </div>
        </div>
      </div>
    </Link>
  )
} 