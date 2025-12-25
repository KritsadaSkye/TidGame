import prisma from '@/lib/db';

export async function GET() {
    return Response.json(await prisma.idGame.findMany())
}

export async function POST(request: Request) {
    const { image, username, password, price, description, productId } = await request.json();

    try {
        const newIdGame = await prisma.idGame.create({
            data: {
                image,
                username,
                password,
                price,
                description,
                productId,
            }
        });

        return Response.json("create Idgame success", { status: 201 });

    } catch (error) {
        return Response.json({ error: "Failed to create IdGame" }, { status: 500 });
    }
}