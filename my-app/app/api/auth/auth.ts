import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function getToken() {
    try {
        const cookieStore = await cookies()
        const authToken: string = cookieStore.get('authToken')?.value || "";

        if (!authToken) {
            return false;
        }

        const decoded = jwt.verify(authToken, process.env.JWT_SECRET as string);
        const userId = (decoded as { userId: number }).userId;

        return userId;
    } catch (error) {
        return false;
    }
}