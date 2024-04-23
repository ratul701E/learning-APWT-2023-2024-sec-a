"use client"

import Link from "next/link"
import { useState } from "react"


function addEmpleyee() {

}


function addNewEmployee() {
    const [name, setName] = useState('')
    const [company, setCompany] = useState('')
    const [contact, setContact] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confrimPassword, setConfirmPassword] = useState('')

    return (
        <div className="max-w-md mx-auto p-6 bg-white mt-20 rounded-md shadow-md">
            <h1 className="text-2xl font-bold text-black mb-4">Add New Employee</h1>
            <p className="text-gray-600 mb-4">Enter employee details</p>

            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Name:</label>
                <input type="text" value={name} id="name" className="w-full border border-black-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" onChange={(event) => setName(event.target.value)} />
            </div>
            <div className="mb-4">
                <label htmlFor="company" className="block text-gray-700">Company:</label>
                <input type="text" value={company} id="company" className="w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" onChange={(event) => setCompany(event.target.value)} />
            </div>
            <div className="mb-4">
                <label htmlFor="contact" className="block text-gray-700">Contact:</label>
                <input type="text"  value={contact} id="contact" className="w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" onChange={(event) => setContact(event.target.value)} />
            </div>
            <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700">Username:</label>
                <input type="text" value={username} id="username" className="w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" onChange={(event) => setUsername(event.target.value)} />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700">Password:</label>
                <input type="password" value={password} id="password" className="w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" onChange={(event) => setPassword(event.target.value)} />
            </div>
            <div className="mb-4">
                <label htmlFor="confirm-password" className="block text-gray-700">Confirm Password:</label>
                <input type="password" value={confrimPassword} id="confirm-password" className="w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" onChange={(event) => setConfirmPassword(event.target.value)} />
            </div>
            <div className="flex justify-end">
                <Link href={'/employee'}>
                    <button className="bg-gray-300 mr-2 hover:bg-red-400 text-gray-800 font-bold py-2 px-4 rounded">Cancel</button>
                </Link>
                <button onClick={()=> addEmpleyee()} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Add
                </button>
            </div>

        </div>

    )
}

export default addNewEmployee