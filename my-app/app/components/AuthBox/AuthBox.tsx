"use client"

import { useState } from 'react'
import axios from 'axios'

export function AuthBox() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    const submit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError(null)
        setLoading(true)
        try {
            if (password !== confirmPassword) {
                setError('รหัสผ่านทั้งสองช่องไม่ตรงกัน')
                setLoading(false)
                return
            }

            await axios.post('/api/auth/register', { email, password })
            window.location.href = '/login'
        } catch (err: any) {
            setError(err?.response?.data?.message || err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="w-[380px] mt-20 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">สมัครสมาชิก</h2>
            <form onSubmit={submit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" required className="mt-1 block w-full border rounded px-3 py-2" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" required className="mt-1 block w-full border rounded px-3 py-2" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <input value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} type="password" required className="mt-1 block w-full border rounded px-3 py-2" />
                </div>
                {error && <div className="text-sm text-red-600">{error}</div>}
                <div>
                    <button type="submit" className="w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-full text-sm px-4 py-2.5 text-center leading-5 cursor-pointer" disabled={loading}>
                        {loading ? 'กำลังสมัคร...' : 'สมัครสมาชิก'}
                    </button>
                </div>
            </form>
            <div className="mt-4 text-sm text-center">
                <a href="/login" className="text-blue-600">มีบัญชีแล้ว? เข้าสู่ระบบ</a>
            </div>
        </div>
    )
}
