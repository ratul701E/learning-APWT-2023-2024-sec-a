'use client'

import axios from 'axios'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export interface User {
    username: string;
    name: string;
    phone: string;
    address: string;
    password: string;
    salt: string;
    role: number;
}

function Profile({ params }: { params: { username: string } }) {
    const [user, setUser] = useState<User>()
    const router = useRouter()
    useEffect(() => {
        async function getUserInfo() {
            const res = await axios.get(process.env.NEXT_PUBLIC_API_ENDPOINT + "/users/" + params.username)
            setUser(res.data)
        }
        getUserInfo()
    }, [])

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
                <div className="flex flex-col items-center mb-6">
                    <img src={'/vercel.svg'} alt="Profile" className="border border-black p-2 w-32 h-32 rounded-full mb-4" />
                    <h1 className="text-3xl font-bold mb-2 text-zinc-950">{user?.name || "loading"}</h1>
                    <Link  href={'/profile/' + params.username}>
                        <p className="text-blue-500 underline">@{user?.username || "username"}</p>
                    </Link>
                </div>
                <div className="mb-6">
                    <p className="text-gray-700 mb-2">
                        Phone: {user?.phone || "loading"}
                    </p>
                    <p className="text-gray-700 mb-2">
                        Address: {user?.address || "loading"}
                    </p>
                </div>

                {
                    user?.role == 0 ? 
                    <>
                        <button className="mb-2 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                            Manage Product
                        </button>
                        <button className="mb-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                            Manage Users
                        </button>
                    </>
                    : 

                    <>
                        <Link href="/product">
                            <button className="mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                                Product List
                            </button>
                        </Link>
                        <button className="mb-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                            Cart
                        </button>
                    </>
                }
                <button onClick={() => router.push('/login')} className="mb-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                    Logout
                </button>
            </div>
        </div>

    );
}

export default Profile