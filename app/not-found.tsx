'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Link as LinkIcon, Home, RefreshCcw } from 'lucide-react'

export default function NotFound() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [hydrated, setHydrated] = useState(false)

    useEffect(() => setHydrated(true), [])

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
            <div className={`text-center transition-all duration-1000 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="mb-8 relative">
                    <h1 className="text-9xl font-extrabold text-gray-700 dark:text-gray-300">
                        4
                        <span className="inline-block text-purple-600 dark:text-purple-400 animate-spin-slow">
                            <LinkIcon size={120} />
                        </span>
                        4
                    </h1>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-600 dark:bg-purple-700 rounded-full filter blur-3xl opacity-70 animate-pulse"></div>
                </div>

                <h2 className={`mb-8 text-3xl font-bold text-gray-800 dark:text-gray-200 transition-all duration-700 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    Oops! This link seems to be broken.
                </h2>

                <p className={`mb-8 text-lg text-gray-600 dark:text-gray-400 transition-all duration-700 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    Don't worry, even the best links sometimes lead to nowhere.
                    <br />Let's get you back on track!
                </p>

                {hydrated && <div className="flex justify-center space-x-4">
                    <div className={`transition-all duration-700 delay-700 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                        <Link href="/">
                            <Button className="bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-300 transform hover:scale-105">
                                <Home className="mr-2 h-4 w-4" /> Go Home
                            </Button>
                        </Link>
                    </div>

                    <div className={`transition-all duration-700 delay-700 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                        <Button
                            variant="outline"
                            onClick={() => window.location.reload()}
                            className="text-purple-600 hover:text-purple-700 border-purple-600 hover:border-purple-700 transition-colors duration-300 transform hover:scale-105"
                        >
                            <RefreshCcw className="mr-2 h-4 w-4" /> Try Again
                        </Button>
                    </div>
                </div>}

                <div className={`mt-12 transition-all duration-700 delay-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Lost? Try shortening a new URL with{' '}
                        <Link href="/shorten" className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 underline">
                            tuckURL
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}