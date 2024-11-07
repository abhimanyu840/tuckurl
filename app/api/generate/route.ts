import dbConnect from '@/lib/mongoose';
import shortenedUrl from '@/models/shortenedUrl';
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {

    let shortUrl: string;
    const { url, slug } = await req.json();

    if (slug) {
        shortUrl = slug;
    } else {
        shortUrl = Math.random().toString(36).substring(2, 6);
    }

    await dbConnect();

    try {
        if (!url) {
            throw new Error('url is required');
        }
        const existingUrl = await shortenedUrl.findOne({ shortUrl });
        if (existingUrl) {
            throw new Error('Short URL already exists');
        }
        const res = await shortenedUrl.create({
            url,
            shortUrl,
        });

        return NextResponse.json({ shortUrl: res.shortUrl }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 400 });
    }

}