import React from 'react'
import './Style/Footer.css'
import fbicon from './images/fbicon.jpg'
import instaicon from './images/instaicon.jpg'
import twittericon from './images/twittericon.png'
export default function FooterOfStocks() {
  return (
    <>
      <hr></hr>
      <div className='Footerpart'>
        <div className='Footer'>
          <div className='Footerheading'><strong>Stock-Ex</strong></div>
          <br></br>
          <span className='finfo'>stock-ex provides data, information & content for Indian stocks.</span>
        </div>
        <div className='Products'>
            <span><strong>Products</strong></span>
            <br></br>
            <span><a href="">Stocks Sceener</a></span>
            <br></br>
            <span><a href="">MMI</a></span>
            <br></br>
            <span><a href="">Stock Deals</a></span>
            <br></br>
            <span><a href="">Learn</a></span>
        </div>
        <div className='About'>
            <span id='au'><a href="">About Us</a></span>
            <br></br>
            <span id='cs'><a href="">Contact Us</a></span>
            
        </div>
        <div className='SocialMedia'>
            <span><a href='www.facebook.com'><img src={fbicon} alt="facebook" height='30vh' width='30vw'/></a></span>
            <br></br>
            <span><a href='www.instagram.com'><img src={instaicon} alt="instagram" height='30vh' width='30vw'/></a></span>
            <br></br>
            <span><a href='www.twitter.com'><img src={twittericon} alt="twitter" height='30vh' width='30vw'/></a></span>
        </div>
    </div>
    </>
    
  
  )
}
