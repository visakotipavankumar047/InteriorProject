"use client"

import React, { useRef } from 'react'
import Image from 'next/image'
import { desVariants, tagVariants, titleVariants } from '@/utils/animation';
import { motion, useScroll, useTransform } from 'framer-motion'

const types = [
    {
        id: 1,
        name: 'Home Design',
        description: 'We craft personal sanctuaries that perfectly blend your unique personality with everyday comfort and functionality.',
        image: '/image/images/home_interior_design.jpg',
    },
    {
        id: 2,
        name: 'Office Design',
        description: 'We design dynamic workspaces that enhance productivity, foster collaboration, and embody your company\'s culture.',
        image: '/image/images/modern_office_interior_design.jpeg',
    },
    {
        id: 3,
        name: 'Restaurant Design',
        description: 'We create captivating dining environments that enhance the culinary experience and turn guests into regulars.',
        image: '/image/images/modern_restuarent_interior_design.jpeg',
    },
    {
        id: 4,
        name: 'Hotel Design',
        description: 'We design memorable guest experiences, blending signature luxury and comfort with seamless operational efficiency.',
        image: '/image/images/modern_hotel_design_interior_design.jpeg',
    },
    {
        id: 5,
        name: 'Resort Design',
        description: 'We craft immersive destination experiences, harmonizing luxurious amenities with the natural beauty of the landscape.',
        image: '/image/images/resort_design_interior_design.jpeg',
    },
    {
        id: 6,
        name: 'Hospital Design',
        description: 'We create patient-centered healing environments that support clinical efficiency while promoting calm, comfort, and recovery.',
        image: '/image/images/Hospital Design Interior design.jpg',
    },
    {
        id: 7,
        name: 'Clinic Design',
        description: 'We design welcoming and efficient clinical spaces that optimize patient flow and create a comforting atmosphere of care.',
        image: '/image/images/clinic_interior_design.jpeg',
    },
    {
        id: 8,
        name: 'Showroom Design',
        description: 'We design immersive brand experiences that showcase your products in the best light and inspire customer desire.',
        image: '/image/images/showroom_interior_design.jpeg',
    },
    {
        id: 9,
        name: 'Auditorium Design',
        description: 'We engineer immersive spaces that deliver flawless acoustics, perfect sightlines, and exceptional audience comfort.',
        image: '/image/images/auditorium_design_interior_design.jpeg',
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
            <div className="bg-[url('/image/interior-design.jpg')] bg-center bg-cover">
                <h1 className='container py-32 text-6xl font-semibold text-black tracking-widest text-center lg:py-64'>Interior Design</h1>
            </div>
            <div className='container'>
                <div className='items-center pt-10 pb-10 lg:flex gap-x-8'>
                    {/*Left Image Section* */}
                    <motion.div
                        style={{ scale }}
                        ref={ref}

                        className='w-full'>
                        <Image src="/image/images/interior_design.jpeg" width={700} height={700}  alt={"bedroom"}/>
                    </motion.div>

                    {/*Right Content Section* */}
                    <motion.div
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={tagVariants}
                    >
                        <p className='pb-8 tracking-wide mt-6'>
                            Our expert team collaborates closely with you, your architect, and your builders to meticulously review and enhance the architectural blueprints.<br/> <br/>
                            We don't just see lines on a page; we visualize the rhythm of daily life, the flow of movement, the placement of furniture, and the mood of the lighting within the planned structure. <br/> <br/>
                            By aligning your lifestyle needs with the architectural framework, we create a master plan that optimizes every square foot and prevents costly future revisions.<br/> <br/>
                            <span className='text-xl font-extrabold tracking-tight'>
                                The most beautiful interiors are born from the most intelligent plans. At VP Group, we ensure your home is perfect on paper, so it can be flawless in reality.
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
                >Aspirational & Welcoming : A World of Style, Designed for You</motion.h1>
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