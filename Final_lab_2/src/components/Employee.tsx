import React, { Children, ReactNode } from 'react'

export interface IEmployee {
    name: string
    company: string
    contact: string
    username: string
    password?: string
    children?: ReactNode

}

function Employee({ name, company, contact, username, children }: IEmployee) {
    return (
        <div className="bg-purple-100 rounded-lg p-6 shadow-md">
            <h1 className="text-2xl text-black font-bold mb-2">Employee Name: {name}</h1>
            <p className="text-gray-700 mb-2">Company: {company}</p>
            <p className="text-gray-700 mb-2">Contact: {contact}</p>
            <p className="text-gray-700 mb-2">Username: {username}</p>
            {children}
        </div>
    );

}

export default Employee