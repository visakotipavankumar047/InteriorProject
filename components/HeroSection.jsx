"use client"

import Image from "next/image";
import { Button } from "./ui/button";
import { TbArrowUpRight } from 'react-icons/tb';
import { desVariants, tagVariants, titleVariants } from '@/utils/animation';
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <div className='container py-12 xl:py-15 h-[auto] text-center lg:py-0 lg:text-left lg:flex lg:justify-between'>
            <div className='lg:w-1/2 xl:py-14 lg:py-8'>
                <motion.p
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
                    className='tracking-widest uppercase'>
                    Your space. Our passion. One trusted partner.
                </motion.p>
                <motion.h1
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={desVariants}
                    className='h1'>
                    Designed to impress <br />crafted to comfort.
                </motion.h1>
                <motion.p
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    className='pb-6 text-muted-foreground xl:pb-10'
                >
                    Interior design is the art and science of enhancing interiors to achieve a healthier and more aesthetically pleasing environment.
                </motion.p>
                <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants} 
                >
                    <Button  className="inline-flex items-center px-8 py-8 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2" >
                        <a href="https://wa.me/919821735526?text=Hello%20VP%20Group%2C%20I'm%20interested..." target="_blank" rel="noopener noreferrer">
                            Chat with us on WhatsApp
                        </a>
                    </Button>
                </motion.div>
            </div>

            <div className='w-1/2'>
                <Image
                    src="/image/hall.png"
                    width={600}
                    height={500}
                    alt="hall"
                    className="absolute right-20 xl:h-[448px] xl:w-[700px] lg:h-[334px] lg:w-[500px] hidden lg:block"
                />
            </div>
        </div>
    )
}

export default HeroSection;