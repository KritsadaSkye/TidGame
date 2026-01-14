import { Item } from "./idGame";

export interface CartItem {
    id: number;
    cartId: number;
    gameAccountId: number;
    gameAccount: Item;
    createdAt: Date;
}