import React from 'react'
import Qualification from './Qualification'

function QualificationList() {
    const qualification = [
        {
            degree: "HSC",
            institue: "Sabujbagh Govt. College",
            gYear: "2020",
            cgpa: 5.00
        },
        {
            degree: "BSc in CSE",
            institue: "American International University Bangladesh",
            gYear: "2024",
            cgpa: 4.00
        },
    ]

    return (
        <>
            <ul>
                {
                    qualification.map((value) =>
                        <Qualification
                            key={value.degree}
                            degree={value.degree}
                            graduation_year={value.gYear}
                            institue={value.institue}
                            cgpa={value.cgpa}
                        ></Qualification>
                    )
                }
            </ul>
        </>
    )
}

export default QualificationList