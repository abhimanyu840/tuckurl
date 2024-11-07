'use client'

import React, { useState } from 'react'
import { ThemeToggleButton } from './ThemeToggleButton'
import Link from 'next/link'
import { Button } from './ui/button'
import { GithubIcon, Menu, X } from 'lucide-react'
import localFont from 'next/font/local'
import { usePathname } from 'next/navigation'

const ubuntu = localFont({
    src: "../app/fonts/Ubuntu-Bold.ttf",
    weight: "100 900",
    variable: '--font-ubuntu',
})

const navList = [
    { name: 'Home', href: '/' },
    { name: 'Shorten', href: '/shorten' },
    { name: 'About Us', href: '/about' },
    // { name: 'Contact Us', href: '/contact' }
]

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()

    return (
        <nav className='sticky top-0 z-30 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md w-full shadow-md dark:shadow-slate-800/50 transition-colors duration-300'>
            <div className='max-w-7xl mx-auto px-2 sm:px-4 lg:px-6'>
                <div className='flex items-center justify-between h-16'>
                    <Link href="/" className='flex items-center'>
                        <h1 className={`text-2xl font-bold ${ubuntu.className} text-gray-900 dark:text-white`}>
                            tuck<span className='text-purple-700 dark:text-purple-400'>URL</span>
                        </h1>
                    </Link>
                    <div className='hidden md:block'>
                        <ul className='flex items-center space-x-4'>
                            {navList.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out
                                            ${pathname === item.href
                                                ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300'
                                                : 'text-gray-700 hover:bg-purple-50 hover:text-purple-700 dark:text-gray-300 dark:hover:bg-purple-900 dark:hover:text-purple-300'
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='hidden md:flex items-center space-x-2'>
                        <Link href="/shorten">
                            <Button variant="default" className="bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-300">
                                Try Now
                            </Button>
                        </Link>
                        <Link href={'https://github.com/abhimanyu840/tuckurl'} target='_blank'>
                            <Button variant="outline" className="text-gray-700 hover:text-purple-700 dark:text-gray-300 dark:hover:text-purple-300 transition-colors duration-300">
                                <GithubIcon className='w-4 h-4 mr-2' /> Github
                            </Button>
                        </Link>
                        <ThemeToggleButton />
                    </div>
                    <div className='md:hidden'>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                    {navList.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ease-in-out
                                ${pathname === item.href
                                    ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300'
                                    : 'text-gray-700 hover:bg-purple-50 hover:text-purple-700 dark:text-gray-300 dark:hover:bg-purple-900 dark:hover:text-purple-300'
                                }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className='px-4 py-3 space-y-2'>
                    <Link href="/shorten">
                        <Button variant="default" className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-300">
                            Try Now
                        </Button>
                    </Link>
                    <Button variant="outline" className="w-full text-gray-700 hover:text-purple-700 dark:text-gray-300 dark:hover:text-purple-300 transition-colors duration-300">
                        <GithubIcon className='w-4 h-4 mr-2' /> Github
                    </Button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar