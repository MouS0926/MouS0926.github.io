import React from 'react'
import img from "../image/ab2.gif"
import styled from "styled-components"
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-scroll";
import { HiDownload } from 'react-icons/hi';
import resume from '../resume/Moumita-Sarkar-Resume.pdf'


export const About = () => {



  const handleDownload = () => {
   
    const link = document.createElement('a');
    
   
    link.href = 'https://drive.google.com/uc?export=download&id=1bEonWvKeXAwk48PT79geIm2AVjFeYrEF';
    
   
    link.setAttribute('download', 'your-resume.pdf');
    link.setAttribute('target', '_blank');
   
    link.click();
  };


 


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
     An ambitious and dedicated Full Stack Web Developer driven to explore diverse tech stacks and environments prevalent in the industry. 
     Proficient in the MERN stack, eager to embark on a rewarding career with an organization that fosters continuous skill improvement and growth in 
     alignment with its objectives. Additionally, adept in prompt engineering and utilizing generative AI for accelerated learning of new stacks within a shorter timeframe

     </p>

<div className='abtContact'>
    
      <a href="https://www.linkedin.com/in/moumita-sarkar-9ab10318b/" target='__blank'  id="contact-linkedin"><div> <BsLinkedin /></div></a>
  
      <a href="https://github.com/MouS0926" target='__blank' id="contact-github"><div><BsGithub/></div></a>
      <a href="mailto:sarkarmoumita314@gmail.com" id="contact-email"><div><BiLogoGmail/></div></a>
      

      
      <a href="https://drive.google.com/file/d/1O2MNobDtkiAiwXVWFvLr5Ce_4W3PG7x6/view?usp=sharing" target="__blank"  download>
            <button className="resumeBtn"  id="resume-button-1" onClick={handleDownload}>
                Resume <HiDownload/>
                </button>
                
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

.resumeBtn{
  background-color: #3e4289;
    padding: 17px 40px;
   border: 0;
    border-radius: 5px;
    font-size: 22px;
    color: #fff;
    box-shadow: rgb(50 50 106 / 25%) 0px 13px 27px -5px, rgb(7 7 8 / 78%) 0px 8px 16px -8px;
}

@media screen and (min-device-width: 320px) and (max-device-width: 480px)


{


  section{
    height: auto;
  }
  .abtContact a div {
    padding: 17px 17px;
    font-size: 20px;
}

.abtContainer {
    display: flex;
    flex-direction: column;
    width: 90%;
    padding: 10px 2px;
}

.ab-content {
    width: 100%;
    font-size: 19px;
    
   
}
.ab-img {
    width: 100%;
}

 .resumeBtn {
    background-color: #3e4289;
    padding: 10px 24px;
    font-size: 16px;
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
.ab-content {
    width: 100%;
    font-size: 18px;
   
}
.ab-img {
    width: 100%;
}
.abtContainer {
    display: flex;
    flex-direction: column;
    width: 90%;
    padding: 10px 2px;
}
}
`