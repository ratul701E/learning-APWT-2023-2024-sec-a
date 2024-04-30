import React, { ReactNode } from 'react'


export interface IProduct {
    product_id: string
    product_name: string
    description: string
    price: number
    quantity: number
    children?: ReactNode
}

function Product({ product_id, product_name, description, price, quantity, children }: IProduct) {
    return (

        <div className="w-80 h-60 border border-gray-300 bg-orange-200 rounded p-4 m-2">
            <h2 className="text-zinc-950 text-xl mb-3 font-semibold">{product_name}</h2>
            <p className="text-zinc-950 mb-2"><b>Product ID:</b> {product_id}</p>
            <p className="text-zinc-950 mb-2">{description}</p>
            <p className="text-zinc-950 mb-2"><b>Price:</b> ${price}</p>
            <p className="text-zinc-950 mb-2"><b>Quantity:</b> {quantity}</p>
            {
                children
            }
        </div>
    );
}

export default Product