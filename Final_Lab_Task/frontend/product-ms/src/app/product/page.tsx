'use client'

import Product, { IProduct } from '@/components/Product'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { User } from '../profile/[username]/page'

function AllProduct() {
    const [search, setSearch] = useState('')
    const [product_list, setProduct] = useState<IProduct[]>([])
    const [refresh_list, setRL] = useState(false)

    useEffect(() => {
        async function getAllProduct() {
            const res = await axios.get(process.env.NEXT_PUBLIC_API_ENDPOINT + "/products?search=" + search)
            const products: IProduct[] = res.data
            setProduct(products)

        }
        getAllProduct()
    }, [search, refresh_list])

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Products</h1>
            <Link href={'/'}>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Back</button>
            </Link>
            <br />
            <span className="mb-4">
                <Link href="/product/add-product" className="text-blue-500 hover:underline">
                    <button className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Add new Product</button>
                </Link>
            </span>
            <h2 className="text-xl font-bold text-center mb-2">All Prodcuts</h2>

            <div className="p-5 mx-auto my-auto text-center">
                <input type="text" value={search} onChange={(event) => setSearch(event.target.value)} id="search" placeholder="Product Name" className="w-full text-black sm:w-auto border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2" />
            </div>
            <div className='flex flex-wrap justify-left'>
                {
                    product_list.map((value) => {
                        return (
                            <Product
                                key={value.product_id}
                                product_id={value.product_id}
                                product_name={value.product_name}
                                description={value.description}
                                price={value.price}
                                quantity={value.quantity}
                            >
                                <button className="bg-red-500 hover:bg-red-700 text-white mr-2 font-bold py-2 px-4  rounded">
                                    Delete
                                </button>
                                <Link href={`/product/${value.product_id}/update`}>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded">
                                        Update
                                    </button>
                                </Link>

                            </Product>
                        )
                    })
                }
            </div>

        </div >

    )
}

export default AllProduct