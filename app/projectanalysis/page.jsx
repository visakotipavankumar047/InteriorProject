"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import { desVariants, tagVariants, titleVariants } from '@/utils/animation';
import { motion, useScroll, useTransform } from 'framer-motion'
import FirstServices from "@/app/projectanalysis/FirstServices";
import SecondServices from "@/app/projectanalysis/SecondServices";
import ProjectAnalysisSwiper from './ProjectAnalysisSwiper';

const Page = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    })

    const scale = useTransform(scrollYProgress, [0, 1], [.6, 1])
    return (
        <div>
            <div className="bg-[url('/image/blueprint_and_building_plans.jpeg')] bg-center bg-cover">
                <h1 className='container py-32 text-6xl font-semibold text-black tracking-widest text-center lg:py-64'>Project Analysis</h1>
            </div>
            <div className='container'>
                <div className='items-center pt-10 pb-10 lg:flex gap-x-8'>
                    {/*Left Image Section* */}
                    <motion.div
                        style={{ scale }}
                        ref={ref}

                        className='w-full'>
                        <Image src="/image/blueprint_and_interior_designing_plans.jpeg" width={700} height={700} alt={"Project Analysis"} />
                    </motion.div>

                    {/*Right Content Section* */}
                    <motion.div
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={tagVariants}
                    >
                        <p className='pb-8 tracking-wide mt-6'>
                            Our expert team collaborates closely with clients, architects, and builders to meticulously review and enhance architectural blueprints.<br /> <br />
                            We don't just see lines on a page; we visualize traffic flow, furniture placement, lighting moods, and the rhythm of daily life within the structure. <br /> <br />
                            By cross-referencing your lifestyle needs and aesthetic vision with the architectural framework, we create a master plan that optimizes every square foot, prevents costly future revisions, and guarantees a seamless integration of form and function.<br /> <br />
                            <span className='text-xl font-extrabold tracking-tight'>
                                The most beautiful interiors are born from the most intelligent plans. At VP Group, we ensure your home is perfect on paper, so it can be flawless in reality.
                            </span>
                        </p>
                    </motion.div>
                </div>
            </div>
            <FirstServices />
            <SecondServices />
            <ProjectAnalysisSwiper />
        </div>
    )
}
export default Page
