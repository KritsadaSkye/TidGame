import { item } from "@/app/types/idGame";

export function OrderSumItem({ item }: { item: item }) {
    return (
        <>
            <div className="name-price-product flex justify-between">
                <p>{item.username}</p>
                <p>{item.price}</p>
            </div>
        </>
    );
}