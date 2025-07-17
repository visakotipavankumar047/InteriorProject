import Image from 'next/image'
import React from 'react'
import { TbArrowNarrowRight } from 'react-icons/tb'

export default function FirstServices() {
    const items = [
        {
            id: '01',
            catagory: 'DESIGN DEVELOPMENT',
            title : 'Premium Design Development',
            image: '/image/images/DESIGN DEVELOPMENT in Interior.jpg',
            descripion: "The VP Group team translates your vision into tangible concepts with detailed floor plans and material palettes."
        },
        {
            id: '02',
            catagory: '3D VISUALS',
            title : 'Amazing Rendering Drawings',
            image: '/image/images/3D Visuals in interior.jpg',
            descripion: "VP Group creates photorealistic renderings that allow you to see and confidently approve your new space before implementation."
        },
        {
            id: '03',
            catagory: 'BIDDING',
            title : 'Trusted Vendors and Transparent Pricing',
            image: '/image/images/Bidding in interior designing.jpg',
            descripion: "VP Group manages the bidding process with our trusted vendors to ensure transparent pricing and superior quality."
        },
        {
            id: '04',
            catagory: 'OUTLINE PROJECTS',
            title : 'Outline Projects with Vision and execution',
            image: '/image/images/OUTLINE PROJECTS in interior design.jpg',
            descripion: "VP Group collaborates with you to establish the initial vision and high-level goals for your project."
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