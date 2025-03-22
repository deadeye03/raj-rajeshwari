'use client'
import Image from 'next/image'
import React from 'react'
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

const navPhotos = [
    {
        id: 'first',
        imgSrc: '/nav_photo/1.webp',
        title: 'Kurtis'
    },
    {
        id: 'second',
        imgSrc: '/nav_photo/2.webp',
        title: 'Dress Materials'
    },
    {
        id: 'third',
        imgSrc: '/nav_photo/3.webp',
        title: 'Sarees'
    },
    {
        id: 'fourth',
        imgSrc: '/nav_photo/4.webp',
        title: 'Salwar Kameez'
    },
    {
        id: 'fifth',
        imgSrc: '/nav_photo/5.webp',
        title: 'Lehengas'
    },
    {
        id: 'sixth',
        imgSrc: '/nav_photo/6.webp',
        title: 'Ready to wear '
    },
    {
        id: 'seven',
        imgSrc: '/nav_photo/7.webp',
        title: 'Mens Wear'
    },
]
const sliderPhotos = [
    {
        id: 'first',
        imgSrc: '/slide_image/1.webp',
        title: 'Kurtis'
    },
    {
        id: 'second',
        imgSrc: '/slide_image/2.webp',
        title: 'Dress Materials'
    },
    {
        id: 'third',
        imgSrc: '/slide_image/3.webp',
        title: 'Sarees'
    },
    {
        id: 'fourth',
        imgSrc: '/slide_image/4.webp',
        title: 'Salwar Kameez'
    },
    {
        id: 'fifth',
        imgSrc: '/slide_image/5.webp',
        title: 'Lehengas'
    },
    {
        id: 'sixth',
        imgSrc: '/slide_image/6.webp',
        title: 'Ready to wear Suites'
    },
]

const Hero = () => {
    const plugin = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: true }))
    return (
        <div className='container mx-auto mt-4 md:mt-8'>
            {/* Category Gallery */}
            <div className={` flex justify-start items-center gap-4 overflow-x-scroll no-scrollbar px-4 md:px-8 lg:px-12`}>
                {navPhotos.map((photo) => (
                    <div key={photo.id} className='flex flex-col items-center justify-center gap-4'>
                        <div className='relative h-[110px] md:h-[150px] w-[110px] md:w-[150px] rounded-full overflow-hidden border-amber-500'>
                            <Image src={photo.imgSrc} alt={photo.id} fill className='object-cover fill' />
                        </div>
                        <p className=' text-black text-sm font-bold'>{photo.title}</p>

                    </div>
                ))}
            </div>
            <div className='w-full mt-4 md:mt-8'>
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    plugins={[plugin.current]}
                >
                    <CarouselContent>
                        {sliderPhotos.map((data) => (
                            <CarouselItem key={data.title}>
                                <div >
                                    <div className="w-full relative ">
                                        <Image
                                            src={data.imgSrc || "/placeholder.svg"}
                                            className="object-cover w-full h-full"
                                            height={1000}
                                            width={800}
                                            alt="package"
                                        />
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                </Carousel>
            </div>
        </div>
    )
}

export default Hero
