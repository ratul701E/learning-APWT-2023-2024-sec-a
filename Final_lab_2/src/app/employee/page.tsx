'use client'

import Employee from '@/components/Employee'
import axios from 'axios'
import Link from 'next/link'
import Popup from 'reactjs-popup'
import React, { useEffect, useState } from 'react'
import deleteEmployee from './[employee_id]/delete/page'

export interface User {
    username: string
    password: string
    fullname: string
    company: string
    role: string
    contact: string
}

function allEmployee() {
    const [search, setSearch] = useState('')
    const [employees, setEmployees] = useState<User[]>([])
    const [refresh_list, setRL] = useState(false)

    useEffect(() => {
        async function getAllEmployee() {
            const res = await axios.get(process.env.NEXT_PUBLIC_API_ENDPOINT + "/user?search=" + search)
            const employees : User[] = res.data
            setEmployees(employees)

        }
        getAllEmployee()
    }, [search, refresh_list])

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Employees</h1>
            <Link href={'/'}>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Back</button>
            </Link>
            <br />
            <span className="mb-4">
                <Link href="/employee/add_employee" className="text-blue-500 hover:underline">
                    <button className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Add new employee</button>
                </Link>
            </span>
            <h2 className="text-xl font-bold text-center mb-2">All Employees</h2>

            <div className="p-5 mx-auto my-auto text-center">
                <input type="text" value={search} onChange={(event) => setSearch(event.target.value)} id="search" placeholder="name/username/company" className="w-full text-black sm:w-auto border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2" />
            </div>

            {/* Loop through the received JSON (API call here) */}
            {/* {employee_list} */}
            {
                employees.map((value) => {
                    return (
                        <Employee
                            key= {value.username}
                            name= {value.fullname}
                            company= {value.company}
                            contact= {value.contact}
                            username= {value.username}
                        >
                            <Link href={`/employee/${value.username}/update`}>
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
                                        deleteEmployee(value.username)
                                        setRL(!refresh_list)

                                    }}>
                                        Yes
                                    </button>

                                </div>
                
                            </Popup>
                        </Employee>
                    )
                })
            }
            
        </div >

    )
}

export default allEmployee