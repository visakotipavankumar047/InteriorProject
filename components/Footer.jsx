"use client"
import Image from "next/image";
import Link from "next/link";
import logo4 from "../public/logo4.png";
import { Input } from "./ui/input";
import { motion } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";

export default function Footer() {
    return (
        <div className="bg-tertiary">
            <div className="container py-14 flex flex-col lg:flex-row justify-between gap-10">
                {/* Left Side */}
                <div className="flex flex-col sm:flex-row gap-10 lg:gap-x-20">
                    {/* Logo */}
                    <motion.div
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={titleVariants}
                    >
                        <Link href='/'>
                            <Image
                                src={logo4}
                                width={150}
                                height={150}
                                alt="logo"
                            />
                        </Link>
                    </motion.div>

                    {/* Company Links */}
                    <motion.div
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={desVariants}
                        className="text-left"
                    >
                        <h2 className="pb-4 text-xl font-semibold uppercase">Company</h2>
                        <div className="flex flex-col gap-1">
                            <Link href="/about" className="hover:underline">About us</Link>
                            <Link href="/gallery" className="hover:underline">Gallery</Link>
                            <Link href="/projects" className="hover:underline">Projects</Link>
                            <Link href="/contact" className="hover:underline">ContactUs</Link>
                        </div>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={tagVariants}
                        className="text-left"
                    >
                        <h2 className="pb-4 text-xl font-semibold uppercase">Connect</h2>
                        <div className="flex flex-col gap-1">
                            <Link href="https://www.instagram.com/vpgroupofficials?igsh=Z3kya3djMXg4Ymlz" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</Link>
                            <Link href="https://x.com/VPGROUPOFFICIAL?t=27KQqFCoyfzbtjAccSQWcQ&s=09" target="_blank" rel="noopener noreferrer" className="hover:underline">X</Link>
                            <Link href="https://www.youtube.com/@VPGroupOfficials" target="_blank" rel="noopener noreferrer" className="hover:underline">YouTube</Link>
                            <Link href="https://www.linkedin.com/in/vp-group-8a5187371" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</Link>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side */}
                <div className="flex flex-col gap-10 text-left w-full lg:w-1/2">
                    {/* Newsletter */}
                    <motion.div
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={titleVariants}
                    >
                        <p className="pb-4 text-xl font-semibold">Stay Updated</p>
                        <div className="relative w-full max-w-md">
                            <Input type="email" id="email" placeholder="Email Address" />
                            <button className="absolute top-2 right-2 h-10 px-3 text-sm text-white bg-black rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-black dark:bg-primary">
                                Subscribe
                            </button>
                        </div>
                    </motion.div>

                    {/* Contact & Address */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                        {/* Contact Info */}
                        <motion.div
                            initial="offscreen"
                            whileInView={"onscreen"}
                            variants={desVariants}
                        >
                            <h2 className="pb-4 text-xl font-semibold uppercase">Contact Us</h2>
                            <div className="flex flex-col gap-1">
                                <a href="mailto:vpgroupsofficials@gmail.com" className="hover:underline">vpgroupsofficials@gmail.com</a>
                                <a href="tel:+919140020411" className="hover:underline">+91 91400 20411</a>
                                <a href="tel:+919821735526" className="hover:underline">+91 98217 35526</a>
                            </div>
                        </motion.div>

                        {/* Address */}
                        <motion.div
                            initial="offscreen"
                            whileInView={"onscreen"}
                            variants={tagVariants}
                        >
                            <h2 className="pb-4 text-xl font-semibold uppercase">Our Address</h2>
                            <div className="flex flex-col gap-1">
                                <p>VP Group, 123 Design Towers,</p>
                                <p>Miyapur, Hyderabad, Telangana 500049</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <motion.div
                initial="offscreen"
                whileInView={"onscreen"}
                variants={desVariants}
                className="py-10 bg-black text-white"
            >
                <div className="container flex flex-col items-center gap-2 text-sm lg:flex-row lg:justify-between">
                    <p>&copy; 2025 VP Group. All Rights Reserved</p>
                    <div className="flex gap-4">
                        <Link href="/" className="hover:underline">Privacy</Link>
                        <Link href="/" className="hover:underline">Terms</Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
