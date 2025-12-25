import { cartItem } from '@/app/types/cartItem';
import { item } from '@/app/types/idGame';

export function mapGameAccount(cartItems: cartItem[], Component: React.ComponentType<{ key: number; item: item }>) {
    cartItems?.map((item: cartItem) => {
        console.log(item);
        return (Component);
    })
}