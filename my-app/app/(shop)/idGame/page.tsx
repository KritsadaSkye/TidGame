import Image from "next/image";
import { Header } from "@/app/components/Header/Header";
import { Nav } from "@/app/components/Nav/Nav";

export default function idGamePage() {
    return (
        <>
            <div className="sticky top-0 z-10">
                <Header />
                <Nav />
            </div>
            <main className="product-grid grid grid-cols-1 px-50 py-10 md:grid-cols-2 xl:grid-cols-3 justify-items-center">
                <section className="product-card rounded-2xl border border-gray-200 shadow-lg w-[410px] h-[477px] p-[15px]">
                    <div className="product-card-inner flex flex-col">
                        <div className="product-media flex gap-[5px] border-none rounded-[8px] w-[380px] h-[261px] overflow-hidden">
                            <div className="media-left flex flex-1 flex-col gap-y-[5px]">
                                <div className="container-img1 relative w-[215px] h-[128px]">
                                    <Image src="/image/products/pubg-image.png" alt="img1" className="object-cover" fill />
                                </div>
                                <div className="container-img2 relative w-[215px] h-[128px]">
                                    <Image src="/image/products/pubg-image.png" alt="img2" className="object-cover" fill />
                                </div>
                            </div>
                            <div className="media-right flex flex-col gap-[4px] items-center justify-center">
                                <div className="container-r1 relative w-[161px] h-[85px]">
                                    <Image src="/image/products/pubg-image.png" alt="r1" className="object-cover" fill />
                                </div>
                                <div className="container-r2 relative w-[161px] h-[85px]">
                                    <Image src="/image/products/pubg-image.png" alt="r2" className="object-cover" fill />
                                </div>
                                <div className="container-r3 relative w-[161px] h-[85px]">
                                    <Image src="/image/products/pubg-image.png" alt="r3" className="object-cover" fill />
                                </div>
                            </div>
                        </div>

                        <div className="product-card-body flex flex-col gap-3 p-5">
                            <div className="price text-xl font-semibold text-blue-600">
                                ราคา ฿5000
                            </div>

                            <div className="description text-sm text-gray-600 line-clamp-4">
                                รายละเอียด : dadasdasd
                                dasdsadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddsadas
                            </div>

                            <div className="add-to-cart mt-2">
                                <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-full text-sm px-4 py-2.5 text-center leading-5 cursor-pointer">ใส่ตะกร้า</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </>
    );
}
