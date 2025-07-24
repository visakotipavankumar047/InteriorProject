import Image from 'next/image'
import React from 'react'
import { TbArrowNarrowRight } from 'react-icons/tb'

export default function FirstServices() {
    const items = [
        {
            id: '01',
            catagory: 'Water Proofing',
            title: 'Premium Water Proofing',
            image: '/image/images/water_proofing.png',
            descripion: "We provide comprehensive solutions to protect your entire property from water damage and leaks."
        },
        {
            id: '02',
            catagory: 'Pu Grouting',
            title: 'Stopping active leaks in their tracks.',
            image: '/image/images/pu_grouting.png',
            descripion: " We utilize advanced PU injection grouting to seal concrete cracks and stop active water leakages instantly."
        },
        {
            id: '03',
            catagory: 'Painting',
            title: 'The beautiful final shield.',
            image: '/image/images/painting.png',
            descripion: "We apply high-quality, weatherproof exterior paints that protect your walls from rain while refreshing their look."
        },
        {
            id: '04',
            catagory: 'Damp proofing',
            title: 'Your cure for damp walls.',
            image: '/image/images/damp.png',
            descripion: "We provide specialized treatments to create a robust barrier against rising dampness, keeping your interior walls dry."
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