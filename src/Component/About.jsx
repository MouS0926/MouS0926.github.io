import React from 'react'
import img from "../image/ab2.gif"
import styled from "styled-components"
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-scroll";
import { HiDownload } from 'react-icons/hi';
import resume from '../resume/Moumita-Sarkar-Resume.pdf'


export const About = () => {


  const resumeUrl = 'https://drive.google.com/file/d/1bEonWvKeXAwk48PT79geIm2AVjFeYrEF/view?usp=sharing';
  


 


  return (
    <DIV className='abtContainer about section'>
      <div className='ab-img'>
        <img src={img} alt="about-img" />
      </div>


   
      <div className='ab-content' id="user-detail-intro">
        <div className='aboutCap'> 
          <p> <span>ABOUT</span>  ME</p>
        </div> 

     <p>
     An ambitious and dedicated Full Stack Web Developer driven to explore diverse tech 
      stacks and environments prevalent in the industry. Proficient in the MERN stack,
       eager to embark on a rewarding career with an organization that 
      fosters continuous skill improvement and growth in alignment with its objectives.

     </p>

<div className='abtContact'>
    
      <a href="https://www.linkedin.com/in/moumita-sarkar-9ab10318b/" target='__blank'  id="contact-linkedin"><div> <BsLinkedin /></div></a>
  
      <a href="https://github.com/MouS0926" target='__blank' id="contact-github"><div><BsGithub/></div></a>
      <a href="mailto:sarkarmoumita314@gmail.com" id="contact-email"><div><BiLogoGmail/></div></a>
      

        <a href="https://drive.google.com/file/d/1bEonWvKeXAwk48PT79geIm2AVjFeYrEF/view?usp=sharing" target="_blank"  id="resume-button-2"  download>
          <div>
            Resume
             </div>

           
        </a>


      
{/* 
      <a href={resume} target="_blank"  id="resume-button-2" download>
      <button  >
      Download Resume
    </button>
      </a> */}

  
      
</div>

      </div>
    </DIV>
  )
}
const DIV=styled.div`
@media screen and (min-device-width: 320px) and (max-device-width: 480px)


{


  section{
    height: auto;
  }
  .abtContact a div {
    padding: 17px 17px;
    font-size: 20px;
}
}

@media screen and (min-device-width: 481px) and (max-device-width: 576px)
{

  section{
    height: auto;
  }
  .abtContact a div {
    padding: 17px 17px;
    font-size: 20px;
}


.abtContact {
    display: flex;
    justify-content: space-around;
    gap: 5px;
    flex-wrap: wrap;
}
}
`