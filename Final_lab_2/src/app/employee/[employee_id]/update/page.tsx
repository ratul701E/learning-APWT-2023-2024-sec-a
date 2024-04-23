'use client'

import { IEmployee } from '@/components/Employee'
import Link from 'next/link'
import React, { useState } from 'react'

function update() {

}

function updateEmployee() {

  const employee: IEmployee = { // fetch through id
    name: "ratul",
    company: "xyz",
    contact: "ratul@gmail.com",
    username: "thisisratul",
    password: 'ratulratul'
  }

  const [name, setName] = useState(employee.name)
  const [company, setCompany] = useState(employee.company)
  const [contact, setContact] = useState(employee.contact)
  const [username, setUsername] = useState(employee.username)
  const [password, setPassword] = useState(employee.password)

  return (
    <div className="max-w-md mx-auto p-6 bg-white mt-20 rounded-md shadow-md">
      <h1 className="text-2xl font-bold text-black mb-4">Update Employee</h1>
      <p className="text-gray-600 mb-4">Employee details</p>

      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">Name:</label>
        <input type="text" id="name" value={name} className="w-full border border-black-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" onChange={(event) => setName(event.target.value)} />
      </div>
      <div className="mb-4">
        <label htmlFor="company" className="block text-gray-700">Company:</label>
        <input type="text" id="company" value={company} className="w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" onChange={(event) => setCompany(event.target.value)} />
      </div>
      <div className="mb-4">
        <label htmlFor="contact" className="block text-gray-700">Contact:</label>
        <input type="text" id="contact" value={contact} className="w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" onChange={(event) => setContact(event.target.value)} />
      </div>
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700">Username:</label>
        <input type="text" id="username" value={username} className="w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" onChange={(event) => setUsername(event.target.value)} />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700">Password:</label>
        <input type="password" id="password" value={password} className="w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" onChange={(event) => setPassword(event.target.value)} />
      </div>
      <div className="flex justify-end">
        <Link href={'/employee'}>
          <button className="bg-gray-300 mr-2 hover:bg-red-400 text-gray-800 font-bold py-2 px-4 rounded">Cancel</button>
        </Link>
        <button onClick={() => update()} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Update
        </button>
      </div>

    </div>

  )

}

export default updateEmployee