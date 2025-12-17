"use client"

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import { Header } from '@/app/components/Header/Header'
import { Nav } from '../../components/Nav/Nav'

export default function ProductsPage() {

  /*const [products, setProducts] = useState([])
 
  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products')
      setProducts(response.data)
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }
 
  useEffect(() => {
    fetchProducts()
  }, [])*/

  return (
    <>
      <div className="sticky top-0 z-10">
        <Header />
        <Nav />
      </div>
      <main className="grid mt-16 grid-cols-4 justify-items-center gap-x-20 gap-y-14 pl-40 pr-40 pb-1000">
        <div className="w-[250px] h-[257px] rounded-[20px] overflow-hidden relative">
          <Image src="/image/products/pubg-image.png" alt="PUBG Image" width={250} height={160} className="object-cover" />
          <div className="ml-2.5">
            <p className="text-sm text-gray-500">PC game</p>
            <p className="mb-0 font-medium">ไอดี: PUBG Battlegrounds</p>
            <div className="flex items-center">
              <Image src="/image/check-logo.png" alt="Check Logo" width={20} height={20} className="object-contain" />
              <p className="ml-2">5564 ขายแล้ว</p>
            </div>
          </div>
        </div>
        <div className="w-[250px] h-[257px] rounded-[20px] overflow-hidden relative">
          <Image src="/image/products/pubg-image.png" alt="PUBG Image" width={250} height={160} className="object-cover" />
          <div className="ml-2.5">
            <p className="text-sm text-gray-500">PC game</p>
            <p className="mb-0 font-medium">ไอดี: PUBG Battlegrounds</p>
            <div className="flex items-center">
              <Image src="/image/check-logo.png" alt="Check Logo" width={20} height={20} className="object-contain" />
              <p className="ml-2">5564 ขายแล้ว</p>
            </div>
          </div>
        </div>
        <div className="w-[250px] h-[257px] rounded-[20px] overflow-hidden relative">
          <Image src="/image/products/pubg-image.png" alt="PUBG Image" width={250} height={160} className="object-cover" />
          <div className="ml-2.5">
            <p className="text-sm text-gray-500">PC game</p>
            <p className="mb-0 font-medium">ไอดี: PUBG Battlegrounds</p>
            <div className="flex items-center">
              <Image src="/image/check-logo.png" alt="Check Logo" width={20} height={20} className="object-contain" />
              <p className="ml-2">5564 ขายแล้ว</p>
            </div>
          </div>
        </div>
        <div className="w-[250px] h-[257px] rounded-[20px] overflow-hidden relative">
          <Image src="/image/products/pubg-image.png" alt="PUBG Image" width={250} height={160} className="object-cover" />
          <div className="ml-2.5">
            <p className="text-sm text-gray-500">PC game</p>
            <p className="mb-0 font-medium">ไอดี: PUBG Battlegrounds</p>
            <div className="flex items-center">
              <Image src="/image/check-logo.png" alt="Check Logo" width={20} height={20} className="object-contain" />
              <p className="ml-2">5564 ขายแล้ว</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}