"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { desVariants, tagVariants, titleVariants } from "@/utils/animation"

const posts = [
    {
        id: 1,
        title: 'Boost your conversion rate',
        href:'#',
        description: 
        'Working with this team was a delight. They brought modern efficiency while respecting the heritage aesthetics of Windamere.',
        date: 'Mar 16, 2024',
        datetime: '2024-03-16',
        category: { title: '4.7', href: '#' },
        author: {
            name: 'Amit Gupta',
            role: 'President, Darjeeling Hotel Association',
            href: '#',
            imageUrl: '/image/profile1.jpg'
        }
    },
    {
        id: 2,
        title: 'Boost your conversion rate',
        href:'#',
        description: 
        'We entrusted our Gymkhana to the VP Group, and the transformation was exceptional. From design to execution.',
        date: 'Mar 20, 2024',
        datetime: '2024-03-20',
        category: { title: '4.3', href: '#' },
        author: {
            name: 'Rakesh Tanuja',
            role: 'Mayfair Gymkhana',
            href: '#',
            imageUrl: '/image/profile2.jpg'
        }
    },
    {
        id: 3,
        title: 'Boost your conversion rate',
        href:'#',
        description: 
        'VP Group delivered multiple office floors at BKC with outstanding professionalism. Their designs were sleek, modern, and tailored to our brand’s vision.',
        date: 'Mar 20, 2024',
        datetime: '2024-03-20',
        category: { title: '4.9', href: '#' },
        author: {
            name: 'Pooja Verma',
            role: 'Corporate Client at BKC Trade Centre, Mumbai',
            href: '#',
            imageUrl: '/image/profile4.jpg'
        }
    },
]

const renderStars = (rating) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating - fullStars >= 0.5
    const stars = []

    for (let i = 0; i < fullStars; i++) {
        stars.push(
            <svg key={`full-${i}`} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.157 3.554a1 1 0 00.95.69h3.741c.969 0 1.371 1.24.588 1.81l-3.024 2.197a1 1 0 00-.364 1.118l1.157 3.554c.3.921-.755 1.688-1.54 1.118l-3.024-2.197a1 1 0 00-1.176 0l-3.024 2.197c-.784.57-1.838-.197-1.539-1.118l1.157-3.554a1 1 0 00-.364-1.118L2.07 8.981c-.783-.57-.38-1.81.588-1.81h3.741a1 1 0 00.95-.69l1.157-3.554z" />
            </svg>
        )
    }

    if (hasHalfStar) {
        stars.push(
            <svg key="half" className="w-4 h-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <defs>
                    <linearGradient id="half-grad">
                        <stop offset="50%" stopColor="currentColor" />
                        <stop offset="50%" stopColor="transparent" />
                    </linearGradient>
                </defs>
                <path
                    fill="url(#half-grad)"
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.157 3.554a1 1 0 00.95.69h3.741c.969 0 1.371 1.24.588 1.81l-3.024 2.197a1 1 0 00-.364 1.118l1.157 3.554c.3.921-.755 1.688-1.54 1.118l-3.024-2.197a1 1 0 00-1.176 0l-3.024 2.197c-.784.57-1.838-.197-1.539-1.118l1.157-3.554a1 1 0 00-.364-1.118L2.07 8.981c-.783-.57-.38-1.81.588-1.81h3.741a1 1 0 00.95-.69l1.157-3.554z"
                />
            </svg>
        )
    }

    while (stars.length < 5) {
        stars.push(
            <svg key={`empty-${stars.length}`} className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.157 3.554a1 1 0 00.95.69h3.741c.969 0 1.371 1.24.588 1.81l-3.024 2.197a1 1 0 00-.364 1.118l1.157 3.554c.3.921-.755 1.688-1.54 1.118l-3.024-2.197a1 1 0 00-1.176 0l-3.024 2.197c-.784.57-1.838-.197-1.539-1.118l1.157-3.554a1 1 0 00-.364-1.118L2.07 8.981c-.783-.57-.38-1.81.588-1.81h3.741a1 1 0 00.95-.69l1.157-3.554z" />
            </svg>
        )
    }

    return stars
}

export default function ContactSection () {
    return (
        <div className="pt-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.h2
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants} 
                    className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Customer Reviews
                </motion.h2>
                <motion.p
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={desVariants} 
                    className="mt-2 text-lg leading-8 text-muted-foreground">
                    Learn how to grow your business with our expert advice
                </motion.p>

                <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants} 
                    className="mx-auto mt-10 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-8 lg:max-w-none lg:mx-0 sm:py-16 sm:mt-16 py-10 border-b border-gray-200 border-t gap-y-16">
                    {
                        posts.map((post) => (
                            <article key={post.id} className="flex max-w-xl flex-col justify-between">
                                <div className="flex items-center gap-x-4 text-xs">
                                    <div className="flex gap-0.5">
                                        {renderStars(parseFloat(post.category.title))}
                                    </div>
                                    <a href={post.category.href} className="relative z-10 bg-primary rounded-full text-white px-3 py-1.5 font-medium hover:bg-gray-100 hover:text-black">
                                        {post.category.title}
                                    </a>
                                </div>

                                <div className="group relative mt-4">
                                    <h3 className="text-lg font-semibold leading-6 group-hover:text-gray-600">
                                        <a href={post.href}>
                                            <span>{post.title}</span>
                                        </a>
                                    </h3>
                                    <p className="mt-4 line-clamp-3 text-sm leading-6 text-muted-foreground">
                                        {post.description}
                                    </p>
                                </div>

                                <div className="relative mt-6 flex items-center gap-x-4">
                                    <Image
                                        src={post.author.imageUrl}
                                        alt={post.author.name}
                                        width={40}
                                        height={40}
                                        className="rounded-full object-cover bg-gray-500"
                                    />
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold">
                                            <a href={post.author.href}>
                                                {post.author.name}
                                            </a>
                                        </p>
                                        <p className="text-muted-foreground">{post.author.role}</p>
                                    </div>
                                </div>
                            </article>
                        ))
                    }
                </motion.div>
            </div>
        </div>
    )
}
