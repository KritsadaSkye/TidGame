import { cookies } from "next/headers";
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const cookieStore = await cookies()
        const authToken: string = cookieStore.get('authToken')?.value || "";

        if (!authToken) {
            return NextResponse.json({ ok: false });
        }

        return NextResponse.json({ ok: true });
    } catch (error) {
        return NextResponse.json({ ok: false });
    }
}