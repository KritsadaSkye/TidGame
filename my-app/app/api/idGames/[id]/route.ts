import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    try {
        const idNum = Number(id);
        if (isNaN(idNum)) {
            return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
        }
        const game = await prisma.idGame.findMany({
            where: { productId: idNum },
        });
        return NextResponse.json(game);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Failed to fetch idGame" },
            { status: 500 }
        );
    }
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    try {
        const idNum = Number(id);
        if (isNaN(idNum)) {
            return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
        }
        const idGames = await prisma.idGame.delete({
            where: { id: idNum },
        });
        return NextResponse.json(idGames);
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete IdGames" }, { status: 500 });
    }
}
