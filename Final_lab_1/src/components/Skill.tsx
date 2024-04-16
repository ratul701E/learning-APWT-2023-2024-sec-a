import React from 'react'

interface skill {
    name: string
}
function Skill({name} : skill) {
  return (
    
    <li>
        {name}
    </li>
  )
}

export default Skill