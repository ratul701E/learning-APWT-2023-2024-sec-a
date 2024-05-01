import axios from 'axios'
import React from 'react'

async function DeleteProduct(product_id: string) {
    const res = await axios.delete(process.env.NEXT_PUBLIC_API_ENDPOINT + "/products/"+product_id)
    return res.data
}

export default DeleteProduct