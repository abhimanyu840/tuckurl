import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Shield, Zap } from 'lucide-react'

const teamMembers = [
    { name: 'Jane Doe', role: 'CEO & Founder', image: '/placeholder.svg?height=200&width=200' },
    { name: 'John Smith', role: 'CTO', image: '/placeholder.svg?height=200&width=200' },
    { name: 'Alice Johnson', role: 'Head of Design', image: '/placeholder.svg?height=200&width=200' },
]

const About = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animate-fade-in-down">
                            About <span className="text-purple-600 dark:text-purple-400">tuckURL</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 animate-fade-in">
                            Simplifying the web, one link at a time.
                        </p>
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-500 opacity-10 dark:opacity-20 animate-pulse"></div>
            </section>

            {/* Our Story Section */}
            <section className="py-16 bg-white dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:flex lg:items-center lg:justify-between">
                        <div className=" mb-8 lg:mb-0">
                            <h2 className="text-3xl font-bold mb-4 animate-fade-in-left">Our Story</h2>
                            <p className="text-lg mb-4 animate-fade-in-left delay-100">
                                Founded in 2024, tuckURL was born from a simple idea: make sharing links easier and more efficient.
                                Our team of passionate developers and designers came together to create a platform that not only shortens URLs
                                but also provides powerful analytics and customization options.
                            </p>
                            <p className="text-lg animate-fade-in-left delay-200">
                                Today, we're proud to serve millions of users worldwide, helping them share and track their links with ease.
                            </p>
                        </div>
                        {/* <div className="lg:w-1/2 relative">
                            <Image
                                src="/placeholder.svg?height=400&width=600"
                                alt="tuckURL team at work"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-xl animate-fade-in-right"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-500 opacity-20 rounded-lg animate-pulse"></div>
                        </div> */}
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="py-16 bg-gray-100 dark:bg-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in">Our Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Globe, title: 'Global Reach', description: 'Connecting people across the world with shortened links.' },
                            { icon: Shield, title: 'Security First', description: 'Ensuring the safety and privacy of our users\' data.' },
                            { icon: Zap, title: 'Lightning Fast', description: 'Providing quick and reliable URL shortening services.' },
                        ].map((value, index) => (
                            <div key={value.title} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                                <value.icon className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4" />
                                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            {/* <section className="py-16 bg-white dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in">Meet Our Team</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={member.name} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                                <div className="relative w-48 h-48 mx-auto mb-4">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-full"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                                <p className="text-purple-600 dark:text-purple-400">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* CTA Section */}
            <section className="py-16 bg-purple-600 dark:bg-purple-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4 animate-fade-in">Ready to Start Shortening?</h2>
                    <p className="text-xl mb-8 animate-fade-in delay-100">Join millions of users who trust tuckURL for their link shortening needs.</p>
                    <Button className="bg-white text-purple-600 hover:bg-gray-100 transition-colors duration-300 animate-fade-in delay-200">
                        Get Started <ArrowRight className="ml-2" />
                    </Button>
                </div>
            </section>
        </div>
    )
}

export default About