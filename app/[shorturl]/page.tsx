import React from 'react'
import { redirect } from 'next/navigation';
import dbConnect from '@/lib/mongoose';
import ShortenedUrl from '@/models/shortenedUrl';
import NotFound from '../not-found';

const ShortUrl = async ({ params }: { params: Promise<{ shorturl: string }> }) => {
    const shortUrl = (await params).shorturl;
    await dbConnect();
    const url = await ShortenedUrl.findOne({ shortUrl });
    if (!url) {
        return <NotFound />;
    } else {
        redirect(url.url);
    }

}

export default ShortUrl
