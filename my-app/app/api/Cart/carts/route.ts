import prisma from '@/lib/db';
import { getToken } from '../../auth/auth';

export async function GET() {
    try {
        const userId = await getToken();
        if (!userId) {
            return Response.json({ error: "Unauthorized" }, { status: 401 });
        }

        console.log("USER ID =", userId);
        return Response.json(await prisma.cart.findUnique({
            where: { userId },
            include: {
                items: {
                    include: {
                        gameAccount: true
                    }
                }
            }
        }))
    } catch (error) {
        return Response.json(
            { error: "Failed to fetch carts" },
            { status: 500 }
        );
    }
}