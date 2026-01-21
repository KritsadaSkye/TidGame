import { NextResponse } from 'next/server';
import { cookies } from "next/headers";

export async function POST() {
    try {
        const response = NextResponse.json({ message: "logout success" }, { status: 200 });
        const cookieStore = await cookies();

        response.cookies.set('authToken', '', {
            httpOnly: true,
            path: "/",
            expires: new Date(0),
        });
        return response;
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}