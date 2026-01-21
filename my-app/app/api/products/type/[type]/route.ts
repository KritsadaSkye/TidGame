import prisma from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
    request: NextRequest,
    { params }: { params: { type: string } }
) {
    const { type } = params;
    try {
        console.log("TYPE =", type);
        const getProduct = await prisma.product.findMany({
            where: { type: type }
        });
        return NextResponse.json(getProduct);
    } catch (err) {
        console.log("GET ERROR =", err);
        return NextResponse.json({ error: "GET failed" }, { status: 404 });
    }
}