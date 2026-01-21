"use client";

import axios from 'axios';
import Image from 'next/image';
import { Item } from '@/app/types/idGame';
import { useRouter } from "next/navigation";

export function IdGame({ idGame }: { idGame: Item }) {
    const route = useRouter();

    const addCart = async (idGame: Item) => {
        try {
            const response = await axios.post('/api/Cart/cartItems', {
                gameAccountId: idGame.id,
            });
            console.log('Add to cart response:', response.data);
        } catch (error) {
            console.error('Add to cart failed:', error);
            if (axios.isAxiosError(error)) {
                if (error.response?.status === 401) {
                    route.push('/login');
                }
            }
        }
    }

    return (
        <section className="product-card rounded-2xl border border-gray-200 shadow-lg w-[410px] h-[477px] p-[15px]">
            <div className="product-card-inner flex flex-col">
                <div className="product-media flex gap-[5px] border-none rounded-[8px] w-[380px] h-[261px] overflow-hidden">
                    <div className="media-left flex flex-1 flex-col gap-y-[5px]">
                        <div className="container-img1 relative w-[215px] h-[128px]">
                            <Image src={idGame.image[0]} alt="img1" className="object-cover" fill />
                        </div>
                        <div className="container-img2 relative w-[215px] h-[128px]">
                            <Image src={idGame.image[1]} alt="img2" className="object-cover" fill />
                        </div>
                    </div>
                    <div className="media-right flex flex-col gap-[4px] items-center justify-center">
                        <div className="container-r1 relative w-[161px] h-[85px]">
                            <Image src={idGame.image[2]} alt="r1" className="object-cover" fill />
                        </div>
                        <div className="container-r2 relative w-[161px] h-[85px]">
                            <Image src={idGame.image[3]} alt="r2" className="object-cover" fill />
                        </div>
                        <div className="container-r3 relative w-[161px] h-[85px]">
                            <Image src={idGame.image[4]} alt="r3" className="object-cover" fill />
                        </div>
                    </div>
                </div>

                <div className="product-card-body flex flex-col gap-3 p-5">
                    <div className="price text-xl font-semibold text-black-600">
                        ราคา ฿{idGame.price}
                    </div>

                    <div className="description text-sm text-gray-700 line-clamp-4">
                        รายละเอียด : {idGame.description}
                    </div>

                    <div className="add-to-cart mt-2">
                        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-full text-sm px-4 py-2.5 text-center leading-5 cursor-pointer" onClick={() => {
                            addCart(idGame);
                        }}>
                            ใส่ตะกร้า
                        </button>
                    </div>
                </div>
            </div>
        </section >
    );
}
