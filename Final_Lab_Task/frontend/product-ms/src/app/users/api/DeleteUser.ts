import axios from 'axios'
import React from 'react'

async function DeleteUser(username: string) {
    const res = await axios.delete(process.env.NEXT_PUBLIC_API_ENDPOINT + "/users/"+username)
    return res.data
}

export default DeleteUser