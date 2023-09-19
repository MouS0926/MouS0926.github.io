import React from 'react'
import styled from "styled-components"
import html from "../tech-icon/html.png"
import css from "../tech-icon/css.png"
import js from "../tech-icon/Js.png"
import react from "../tech-icon/react.png"
import mongo from "../tech-icon/mongo.png"
// import next from "../tech-icon/next.png"
import redux from "../tech-icon/redux.png"
import git from "../tech-icon/git.png"
import bootstrap from "../tech-icon/bootstrap.png"
import express from "../tech-icon/express.png"
import typs from "../tech-icon/typescript.png"
import node from "../tech-icon/node.png"
import chakra from "../tech-icon/chakra.png"
import vscode from "../tech-icon/visual-studio.png"
import ps from "../tech-icon/photoshop.png"
import postman from "../tech-icon/postman.png"
import GitHubCalendar from 'react-github-calendar'

export const Skill = () => {
  return (
    <DIV>
       

        <div className='skillCap'> 
          <p> <span>FRONT</span>  END</p>
        </div>

      <div className="skildiv">
          <div className='skills-card'>
            <img className='skills-card-img' src={html} alt=""  />
            <p className="skills-card-name">HTML5</p>
          </div>
          <div className='skills-card'>
            <img className='skills-card-img' src={css} alt=""  />
            <p className="skills-card-name">CSS3</p>
          </div>
          <div className='skills-card'>
           <img className='skills-card-img' src={js} alt=""  />
           <p className="skills-card-name">JavaScript</p>
        </div>
        <div className='skills-card'>
          <img src={react} alt="" className='skills-card-img' />
          <p className="skills-card-name">React</p>
        </div>
        <div className='skills-card'>
          <img className='skills-card-img' src={redux} alt=""  />
          <p className="skills-card-name">Redux</p>
        </div>
        <div className='skills-card'>
          <img src={typs} alt="" className='skills-card-img' />
          <p className="skills-card-name">TypeScript</p>
        </div>
        <div className='skills-card'>
          <img src={bootstrap} alt="" className='skills-card-img' />
          <p className="skills-card-name">Bootstrap</p>
        </div>
        <div className='skills-card'>
          <img src={chakra} alt="" className='skills-card-img' />
          <p className="skills-card-name">Chakra UI</p>
        </div>
       
      </div>

      <div className="skillCapsection">
      <div className='skillCap'> 
          <p> <span>BACK</span>  END</p>
        </div>
        <div className='skillCap'> 
          <p> <span>TOOL</span>SETS </p>
        </div>
</div>   

<div className="skillsectiontwo">



        
      <div className="skildiv">
         
        <div className='skills-card'>
          <img src={mongo} alt="" className='skills-card-img' />
          <p className="skills-card-name">MongoDB</p>
        </div>
        <div className='skills-card'>
          <img src={express} alt="" className='skills-card-img' />
          <p className="skills-card-name">Express JS</p>
        </div>
      
        <div className='skills-card' >
          <img src={node} alt="" className='skills-card-img' />
          <p className="skills-card-name">Node JS</p>
        </div>
      </div>

      

        <div className="skildiv">
        <div className='skills-card'>
           <img src={git} alt="" className='skills-card-img' />
           <p className="skills-card-name">GIT</p>
         </div>

         <div className='skills-card'>
           <img src={vscode} alt="" className='skills-card-img' />
           <p className="skills-card-name">Visual Studio</p>
         </div>

         <div className='skills-card'>
           <img src={postman} alt="" className='skills-card-img' />
           <p className="skills-card-name">POSTMAN</p>
         </div>

         <div className='skills-card'>
           <img src={ps} alt="" className='skills-card-img' />
           <p className="skills-card-name">PHOTOSHOP</p>
         </div>
        
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
}

.skillCap p span{
  color:#f5b238
}
/* .skildiv{
  width:80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap:10px;
} */

.skillsectiontwo{
  width:90%;
  margin: 0 auto;
  display: flex;
  
  align-items: center; 
  justify-content: center; 
  gap: 10px;
}

.skillCapsection{
  width:90%;
  margin: 0 auto;
  display: flex;
  
  align-items: center; 
  justify-content: space-around; 
  gap: 10px;
}
.skildiv {
  width: 90%;
  margin: 0 auto;
  display: flex;
  
  align-items: center; 
  justify-content: center; 
  gap: 10px;
}

.skildiv div{
  background-color: #0b0d2c;
    border-radius: 10px;
    border: 1px solid #6a4c1f;
    padding: 5px;

}
.skildiv div p {
    padding: 0px 0 7px 0;
    margin: 0;
    letter-spacing: 1px;
}
.skills-card-name {
    font-size: 18px;
    color: #fff;
    font-weight: 600;
   
}



@media screen and (min-device-width: 320px) and (max-device-width: 480px){
  section{
    height: auto;
  }

  .skildiv {
    width: 70%;
    margin: 2px;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 5px;
    margin: 0 auto;
}
.skills-card-name {
    font-size: 12px;
 }

 .bJcSTw .skillsectiontwo {
   
    flex-direction: column;
}

 .skills-card img{
  width:100px;
}
 .skildiv div {
  padding: 0;
 }
.skillsectiontwo {
   
   flex-direction: column;
}
}


//tab-size
@media screen and (min-device-width: 481px) and (max-device-width: 767px){
  section{
    height: auto;
  }

  .skildiv {
    width: 70%;
    margin: 2px;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 5px;
    margin: 0 auto;
}
.skills-card-name {
    font-size: 12px;
 }

 .bJcSTw .skillsectiontwo {
   
    flex-direction: column;
}

 .skills-card img{
  width:100px;
}
 .skildiv div {
  padding: 0;
 }
.skillsectiontwo {
   
   flex-direction: column;
}
}


`