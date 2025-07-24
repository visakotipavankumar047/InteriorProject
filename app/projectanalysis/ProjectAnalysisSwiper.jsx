"use client"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { Autoplay } from 'swiper/modules'
import Image from "next/image";
import { motion } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";

export default function InteriorDesignSection() {
    return (
        <div className="py-8 lg:py-28">
            <div className="container grid pb-8 lg:grid-cols-1 gap-6">
                {/* Heading Section */}
                <div className="text-left">
                    <motion.h1
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={titleVariants}
                        className="py-4 text-4xl font-medium lg:text-6xl lg:py-0 text-black dark:text-white"
                    >
                        Interior Design
                    </motion.h1>
                    <motion.h2
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={desVariants}
                        className="pb-4 text-xl font-bold tracking-wider mt-5 text-black dark:text-white"
                    >
                        Design That Reflects Your Lifestyle and Personality
                    </motion.h2>
                    <motion.h2
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={desVariants}
                        className="text-lg tracking-wide text-gray-800 dark:text-gray-300"
                    >
                        From elegant living rooms to smart workspaces, VP Group delivers tailored interior design solutions that elevate your environment.
                    </motion.h2>
                </div>

                {/* Paragraph Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <motion.p
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={tagVariants}
                        className="leading-relaxed tracking-wide text-gray-700 dark:text-gray-300"
                    >
                        Our team brings your vision to life with thoughtfully curated interiors that blend comfort, function, and aesthetics. Whether it’s a cozy home setup or a modern office, we ensure every element reflects your personality and purpose.
                    </motion.p>
                    <motion.p
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={tagVariants}
                        className="leading-relaxed tracking-wide text-gray-700 dark:text-gray-300"
                    >
                        With a focus on craftsmanship and detail, VP Group transforms ordinary spaces into extraordinary experiences. From layout planning to furniture and lighting, we design spaces that are not just beautiful—but truly livable.
                    </motion.p>
                </div>
            </div>

            {/* Swiper Section */}
            <Swiper
                sliderPreView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                modules={[Autoplay]}
            >
                <SwiperSlide>
                    <Image
                        src='/image/images/w1.jpg'
                        alt="Interior Image 1"
                        width={520}
                        height={220}
                        className="w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src='/image/images/w2.png'
                        alt="Interior Image 2"
                        width={520}
                        height={220}
                        className="w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src='/image/images/w5.jpg'
                        alt="Interior Image 3"
                        width={520}
                        height={220}
                        className="w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src='/image/images/w4.jpg'
                        alt="Interior Image 4"
                        width={520}
                        height={220}
                        className="w-full"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
