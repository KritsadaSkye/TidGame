import prisma from '@/lib/db';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(request: Request) {
    interface User {
        id: number
        email: string
        password: string
        createdAt: Date
    }

    try {
        const { email, password } = await request.json();

        const user: User | null = await prisma.user.findUnique({
            where: { email }
        });

        const match = user ? await bcrypt.compare(password, user.password) : false;

        if (!match || !user) {
            return Response.json({ error: "email or password is incorrect" }, { status: 401 });
        }

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET as string, { expiresIn: "1h" });

        const cookieStore = await cookies();

        cookieStore.set({
            name: "authToken",
            value: token,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24,
        });

        return Response.json({ message: "login success", token }, { status: 200 });
    } catch (error) {
        return Response.json({ error: "Login failed" }, { status: 401 });
    }
}