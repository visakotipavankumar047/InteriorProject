"use client"
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { titleVariants, desVariants, tagVariants } from '@/utils/animation';

const AboutComponent = () => {
  return (
    <div className='container py-12 xl:py-24'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
        
        {/* Left: Image */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={titleVariants}
          className='w-full flex justify-center'
        >
          <Image
            src="/image/aboutfront.png"
            width={900}
            height={500}
            alt='About'
            className='hidden md:block w-full h-auto object-contain'
          />
        </motion.div>

        {/* Right: Text */}
        <div className='w-full'>
          <motion.h2
            initial="offscreen"
            whileInView="onscreen"
            variants={titleVariants}
            className='px-6 md:px-12 py-4 text-3xl font-extrabold leading-tight lg:text-5xl'
          >
            We Build with Purpose & Passion
          </motion.h2>

          <motion.p
            initial="offscreen"
            whileInView="onscreen"
            variants={desVariants}
            className='px-6 md:px-12 tracking-wider uppercase text-gray-400 mt-3'
          >
            About VP Group
          </motion.p>

          <motion.p
            initial="offscreen"
            whileInView="onscreen"
            variants={tagVariants}
            className='px-6 md:px-12 mt-4 pb-4 text-base leading-relaxed text-gray-600'
          >
            At VP Group, we combine innovative interior design with high-performance waterproofing solutions.
            Our mission is to bring functional beauty and structural reliability to every space we touch.
            Whether it's a home, office, or commercial project, we tailor every detail to suit your goals and lifestyle.
            We believe good design protects and inspires.
            With VP Group, it's not just construction — it's thoughtful transformation.
          </motion.p>

          <motion.p
            initial="offscreen"
            whileInView="onscreen"
            variants={tagVariants}
            className='px-6 md:px-12 pb-4 text-base leading-relaxed text-gray-600'
          >
            Our approach blends creativity, precision, and commitment to excellence.
            From concept development to final execution, we ensure every project reflects quality and care.
            VP Group is more than a service provider — we’re your reliable partner in building spaces that endure.
            Let’s build something meaningful together — design-forward, weather-ready, and built to last.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
