import prisma from "@/lib/db";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const { email, password } = await request.json();
    const user = await prisma.user.findUnique({
        where: { email }
    });
    if (user) {
        return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    try {
        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                email,
                password: passwordHash,
                cart: {
                    create: {}
                }
            }
        }
        )

        return NextResponse.json({
            id: newUser.id,
            email: newUser.email,
            createdAt: newUser.createdAt
        });
    } catch (err) {
        console.log("REGISTER ERROR =", err);
        return NextResponse.json({ error: "Registration failed" }, { status: 500 });
    }
}   