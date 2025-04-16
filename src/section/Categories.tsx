import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Categories = ({ categories }: { categories: CategoriesProps[] }) => {
    return (
        <section className='py-4'>
            <div>
                <h1 className='text-xl md:text-2xl font-semibold uppercase mb-4 text-center'> SHOP BY CATEGORIES </h1>
                <div className='container mx-auto px-4 md:px-8 lg:px-12'>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                        {categories.map((category) => (
                            <Link href={`/category/${category.categorySet}`} key={category.categoryName} className='block relative overflow-hidden'>
                                <Image
                                    src={category.imageUrl}
                                    alt={category.categoryName}
                                    width={800}
                                    height={550}
                                    className='object-cover w-full h-full hover:scale-110 transition-all duration-700 ease-in-out'
                                />
                                <span className='absolute block -bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-sm font-semibold bg-black/50 w-full py-2 text-center'>{category.categoryName}</span>
                            </Link >
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categories
