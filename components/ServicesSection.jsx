import Image from 'next/image'
import React from 'react'
import { TbArrowNarrowRight } from 'react-icons/tb'

export default function ServicesSection() {
    const items = [
        {
            id: '05',
            catagory: 'INTERIOR DESIGN',
            title: 'Premium Interior Design',
            image: '/image/interior1.jpeg',
            href: '/interiordesign',
            descripion: "Crafting bespoke luxury interiors where your vision meets timeless design and flawless execution."
        },
        {
            id: '06',
            catagory: 'WATER PROOOFING',
            title: 'Premium Waterproofing Solutions',
            image: '/image/waterproofing.jpeg',
            href: '/waterproofing',
            descripion: "Protecting your peace of mind by keeping your property perfectly dry."
        },
        {
            id: '07',
            catagory: 'CUSTOM FURNITURE',
            title: 'Premium Furniture Solutions',
            image: '/image/custom1.jpeg',
            href: '/customfurniture',
            descripion: "Designed for your space, crafted for your life."
        },
        {
            id: '08',
            catagory: 'EXTERIOR DESIGNING',
            title: 'Premium Exterior Solutions',
            image: '/image/exterior1.jpeg',
            href: '/exteriordesign',
            descripion: "A complete design vision, captivating at the curb and comforting within."
        },
    ]

    return (
        <div className='grid gap-8 lg:grid-cols-4 md:grid-cols-2 lg:gap-0 divide-gray-300 lg:divide-x'>
            {
                items.map((item) => (
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
                                className='w-full'
                            />
                        </div>

                        <div className='absolute top-0 m-6 p-6 bg-white/30 backdrop-blur-lg text-black rounded-xl border border-white/40 shadow-inner shadow-gray-300'>
                            <div className='flex justify-between pb-4'>
                                <p className='text-sm tracking-wider'>{item.catagory}</p>
                                <span className='text-sm'>{item.id}</span>
                            </div>
                            <a className="block text-xl font-semibold" href={item.href}>{item.title}</a>
                            <p className='py-4 text-sm leading-relaxed'>{item.descripion}</p>
                            <a className="inline-flex items-center font-medium text-sm hover:underline" href={item.href}>
                                See Details <TbArrowNarrowRight className='ml-2' />
                            </a>
                        </div>

                        <div className='inset-0 bg-tertiary/40 backdrop-blur-md flex-col items-center justify-end md:flex md:absolute gap-32 pb-16 text-xl transition duration-300 ease-in-out border-b-2 group-hover:translate-y-full md:border-b-0 hidden'>
                            <p className='tracking-wider -rotate-90 text-xl font-semibold'>{item.catagory}</p>
                            <span>{item.id}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
