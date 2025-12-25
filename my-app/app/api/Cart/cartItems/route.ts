import prisma from '@/lib/db';
import { getToken } from '../../auth/auth';

export async function GET() {
    try {
        const userId = await getToken();
        if (!userId) {
            return Response.json({ error: "Unauthorized" }, { status: 401 });
        }

        return Response.json(await prisma.cartItem.findMany({
            where: { cartId: userId },
            include: {
                gameAccount: true
            }
        }))
    } catch (error) {

    }
}

export async function POST(request: Request) {
    const { gameAccountId } = await request.json();

    try {
        const userId = await getToken();
        if (!userId) {
            return Response.json({ error: "Unauthorized" }, { status: 401 });
        }

        const newCartItem = await prisma.cartItem.create({
            data: {
                cartId: userId,
                gameAccountId,
            }
        })

        return Response.json(newCartItem, { status: 201 });

    } catch (error) {
        return Response.json(
            { error: "Failed to add cart item" },
            { status: 500 }
        );
    }
}

