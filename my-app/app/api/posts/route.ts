import prisma from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json(await prisma.post.findMany())
}

export async function POST(req: NextRequest) {
    try {
        const { title, content } = await req.json()
        const newPost = await prisma.post.create({
            data: {
                title,
                content,
            }
        })
        return NextResponse.json(newPost)
    } catch (error) {
        return new NextResponse(error as BodyInit, {
            status: 500,
        })
    }
}