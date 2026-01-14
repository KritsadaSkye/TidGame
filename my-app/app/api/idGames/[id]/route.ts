import prisma from '@/lib/db';

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const { id } = await params;
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

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const { id } = await params;
    try {
        const deletedIdGames = await prisma.idGame.delete({
            where: { id: Number(id) }
        });
        return Response.json(deletedIdGames);
    } catch (error) {
        return Response.json({ error: "Failed to delete IdGames" }, { status: 500 });
    }
}
