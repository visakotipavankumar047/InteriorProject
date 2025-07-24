"use client"

import React, { useRef } from 'react'
import Image from 'next/image'
import { desVariants, tagVariants, titleVariants } from '@/utils/animation';
import { motion, useScroll, useTransform } from 'framer-motion'

const types = [
    {
        id: 1,
        name: 'Modern Bed Room',
        description: 'Characterized by clean lines, simple geometric shapes, and a lack of clutter.',
        image: '/image/modern1.png',
    },
    {
        id: 2,
        name: 'Contemporary Bed room',
        description: 'Clean lines, calm nights. The essence of contemporary living.',
        image: '/image/con1.png',
    },
    {
        id: 3,
        name: 'Rustic Bed Room',
        description: 'Weathered wood, warm nights. The soul of rustic living.',
        image: '/image/rust1.png',
    },
    {
        id: 5,
        name: 'Scandinavian Bed Room',
        description: 'Where cozy comfort meets the serene beauty of minimalist design.',
        image: '/image/scand1.png',
    },
    {
        id: 6,
        name: 'Bohemian Bed Room',
        description: 'A vibrant sanctuary for the free spirit, where your story is told in every texture.',
        image: '/image/boho1.png',
    },
    {
        id: 7,
        name: 'Farm House Bed Room',
        description: 'Where modern comfort finds its home amidst simple, rustic charm.',
        image: '/image/farm1.png',
    },
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
            {/* Hero Section */}
            <div className="bg-[url('/image/Bedroom1.png')] bg-center bg-cover">
                <h1 className='container py-32 text-6xl font-semibold text-black tracking-widest text-center lg:py-64'>
                    Bed Room
                </h1>
            </div>

            {/* Intro Section */}
            <div className='container px-4 sm:px-6 lg:px-0'>
                <div className='flex flex-col-reverse lg:flex-row items-center pt-10 pb-10 gap-10 lg:gap-x-12'>
                    {/* Right Content Section */}
                    <motion.div
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={tagVariants}
                        className='w-full'
                    >
                        <p className='tracking-wide leading-relaxed text-lg'>
                            Transform your bedroom into a personal sanctuary with a bespoke design from VP Group. We specialize in crafting custom bedrooms that are a true reflection of your unique style and a haven for relaxation.<br /><br />
                            Our expert designers work closely with you to create a space that is not only visually stunning but also exceptionally functional. From luxurious master suites to cleverly designed compact spaces, VP Group is dedicated to using only the finest quality materials and meticulous craftsmanship.
                            Whether you desire a modern minimalist aesthetic, a classic timeless design, or a vibrant and eclectic retreat, we bring your vision to life. Experience the perfect blend of comfort, elegance, and personalization with a VP Group bedroom – your ultimate escape.<br /><br />
                            <span className='text-xl font-extrabold tracking-tight'>
                                Your personal sanctuary awaits. At VP Group, we don't just build bedrooms; we craft the bespoke retreat you've always dreamed of.
                            </span>
                        </p>
                    </motion.div>

                    {/* Left Image Section */}
                    <motion.div style={{ scale }} ref={ref} className='w-full'>
                        <Image src="/image/Bedroom2.png" width={700} height={700} alt="bedroom" />
                    </motion.div>
                </div>
            </div>

            {/* Styles Section */}
            <div className="container px-4 sm:px-6 lg:px-0">
                <motion.h1
                    className="text-4xl lg:text-6xl font-semibold py-16 text-center lg:text-left"
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                >
                    Elevate Your Slumber: Bedroom Styles Redefined
                </motion.h1>

                <div className="grid gap-12 lg:grid-cols-2 pb-20">
                    {types.map((type) => (
                        <div key={type.id} className="relative overflow-hidden rounded-xl group">
                            <Image src={type.image} width={480} height={380} alt={type.name} className="w-full" />
                            <div className="absolute bottom-0 right-0 bg-white/90 dark:bg-black/40 flex flex-col justify-end max-w-md w-full gap-4 p-6 text-base md:text-xl transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
                                <h2 className="text-2xl font-semibold">{type.name}</h2>
                                <p className="">{type.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page
