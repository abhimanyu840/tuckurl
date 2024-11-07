'use client';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link2Icon, Zap, Shield, BarChart3 } from 'lucide-react';
import { FaFacebook, FaInstagram, FaGithub, FaXTwitter } from "react-icons/fa6";
import URLShortenerForm from './UrlShortenerForm';
import Link from 'next/link';

export default function LandingPage() {

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <main className="flex-grow">
                {/* Hero section */}
                <section className="bg-white dark:bg-gray-800 transition-colors duration-300">
                    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                            <span className="block">Shorten your URLs</span>
                            <span className="block text-purple-600 dark:text-purple-400">Expand your reach</span>
                        </h2>
                        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 space-x-4">
                            <Link href="/shorten">
                                <Button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-150 ease-in-out transform hover:scale-105">
                                    Try Now
                                </Button>
                            </Link>
                            {/* <Button variant="outline" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:text-purple-400 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-150 ease-in-out transform hover:scale-105">
                                Learn more
                            </Button> */}
                        </div>
                    </div>
                </section>

                {/* URL shortener form */}
                <section className="my-6 mx-4">
                    <URLShortenerForm isEmbedded={true} />
                </section>

                {/* Features section */}
                <section id="features" className="py-12 bg-white dark:bg-gray-800 transition-colors duration-300">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="lg:text-center">
                            <h2 className="text-base text-purple-600 dark:text-purple-400 font-semibold tracking-wide uppercase">Features</h2>
                            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                                Everything you need in a URL shortener
                            </p>
                            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
                                tuckUrl provides powerful features to help you manage and track your shortened links.
                            </p>
                        </div>

                        <div className="mt-10">
                            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                                {[
                                    { icon: Zap, title: 'Lightning fast', description: 'Our advanced infrastructure ensures your links are shortened and redirected instantly.' },
                                    { icon: Shield, title: 'Secure and reliable', description: 'We use industry-standard encryption to keep your links and data safe.' },
                                    { icon: BarChart3, title: 'Advanced analytics', description: 'Get detailed insights into your link performance with our comprehensive analytics dashboard.' },
                                    { icon: Link2Icon, title: 'Custom links', description: 'Create branded short links with your own domain name for a professional touch.' },
                                ].map((feature, index) => (
                                    <div key={feature.title} className="relative group">
                                        <dt>
                                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white group-hover:bg-purple-600 transition-colors duration-300">
                                                <feature.icon className="h-6 w-6" aria-hidden="true" />
                                            </div>
                                            <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">{feature.title}</p>
                                        </dt>
                                        <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300 group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors duration-300">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </section>

                {/* How it works section */}
                <section id="how-it-works" className="py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="lg:text-center">
                            <h2 className="text-base text-purple-600 dark:text-purple-400 font-semibold tracking-wide uppercase">How It Works</h2>
                            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                                Simple steps to shorten your URL
                            </p>
                        </div>

                        <div className="mt-10">
                            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
                                {[
                                    { step: 1, title: 'Paste your long URL', description: 'Enter the long URL you want to shorten' },
                                    { step: 2, title: 'Click "Shorten"', description: 'Our system will generate a short URL instantly' },
                                    { step: 3, title: 'Copy and share', description: 'Use your new short URL wherever you need' },
                                ].map((item, index) => (
                                    <div key={item.step} className="flex flex-col items-center transition-all duration-300 ease-in-out transform hover:scale-105 group">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white text-xl font-bold group-hover:bg-purple-600 transition-colors duration-300">
                                            {item.step}
                                        </div>
                                        <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">{item.title}</h3>
                                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-300 group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors duration-300">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing section */}
                <section id="pricing" className="py-12 bg-white dark:bg-gray-800 transition-colors duration-300">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="lg:text-center">
                            <h2 className="text-base text-purple-600 dark:text-purple-400 font-semibold tracking-wide uppercase">Pricing</h2>
                            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                                Simple, transparent pricing
                            </p>
                            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
                                Choose the plan that's right for you or your business
                            </p>
                        </div>

                        <div className="mt-10 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
                            {[
                                { name: 'Hobby', price: 'Free', features: ['5 links per day', 'Basic analytics', 'Standard support'] },
                                { name: 'Pro', price: '$9.99', features: ['Unlimited links', 'Advanced analytics', 'Priority support', 'Custom domains'] },
                                { name: 'Enterprise', price: 'Custom', features: ['Unlimited links', 'Advanced analytics', 'Dedicated support', 'Custom domains', 'API access'] },
                            ].map((plan) => (
                                <div key={plan.name} className="border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm divide-y divide-gray-200 dark:divide-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105 bg-white dark:bg-gray-800">
                                    <div className="p-6">
                                        <h2 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">{plan.name}</h2>
                                        <p className="mt-4 text-sm text-gray-500 dark:text-gray-300">{plan.features[0]}</p>
                                        <p className="mt-8">
                                            <span className="text-4xl font-extrabold text-gray-900 dark:text-white">{plan.price}</span>
                                            {plan.name !== 'Enterprise' && <span className="text-base font-medium text-gray-500 dark:text-gray-300">/mo</span>}
                                        </p>
                                        <Button className="mt-8 block w-full bg-purple-600 text-white rounded-md py-2 text-sm font-semibold hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-300">
                                            {plan.name === 'Enterprise' ? 'Contact sales' : 'Start free trial'}
                                        </Button>
                                    </div>
                                    <div className="pt-6 pb-8 px-6">
                                        <h3 className="text-xs font-medium text-gray-900 dark:text-white tracking-wide uppercase">What's included</h3>
                                        <ul className="mt-6 space-y-4">
                                            {plan.features.map((feature) => (
                                                <li key={feature} className="flex space-x-3">
                                                    <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    <span className="text-sm text-gray-500 dark:text-gray-300">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-white dark:bg-gray-800 transition-colors duration-300">
                <div className="max-w-7xl mx-auto py-12 px-4  sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
                    <div className="flex justify-center space-x-6 md:order-2">
                        {[
                            {
                                name: 'Facebook', href: '#', icon: (props: any) => <FaFacebook size={24} {...props} />
                            },
                            {
                                name: 'Instagram', href: '#', icon: (props: any) => (
                                    <FaInstagram size={24} {...props} />
                                )
                            },
                            {
                                name: 'Twitter', href: '#', icon: (props: any) => (
                                    <FaXTwitter size={24} {...props} />
                                )
                            },
                            {
                                name: 'GitHub', href: '#', icon: (props: any) => (
                                    <FaGithub size={24} {...props} />
                                )
                            },
                        ].map((item) => (
                            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-300">
                                <span className="sr-only">{item.name}</span>
                                <item.icon className="h-6 w-6" aria-hidden="true" />
                            </a>
                        ))}
                    </div>
                    <div className="mt-8 md:mt-0 md:order-1">
                        <p className="text-center text-base text-gray-400 dark:text-gray-300">&copy; 2024 tuckUrl, Inc. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}