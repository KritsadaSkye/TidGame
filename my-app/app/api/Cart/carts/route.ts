import prisma from '@/lib/db';
import { getToken } from '../../auth/auth';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const userId = await getToken();
        if (!userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        console.log("USER ID =", userId);
        return NextResponse.json(await prisma.cart.findUnique({
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
        return NextResponse.json(
            { error: "Failed to fetch carts" },
            { status: 500 }
        );
    }
}