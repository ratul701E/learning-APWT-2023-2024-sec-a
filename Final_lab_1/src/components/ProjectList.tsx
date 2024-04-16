import React from 'react'
import Project from './Project';

function ProjectList() {
    const projects = [
        {
          name: "Professional-Sage (Web-Based Question-Answer Platform for Programmers)",
          desc: "Developed using HTML, PHP, Javascript, CSS and MySQL.",
          tools: "HTML, PHP, Javascript, CSS, MySQL"
        },
        {
          name: "Advance Pharmacy Management System",
          desc: "Desktop Application developed using C# and Microsoft SQL Server.",
          tools: "C#, Microsoft SQL Server"
        },
        {
          name: "Bank Management System",
          desc: "Desktop Application developed using Java Swing and MySQL.",
          tools: "Java Swing, MySQL"
        },
        {
          name: "Space Shooter Game",
          desc: "Developed using C++ and Open GL.",
          tools: "C++, Open GL"
        },
        {
          name: "Mini-Games (Including TIC-TAC-TOE and others)",
          desc: "Developed using Java Swing and MySQL.",
          tools: "Java Swing, MySQL"
        },
        {
          name: "University Management System",
          desc: "Developed using .NET framework and C#.",
          tools: ".NET framework, C#"
        }
      ];
      
  return (
    <ol>
        {
            projects.map((value) => 
                <Project
                    key={value.name}
                    name={value.name}
                    desc={value.desc}
                    tools={value.tools}
                ></Project>
            )
        }
    </ol>
  )
}

export default ProjectList