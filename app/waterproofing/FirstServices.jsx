import Image from 'next/image'
import React from 'react'
import { TbArrowNarrowRight } from 'react-icons/tb'

export default function FirstServices() {
    const items = [
        {
            id: '01',
            catagory: 'Water Proofing',
            title : 'Premium Water Proofing',
            image: '/image/images/water_proofing.png',
            descripion: "We provide comprehensive solutions to protect your entire property from water damage and leaks."
        },
        {
            id: '02',
            catagory: 'Pu Grouting',
            title : 'Stopping active leaks in their tracks.',
            image: '/image/images/pu_grouting.png',
            descripion: " We utilize advanced PU injection grouting to seal concrete cracks and stop active water leakages instantly."
        },
        {
            id: '03',
            catagory: 'Painting',
            title : 'The beautiful final shield.',
            image: '/image/images/painting.png',
            descripion: "We apply high-quality, weatherproof exterior paints that protect your walls from rain while refreshing their look."
        },
        {
            id: '04',
            catagory: 'Damp proofing',
            title : 'Your cure for damp walls.',
            image: '/image/images/damp.png',
            descripion: "We provide specialized treatments to create a robust barrier against rising dampness, keeping your interior walls dry."
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