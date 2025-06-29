"use client"
import Image from 'next/image';
import React from 'react'
import { motion } from 'framer-motion';
import { titleVariants, desVariants, tagVariants } from '@/utils/animation';

const AboutComponent = () => {
  return (
    <div className='container py-12 xl:py-24 h-[auto]'>
      <div className='grid lg:grid-cols-2 place-items-center'>
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
        >
          <Image
            src="/image/aboutfront.png"
            width={900}
            height={500}
            alt='About'
            className='max-md:hidden'
          />
        </motion.div>
        <div className='items-center'>
          <motion.h2 initial="offscreen" whileInView={"onscreen"} variants={titleVariants} className='px-12 py-4 text-3xl font-extrabold leading-tight lg:text-5xl'>We are awards Winning Company</motion.h2>
          <motion.p initial="offscreen" whileInView={"onscreen"} variants={desVariants} className='px-12 tracking-wider uppercase text-gray-400 mt-3'>World Award</motion.p>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className='px-12 pb-4 mt-4'>
            At VP Group, we specialize in creative interior design and expert waterproofing solutions.
            Our team combines style, functionality, and durability to transform spaces that inspire.
            We protect homes and buildings with advanced waterproofing techniques for long-lasting results.
            Quality, commitment, and customer satisfaction are at the heart of everything we do.
            Choose VP Group — where smart design meets trusted protection.
          </motion.p>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className='px-12 pb-4'>
            VP Group is your trusted partner for innovative interiors and reliable waterproofing.
            We design functional, stylish spaces tailored to your lifestyle and needs.
            Our expert team ensures quality workmanship and lasting protection.
            From concept to completion, we focus on detail and durability.
            Transform your space with VP Group — where design meets protection.
          </motion.p>
        </div>
      </div>
    </div>
  )
}

export default AboutComponent;