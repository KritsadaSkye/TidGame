import prisma from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';


export async function GET(
    request: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await context.params;

        const productId = Number(id);

        if (isNaN(productId)) {
            return NextResponse.json(
                { error: "Invalid id" },
                { status: 400 }
            );
        }

        const idGames = await prisma.idGame.findMany({
            where: {
                productId: productId,
            },
        });

        return NextResponse.json(idGames);
    } catch (error) {
        console.error("GET ERROR:", error);
        return NextResponse.json(
            { error: "GET failed" },
            { status: 500 }
        );
    }
}


export async function DELETE(request: NextRequest,
    { params }: { params: { id: string } }) {
    const productId = Number(params.id);
    try {
        const deletedIdGames = await prisma.idGame.delete({
            where: { id: productId }
        });
        return NextResponse.json(deletedIdGames);
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete IdGames" }, { status: 500 });
    }
}
