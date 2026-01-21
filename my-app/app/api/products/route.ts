import prisma from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
    console.log("DATABASE_URL =", process.env.DATABASE_URL);
    const products = await prisma.product.findMany()
    return NextResponse.json(products)
}

export async function POST(req: NextRequest) {
    console.log("DATABASE_URL =", process.env.DATABASE_URL);
    try {
        const { img, type, name, sold } = await req.json()
        const newProduct = await prisma.product.create({
            data: {
                img,
                type,
                name,
                sold,
            },
        })
        return NextResponse.json(newProduct)
    } catch (error) {
        return new NextResponse(error as BodyInit, {
            status: 500,
        })
    }
}
