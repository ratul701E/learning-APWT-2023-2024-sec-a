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

        <div className="w-1/5 h-70 border border-gray-300 bg-gradient-to-br from-orange-200 to-orange-100 rounded-lg p-4 m-2 relative shadow-md">
            <img src={'/next.svg'} alt="Profile" className="border border-black p-2 w-32 h-32 rounded-full mb-4 float-right" />
            <h2 className="text-gray-800 text-xl mb-3 font-semibold">{product_name}</h2>
            <p className="text-gray-700 mb-2"><b>Product ID:</b> {product_id}</p>
            <p className="text-gray-700 mb-2 line-clamp-2">{description}</p>
            <p className="text-gray-700 mb-2"><b>Price:</b> ${price}</p>
            <p className="text-gray-700 mb-10"><b>Quantity:</b> {quantity}</p>
            <div className='absolute bottom-2 right-2'>
                {children}
            </div>
        </div>


    )

}

export default Product