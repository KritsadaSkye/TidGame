"use client"

import { Header } from '@/app/components/Header/Header'
import { AuthBox } from '@/app/components/AuthBox/AuthBox'

export default function LoginPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen flex items-center justify-center bg-gray-100">
                <AuthBox mode="login" />
            </main>
        </>
    )
}