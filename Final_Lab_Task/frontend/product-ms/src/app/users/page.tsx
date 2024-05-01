'use client'

import axios from 'axios'
import Link from 'next/link'
import Popup from 'reactjs-popup'
import React, { useEffect, useState } from 'react'
import User from '@/components/User'
import DeleteUser from './api/DeleteUser'
import { useRouter } from 'next/navigation'
import { Role } from '../(auth)/login/page'

export interface User {
    username: string
    password: string
    name: string
    address: string
    role: string
    phone: string
}

function allUsers() {
    const [search, setSearch] = useState('')
    const [employees, setEmployees] = useState<User[]>([])
    const [refresh_list, setRL] = useState(false)
    const router = useRouter()

    useEffect(() => {
        async function getallUsers() {
            const res = await axios.get(process.env.NEXT_PUBLIC_API_ENDPOINT + "/users?search=" + search)
            const employees: User[] = res.data
            setEmployees(employees)

        }
        getallUsers()
    }, [search, refresh_list])

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Users</h1>

            <button onClick={() => router.back()} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Back</button>

            <br />
            <h2 className="text-xl font-bold text-center mb-2">All Users</h2>

            <div className="p-5 mx-auto my-auto text-center">
                <input type="text" value={search} onChange={(event) => setSearch(event.target.value)} id="search" placeholder="Type name" className="w-full text-black sm:w-auto border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2" />
            </div>

            {/* Loop through the received JSON (API call here) */}
            {/* {employee_list} */}
            {
                employees.map((value) => {
                    if(value.role == Role.ADMIN.toString()) return // only customer
                    return (
                        <User
                            key={value.username}
                            name={value.name}
                            phone={value.phone}
                            address={value.address}
                            username={value.username}
                        >
                            <Link href={`/users/${value.username}/update`}>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Update
                                </button>
                            </Link>

                            <Popup trigger={
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 ml-2 rounded">
                                    Delete
                                </button>
                            } position="right top">

                                <div className="bg-blue-200 border border-blue-500 rounded-lg p-6 shadow-md mb-2">
                                    <h1 className='text-zinc-950 size- text-center font-semibold text-xl'>Are You Sure?</h1>
                                    <p className='text-zinc-950 size-'>User <i><b>{value.username}</b></i> will be permanently deleted</p>
                                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 ml-2 rounded">
                                        Cancel
                                    </button>
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 ml-2 rounded" onClick={() => {
                                        DeleteUser(value.username)
                                        setRL(!refresh_list)
                                    }}>
                                        Yes
                                    </button>

                                </div>

                            </Popup>
                        </User>
                    )
                })
            }

        </div >

    )
}

export default allUsers