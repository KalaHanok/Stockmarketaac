import React from 'react'
import './Style/Footer.css'
import fbicon from './images/fbicon.jpeg'
import instaicon from './images/instaicon.jpeg'
import twittericon from './images/twittericon.jpeg'
import { BsTwitter,BsInstagram} from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'
export default function FooterOfStocks() {
  const navigate=useNavigate()
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
            <span id='au' onClick={()=>{navigate('/aboutus')}}><a href="">About Us</a></span>
            <br></br>
            <span id='cs' onClick={()=>{navigate('/contactus')}}><a href="">Contact Us</a></span>
        </div>
        <div className='SocialMedia'>
            <span><a href='www.facebook.com'><FaFacebookF/></a></span>
            <br></br>
            <span><a href='www.instagram.com'><BsInstagram/></a></span>
            <br></br>
            <span><a href='www.twitter.com'><BsTwitter/></a></span>

        </div>
    </div>
    </>
    
  
  )
}
