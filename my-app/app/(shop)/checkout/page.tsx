'use client'

import axios from 'axios';
import { useState, useEffect } from 'react';
import { Header } from '@/app/components/Header/Header'
import { OrderSum } from '@/app/components/Checkout/OrderSum';
import { CartDetailItem } from '@/app/components/Checkout/CartDetailItem';
import { CartItem } from '@/app/types/cartItem';

export default function CheckoutPage() {

    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);


    const fetchCartItems = async () => {
        try {
            const response = await axios.get('/api/Cart/cartItems');
            setCartItems(response.data.items);
            setTotalPrice(response.data.totalPrice);
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    }

    useEffect(() => {
        fetchCartItems();
        console.log(cartItems);
    }, []);



    return (
        <>
            <Header />
            <main>
                <div className="main-container mt-[80px] flex justify-center">
                    <div className="cart-container border-none rounded-[10px] shadow-lg pb-[35px] w-[880px]">
                        <div className="cart-header ml-[30px]">
                            <h1 className="text-3xl font-bold pb-[30px]">รายการสินค้า({cartItems.length}):</h1>
                        </div>
                        <div className="cart-flex flex gap-x-[55px] px-[50px] items-start">
                            <div className="cart-items flex flex-col gap-y-[20px]">
                                {cartItems.map((item: CartItem) => {
                                    console.log(item);
                                    return (<CartDetailItem key={item.gameAccount.id} item={item.gameAccount} onDeleted={fetchCartItems} />);
                                })}
                            </div>
                            <OrderSum cartItems={cartItems} totalPrice={totalPrice} />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}