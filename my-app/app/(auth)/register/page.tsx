import { Header } from '@/app/components/Header/Header'
import { AuthBox } from '@/app/components/AuthBox/AuthBox'

export default function RegisterPage() {
    return (
        <>
            <Header />
            <div className="flex items-center justify-center bg-gray-100 pb-50">
                <AuthBox />
            </div>
        </>
    )
}
