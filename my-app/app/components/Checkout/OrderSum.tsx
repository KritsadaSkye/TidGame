import { OrderSumItem } from "./OrderSumItem";
import { CartItem } from '@/app/types/cartItem';

export function OrderSum({ cartItems, totalPrice }: { cartItems: CartItem[], totalPrice: number }) {
    return (
        <>
            <div className="order-summary border-[1px] border-black rounded-[10px] w-[255px] px-[18px] py-[15px]">
                <h3 className="text-xl font-semibold pt-[10px]">สรุปรายการสั่งซื้อ:</h3>
                <h3 className="text-xl font-semibold pt-[10px]">จำนวนสินค้า(2)</h3>
                <hr className="summary-line border-t-[1.5px] border-black mt-[15px] my-[10px] mx-[0px]" />
                <div className="order-details flex flex-col gap-y-[20px] pt-[13px] pb-[13px]">
                    <>
                        {cartItems.map((item: CartItem) => {
                            console.log(item);
                            return (<OrderSumItem key={item.gameAccount.id} item={item.gameAccount} />);
                        })}
                    </>
                </div>
                <hr className="summary-line border-t-[1.5px] border-black mt-[10px] my-[10px] mx-[0px]" />
                <div className="all-price flex justify-between pb-[10px] font-bold">
                    <p>ราคารวมทั้งหมด</p>
                    <p>{totalPrice}บาท</p>
                </div>
                <div className="button-flex flex justify-center pt-[10px] pb-[40px]">
                    <button className="checkout-button bg-[#FF0000] text-white border-none rounded-[4px] w-[150px] h-[30px] cursor-pointer"><u>ยืนยันคำสั่งชื้อ</u></button>
                </div>
            </div>
        </>
    );
}