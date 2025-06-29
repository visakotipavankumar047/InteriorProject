"use client"
import { TbArrowUpRight } from "react-icons/tb";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { Autoplay } from 'swiper/modules'
import Image from "next/image";
import { motion } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";

export default function CatalogSwiperSection() {
    return (
        <div className="py-8 lg:py-28">
            <div className="container grid pb-8 lg:grid-cols-1">
                <div className="text-left">
                    <motion.h1
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={titleVariants}
                        className="py-4 text-4xl font-medium lg:text-6xl lg:py-0">Modern Classic</motion.h1>
                    <motion.h2
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={desVariants}
                        className="pb-6 text-xl font-bold tracking-wider mt-5">Where timeless elegance meets modern living.</motion.h2>
                </div>

                <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    className="grid grid-cols-2 text-gray-500 gap-x-8">
                    <p>
                        Modern Classic is the perfect blend of timeless elegance and contemporary simplicity. It features clean lines, neutral palettes, and refined details that evoke sophistication while embracing modern comfort. This style harmoniously merges the charm of traditional architecture with the freshness of modern design — ideal for creating interiors that are both graceful and grounded.
                    </p>
                    <p>
                        Modern Classic design blends the best of both worlds — the grace of classic elements with the sleekness of modern trends. Think ornate details paired with minimal forms, soft color schemes enriched by bold accents, and timeless textures brought to life with contemporary flair. It’s a style that speaks sophistication without shouting, offering a perfect balance of tradition and trend.
                    </p>
                </motion.div>
                <a href="/gallery">
                    <Button className="inline-flex items-center px-8 py-3 mt-4 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950">View Gallery <TbArrowUpRight className="w-5 h-5 ml-2" /></Button>
                </a>
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
                        src='/image/swiper1.jpg'
                        alt="Swiper"
                        width={520}
                        height={220}
                        className="w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src='/image/swiper2.jpg'
                        alt="Swiper"
                        width={520}
                        height={220}
                        className="w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src='/image/swiper3.jpg'
                        alt="Swiper"
                        width={520}
                        height={220}
                        className="w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src='/image/swiper4.jpg'
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