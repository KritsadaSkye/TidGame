import { item } from "./idGame";

export interface cartItem {
    id: number;
    cartId: number;
    gameAccountId: number;
    gameAccount: item;
    createdAt: Date;
}