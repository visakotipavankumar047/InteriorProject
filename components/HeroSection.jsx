"use client"

import Image from "next/image";
import { Button } from "./ui/button";
import { TbArrowUpRight } from 'react-icons/tb';
import { desVariants, tagVariants, titleVariants } from '@/utils/animation';
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <div className='container py-12 xl:py-15 text-center lg:text-left flex flex-col-reverse lg:flex-row items-center justify-between gap-10'>
            {/* Left Content */}
            <div className='w-full lg:w-1/2 xl:py-14 lg:py-8 space-y-4'>
                <motion.p
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={titleVariants}
                    className='tracking-widest uppercase'>
                    Your space. Our passion. One trusted partner.
                </motion.p>
                <motion.h1
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={desVariants}
                    className="h1 text-4xl sm:text-5xl font-bold leading-tight"
                >
                    Designed to impress
                    <span className="block mt-4">crafted to comfort.</span>
                </motion.h1>

                <motion.p
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={tagVariants}
                    className='pb-6 text-muted-foreground xl:pb-10 text-base sm:text-lg leading-relaxed'>
                    Interior design is the art and science of enhancing interiors to achieve a healthier and more aesthetically pleasing environment.
                </motion.p>
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={tagVariants}>
                    <Button className="inline-flex items-center px-8 py-4 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 transition">
                        <a href="https://wa.me/919821735526?text=Hello%20VP%20Group%2C%20I'm%20interested..." target="_blank" rel="noopener noreferrer">
                            Chat with us on WhatsApp
                        </a>
                    </Button>
                </motion.div>
            </div>

            {/* Right Image */}
            <div className='w-full lg:w-1/2 relative'>
                <div className="relative w-full max-w-[700px] mx-auto lg:mx-0">
                    <Image
                        src="/image/hall.png"
                        width={700}
                        height={448}
                        alt="hall"
                        className="w-full h-auto object-contain rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
