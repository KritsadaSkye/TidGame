import { CartItem } from '@/app/types/cartItem';
import { Item } from '@/app/types/idGame';

export function mapGameAccount(cartItems: CartItem[], Component: React.ComponentType<{ key: number; item: Item }>) {
    cartItems?.map((item: CartItem) => {
        console.log(item);
        return (Component);
    })
}