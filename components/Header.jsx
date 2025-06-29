"use client"

import React, { useEffect, useState } from 'react'
import ThemeToggler from './ThemeToggler'

//Components
import Logo from './Logo'
import Nav from './Nav'
import MobileNavigator from './MobileNavigator'
import { usePathname } from 'next/navigation'

const Header = () => {

    const [header, setHeader] = useState(false)
    const pathname = usePathname();

    useEffect(() => {
        const scrollYPos = window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setHeader(true) : setHeader(false)
        });

        return () => window.removeEventListener('scroll', scrollYPos);
    })
    return (
        <header
            className={`${
                header ? 'py-4 bg-tertiary shadow-lg dark:bg-accent'
                : 'py-6 dark:bg-transparent'
            } sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-[#fff]'}`} 
        >
            <div className='container mx-auto'>
                <div className='flex items-center justify-between'>
                    {/*Logo Section* */}
                    <Logo />
                    <div className='flex items-center gap-x-6'>
                        {/*Nav Section* */}
                        <Nav 
                            containerStyles="hidden xl:flex gap-x-8 items-center"
                            linkStyles = "relative hover:text-primary transition-all"
                            underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
                        />
                        {/*Theme Toggler* */}
                        <ThemeToggler />
                        { /*Mobile navigator* */}
                        <div className='xl:hidden'>
                            <MobileNavigator />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header
