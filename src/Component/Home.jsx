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


{/* <div className='textPart'>


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
            </div> */}





<div className="banner">
      <div className="left-section">
        <div className="greeting">👋 Hi There, My Name is</div>
        <div className="name">Moumita Sarkar</div>
        <div className="designation">I am a Full Stack Developer.</div>
      </div>
      <div className="right-section">
      <img src={profileImg} class="home-img" alt=""  />
      </div>
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

.banner {
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  
}

.left-section {
  width: 50%;
  max-width: 600px;
  text-align: left;
}

.greeting {
  font-size: 1.7rem;
  animation: fadeInUp 1s ease-in-out;
  color:#fff
}

.name {
  font-size: 3rem;
  font-weight: bold;
  margin-top: 10px;
  animation: fadeInUp 1s ease-in-out;
  color: #f6b235;
}

.designation {
  font-size: 2rem;
  margin-top: 10px;
  animation: fadeInUp 1s ease-in-out;
  color: #f8e87e;
}

.right-section {
  display: flex;
  justify-content: center;  /* Modified this line */
  align-items: center;
}
.right-section img {
  width: 100%;
  max-width: 300px;
  border-radius: 50%;
  animation: fadeInRight 1s ease-in-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive Styles */
@media (max-width: 768px) {
  .banner {
    flex-direction: column;
    text-align: center;
    padding: 30px;
  }

  .left-section {
    max-width: none;
  }

  .right-section img {
    margin-top: 20px;
  }
}

@media screen and (min-device-width: 320px) and (max-device-width: 480px)
{
   .banner {
    width: 100%;
   
}
.left-section {
  width: 70%;
  text-align: center;
 
}
  .greeting {
    font-size: 1rem;
  }
  .name {
    font-size: 1.2rem;
  }
   .designation {
    font-size: 1rem;
  }
  .right-section img {
    width: 100%;
    max-width: 200px;
    border-radius: 50%;
    animation: fadeInRight 1s ease-in-out;
}
}

@media screen and (min-device-width: 481px) and (max-device-width: 576px)
{
  .banner {
    width: 100%;
   
}
.left-section {
 
  text-align: center;
 
}
  .greeting {
    font-size: 1rem;
  }
  .name {
    font-size: 1.2rem;
  }
   .designation {
    font-size: 1rem;
  }
  .right-section img {
    width: 100%;
    max-width: 200px;
    border-radius: 50%;
    animation: fadeInRight 1s ease-in-out;
}
}






@media screen and (min-device-width: 577px) and (max-device-width: 767px)
{
  .banner {
    width: 100%;
   
}
.left-section {
 
 text-align: center;

}
  .greeting {
    font-size: 1.2rem;
  }
  .name {
    font-size: 1.7rem;
  }
   .designation {
    font-size: 1rem;
  }
  .right-section img {
    width: 100%;
    max-width: 200px;
    border-radius: 50%;
    animation: fadeInRight 1s ease-in-out;
}
}

@media screen and (min-device-width: 768px) and (max-device-width: 941px)
{
  .banner {
    width: 100%;
   
}
.left-section {
 
 text-align: center;

}
  .greeting {
    font-size: 1.5rem;
  }
  .name {
    font-size: 2.5rem;
  }
   .designation {
    font-size: 1.2rem;
  }
  .right-section img {
    width: 100%;
    max-width: 200px;
    border-radius: 50%;
    animation: fadeInRight 1s ease-in-out;
}
}


//my css
@media screen and (min-device-width: 320px) and (max-device-width: 480px)
{
  section{
    height: 100vh;
  }
}
@media screen and (min-device-width: 481px) and (max-device-width: 576px)
{
  .content h2 {
   
    font-size: 20px;
    position: absolute;
    /* transform: translate(0%, 91%); */
    padding: 0 60px;
}
  .line2 {
    position: absolute;
    margin-top: 79px;
    left: 15%;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
}
}


`