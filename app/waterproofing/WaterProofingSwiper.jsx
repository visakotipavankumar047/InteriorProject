"use client"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { Autoplay } from 'swiper/modules'
import Image from "next/image";
import { motion } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";

export default function WaterProofingSwiper() {
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
                        Water Proofing
                    </motion.h1>
                    <motion.h2
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={desVariants}
                        className="pb-4 text-xl font-bold tracking-wider mt-5 text-black dark:text-white"
                    >
                        Mumbai’s Monsoon Demands More Than Just a Fix. We Deliver Full Protection.
                    </motion.h2>
                    <motion.h2
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={desVariants}
                        className="text-lg tracking-wide text-gray-800 dark:text-gray-300"
                    >
                        Don’t wait for water damage to escalate. Contact VP Group for a professional waterproofing inspection and long-lasting solutions tailored to your property.
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
                        Our waterproofing systems are engineered for maximum durability and reliability, offering strong resistance against leaks, moisture, and seepage. With deep local expertise in Mumbai’s challenging monsoon climate, we ensure each solution is scientifically tailored to your property’s needs.
                    </motion.p>
                    <motion.p
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={tagVariants}
                        className="leading-relaxed tracking-wide text-gray-700 dark:text-gray-300"
                    >
                        At VP Group, we understand the unseen risks water can pose to your structure. That's why we go beyond basic fixes. We provide holistic, preventive waterproofing strategies—so your building remains protected, your interiors dry, and your investment secure throughout every season.
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
                        alt="Swiper"
                        width={520}
                        height={220}
                        className="w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src='/image/images/w2.png'
                        alt="Swiper"
                        width={520}
                        height={220}
                        className="w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src='/image/images/w5.jpg'
                        alt="Swiper"
                        width={520}
                        height={220}
                        className="w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src='/image/images/w4.jpg'
                        alt="Swiper"
                        width={520}
                        height={220}
                        className="w-full"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
