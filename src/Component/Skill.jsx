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
import GitHubCalendar from 'react-github-calendar'

export const Skill = () => {
  return (
    <DIV>
        <div className='skillCap'> 
          <p> <span>MY</span>  SKILLS</p>
        </div> 

      <div className="skildiv">
          <div className='skills-card'>
            <img className='skills-card-img' src={html} alt=""  />
            <p className="skills-card-name"></p>
          </div>
          <div className='skills-card'>
            <img className='skills-card-img' src={css} alt=""  />
            <p className="skills-card-name"></p>
          </div>
          <div className='skills-card'>
           <img className='skills-card-img' src={js} alt=""  />
           <p className="skills-card-name"></p>
        </div>
        <div className='skills-card'>
          <img src={react} alt="" className='skills-card-img' />
          <p className="skills-card-name"></p>
        </div>
        <div className='skills-card'>
          <img className='skills-card-img' src={redux} alt=""  />
          <p className="skills-card-name"></p>
        </div>
        <div className='skills-card'>
          <img src={typs} alt="" className='skills-card-img' />
          <p className="skills-card-name"></p>
        </div>
        <div className='skills-card'>
          <img src={bootstrap} alt="" className='skills-card-img' />
          <p className="skills-card-name"></p>
        </div>
        <div className='skills-card'>
          <img src={chakra} alt="" className='skills-card-img' />
          <p className="skills-card-name"></p>
        </div>
        <div className='skills-card'>
          <img src={mongo} alt="" className='skills-card-img' />
          <p className="skills-card-name"></p>
        </div>
        <div className='skills-card'>
          <img src={express} alt="" className='skills-card-img' />
          <p className="skills-card-name"></p>
        </div>
        <div className='skills-card'>
          <img src={git} alt="" className='skills-card-img' />
          <p className="skills-card-name"></p>
        </div>
        <div className='skills-card' >
          <img src={node} alt="" className='skills-card-img' />
          <p className="skills-card-name"></p>
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
.skildiv{
  width:80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5,1fr);
  gap:10px;
}

.skildiv div{
  background-color: #0b0d2c;
    border-radius: 10px;
    border: 1px solid #6a4c1f;

}

@media screen and (min-device-width: 320px) and (max-device-width: 480px){
  .skildiv {
    width: 70%;
    margin: 2px;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 10px;
}
}
`