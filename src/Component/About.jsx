import React from 'react'
import img from "../image/about.jpg"
export const About = () => {
  return (
    <div className='abtContainer'>
      <div className='ab-img'>
        <img src={img} alt="about-img" />
      </div>
      <div className='ab-content' id="user-detail-intro">

      An ambitious and dedicated Full Stack Web Developer driven to explore diverse tech 
      stacks and environments prevalent in the industry. Proficient in the MERN stack,
       eager to embark on a rewarding career with an organization that 
      fosters continuous skill improvement and growth in alignment with its objectives.
      </div>
    </div>
  )
}
