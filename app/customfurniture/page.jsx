"use client"

import React, { useRef } from 'react'
import Image from 'next/image'
import { desVariants, tagVariants, titleVariants } from '@/utils/animation';
import { motion, useScroll, useTransform } from 'framer-motion'

const types = [
    {
        id: 1,
        name: 'Custom Sofa',
        description: "We design sofas tailored to your room's exact dimensions and your personal standard of comfort." ,
        image: '/image/images/custom_sofa.jpeg',
    },
    {
        id: 2,
        name: 'Custom Bed',
        description: 'We craft beds that act as the stunning centerpiece of your bedroom, reflecting your style and promoting restful sleep.',
        image: '/image/images/custom_bed.jpeg',
    },
    {
        id: 3,
        name: 'Custom Kitchen',
        description: 'We engineer bespoke kitchens that optimize your personal workflow and are built with stunning, durable materials.',
        image: '/image/images/custom_kitchen.jpeg',
    },
    {
        id: 4,
        name: 'Custom Cabinet',
        description: 'We design statement dining and center tables that serve as the beautiful and durable focal point for your gatherings.',
        image: '/image/images/custom_cabinet.jpeg',
    },
    {
        id: 5,
        name: 'Custom Reception',
        description: "We create impactful reception desks and areas that make a powerful first impression and embody your brand's identity.",
        image: '/image/images/custom_reciption.jpeg',
    },
    {
        id: 6,
        name: 'Custom Door',
        description: 'We design and craft unique entryway and interior doors that act as a statement piece, setting the tone for your space.',
        image: '/image/images/custom_doors.jpeg',
    },
    {
        id: 7,
        name: 'Custom Workstation',
        description: 'We create ergonomic and highly functional workstations tailored to your specific professional needs to enhance focus and efficiency.',
        image: '/image/images/custom_workstation.jpg',
    },
    {
        id: 8,
        name: 'Custom Table',
        description: 'We design statement dining and center tables that serve as the beautiful and durable focal point for your gatherings.',
        image: '/image/images/custom_tables.jpg',
    },
    {
        id: 9,
        name: 'Custom Chair',
        description: 'We create statement armchairs and accent chairs that add a unique touch of personality and artistry to any corner.',
        image: '/image/images/custom_chair.jpg',
    }
]


const page = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    })

    const scale = useTransform(scrollYProgress, [0, 1], [.6, 1])
    return (
        <div>
            <div className="bg-[url('/image/custom_furniture.jpg')] bg-center bg-cover">
                <h1 className='container py-32 text-6xl font-semibold text-black tracking-widest text-center lg:py-64'>Custom Furniture</h1>
            </div>
            <div className='container'>
                <div className='items-center pt-10 pb-10 lg:flex gap-x-8'>
                    {/*Left Image Section* */}
                    <motion.div
                        style={{scale}}
                        ref={ref}

                        className='w-full'>
                        <Image src="/image/images/custom_furniture1.jpg" width={700} height={700}  alt={"Custom Furniture"}/>
                    </motion.div>

                    {/*Right Content Section* */}
                    <motion.div
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={tagVariants}
                    >
                        <p className='pb-8 tracking-wide mt-6'>
                            For us, furniture is not an isolated element; it is the heart of our interior design philosophy. Unlike a standalone furniture maker, we design each piece as an integral part of a holistic interior concept.<br/> <br/> 
                            This ensures perfect harmony in scale, proportion, material, and style. A custom sofa is designed not just for comfort, but to anchor your living room's layout.<br/> <br/>  
                            A dining table is crafted not just to seat eight, but to become the centerpiece of family gatherings. This integrated approach guarantees that every piece feels like it truly belongs, elevating the entire space.<br/> <br/> 
                            <span className='text-xl font-extrabold tracking-tight'>
                                We don't just build furniture. We craft future heirlooms, designed for your life and destined to tell your story.
                            </span>
                        </p>
                    </motion.div>
                </div>
            </div>
            <div className="container grid lg:grid-cols-2 gap-8 py-8">
                <motion.h1
                    className="ml-10 py-64 text-6xl font-semibold"
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                >Furniture as unique as your signature.</motion.h1>
                {
                    types.map((type) => (
                        <div key={type.id} className="relative overflow-hidden rounded-xl group">
                            <div>
                                <Image src={type.image} width={480} height={380} alt="" className="w-full" />
                            </div>
                            <div className="absolute bottom-0 right-0 bg-white/90 dark:bg-black/40 flex-col items-center justify-end w-96 gap-32 p-12 text-xl transition duration-300 ease-in-out translate-y-full from-transparent to-black group-hover:translate-y-0">
                                <h1 className="text-2xl font-semibold">{type.name}</h1>
                                <p className="py-4">{type.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default page