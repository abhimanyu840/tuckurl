"use client";
import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import Link from 'next/link'
import { LinkIcon, Copy } from 'lucide-react'

interface URLShortenerFormProps {
    isEmbedded?: boolean;
}

const URLShortenerForm: React.FC<URLShortenerFormProps> = ({ isEmbedded = false }) => {
    const [url, setUrl] = useState<string>('');
    const [customSlug, setCustomSlug] = useState<string>('');
    const [shortUrl, setShortUrl] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const createShortUrl = async (url: string, customSlug: string) => {
        const response = await fetch('/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                url,
                slug: customSlug,
            }),
        });

        if (response.ok) {
            const data = await response.json();
            setShortUrl(data.shortUrl);
        } else {
            setError('Something went wrong. Please try again later.');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        await createShortUrl(url, customSlug);
        setIsLoading(false);
    };

    const copyToClipboard = () => {
        if (shortUrl) {
            navigator.clipboard.writeText(shortUrl);
        }
    };

    return (
        <section className={`url-shortener-form w-full max-w-md mx-auto ${isEmbedded ? '' : 'p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg'} transition-all duration-300 ease-in-out`}>
            <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className={`text-2xl font-bold text-center text-gray-800 dark:text-white mb-6 ${isEmbedded ? '' : 'animate-fade-in-down'}`}>
                    Shorten Your URL
                </h2>
                <div className="space-y-2">
                    <Input
                        type="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="Enter your long URL"
                        className="w-full px-4 py-2 transition-all duration-300 ease-in-out focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:border-gray-400"
                        required
                    />
                    <Input
                        type="text"
                        value={customSlug}
                        onChange={(e) => setCustomSlug(e.target.value)}
                        placeholder="Custom slug (optional)"
                        className="w-full px-4 py-2 transition-all duration-300 ease-in-out focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:border-gray-400"
                    />
                </div>
                <Button
                    type="submit"
                    className={`w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-all duration-300 ease-in-out transform hover:scale-105 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={isLoading}
                >
                    <LinkIcon className="h-5 w-5 text-white" aria-hidden="true" />
                    {isLoading ? 'Generating...' : 'Shorten URL'}
                </Button>
            </form>

            {error && (
                <p className="mt-4 text-red-500 text-center animate-fade-in">{error}</p>
            )}

            {shortUrl && (
                <div className="mt-6 p-4 bg-purple-100 dark:bg-purple-900 rounded-lg animate-fade-in">
                    <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-2">Your shortened URL:</h3>
                    <div className="flex items-center justify-between bg-white dark:bg-gray-700 rounded px-3 py-2">
                        <Link href={shortUrl} target='_blank' className="text-purple-600 dark:text-purple-400 hover:underline break-all mr-2">
                            {process.env.NEXT_PUBLIC_HOST}/{shortUrl}
                        </Link>
                        <Button
                            onClick={copyToClipboard}
                            variant="ghost"
                            size="sm"
                            className="text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors duration-300"
                        >
                            <Copy size={18} />
                            <span className="sr-only">Copy to clipboard</span>
                        </Button>
                    </div>
                </div>
            )}
        </section>
    )
}

export default URLShortenerForm