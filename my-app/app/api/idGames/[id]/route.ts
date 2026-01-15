import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

type RouteContext = {
    params: { id: string };
};

export async function GET(
    request: NextRequest,
    context: RouteContext
) {
    const params = await Promise.resolve(context.params);
    const id = params.id;

    const productId = Number(id);
    if (isNaN(productId)) {
        return NextResponse.json(
            { error: "Invalid product id" },
            { status: 400 }
        );
    }

    const idGames = await prisma.idGame.findMany({
        where: { productId },
    });

    return NextResponse.json(idGames);
}

export async function DELETE(
    request: NextRequest,
    context: RouteContext) {
    try {
        const params = await Promise.resolve(context.params);
        const id = params.id;

        const productId = Number(id);
        if (isNaN(productId)) {
            return NextResponse.json(
                { error: "Invalid product id" },
                { status: 400 }
            );
        }
        const idGames = await prisma.idGame.delete({
            where: { id: productId },
        });
        return NextResponse.json(idGames);
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete IdGames" }, { status: 500 });
    }
}
