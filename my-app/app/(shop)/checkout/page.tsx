"use client"

import Image from 'next/image'
import { Header } from '@/app/components/Header/Header'

export default function CheckoutPage() {
    return (
        <>
            <Header />
            <main>
                <div className="main-container mt-[80px] flex justify-center">
                    <div className="cart-container border-none rounded-[10px] shadow-lg pb-[35px] w-[880px]">
                        <div className="cart-header ml-[30px]">
                            <h1 className="text-3xl font-bold pb-[30px]">รายการสินค้า(2):</h1>
                        </div>
                        <div className="cart-flex flex gap-x-[55px] px-[50px] align-items-start">
                            <div className="products-flex flex flex-col gap-y-[30px]">
                                <div className="products-conatiner border-[1px] border-gray-300 rounded-[10px] w-[472px]">
                                    <div className="cross-sign flex pt-[5px] pl-[10px] h-[25px] align-items-end cursor-pointer">
                                        <Image src="/image/cross-logo.png" alt="CrossLogo" width={22} height={26} />
                                    </div>
                                    <div className="product-item flex align-items-start gap-x-[20px] pl-[30px] pr-[10px] pb-[25px]">
                                        <div className="product-image border-none rounded-[8px] bg-burlywood w-[200px] h-[130px] overflow-hidden flex justify-center">
                                            <Image src="/image/products/pubg-image.png" alt="Pubg Image" width={250} height={130} className="object-cover" />
                                        </div>
                                        <div className="product-details">
                                            <p className="type-game mt-[7px]">ประเภท : PC game</p>
                                            <p>ไอดี : Pubg BattleGrounds</p>
                                            <p>รายละเอียด : sdaasdsasdsa</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="order-summary border-[1px] border-black rounded-[10px] w-[255px] px-[18px] py-[15px]">
                                <h3 className="text-xl font-semibold pt-[10px]">สรุปรายการสั่งซื้อ:</h3>
                                <h3 className="text-xl font-semibold pt-[10px]">จำนวนสินค้า(2)</h3>
                                <hr className="summary-line border-t-[1.5px] border-black mt-[15px] my-[10px] mx-[0px]" />
                                <div className="order-details flex flex-col gap-y-[20px] pt-[13px] pb-[13px]">
                                    <div className="name-price-product flex justify-between">
                                        <p>Pubg BattleGrounds</p>
                                        <p>450Bath</p>
                                    </div>
                                </div>
                                <hr className="summary-line border-t-[1.5px] border-black mt-[10px] my-[10px] mx-[0px]" />
                                <div className="all-price flex justify-between pb-[10px] font-bold">
                                    <p>ราคารวมทั้งหมด</p>
                                    <p>700Bath</p>
                                </div>
                                <div className="button-flex flex justify-center pt-[10px] pb-[40px]">
                                    <button className="checkout-button bg-red-500 text-white border-none rounded-[4px] w-[150px] h-[30px] cursor-pointer"><u>ยืนยันคำสั่งชื้อ</u></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}