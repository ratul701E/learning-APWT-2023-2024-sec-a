import React from 'react'
import Skill from './Skill'

function SkillList() {
    const skillList = ["Java", "C++", "Rust", "Python", "Javascript", "C#"]
  return (
    <div>
        <ul>
            {
                skillList.map((value) => 
                    <Skill
                        key={value}
                        name={value}
                    ></Skill>
                )
            }
        </ul>
    </div>
  )
}

export default SkillList