import prisma from '@/lib/db';
import { NextRequest } from 'next/dist/server/web/spec-extension/request';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {

    const { id } = await params;

    try {
        console.log("ID =", id);
        const productId = Number(id);

        const getProduct = await prisma.product.findUnique({
            where: { id: productId }
        });

        return Response.json(getProduct);

    } catch (err) {
        console.log("GET ERROR =", err);
        return Response.json({ error: "GET failed" }, { status: 404 });
    }
}

export async function DELETE(request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    try {
        const productId = Number(id);

        const deletedProduct = await prisma.product.delete({
            where: { id: productId }
        });

        return Response.json(deletedProduct);

    } catch (err) {
        console.log("DELETE ERROR =", err);
        return Response.json({ error: "Delete failed" }, { status: 500 });
    }
}