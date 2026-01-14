import { Product } from '@/app/types/product'
import Image from 'next/image'
import Link from 'next/link';


export function Products({ product }: { product: Product }) {
    return (
        <Link href={`/idGames/${product.id}`} className="block cursor-pointer" >
            <div className="w-[250px] h-[257px] rounded-[20px] overflow-hidden relative">
                <Image src={product.img} alt={product.name} width={250} height={160} className="object-cover" />
                <div className="ml-2.5 mt-3.5">
                    <p className="text-sm text-gray-500">{product.type}</p>
                    <p className="mb-0 font-medium">ไอดี: {product.name}</p>
                    <div className="flex items-center">
                        <Image src="/images/check-logo.png" alt="Check Logo" width={20} height={20} className="object-contain" />
                        <p className="ml-2">{product.sold} ขายแล้ว</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}