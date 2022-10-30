import React from 'react'
import './Style/about.css'
import whtimg from'./images/whtimg.jpeg'
function About() {
  return (
    <div class="wrapper">

        <div class="background-container">
            <div class="bg-1"></div>
            <div class="bg-2"></div>
    
        </div>
        <div class="about-container">
            
            <div class="image-container">
                <img src={whtimg} alt=""/>
                
            </div>

            <div class="text-container">
                <h1>About us</h1>
                <p>stock-ex is a website that contains day to day info about the stock markets and it shows the stats of the stocks on day to day basis there are also some other things like learn option which provides info about how stock market works . <br/>  And we are: <br/> K Hanok <br/> S Akash Paul Reddy <br/> C Anurag <br/> K Sri Charan Reddy </p>
                <a href="">Know More</a>
            </div>
            
        </div>
    </div>
  )
}

export default About