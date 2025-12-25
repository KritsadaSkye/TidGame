export interface item {
    id: number;
    image: string[];
    username: string;
    password: string;
    price: number;
    description?: string;
    createdAt: Date;
    productId: number;
}