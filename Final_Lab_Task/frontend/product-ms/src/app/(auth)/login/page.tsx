'use client'

import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { SyntheticEvent, useEffect, useState } from 'react'

export interface LOGIN_RESPONSE {
    status: boolean,
    username: string,
    role: string
}

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [msg, setMsg] = useState('')
    const router = useRouter()

    
    //console.log(process.env.NEXT_PUBLIC_API_ENDPOINT)

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
        //validation
        if(!username || !password) setMsg('Field cannot be empty')
        else if(username.length < 4) setMsg("Uesername must be 4 or more char long") 
        else if(password.length < 8) setMsg("Password must be 8 or more char long") 
        else {
            setMsg('')
            submitForm()
        }
        
    }

    const submitForm = async () => {
        const formData = new FormData()
        formData.append('username', username) 
        formData.append('password', password) 

        const response = await axios.post(process.env.NEXT_PUBLIC_API_ENDPOINT+"/auth/signin/", formData, {
            headers: {
                //'Content-Type': 'multipart/form-data'
                'Content-Type': 'application/json'
            }
        })

        const response_data : LOGIN_RESPONSE = response.data
        console.log(response_data)
        if(response_data.status == true) {
            setMsg('')
            router.push('/profile/' + response_data.username)
        }
        else {
            setMsg("Wrong username or password.")
        }
        
    }

    return (
        <div className="max-w-sm mx-auto p-6 bg-white mt-20 rounded-md shadow-md">
            <div className='mb-4 text-center'>
                <span className='block text-zinc-950 font-semibold text-4xl'>Login</span>
            </div>
            <form onSubmit={handleSubmit}>
                {
                    msg &&
                    <div className=''>
                        <p className='block text-red-500 p-2 font-light'>{msg}</p>
                    </div>
                }
                <div className="mb-4">
                    <label htmlFor="username" className="block text-zinc-950 text-lg font-light">Username</label>
                    <input type="text" value={username} id="username" className="w-full border text-zinc-950 p-2 border-zinc-950 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" onChange={(event) => setUsername(event.target.value)} />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-zinc-950 text-lg font-light">Password</label>
                    <input type="password" value={password} id="password" className="w-full border text-zinc-950 p-2 border-zinc-950 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" onChange={(event) => setPassword(event.target.value)} />
                </div>

                <div className='mb-4'>
                    <button type='submit' className='w-full mt-2 bg-blue-500 mr-2 hover:bg-blue-800 text-white-800 font-bold py-2 px-4 rounded'>Login</button>
                </div>
            </form>
            
            <div className='mb-4'>
                <Link href={''} className='block underline text-blue-900'>Forget Password?</Link>
            </div>
        </div>
    )
}

export default Login