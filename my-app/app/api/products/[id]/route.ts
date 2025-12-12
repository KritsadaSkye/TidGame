import prisma from '@/lib/db';

export async function DELETE(request: Request,
    { params }: { params: { id: string } }
) {
    console.log("DATABASE_URL =", process.env.DATABASE_URL);
    const { id } = await params;


    console.log("productId =", id);

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