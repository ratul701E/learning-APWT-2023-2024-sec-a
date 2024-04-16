import React from 'react'

interface info {
    name: string
    phoneNumber: string
    address: string
    email: string
    summary: string
    image: string
}

function Info({name, phoneNumber, address, email, summary, image} : info) {
  return (
    <>
        <img src={image} alt="" style={{ maxWidth: '15%', height: 'auto' }} />
        <h1>{name}</h1>
        <h2>Personal Information</h2>
        <hr />
        <p><b>Phone Number:</b> {phoneNumber}</p>
        <p><b>Address:</b> <address>{address}</address></p>
        <p><b>Email:</b> {email}</p>
        <h2>Summary</h2>
        <hr />
        <summary>{summary}</summary>
    </>
  )
}

export default Info