'use client'

import Product, { IProduct } from '@/components/Product'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getCookie, setCookie } from "cookies-next"
import { Role } from '../(auth)/login/page'
import DeleteProduct from './api/Delete'
import Popup from 'reactjs-popup'


function AllProduct() {
    const [search, setSearch] = useState('')
    const [product_list, setProduct] = useState<IProduct[]>([])
    const [refresh_list, setRL] = useState(false)
    const router = useRouter()
    const role = getCookie('role')?.toString()

    useEffect(() => {
        async function getAllProduct() {
            const res = await axios.get(process.env.NEXT_PUBLIC_API_ENDPOINT + "/products?search=" + search)
            const products: IProduct[] = res.data
            setProduct(products)

        }
        getAllProduct()
    }, [search, refresh_list])

    const handleDelete = async (product_id: string) => {
        await DeleteProduct(product_id)
        setRL(!refresh_list)
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Products</h1>

            <button onClick={() => router.back()} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Back</button>

            <br />
            {
                role == Role.ADMIN.toString() ?
                    <span className="mb-4">
                        <Link href="/product/add-product" className="text-blue-500 hover:underline">
                            <button className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Add new Product</button>
                        </Link>
                    </span>

                    :
                    <button className="bg-green-500 mt-2 hover:bg-green-700 text-white mr-2 font-bold py-2 px-4  rounded">
                        View Cart
                    </button>

            }

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
                                {
                                    role == Role.ADMIN.toString() ?
                                        <>
                                            <Popup trigger={
                                                <button onClick={() => handleDelete(value.product_id)} className="bg-red-500 hover:bg-red-700 text-white mr-2 font-bold py-2 px-4  rounded">
                                                    Delete
                                                </button>
                                            } position="right top">

                                                <div className="bg-blue-200 border border-blue-500 rounded-lg p-6 shadow-md mb-2">
                                                    <h1 className='text-zinc-950 size- text-center font-semibold text-xl'>Are You Sure?</h1>
                                                    <p className='text-zinc-950 size-'>Product <i><b>{value.product_name}</b></i> will be permanently deleted</p>
                                                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 ml-2 rounded">
                                                        Cancel
                                                    </button>
                                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 ml-2 rounded" onClick={() => {
                                                        DeleteProduct(value.product_id)
                                                        setRL(!refresh_list)
                                                    }}>
                                                        Yes
                                                    </button>

                                                </div>

                                            </Popup>
                                            <Link href={`/product/${value.product_id}/update`}>
                                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded">
                                                    Update
                                                </button>
                                            </Link>
                                        </>

                                        :

                                        <>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white mr-2 font-bold py-2 px-4  rounded">
                                                + Cart
                                            </button>
                                        </>
                                }

                            </Product>
                        )
                    })
                }
            </div>

        </div >

    )
}

export default AllProduct