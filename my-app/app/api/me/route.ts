import { fstat } from "fs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function GET() {
    try {
        const cookieStore = await cookies()
        const authToken: string = cookieStore.get('authToken')?.value || "";

        if (!authToken) {
            return Response.json({ ok: false });
        }

        return Response.json({ ok: true });
    } catch (error) {
        return Response.json({ ok: false });
    }
}