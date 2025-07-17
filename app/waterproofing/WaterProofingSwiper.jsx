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
            <div className="container grid pb-8 lg:grid-cols-1">
                <div className="text-left">
                    <motion.h1
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={titleVariants}
                        className="py-4 text-4xl font-medium lg:text-6xl lg:py-0">Water Proofing</motion.h1>
                    <motion.h2
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={desVariants}
                        className="pb-6 text-xl font-bold tracking-wider mt-5">Don't wait for water damage to escalate. Protect your home or commercial building in Mumbai today. Contact VP Group for a professional waterproofing inspection and consultation.</motion.h2>
                </div>

                <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    className="grid grid-cols-2 text-gray-500 gap-x-8">
                    <p>
                        We deliver scientifically-backed, long-lasting waterproofing solutions that protect your property's value and provide complete peace of mind, especially during the demanding monsoon season in Mumbai.
                    </p>
                    <p>
                        The monsoon in Mumbai is a season of profound contrasts. It is a time of revitalization, of lush greenery and longed-for relief from the summer's heat. Yet, as the rains fall relentlessly on the rooftops of Miyapur and beyond, another, more adversarial relationship unfolds. For property owners, the sound of a steady downpour can often be accompanied by a quiet anxiety—the fear of water, the most essential element of life, becoming a destructive force. This is the silent siege of the monsoon, where damp patches bloom like unwelcome frescoes on pristine walls, and the slow, insidious drip from a ceiling can signal a deep-seated threat to a building's structural integrity and value. In this challenging environment, VP Group emerges not merely as a service provider, but as a partner in protection, offering a scientific, holistic methodology designed to transform vulnerable structures into secure, waterproof sanctuaries.
                    </p>
                </motion.div>
            </div>

            {/**Swiper Section */}

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