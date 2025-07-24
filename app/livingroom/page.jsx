"use client"

import React, { useRef } from 'react'
import Image from 'next/image'
import { desVariants, tagVariants, titleVariants } from '@/utils/animation'
import { motion, useScroll, useTransform } from 'framer-motion'

const types = [
    {
        id: 1,
        name: 'The Formal Symmetrical Layout',
        description: 'Formal drawing rooms, creating a sense of order, and centering a space around a key feature like a fireplace or large window.',
        image: '/image/the_formal_symmetrical_layout_living_room.jpeg',
    },
    {
        id: 2,
        name: 'The L-Shaped Conversational Layout',
        description: 'Defining a cozy corner in an open-concept space, family gatherings, and rooms where you want both social seating and a view of a TV.',
        image: '/image/the_l_shaped_conversational_layout_living_room.jpeg',
    },
    {
        id: 3,
        name: 'The U-Shaped Enclosed Layout',
        description: 'Large rooms where you want to maximize seating and create a very intimate, self-contained social zone.',
        image: '/image/the_u_shaped_enclosed_layout_living_room.jpeg',
    },
    {
        id: 4,
        name: 'The Parallel Face-to-Face Layout',
        description: 'Promoting dialogue in spaces without a TV, long and narrow rooms, or creating a multi-purpose area with a clear pathway.',
        image: '/image/the_parallel_face_to_face_layout_living_room.jpeg',
    },
    {
        id: 5,
        name: 'The Open-Concept Floating Layout',
        description: 'Large, multi-purpose great rooms where you need to create distinct functional zones (like living, dining) without using walls.',
        image: '/image/the_the_open_concept_floating_layout_living_room.jpeg',
    },
    {
        id: 6,
        name: 'The Media-Focused Layout',
        description: 'Family rooms or dens where watching movies, sports, or gaming is the primary activity for all seats.',
        image: '/image/the_media_focused_layout_living_room.jpeg',
    },
    {
        id: 7,
        name: 'The Casual Lounge Layout',
        description: 'Everyday living, multi-functional spaces, and creating a laid-back atmosphere with chaise lounges, poufs, and scattered chairs.',
        image: '/image/the_casual_lounge_layout_living_room.jpeg',
    }
]

const page = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end end'],
    })

    const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1])

    return (
        <div>
            {/* Hero Section */}
            <div className="bg-[url('/image/living_room.jpeg')] bg-center bg-cover">
                <h1 className="container py-32 text-5xl lg:text-7xl font-bold tracking-widest text-center  drop-shadow-lg lg:py-64">
                    Drawing & Living Room
                </h1>
            </div>

            {/* Intro Section */}
            <div className="container">
                <div className="items-center py-16 lg:flex gap-x-12">
                    {/* Image with Scroll Scale */}
                    <motion.div
                        style={{ scale }}
                        ref={ref}
                        className="w-full lg:w-1/2"
                    >
                        <Image
                            src="/image/living_room1.jpeg"
                            width={700}
                            height={700}
                            alt="Living Room"
                            className="rounded-xl shadow-lg"
                        />
                    </motion.div>

                    {/* Description */}
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={tagVariants}
                        className="w-full lg:w-1/2 mt-10 lg:mt-0"
                    >
                        <p className="tracking-wide leading-relaxed text-gray-800 dark:text-gray-200">
                            Our design philosophy is centered on creating a space that is both visually stunning and deeply functional.
                            We believe a truly great living room must serve as an impressive stage for entertaining while also being a personal sanctuary for relaxation.
                            <br /><br />
                            The VP Group design journey is a collaborative partnership, beginning with your vision and moving through meticulous space planning, bespoke furniture design, and curated decor selection.
                            <br /><br />
                            We orchestrate every element—from layered lighting that sets the perfect mood to luxurious textiles that invite you to relax—to create a cohesive and inspiring environment.
                            <br /><br />
                            <span className="text-xl font-extrabold tracking-tight">
                                VP Group crafts living rooms where style makes a statement, and comfort always feels like home.
                            </span>
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Layout Types */}
            <div className="container py-20">
                <motion.h1
                    className="text-4xl lg:text-6xl font-semibold mb-20 text-center text-gray-900 dark:text-white"
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={titleVariants}
                >
                    Elegant & Classic: The Art of the Living Room
                </motion.h1>

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {types.map((type) => (
                        <motion.div
                            key={type.id}
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            className="relative overflow-hidden rounded-xl shadow-md group bg-white dark:bg-zinc-800"
                        >
                            <Image
                                src={type.image}
                                alt={type.name}
                                width={500}
                                height={380}
                                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-white/90 dark:bg-black/60 p-6 transition-all duration-300 group-hover:translate-y-0 translate-y-full group-hover:opacity-100 opacity-0">
                                <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                                    {type.name}
                                </h2>
                                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                                    {type.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page
