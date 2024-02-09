import React from 'react'
import styled from "styled-components"
import wish from "../image/wish.jpeg"
import sarthi from "../image/sarthi.jpeg"
import immunax from "../image/immunax.jpeg"
import pnc from "../image/PnC.jpeg"
import arthub from "../image/arthub.jpeg"
import bookhubx from "../image/BookhubX.jpeg"

import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";


export default function Project() {
  return (
    <DIV>
      <div className='projCap'> 
        <p> <span>MY</span>  PROJECTS</p>
      </div> 

    <div className="projectdiv ">



    <div className='project-card'>
        <img src={arthub} alt="arthub"  />
        <h5 className='project-title'>💻 ARTHUB 💻</h5>
        <p className='project-description'>
         A friendly online platform where creators share their creativity through diverse categories like photography, digital art, and more.
         
         </p>
        <h5 className='project-tech-stack'><span>Tech Stacks : </span> React , React-Redux , TypeScript , Chakra UI , Styled-components, Node JS , Expres JS , MongoDB</h5>
         <hr />
          <span className="linkdiv">
              <a href="https://github.com/MouS0926/ARTHUB--Image-posting-website-" target='_blank' className='project-github-link' rel="noreferrer"> <BsGithub/></a>
              <a href="https://arthub-rosy.vercel.app/" target='_blank' className='project-deployed-link' rel="noreferrer"> <FiExternalLink/></a>
          </span>
      
       </div>

       <div className='project-card'>
        <img src={bookhubx} alt="bookhubx"  />
        <h5 className='project-title'>💻 BookHubX 💻</h5>
        <p className='project-description'>
        BookHubX: A unique platform combining a bookstore with a vibrant reading community. Discover, 
        purchase, and engage with books. Intelligent chatbot for personalized recommendations.
         
         </p>
        <h5 className='project-tech-stack'><span>Tech Stacks : </span> Angular , Telwind Css , Node JS , Expres JS , MongoDB, OpenAI</h5>
         <hr />
          <span className="linkdiv">
              <a href="https://github.com/MouS0926/BookHubX" target='_blank' className='project-github-link' rel="noreferrer"> <BsGithub/></a>
              <a href="https://book-hub-x.vercel.app/" target='_blank' className='project-deployed-link' rel="noreferrer"> <FiExternalLink/></a>
          </span>
      
       </div>


      <div className='project-card'>
        <img src={pnc} alt=""  />
        <h5 className='project-title'>💻 Precious &amp; Charms 💻</h5>
        <p className='project-description'>Precious Charms is an e-commerce website specializing in jewelry, watches, and accessories. utilize sorting and filtering, and effortlessly
          add items to your cart and wishlist. Have payments method and confirm order option.</p>
        <h5 className='project-tech-stack'><span>Tech Stacks : </span> React , React-Redux , TypeScript , Chakra UI , Styled-components </h5>
         <hr />
          <span className="linkdiv">
              <a href="https://github.com/MouS0926/Precious-And-Charms-Ecommerce" target='_blank' className='project-github-link' rel="noreferrer"> <BsGithub/></a>
              <a href="https://precious-and-charms-one.vercel.app/" target='_blank' className='project-deployed-link' rel="noreferrer"> <FiExternalLink/></a>
          </span>
      
       </div>

       <div className='project-card'>
        <img src={sarthi} alt=""  />
        <h5 className='project-title'>💻 SARTHI TRAVEL 💻</h5>
        <p className='project-description'>SARTHI TRAVEL is a website for a travel agency. The website contains details about tourist destinations, tour packages. This website allow people to
              book their dream destination with in their budgets.</p>
        <h5 className='project-tech-stack'><span>Tech Stacks : </span> HTML, CSS , JavaScript,Bootstrap </h5>
         <hr />
          <span className="linkdiv">
              <a href="https://github.com/MouS0926/mountainous-sidewalk-9735" target='_blank' className='project-github-link' rel="noreferrer"> <BsGithub/></a>
              <a href="https://sarthitravel.netlify.app/" target='_blank' className='project-deployed-link'> <FiExternalLink/></a>
          </span>
      
       </div>


       <div className='project-card'>
        <img src={immunax} alt=""  />
        <h5 className='project-title'>💻 IMMUNAX 💻</h5>
        <p className='project-description'>Simplifying Vaccination Registration. Book vaccination slots, track your status, and enjoy hassle-free management. 
        Admin section for seamless control.</p>
        <h5 className='project-tech-stack'><span>Tech Stacks : </span> React, Chakra UI </h5>
         <hr />
          <span className="linkdiv">
              <a href="https://github.com/MouS0926/nondescript-question-6337" target='_blank' className='project-github-link'> <BsGithub/></a>
              <a href="https://hilarious-moonbeam-a71ec5.netlify.app/" target='_blank' className='project-deployed-link'> <FiExternalLink/></a>
          </span>
      
       </div>


       {/* <div className='project-card'>
        <img src={pnc} alt=""  />
        <h5 className='project-title'>💻 PRECIOUS CHARMS 💻</h5>
        <p className='project-description'>Elegant e-commerce for jewelry, watches & accessories. User-friendly React & Chakra UI. Effortless shopping & admin control</p>
        <h5 className='project-tech-stack'><span>Tech Stacks : </span> React , React-Redux , TypeScript , Chakra UI ,Styled-components</h5>
         <hr />
          <span className="linkdiv">
              <a href="https://github.com/MouS0926/Precious-Charms" target='_blank' className='project-github-link'> <BsGithub/></a>
              <a href="https://precious-charms.vercel.app/" target='_blank' className='project-deployed-link'> <FiExternalLink/></a>
          </span>
      
       </div> */}


       



    </div>

    </DIV>
  )
}
const DIV=styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');
  width:100%;
  font-family: 'Poppins', sans-serif;
.projCap{
  color:#cdcdcd;
  font-size: 2rem;
}

.projCap p span{
  color:#f5b238
}
.projectdiv{
  width:90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap:20px;
}
.projectdiv div img{
  width:100%;
}
.project-title{
  font-size:20px;
}
.projectdiv div{
  background-color: #0b0d2c;
    padding: 14px;
    border-radius: 5px;
    box-shadow: rgb(111 111 229 / 25%) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

}

.projectdiv h5{
  color: #dba23b;
  margin: 0;
}
.projectdiv p{
  color: #bbb;
    font-size: 13px;
    letter-spacing: 1px;
    justify-content: center;
    text-align: justify;
}

.project-tech-stack {
  text-align: left;
  font-size: 15px;
color:#f0ecec!important;
}
.project-tech-stack span{
  color:#f5b238
}
.linkdiv{
  display: flex;
    gap: 10px;
    color: #fff;
}
.linkdiv a{
  color:#fff
}
@media screen and (min-device-width: 320px) and (max-device-width: 480px)
{
  section{
    height: auto;
  }
  .projbg {
    height: auto;
}
  .projectdiv{
  width:90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(1,1fr);
  gap:20px;
}

.projCap {
 
    margin-top: 59px;
}
}



@media screen and (min-device-width: 481px) and (max-device-width: 767px)
{
  section{
    height: auto;
  }
  .projbg {
    height: auto;
}
  .projectdiv{
  width:90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap:20px;
}

.projCap {
 
    margin-top: 59px;
}
}

`