import { AuthBox } from '@/app/components/AuthBox/AuthBox'

export default function RegisterPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <AuthBox mode="register" />
        </div>
    )
}
