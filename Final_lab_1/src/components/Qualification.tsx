import React from 'react'

interface qualification_info {
    degree: string
    institue: string
    graduation_year: string
    cgpa: number
}

function Qualification({degree, institue, graduation_year, cgpa} : qualification_info) {
  return (
    <li>
        <div className="qualification">
            <p className="degree"><b>Degree Name:</b> {degree}</p>
            <p className="institute"><b>Institute Name: </b>{institue}</p>
            <p><b>Graduation Year:</b> {graduation_year}</p>
            <p><b>GPA/CGPA:</b> {cgpa}</p>
        </div>
    </li>
  )
}

export default Qualification