"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";
import { motion, useScroll, useTransform } from "framer-motion";

const types = [
  {
    id: 1,
    name: "Residential Exterior",
    description:
      "We design stunning, weather-resistant facades that create unforgettable curb appeal and reflect the unique personality of the family within.",
    image: "/image/images/residential_exterior.jpeg",
  },
  {
    id: 2,
    name: "Commercial Exterior",
    description:
      "We create dynamic and professional building exteriors that reinforce your brand identity, attract customers, and project an image of success.",
    image: "/image/images/commerical_exterior.jpeg",
  },
  {
    id: 3,
    name: "Hotel Exterior",
    description:
      "We design iconic and welcoming hotel facades that serve as a powerful statement of luxury and set the stage for an exceptional guest experience.",
    image: "/image/images/hotel_exterior.jpeg",
  },
  {
    id: 4,
    name: "Mall Exterior",
    description:
      "We design vibrant, magnetic mall exteriors that act as architectural landmarks, drawing in crowds and creating a dynamic shopping destination.",
    image: "/image/images/mall_exterior.jpeg",
  },
  {
    id: 5,
    name: "Hospital Exterior",
    description:
      "We design calming and professional hospital exteriors that project a sense of trust and accessibility, prioritizing a reassuring environment for patients and families.",
    image: "/image/images/hospital_exterior.jpeg",
  },
  {
    id: 6,
    name: "Corporate Exterior",
    description:
      "We create sleek and forward-thinking corporate exteriors that reflect professionalism, innovation, and a strong organizational identity.",
    image: "/image/images/corporate_exterior.jpg",
  },
];

const Page = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[url('/image/exterior_design1.jpeg')] bg-center bg-cover">
        <h1 className="container py-32 text-6xl font-semibold text-white tracking-widest text-center lg:py-64">
          Exterior Design
        </h1>
      </div>

      {/* Intro Section */}
      <div className="container">
        <div className="items-center pt-10 pb-10 lg:flex gap-x-8">
          {/* Left Image */}
          <motion.div style={{ scale }} ref={ref} className="w-full">
            <Image
              src="/image/images/exterior_design1.jpeg"
              width={700}
              height={700}
              alt="Exterior Design"
              className="rounded-xl w-full object-cover aspect-square"
            />
          </motion.div>

          {/* Right Description */}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={tagVariants}
          >
            <p className="pb-8 tracking-wide mt-6 text-lg">
              A building's exterior is its introduction to the world. It is the
              first impression, a powerful statement of identity, and a
              resilient shield against the elements.
              <br />
              <br />
              In the dynamic landscape of Hyderabad, where architectural
              ambition meets a challenging climate, VP Group believes that
              exceptional exterior design must be a masterful blend of
              breathtaking aesthetics and robust engineering.
              <br />
              <br />
              We design facades that not only captivate the eye but are also
              built to endure, standing strong against the intense summer sun
              and the full force of the monsoon season.
              <br />
              <br />
              <span className="text-xl font-extrabold tracking-tight">
                We design more than just facades; we build the lasting first
                impression of your legacy.
              </span>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="container px-4 grid md:grid-cols-2 gap-10 pb-16">
        <motion.h1
          className="ml-2 md:ml-10 py-10 md:py-64 text-4xl md:text-6xl font-semibold col-span-full"
          initial="offscreen"
          whileInView="onscreen"
          variants={tagVariants}
        >
          Architecture that captivates and endures.
        </motion.h1>

        {types.map((type) => (
          <div
            key={type.id}
            className="relative group overflow-hidden rounded-xl shadow-md"
          >
            {/* Image Container */}
            <div className="relative w-full aspect-square">
              <Image
                src={type.image}
                alt={type.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-xl"
              />
            </div>

            {/* Hover Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/90 dark:bg-black/50 p-6 text-center transition-all duration-300 translate-y-full group-hover:translate-y-0">
              <h3 className="text-xl font-semibold">{type.name}</h3>
              <p className="text-base mt-2">{type.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
