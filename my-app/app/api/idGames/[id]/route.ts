import prisma from '@/lib/db';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest, context: { params: { id: string } }) {
    const { id } = await context.params;
    try {
        const productId = Number(id);
        const getIdGame = await prisma.idGame.findMany({
            where: { productId: productId },
        });
        return Response.json(getIdGame);
    } catch (err) {
        console.log("GET ERROR =", err);
        return Response.json({ error: "GET failed" }, { status: 404 });
    }
}

export async function DELETE(request: NextRequest, context: { params: { id: string } }) {
    const { id } = await context.params;
    try {
        const deletedIdGames = await prisma.idGame.delete({
            where: { id: Number(id) }
        });
        return Response.json(deletedIdGames);
    } catch (error) {
        return Response.json({ error: "Failed to delete IdGames" }, { status: 500 });
    }
}
