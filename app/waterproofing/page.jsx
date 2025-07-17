"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import { desVariants, tagVariants, titleVariants } from '@/utils/animation';
import { motion, useScroll, useTransform } from 'framer-motion'
import FirstServices from "@/app/waterproofing/FirstServices";
import SecondServices from "@/app/waterproofing/SecondServices";
import WaterProofingSwiper from "@/app/waterproofing/WaterProofingSwiper";

const Page = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    })

    const scale = useTransform(scrollYProgress, [0, 1], [.6, 1])
    return (
        <div>
            <div className="bg-[url('/image/house_water_proofing.jpeg')] bg-center bg-cover">
                <h1 className='container py-32 text-6xl font-semibold text-black tracking-widest text-center lg:py-64'>Water Proofing</h1>
            </div>
            <div className='container'>
                <div className='items-center pt-10 pb-10 lg:flex gap-x-8'>
                    {/*Left Image Section* */}
                    <motion.div
                        style={{scale}}
                        ref={ref}

                        className='w-full'>
                        <Image src="/image/images/waterproofingg.jpg" width={700} height={700}  alt={"WaterProofing"} />
                    </motion.div>

                    {/*Right Content Section* */}
                    <motion.div
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={tagVariants}
                    >
                        <p className='pb-8 tracking-wide mt-6'>
                            As the monsoon season in Hyderabad reaches its peak, even the smallest leak can become a major threat to your property's integrity and your peace of mind.<br/> <br/>
                            Persistent rain can expose vulnerabilities, leading to damp walls, leaky ceilings, and the risk of long-term structural damage.<br/> <br/>
                            At VP Group, we understand that your property is one of your most significant investments, and protecting it is our highest priority.<br/> <br/>
                            <span className='text-xl font-extrabold tracking-tight'>
                                We don't just sell waterproofing; we deliver peace of mind, sealed and guaranteed
                            </span>
                        </p>
                    </motion.div>
                </div>
            </div>
            <FirstServices />
            <SecondServices />
            <WaterProofingSwiper />
        </div>
    )
}
export default Page
