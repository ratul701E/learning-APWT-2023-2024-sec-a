'use client'
import axios from 'axios'
import Link from 'next/link'
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Product, { IProduct } from '@/components/Product'


function addEmployee({params} : {params: {product_id: string}} ) {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [msg, setMsg] = useState('')
  const router = useRouter()


  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    //validation

    if(!name || !description  || !price || !quantity) {
      setMsg('Fields cannot be empty')
    }
    else if(name.length < 4) setMsg("Name be 4 or more char long") 
    else if(description.length < 10) setMsg("Address is too short") 
    else {
      setMsg('')
      submitForm()
    }
  
  }

  const submitForm = async () => {
    const formData = new FormData()
    formData.append('product_name', name) 
    formData.append('description', description) 
    formData.append('quantity', quantity.toString()) 
    formData.append('price', price.toString()) 

    const response = await axios.post(process.env.NEXT_PUBLIC_API_ENDPOINT+"/products/", formData, {
        headers: {
            //'Content-Type': 'multipart/form-data'
            'Content-Type': 'application/json'
        }
    })

    if(response.data == true) {
        router.push('/product')
    }
    else {
        setMsg("Something is wrong. Try again")
    }
    
  }


  return (
    <div className="max-w-md mx-auto p-6 bg-white mt-20 rounded-md shadow-md">
      <h1 className="text-2xl font-bold text-black mb-4">Add Product</h1>
      <p className="text-gray-600 mb-4">Product details</p>

      {
        msg &&
        <div className=''>
            <p className='block text-red-500 p-2 font-light'>{msg}</p>
        </div>
      }

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Name:</label>
          <input type="text" id="name" value={name} className="w-full text-zinc-950 border border-black-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2" onChange={(event) => setName(event.target.value)} />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700">Description:</label>
          <textarea id="description" rows={5} value={description} className="w-full text-zinc-950 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2" onChange={(event) => setDescription(event.target.value)} />
        </div>
        <div className="mb-4">
          <label htmlFor="Quantity" className="block text-gray-700">Quantity:</label>
          <input type="number" id="Quantity" value={quantity} className="w-full text-zinc-950 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2" onChange={(event) => setQuantity(event.target.value)} />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700">Price:</label>
          <input type="number" id="username" value={price} className="w-full text-zinc-950 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2" onChange={(event) => setPrice(event.target.value)} />
        </div>
        <div className="flex justify-end">
          <Link href={'/product'}>
            <button className="bg-gray-300 mr-2 hover:bg-red-400 text-gray-800 font-bold py-2 px-4 rounded">Cancel</button>
          </Link>
          <button  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Add
          </button>
        </div>
      </form>

    </div>

  )

}

export default addEmployee