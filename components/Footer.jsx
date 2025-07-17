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
            <div className="container lg:grid lg:grid-cols-2 py-14">
                {/* Left Side: Logo and Links */}
                <div className="grid gap-4 pb-4 text-left lg:pb-0 lg:grid-cols-3">
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
                    <motion.div
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={desVariants}
                    >
                        <h2 className="pb-4 text-xl font-semibold uppercase">Company</h2>
                        <div className="flex flex-col">
                            <Link href="/about" className="py-1 hover:underline ">About us</Link>
                            <Link href="/gallery" className="py-1 hover:underline ">Gallery</Link>
                            <Link href="/projects" className="py-1 hover:underline ">Projects</Link>
                            <Link href="/contact" className="py-1 hover:underline ">ContactUs</Link>
                        </div>
                    </motion.div>
                    <motion.div
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={tagVariants}
                    >
                        <h2 className="pb-4 text-xl font-semibold uppercase">Connect</h2>
                        <div className="flex flex-col">
                            <Link href="https://www.instagram.com/vpgroupofficials?igsh=Z3kya3djMXg4Ymlz" className="py-1 hover:underline " target="_blank" rel="noopener noreferrer">Instagram</Link>
                            <Link href="https://x.com/VPGROUPOFFICIAL?t=27KQqFCoyfzbtjAccSQWcQ&s=09" className="py-1 hover:underline " target="_blank" rel="noopener noreferrer">X</Link>
                            <Link href="https://www.youtube.com/@VPGroupOfficials" className="py-1 hover:underline " target="_blank" rel="noopener noreferrer">Youtube</Link>
                            <Link href="https://www.linkedin.com/in/vp-group-8a5187371?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="py-1 hover:underline " target="_blank" rel="noopener noreferrer">Linkedin</Link>
                        </div>
                    </motion.div>
                </div>
                {/* Right Side: Newsletter, Contact, and Address */}
                <div>
                    <motion.div
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={titleVariants}
                    >
                        <p className="pb-4 text-xl font-semibold">Stay Updated</p>
                        <div className="relative lg:max-w-sm">
                            <Input type="email" id="email" placeholder="Email Address" />
                            <button className="absolute bg-black text-white rounded-full h-10 px-3 text-sm top-2 right-2 hover:border-2 hover:border-black hover:bg-white hover:text-black dark:bg-primary">
                                Subscribe
                            </button>
                        </div>
                    </motion.div>

                    {/* Flex container for Contact and Address */}
                    <div className="flex flex-col lg:flex-row lg:gap-20">
                        {/* Contact Us Section (Email and Phone only) */}
                        <motion.div
                            initial="offscreen"
                            whileInView={"onscreen"}
                            variants={desVariants}
                            className="pt-8 text-left"
                        >
                            <h2 className="pb-4 text-xl font-semibold uppercase">Contact Us</h2>
                            <div className="flex flex-col">
                                <a href="mailto:vpgroupsofficials@gmail.com" className="py-1 hover:underline">vpgroupsofficials@gmail.com</a>
                                <a href="tel:+919140020411" className="py-1 hover:underline">+91 91400 20411</a>
                                <a href="tel:+919821735526" className="py-1 hover:underline">+91 98217 35526</a>
                            </div>
                        </motion.div>

                        {/* Address Section */}
                        <motion.div
                            initial="offscreen"
                            whileInView={"onscreen"}
                            variants={tagVariants}
                            className="pt-8 text-left"
                        >
                            <h2 className="pb-4 text-xl font-semibold uppercase">Our Address</h2>
                            <div className="flex flex-col">
                                <p className="py-1">VP Group, 123 Design Towers,</p>
                                <p className="py-1">Miyapur, Hyderabad, Telangana 500049</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/*Copy right* */}
            <motion.div
                initial="offscreen"
                whileInView={"onscreen"}
                variants={desVariants}
                className="py-10 bg-black dark:bg-primary">
                <div className="container text-white lg:justify-between lg:flex">
                    <div>
                        <p>&copy; 2025 VP Group. All Rights Reserved</p>
                    </div>
                    <div>
                        <Link className="p-4 hover:underline" href='/'>Privacy</Link>
                        <Link className="p-4 hover:underline" href='/'>Terms</Link>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}