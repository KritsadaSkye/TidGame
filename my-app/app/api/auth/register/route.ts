import prisma from "@/lib/db";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
    const { email, password } = await request.json();
    const user = await prisma.user.findUnique({
        where: { email }
    });
    if (user) {
        return Response.json({ error: "User already exists" }, { status: 400 });
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

        return Response.json({
            id: newUser.id,
            email: newUser.email,
            createdAt: newUser.createdAt
        });
    } catch (err) {
        console.log("REGISTER ERROR =", err);
        return Response.json({ error: "Registration failed" }, { status: 500 });
    }
}   