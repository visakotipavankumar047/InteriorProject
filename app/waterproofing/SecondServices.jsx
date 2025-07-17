import Image from 'next/image'
import React from 'react'
import { TbArrowNarrowRight } from 'react-icons/tb'

export default function SecondServices() {
    const items = [
        {
            id: '05',
            catagory: 'Roof Repairs',
            title : 'A solid roof, a peaceful mind.',
            image: '/image/images/roof_repairs.png',
            descripion: "We expertly mend cracks, damages, and weak points on your roof to restore its integrity and prevent future leaks."
        },
        {
            id: '06',
            catagory: 'Inspections',
            title : 'Your pre-monsoon peace of mind.',
            image: '/image/images/inspections.png',
            descripion: "Our experts conduct thorough inspections to identify potential vulnerabilities before they lead to costly damage."
        },
        {
            id: '07',
            catagory: 'Vermiculite',
            title : 'The cool, protective layer.',
            image: '/image/images/ver.png',
            descripion: "The VP Group team provides on-site supervision and management to ensure your design is executed flawlessly."
        },
        {
            id: '08',
            catagory: 'Sealant Application',
            title : 'Sealing every gap against the storm.',
            image: '/image/images/fiber_seal.png',
            descripion: "We apply high-performance sealants to joints and gaps to ensure a complete, watertight building envelope."
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