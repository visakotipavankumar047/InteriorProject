"use client"

import React, { useRef } from 'react'
import Image from 'next/image'
import { desVariants, tagVariants, titleVariants } from '@/utils/animation';
import { motion, useScroll, useTransform } from 'framer-motion'

const page = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  })

  const scale = useTransform(scrollYProgress, [0, 1], [.6, 1])
  return (
    <div>
      <div className="bg-[url('/image/whoweare.jpg')] bg-center bg-cover">
        <h1 className='container py-32 text-6xl font-semibold text-black tracking-widest text-center lg:py-64'>Who are we?</h1>
      </div>

      <div className='container'>
        <div className='pt-4'>
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className='text-3xl font-semibold text-center lg:p-10'>Style with strength — that's VP Group.
          </motion.h2>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className='text-2xl text-center font-medium pb-10'>
            At VP Group, we specialize in premium interior design and expert waterproofing solutions.
            Our mission is to create beautiful, functional spaces that stand the test of time.
            With a team of skilled professionals, we deliver quality, reliability, and innovation.
            From homes to commercial projects, we ensure every detail reflects excellence.
            Choose VP Group — where style meets strength.
          </motion.p>
        </div>


        <div className='items-center lg:flex gap-x-8'>
          {/*Left Image Section* */}
          <motion.div
            style={{ scale }}
            ref={ref}

            className='w-full'>
            <Image src="/image/gallery1123.jpg" width={700} height={700} />
          </motion.div>

          {/*Right Content Section* */}
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
          >
            <p className='pb-8 tracking-wide mt-6'>
              Our architects are the creative force behind every inspiring space we deliver.
              Blending innovation with precision, they turn ideas into beautifully functional designs.
              With deep industry experience and a passion for detail, they shape spaces that last.
              From concept to completion, they lead with vision, integrity, and expertise.
              At VP Group, our architects don't just design — they define excellence.. <br /> <br />
              Our team is a dynamic blend of designers, architects, and technical experts.
              We work collaboratively to bring innovation, quality, and precision to every project.
              With a shared passion for excellence, we turn ideas into inspiring spaces.
              Every member brings unique skills, yet we function as one cohesive unit.
              At VP Group, our strength lies in teamwork, creativity, and commitment. <br /> <br />
              <span className='text-xl font-extrabold tracking-tight'>
                Driven by design, guided by detail — our architects build more than spaces.
                They craft experiences that last a lifetime.
              </span>
            </p>
          </motion.div>
        </div>
        {/*Team Section* */}
        <div className='lg:py-20'>
          <div className='pt-8 pb-4'>
            <motion.h1
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className='text-4xl font-bold tracking-wider text-center uppercase'>Team</motion.h1>
          </div>

          <div className='grid py-8 gap-20 lg:grid-cols-3'>
            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className='border-2 border-primary'>
              <div className='p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3'>
                <Image src='/image/Avatar1.jpg' width={200} height={200} alt='' className='mx-auto rounded-full' />
                <h2 className='py-4 text-2xl font-semibold uppercase'>Interior Designer</h2>
                <p>An architect doesn’t just design buildings — they shape the way we live and experience space.</p>
              </div>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVariants}
              className='border-2 border-primary'>
              <div className='p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3'>
                <Image src='/image/Avatar1.jpg' width={200} height={200} alt='' className='mx-auto rounded-full' />
                <h2 className='py-4 text-2xl font-semibold uppercase'>Architect</h2>
                <p>An architect doesn’t just design buildings — they shape the way we live and experience space.</p>
              </div>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVariants}
              className='border-2 border-primary'>
              <div className='p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3'>
                <Image src='/image/Avatar1.jpg' width={200} height={200} alt='' className='mx-auto rounded-full' />
                <h2 className='py-4 text-2xl font-semibold uppercase'>Building Surveys</h2>
                <p>An architect doesn’t just design buildings — they shape the way we live and experience space.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default page