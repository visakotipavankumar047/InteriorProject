"use client"

import React, { useRef } from 'react'
import Image from 'next/image'
import { desVariants, tagVariants, titleVariants } from '@/utils/animation';
import { motion, useScroll, useTransform } from 'framer-motion'

const types = [
    {
        id: 1,
        name: 'The L-Shape Kitchen',
        description: 'The smart, versatile corner design for maximum efficiency and open space.',
        image: '/image/l-shaped.jpeg',
    },
    {
        id: 2,
        name: 'The U-Shape Kitchen',
        description: 'Surround yourself with everything you need in the ultimate cook\'s cockpit.',
        image: '/image/u_shaped.jpeg',
    },
    {
        id: 3,
        name: 'The Island Kitchen',
        description: 'The social heart of your home where cooking and conversation come together.',
        image: '/image/island_kitchen.jpeg',
    },
    {
        id: 4,
        name: 'The Parallel Kitchen',
        description: 'The ultimate in workflow efficiency, making the most of a compact space.',
        image: '/image/parallel_kitchen.jpeg',
    },
    {
        id: 5,
        name: 'The Modern Kitchen',
        description: 'Sleek, seamless, and intelligently designed for effortless living.',
        image: '/image/modern_kitchenn.jpeg',
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
            <div className="bg-[url('/image/kitchen3.png')] bg-center bg-cover">
                <h1 className='container py-32 text-6xl font-semibold text-black tracking-widest text-center lg:py-64'>Kitchen</h1>
            </div>
            <div className='container'>
                <div className='items-center pt-10 pb-10 lg:flex gap-x-8'>
                    {/*Left Image Section* */}
                    <motion.div
                        style={{ scale }}
                        ref={ref}

                        className='w-full'>
                        <Image src="/image/modern_kitchen.jpeg" width={700} height={700}  alt={"Kitchen"}/>
                    </motion.div>

                    {/*Right Content Section* */}
                    <motion.div
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={tagVariants}
                    >
                        <p className='pb-8 tracking-wide mt-6'>
                            At VP Group, we believe the kitchen is far more than a place to cook—it is the vibrant heart of the home, a space where culinary passions come to life and lasting memories are forged. <br/> <br/>
                            We specialize in designing and crafting bespoke kitchens that perfectly balance sophisticated style with unparalleled functionality, creating a centerpiece for your home that is both beautiful and intuitively practical.<br/> <br/>
                            With a commitment to superior craftsmanship, VP Group utilizes premium materials, state-of-the-art hardware, and intelligent design to ensure every cabinet, countertop, and corner serves a purpose. We transform everyday utility into an art form,
                            ensuring your kitchen is not just built for cooking, but designed for living.
                            <span className='text-xl font-extrabold tracking-tight'>
                                VP Group crafts the heart of your home—a bespoke kitchen where flawless functionality and timeless design come together to inspire every day.
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
                >Sophisticated & High-End : Curated Kitchen Concepts</motion.h1>
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