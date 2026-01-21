import prisma from '@/lib/db';
import { getToken } from '../../auth/auth';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
    try {
        const userId = await getToken();

        if (!userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const items = await prisma.cartItem.findMany({
            where: { cartId: userId },
            include: {
                gameAccount: true,
            }
        });

        const totalPrice = items.reduce((sum, item) => sum + item.gameAccount.price, 0);

        return NextResponse.json({ items, totalPrice });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch cart items" },
            { status: 500 }
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        const { gameAccountId } = await request.json();
        const userId = await getToken();
        if (!userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const newCartItem = await prisma.cartItem.create({
            data: {
                cartId: userId,
                gameAccountId,
            }
        })

        return NextResponse.json(newCartItem, { status: 201 });

    } catch (error) {
        return NextResponse.json(
            { error: "Failed to add cart item" },
            { status: 500 }
        );
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const { gameAccountId } = await request.json();
        const userId = await getToken();
        if (!userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const deletedCartItem = await prisma.cartItem.deleteMany({
            where: {
                gameAccountId,
            },
        });

        return NextResponse.json(deletedCartItem, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to delete cart item" },
            { status: 500 }
        );
    }
}