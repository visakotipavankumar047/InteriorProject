"use client"
import Image from "next/image";
import Link from "next/link";
import logo_f from '../public/logo_f.png';
import { Input } from "./ui/input";
import { motion } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";



export default function Footer() {
    return (
        <div className="bg-tertiary">
            <div className="container lg:grid lg:grid-cols-2 py-14">
                <div className="grid gap-4 pb-4 text-left lg:pb-0 lg:grid-cols-3">
                    <motion.div
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={titleVariants}
                    >
                        <Link href='/'>
                            <Image
                                src={logo_f}
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
                            <Link href="" className="py-1 hover:underline ">Instagram</Link>
                            <Link href="" className="py-1 hover:underline ">X</Link>
                            <Link href="" className="py-1 hover:underline ">Facebook</Link>
                            <Link href="" className="py-1 hover:underline ">Linkdein</Link>
                        </div>
                    </motion.div>
                </div>
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
            </div>

            {/*Copy right* */}
            <motion.div
                initial="offscreen"
                whileInView={"onscreen"}
                variants={desVariants}
                className="py-10 bg-black dark:bg-primary">
                <div className="container text-white lg:justify-between lg:flex">
                    <div>
                        <p>&copy; 2024 VP Group. All Rights Reserved</p>
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
