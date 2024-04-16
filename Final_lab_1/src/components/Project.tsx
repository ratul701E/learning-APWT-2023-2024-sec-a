import React from 'react'

interface project {
    name: string
    desc: string
    tools: string
}

function Project({ name, desc, tools }: project) {
    return (
        <li>
            <h3 className="project-name">Project Name: {name}</h3>
            <p className="description"><b>Description:</b> {desc}</p>
            <p><b>Languages/Tools Used:</b> {tools}</p>
            <br />
        </li>
    )
}

export default Project