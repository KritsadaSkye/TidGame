import prisma from '@/lib/db';

export async function GET(request: Request,
    { params }: { params: { type: string } }) {

    const { type } = await params;

    try {
        console.log("TYPE =", type);

        const getProduct = await prisma.product.findMany({
            where: { type: type }
        });

        return Response.json(getProduct);

    } catch (err) {
        console.log("GET ERROR =", err);
        return Response.json({ error: "GET failed" }, { status: 404 });
    }
}