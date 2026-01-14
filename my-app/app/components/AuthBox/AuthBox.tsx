"use client"

import { useState } from 'react'
import axios from 'axios'

type Props = { mode: 'login' | 'register' }

export function AuthBox({ mode }: Props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    const submit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError(null)
        setLoading(true)
        try {
            if (mode === 'register') {
                await axios.post('/api/auth/register/route', { email, password })
                // optionally auto-login or redirect
                window.location.href = '/auth/login'
            } else {
                await axios.post('/api/auth/login/route', { email, password })
                window.location.href = '/'
            }
        } catch (err: any) {
            setError(err?.response?.data?.message || err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="w-[380px] bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">{mode === 'register' ? 'สมัครสมาชิก' : 'เข้าสู่ระบบ'}</h2>
            <form onSubmit={submit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" required className="mt-1 block w-full border rounded px-3 py-2" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" required className="mt-1 block w-full border rounded px-3 py-2" />
                </div>
                {error && <div className="text-sm text-red-600">{error}</div>}
                <div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700" disabled={loading}>
                        {loading ? 'Loading...' : (mode === 'register' ? 'สมัครสมาชิก' : 'เข้าสู่ระบบ')}
                    </button>
                </div>
            </form>
            <div className="mt-4 text-sm text-center">
                {mode === 'register' ? (
                    <a href="/auth/login" className="text-blue-600">มีบัญชีแล้ว? เข้าสู่ระบบ</a>
                ) : (
                    <a href="/auth/register" className="text-blue-600">สมัครสมาชิก</a>
                )}
            </div>
        </div>
    )
}
