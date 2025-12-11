import prisma from '@/lib/db';

export async function GET() {
    return Response.json(await prisma.product.findMany())
}

export async function POST(req: Request) {
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
        return Response.json(newProduct)
    } catch (error) {
        return new Response(error as BodyInit, {
            status: 500,
        })
    }
}