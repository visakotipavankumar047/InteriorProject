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
            <div className="container space-y-8">
                {/* Text Content */}
                <div className="text-left">
                    <motion.h1
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={titleVariants}
                        className="text-4xl font-medium leading-tight lg:text-6xl">
                        Modern Classic
                    </motion.h1>
                    <motion.h2
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={desVariants}
                        className="mt-4 text-xl font-bold tracking-wider text-gray-700">
                        Where timeless elegance meets modern living.
                    </motion.h2>
                </div>

                {/* Description */}
                <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    className="grid gap-y-6 gap-x-10 md:grid-cols-2 text-gray-500"
                >
                    <p>
                        The Modern Classic interior design style is a timeless fusion of traditional sophistication and contemporary simplicity. With clean architectural lines, elegant symmetry, and luxurious textures, this aesthetic creates serene and refined spaces. It’s ideal for those seeking a home that radiates both elegance and functionality while staying rooted in enduring design principles.
                    </p>
                    <p>
                        Seamlessly blending vintage charm with modern comfort, Modern Classic design features balanced color palettes, ornate accents, and sleek forms. This style brings together rich history and forward-thinking aesthetics — making it a powerful choice for homeowners and designers who value style, versatility, and timeless appeal in a modern world.
                    </p>
                </motion.div>

                {/* Button */}
                <div>
                    <a href="/gallery">
                        <Button className="inline-flex items-center px-8 py-3 mt-4 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950">
                            View Gallery <TbArrowUpRight className="w-5 h-5 ml-2" />
                        </Button>
                    </a>
                </div>
            </div>

            {/* Swiper Section */}
            <div className="container mt-12">
                <Swiper
                    spaceBetween={16}
                    breakpoints={{
                        0: { slidesPerView: 1.2 },
                        640: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 32 },
                    }}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    modules={[Autoplay]}
                >
                    {["swiper1", "swiper2", "swiper3", "swiper4"].map((img, idx) => (
                        <SwiperSlide key={idx}>
                            <Image
                                src={`/image/${img}.jpg`}
                                alt="Swiper"
                                width={520}
                                height={220}
                                className="w-full rounded-lg object-cover"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
