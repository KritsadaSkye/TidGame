"use client"

import { useEffect, useState } from 'react'
import axios from 'axios'
import { Header } from '@/app/components/Header/Header'
import { Nav } from '@/app/components/Nav/Nav'
import { Products } from '@/app/components/Products/Products'
import { Product } from '@/app/types/product'

export default function ProductsPage() {

  const [products, setProducts] = useState([])

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
  }, [])

  return (
    <>
      <div className="sticky top-0 z-10">
        <Header />
        <Nav />
      </div>
      <main className="grid mt-16 grid-cols-4 justify-items-center gap-x-10 gap-y-14 pl-40 pr-40 pb-1000">
        {products.map((product: Product) => {
          return (<Products key={product.id} product={product} />)
        })
        }
      </main>
    </>
  );
}