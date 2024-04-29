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
        <div className="bg-green-200 border border-blue-500 rounded-lg p-6 shadow-md mb-2">
            <h1 className="text-2xl text-black font-bold mb-2">{name}</h1>
            <p className="text-gray-700 mb-2">Username: {username}</p>
            <p className="text-gray-700 mb-2">Company: {company}</p>
            <p className="text-gray-700 mb-2">Contact: {contact}</p>
            
            {children}
        </div>
    );

}

export default Employee