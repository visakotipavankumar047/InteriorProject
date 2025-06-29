import Image from 'next/image'
import React from 'react'
import { TbArrowNarrowRight } from 'react-icons/tb'

export default function ServicesSection() {
    const items = [
        {
            id: '05',
            catagory: 'INTERIOR DESIGN',
            title : 'Premium Interior Design',
            image: '/image/badroom.jpg',
            descripion: "family drowing room with a clean and comfortble design for your family"
        },
        {
            id: '06',
            catagory: 'WATER PROOOFING',
            title : 'Premium Waterproofing Solutions',
            image: '/image/kitchen1.jpg',
            descripion: "family drowing room with a clean and comfortble design for your family"
        },
        {
            id: '07',
            catagory: 'CUSTOM FURNITURE',
            title : 'Premium Furniture Solutions',
            image: '/image/drowing.jpg',
            descripion: "family drowing room with a clean and comfortble design for your family"
        },
        {
            id: '08',
            catagory: 'EXTERIOR DESIGNING',
            title : 'Premium Exterior Solutions',
            image: '/image/living.jpg',
            descripion: "family drowing room with a clean and comfortble design for your family"
        },
    ]

    return (
        <div className='grid gap-8 lg:grid-cols-4 md:grid-cols-2 lg:gap-0 divide-gray-300 lg:divide-x'>
            {
                items.map((item) =>(
                    <div
                        key={item.id}
                        className='relative overflow-hidden group'
                    >
                            <div>
                                <Image
                                    src={item.image}
                                    width={300}
                                    height={100}
                                    alt=''
                                    className='w-full ' 
                                />
                            </div>

                            <div className='absolute top-0 p-8 bg-white text-black bg-opacity-60 backdrop-blur m-12'>
                                <div className='flex justify-between pb-4'>
                                    <p className='text-sm'>{item.catagory}</p>
                                    <span>{item.id}</span>
                                </div>
                                <a className="block text-xl font-semibold" href=''>{item.title}</a>
                                <p className='py-4'>{item.descripion}</p>
                                <a className="inline-flex items-center font-medium" href="">See Details <TbArrowNarrowRight className='ml-2' /></a>
                            </div>

                            <div className='inset-0 bg-tertiary flex-col items-center justify-end md:flex md:absolute gap-32 pb-16 text-xl transition duration-300 ease-in-out border-b-2 group-hover:translate-y-full md:border-b-0 hidden'>
                                <p className='tracking-wider -rotate-90'>{item.catagory}</p>
                                <span>{item.id}</span>
                            </div>
                    </div>

                    
                ))
            }
        </div>
    )
}