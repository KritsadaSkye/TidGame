import prisma from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {

    const { id } = params;

    try {
        console.log("ID =", id);
        const productId = Number(id);

        const getProduct = await prisma.product.findUnique({
            where: { id: productId }
        });

        return NextResponse.json(getProduct);

    } catch (err) {
        console.log("GET ERROR =", err);
        return NextResponse.json({ error: "GET failed" }, { status: 404 });
    }
}

export async function DELETE(request: NextRequest,
    { params }: { params: { id: string } }
) {
    const { id } = params;

    try {
        const productId = Number(id);

        const deletedProduct = await prisma.product.delete({
            where: { id: productId }
        });

        return NextResponse.json(deletedProduct);

    } catch (err) {
        console.log("DELETE ERROR =", err);
        return NextResponse.json({ error: "Delete failed" }, { status: 500 });
    }
}