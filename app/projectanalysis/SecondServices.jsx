import Image from 'next/image'
import React from 'react'
import { TbArrowNarrowRight } from 'react-icons/tb'

export default function SecondServices() {
    const items = [
        {
            id: '04',
            catagory: 'SCOPE',
            title: 'Budgeting,Requirements and Services',
            image: '/image/images/SCOPE in Interior Design.jpg',
            descripion: "The VP Group creative process focuses on crafting spaces that are a perfect blend of your personality and our design expertise."
        },
        {
            id: '05',
            catagory: 'DESIGN',
            title: 'Premium Designs',
            image: '/image/images/Design in Interior design.jpg',
            descripion: "The VP Group creative process focuses on crafting spaces that are a perfect blend of your personality and our design expertise."
        },
        {
            id: '06',
            catagory: 'IMPLEMENTATION',
            title: 'Supervision and Management',
            image: '/image/images/Implementation in Interior Design.jpg',
            descripion: "The VP Group team provides on-site supervision and management to ensure your design is executed flawlessly."
        },
        {
            id: '08',
            catagory: 'SCHEDULE DESIGN WORK',
            title: 'Transparent Design Process',
            image: '/image/images/Schedule Design work.jpg',
            descripion: "VP Group creates a detailed project timeline with clear milestones for a predictable and transparent design process."
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