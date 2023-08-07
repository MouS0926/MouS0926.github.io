import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import styled from "styled-components"


export default function Github() {

    const explicitTheme = {
        light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
        dark: ['#615f5f', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
      };
      
 
  return (
    <DIV>


<div className="githDiv">
        <div className='gitCap'> 
          <p> <span>GitHub </span>  Calendar</p>
        </div>

        <div className='react-activity-calendar'>
           <GitHubCalendar username="MouS0926" theme={explicitTheme} />
         </div>


<div className="stat">
  <img align="center" id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=mous0926&show_icons=true&locale=en" alt="mous0926" />

   
    <img id="github-streak-stats" align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=mous0926&" alt="mous0926" />
   

    <img id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=mous0926&layout=compact" alt="mous0926" />

  
   
</div>
         
  



</div>





    </DIV>
  )
}


const DIV=styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');
  width:100%;
  font-family: 'Poppins', sans-serif;
  .react-activity-calendar{
    margin:  auto;
  }
.githDiv{
    width: 90%;
    margin: 0 auto;
}

.gitCap{
  color:#cdcdcd;
}

.gitCap p span{
  color:#f5b238
}
.stat{
    width:100%;
    padding: 30px 0;
    display: flex;
    justify-content: space-around;
}
.stat img{
    width: 30%;
}
`