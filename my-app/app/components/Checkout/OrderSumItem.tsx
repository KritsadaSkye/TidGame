import { Item } from "@/app/types/idGame";

export function OrderSumItem({ item }: { item: Item }) {
    return (
        <>
            <div className="name-price-product flex justify-between">
                <p>{item.username}</p>
                <p>{item.price}</p>
            </div>
        </>
    );
}