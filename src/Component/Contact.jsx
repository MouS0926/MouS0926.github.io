import React from 'react'
import styled from "styled-components"
import { MdEmail, MdSmartphone } from "react-icons/md";
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const Contact = () => {
  return (
    <DIV>
        <div className='skillCap'> 
          <p> <span>CONTACT</span>  ME</p>
         
        </div> 
        <div className='contactDiv'>
          
          <div className="text">
          Let's Collaborate and Create Something Extraordinary. Reach Out and Let's Discuss Your 
            Vision, Projects, or Ideas. 
            Looking Forward to Connecting and Crafting Remarkable Solutions Together.
       </div>

       <div className='vline'></div>

          <div className="contacts">


          <p id="contact-email"> <span><MdEmail/></span> &nbsp;&nbsp; sarkarmoumita314@gmail.com</p>
          <p  id="contact-phone"> <span><MdSmartphone/></span> &nbsp;&nbsp; +91 9748764644</p>

          <a href="https://github.com/MouS0926" target='_blank'  id="contact-github">
          <p> <span><BsGithub/></span>  &nbsp;&nbsp; Github   </p>  
        </a>

        <a href="https://www.linkedin.com/in/moumita-sarkar26/"  target='_blank' id="contact-linkedin">
        <p> <span><BsLinkedin/></span> &nbsp;&nbsp; LinkedIn</p>  
        </a>

       
        
          </div>
          
        
          
          </div>
        

    </DIV>
  )
}


const DIV=styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');
  width:100%;
  font-family: 'Poppins', sans-serif;
.skillCap{
  color:#cdcdcd;
  font-size: 2rem;
}

.skillCap p span{
  color:#f5b238
}
.contactDiv{
 width: 90%;
 margin: 0 auto;
 display: flex;
 justify-content: space-around;
 gap: 30px;
}
.text{
  font-size: 18px;
    color: #cdcdcd;
    width: 50%;
    text-align: justify;
    background-color: #21245c73;
    padding: 20px 21px;
    border-radius: 10px;
    box-shadow: rgb(239 152 43 / 45%) 0px 3px 8px;
}

.vline{
  border-right: 2px solid #f5b238;
  width: 2%;
}

.contacts{
  width: 48%;
  text-align: justify;
}
.contacts p{
  font-size: 20px;
    color: #c1bfbf;
}
.contacts p span{ 
  color: #1c1e3e;
    background-color: #f5b238;
    padding: 3px 8px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.contacts  a{
  text-decoration:none;
}

@media screen and (min-device-width: 320px) and (max-device-width: 480px){
  .contactDiv{

 display: flex;
 flex-direction: column;
 
}
.text {
    font-size: 15px;
    color: #cdcdcd;
    width: 100%;
    text-align: justify;
    background-color: #21245c73;
    padding: 20px 21px;
    border-radius: 10px;
    box-shadow: rgb(239 152 43 / 45%) 0px 3px 8px;
}
 .vline {
   
    display: none;
}
.contacts {
    width: 100%;
    
}
.contacts p {
    font-size: 15px;
    color: #c1bfbf;
}
.text {
    font-size: 13px;
    color: #cdcdcd;
    width: 100%;
    padding: 13px 22px;
 
}

}

@media screen and (min-device-width: 481px) and (max-device-width: 767px){
  .contactDiv {
    display: flex;
    flex-direction: column;
}
  .text {
    font-size: 15px;
    color: #cdcdcd;
    width: 100%;
    padding: 13px 22px;
 
}
 .contacts {
    width: 100%;
    text-align: justify;
}
}
`





