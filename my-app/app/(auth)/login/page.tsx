"use client"

import axios from 'axios';
import { useState } from 'react';
import { useRouter } from "next/navigation";
import { Header } from '@/app/components/Header/Header'


export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/login', {
                email,
                password
            });

            console.log('Login successful:', response.data);
            router.push("/products");
        } catch (error) {
            console.error('Login failed:', error);
        }
    }

    return (
        <>
            <Header />
            <main>
                <div className="login-flex flex justify-center mt-20">
                    <div className="login-container block text-center w-[650px] h-[400px] rounded-2xl shadow-[0_0_30px_10px_rgba(0,0,0,0.3)]">
                        <form className="login-form flex flex-col mt-8" onSubmit={handleLogin}>
                            <h1 className="text-2xl font-semibold mt-1">
                                เข้าสู่ระบบ
                            </h1>

                            <div className="input-container mt-14 flex flex-col items-center gap-4">
                                <input
                                    type="text"
                                    placeholder="อีเมล"
                                    required
                                    className="w-[550px] h-[45px] border border-gray-300 rounded-md pl-5 focus:outline-none focus:ring-2 focus:ring-blue-400" onChange={(e) =>
                                        setEmail(e.target.value)}
                                />

                                <input
                                    type="password"
                                    placeholder="รหัสผ่าน"
                                    required
                                    className="w-[550px] h-[45px] border border-gray-300 rounded-md pl-5 focus:outline-none focus:ring-2 focus:ring-blue-400" onChange={(e) =>
                                        setPassword(e.target.value)}
                                />
                            </div>

                            <div className="forgot-password-container flex justify-start mt-4 ml-10">
                                <a
                                    href="#"
                                    className="text-[#697cf7] text-base hover:underline pl-[15px]"
                                >
                                    ลืมรหัสผ่าน?
                                </a>
                            </div>

                            <div className="mt-8">
                                <button type="submit" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-full text-sm px-4 py-2.5 text-center leading-5 cursor-pointer">เข้าสู่ระบบ</button>
                                <div className="register-container flex justify-center items-end mt-4">
                                    <p className="text-sm">ยังไม่มีบัญชีผู้ใช้?</p>
                                    <a
                                        href="/register"
                                        className="text-base text-[#697cf7] text-base hover:underline pl-[15px]"
                                    >
                                        สมัครสมาชิกใหม่
                                    </a></div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
}