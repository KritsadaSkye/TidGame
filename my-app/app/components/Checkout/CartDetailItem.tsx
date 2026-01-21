import axios from 'axios';
import Image from 'next/image'
import { Item } from '@/app/types/idGame';

export function CartDetailItem({ item, onDeleted }: { item: Item, onDeleted: () => void }) {
    console.log(item);
    const deleteItem = async () => {
        try {
            const response = await axios.delete(`/api/Cart/cartItems`, {
                data: { gameAccountId: item.id }
            });
            if (response.status === 200) {
                console.log('Item deleted successfully');
            }
            onDeleted();
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    }

    return (
        <>
            <div className="products-conatiner border-[1px] border-gray-300 rounded-[10px] pr-[10px] pb-[8px] w-[472px]">
                <div className="cross-sign flex pt-[8px] pl-[10px] py-[5px] h-[22px] align-items-end cursor-pointer box-content cover" onClick={deleteItem}>
                    <Image src="/images/cross-logo.png" alt="CrossLogo" width={22} height={22} />
                </div>
                <div className="product-item flex items-center gap-x-[20px] pl-[35px] pr-[10px] pb-[25px]">
                    <div className="product-image border-none rounded-[8px] bg-burlywood w-[280px] h-[150px] overflow-hidden flex justify-center">
                        <Image src={item.image[0]} alt="Pubg Image" width={280} height={150} className="object-cover" />
                    </div>
                    <div className="product-details">
                        <p className="type-game mt-[7px]">ประเภท : PC game</p>
                        <p>ไอดี : {item.username}</p>
                        <p>ราคา : {item.price} บาท</p>
                        <p>รายละเอียด : {item.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}