import Image from 'next/image'
import React from 'react'
import { TbArrowNarrowRight } from 'react-icons/tb'

export default function CatalogueSection() {
    const items = [
        {
            id: '01',
            catagory: 'BEDROOM',
            title : 'Premium Bedroom Setup',
            image: '/image/interior2.jpeg',
            href : '/bedroom',
            descripion: "Crafting the bespoke bedroom sanctuary you've always dreamed of."
        },
        {
            id: '02',
            catagory: 'KITCHEN',
            title : 'Neat & Clean Kitchen',
            image: '/image/kitchen1.jpeg',
            href : '/kitchen',
            descripion: "Where culinary design meets the heart of your home."
        },
        {
            id: '03',
            catagory: 'LIVING ROOM',
            title : 'Family Drawing and Living Room',
            image: '/image/drawing1.jpeg',
            href : '/livingroom',
            descripion: "Where style makes a statement and hospitality feels like home."
        },
        {
            id: '04',
            catagory: 'PROJECT ANALYTICS',
            title : 'Making Blue prints and 3D Drawings',
            image: '/image/3d_lay.jpeg',
            href : '/projectanalysis',
            descripion: "The heart of the home, where life is lived and stories are made."
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
                        {/* Background Image */}
                        <div>
                            <Image
                                src={item.image}
                                width={300}
                                height={100}
                                alt=''
                                className='w-full h-full object-cover'
                            />
                        </div>

                        {/* Frosted Overlay with rough border */}
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

                        {/* Glassy Overlay on Hover */}
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
