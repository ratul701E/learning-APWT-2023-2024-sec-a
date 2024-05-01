import React, { Children, ReactNode } from 'react'


export interface IUser {
    name: string
    username: string
    phone: string
    address: string
    password?: string
    children?: ReactNode

}

function User({ name, address, phone, username, children }: IUser) {
    return (
        <div className="bg-green-200 border border-blue-500 rounded-lg p-6 shadow-md mb-2">
            <h1 className="text-2xl text-black font-bold mb-2">{name}</h1>
            <p className="text-gray-700 mb-2">Username: {username}</p>
            <p className="text-gray-700 mb-2">Phone: {phone}</p>
            <p className="text-gray-700 mb-2">Address: {address}</p>
            
            {children}
        </div>
    );

}

export default User