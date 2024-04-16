import React from 'react'
import Info from './Info'
import QualificationList from './QualificationList'
import SkillList from './SkillList'
import ProjectList from './ProjectList'
import default_dp from '../assets/default.png'

function CV() {
  return (
    <>
        <Info 
            image = {default_dp}
            name='MD Asraful Alam' 
            phoneNumber='01952365874'
            email='ratulratul@gmail.com'
            summary='As a third-year student with a strong foundation in
            programming, I am passionate about pursuing a career
            as a software engineer. My academic journey has
            equipped me with valuable knowledge and skills, and I
            am eager to apply these in real-world software
            development projects. I am highly motivated to
            continue learning and growing in the field of software
            engineering'
            address=' 1, Road 01, Dakshin
            Gaon,
            Paschimpara,Sabujbag,
            Dhaka - 1214,Bangladesh'
        />
        <h2>Educational Qualification</h2>
        <hr />
        <QualificationList/>
        <h2>Skills</h2>
        <hr />
        <SkillList/>
        <h2>Projects</h2>
        <hr />
        <ProjectList/>


    </>
  )
}

export default CV