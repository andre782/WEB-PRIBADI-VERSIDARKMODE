import React from 'react'
import Frontend from "./Frontend"

const Skill = () => {
  return (
    <section className='skill_section' id='skill'>
        <h2 className='section__title'>Skill</h2>
        <span className='section__subtitle'>My Technical Level</span>

        <div className="skills__container container grid">
            <Frontend/>
        </div>
    </section>
  )
}

export default Skill