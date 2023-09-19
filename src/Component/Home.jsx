import React from 'react'
import profileImg from "../image/profile-img.png"
import styled from "styled-components"


export const Home = () => {
  return (
   < DIV>
    <div class="nav-link home">


{/* animation */}
{/* <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                   <li></li>
            </ul>
    </div > */}

{/* animation */}


<div className='textPart'>


<h5 className='line1'>👋Hi There , My Name is</h5>

<div class="content">



		<h2 id="user-detail-name">Moumita Sarkar</h2>
		<h2>Moumita Sarkar</h2>

    <h5 className='line2'>I am a Full Stack Developer.</h5>
	</div>




</div>
<div className='imgPart'>
      <img src={profileImg} class="home-img" alt=""  />


</div>


<div class="shape-svg">
                <svg id="svg" viewBox="0, 0, 400,27.708333333333336">
                    <g id="svgg">
                        <path id="path0" d="M0.000 13.854 L 0.000 27.708 200.000 27.708 L 400.000 27.708 400.000 14.216 L 400.000 0.725 395.573 1.822 C 322.012 20.064,241.242 29.243,178.709 26.467 C 123.876 24.033,57.451 14.315,4.123 0.926 C 2.094 0.417,0.336 0.000,0.217 0.000 C 0.069 0.000,0.000 4.399,0.000 13.854"></path>
                    </g>
                </svg>
            </div>




</div>
</DIV>
  )
}



const DIV=styled.div`
@media screen and (min-device-width: 320px) and (max-device-width: 480px)
{
  section{
    height: 100vh;
  }
}



`