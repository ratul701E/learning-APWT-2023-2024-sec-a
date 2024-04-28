'use client'

import Employee from '@/components/Employee'
import Link from 'next/link'
import React, { useState } from 'react'

function allEmployee() {
    const [search, setSearch] = useState('')
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Employees</h1>
            <Link href={'/'}>
                <button className='bg-grey-600'>Back</button>
            </Link>
            <span className="mb-4">
                <Link href="/employee/add_employee" className="text-blue-500 hover:underline">Add new employee</Link>
            </span>
            <h3 className="text-lg font-bold text-center mb-2">All Employees</h3>

            <div className="p-5 mx-auto my-auto text-center">
                <input type="text" value={search} onChange={(event) => setSearch(event.target.value)} id="search" placeholder="name/username/company" className="w-full text-black sm:w-auto border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            </div>

            {/* Loop through the received JSON (API call here) */}
            <Employee
                key="thisisratul"
                name="ratul"
                company="xyz"
                contact="ratul@gmail.com"
                username="thisisratul"
            >

                <Link href="/employee/thisisratul/update">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Update
                    </button>
                </Link>

                <Link href="/employee/thisisratul/delete">
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 ml-2 rounded">
                        Delete
                    </button>
                </Link>
            </Employee>
        </div >

    )
}

export default allEmployee