'use client'

import { IEmployee } from '@/components/Employee'
import axios from 'axios'
import Link from 'next/link'
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { User } from '../../page'
import { useRouter } from 'next/navigation'

function update() {

}

function updateEmployee({params} : {params: {employee_id: string}} ) {
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [contact, setContact] = useState('')
  const [username, setUsername] = useState('')
  const [_username, _setUsername] = useState('')
  const [msg, setMsg] = useState('')
  const [usernameExist, setUsernameExist] = useState(false)
  const router = useRouter()


  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    //validation

    if(!name || !company || !username || !contact) {
      setMsg('Fields cannot be empty')
    }
    else if(username.length < 4) setMsg("Uesername must be 4 or more char long") 
    else if(usernameExist) return
    else {
      setMsg('')
      submitForm()
    }
  
  }

  const submitForm = async () => {
    const formData = new FormData()
    formData.append('fullname', name) 
    formData.append('username', username) 
    formData.append('contact', contact) 
    formData.append('company', company) 

    const response = await axios.patch(process.env.NEXT_PUBLIC_API_ENDPOINT+"/user/" + _username, formData, {
        headers: {
            //'Content-Type': 'multipart/form-data'
            'Content-Type': 'application/json'
        }
    })

    console.log(response.data)
    if(response.data == true) {
        router.push('/employee')
    }
    else {
        setMsg("Something is wrong. Try again")
    }
    
  }

  useEffect(() => {
    const isUserExist = async () => {
      const res = await axios.get(process.env.NEXT_PUBLIC_API_ENDPOINT + "/auth/isUsernameExist/" + username)
      if (res.data == true && username !== _username) {
        setMsg('Username already exist')
        setUsernameExist(true)
      }
      else {
        setMsg('')
        setUsernameExist(false)
      }
    }
    if(username) isUserExist()
    else setMsg('')
  }, [username]) 

  useEffect(() => {
    async function getUser() {
        const res = await axios.get(process.env.NEXT_PUBLIC_API_ENDPOINT + "/user/" + params.employee_id)
        const employee : User = res.data
        setName(employee.fullname)
        setCompany(employee.company)
        setContact(employee.contact)
        setUsername(employee.username)
        _setUsername(employee.username)
    }
    getUser()
}, [])

  return (
    <div className="max-w-md mx-auto p-6 bg-white mt-20 rounded-md shadow-md">
      <h1 className="text-2xl font-bold text-black mb-4">Update Employee</h1>
      <p className="text-gray-600 mb-4">Employee details</p>

      {
        msg &&
        <div className=''>
            <p className='block text-red-500 p-2 font-light'>{msg}</p>
        </div>
      }

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Name:</label>
          <input type="text" id="name" value={name} className="w-full text-zinc-950 border border-black-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" onChange={(event) => setName(event.target.value)} />
        </div>
        <div className="mb-4">
          <label htmlFor="company" className="block text-gray-700">Company:</label>
          <input type="text" id="company" value={company} className="w-full text-zinc-950 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" onChange={(event) => setCompany(event.target.value)} />
        </div>
        <div className="mb-4">
          <label htmlFor="contact" className="block text-gray-700">Contact:</label>
          <input type="text" id="contact" value={contact} className="w-full text-zinc-950 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" onChange={(event) => setContact(event.target.value)} />
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">Username:</label>
          <input type="text" id="username" value={username} className="w-full text-zinc-950 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" onChange={(event) => setUsername(event.target.value)} />
        </div>
        <div className="flex justify-end">
          <Link href={'/employee'}>
            <button className="bg-gray-300 mr-2 hover:bg-red-400 text-gray-800 font-bold py-2 px-4 rounded">Cancel</button>
          </Link>
          <button onClick={() => update()} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Update
          </button>
        </div>
      </form>

    </div>

  )

}

export default updateEmployee