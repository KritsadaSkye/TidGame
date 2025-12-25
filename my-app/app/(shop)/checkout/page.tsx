"use client"

import axios from 'axios';
import { useState, useEffect, use } from 'react';
import { Header } from '@/app/components/Header/Header'
import { OrderSum } from '@/app/components/Checkout/OrderSum';
import { CartItem } from '@/app/components/Checkout/CartItem';
import { cartItem } from '@/app/types/cartItem';

export default function CheckoutPage() {

    const [cartItems, setCartItems] = useState([]);

    const fetchCartItems = async () => {
        try {
            const response = await axios.get('/api/Cart/cartItems');
            setCartItems(response.data);
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    }

    useEffect(() => {
        fetchCartItems();
    }, []);


    return (
        <>
            <Header />
            <main>
                <div className="main-container mt-[80px] flex justify-center">
                    <div className="cart-container border-none rounded-[10px] shadow-lg pb-[35px] w-[880px]">
                        <div className="cart-header ml-[30px]">
                            <h1 className="text-3xl font-bold pb-[30px]">รายการสินค้า(2):</h1>
                        </div>
                        <div className="cart-flex flex gap-x-[55px] px-[50px] items-start">
                            <>
                                {cartItems.map((item: cartItem) => {
                                    console.log(item);
                                    return (<CartItem key={item.gameAccount.id} item={item.gameAccount} />);
                                })}
                            </>
                            <OrderSum cartItems={cartItems} />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}