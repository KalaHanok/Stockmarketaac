import React from 'react'
import './Style/contact.css'
import { BsInstagram} from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { HiMail } from "react-icons/hi";
function Contact() {
  return (
    <section className='contact-section'>
      <div class="section-header">
        <div class="container">
          <h2>Contact Us</h2>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="contact-info">
            <div class="contact-info-item">
              <div class="contact-info-icon1" style={{color:'black',fontSize:'35px',display:'flex',alignItems:'center',justifyContent:'center'}}>
               <AiFillHome/>
              </div>
              <div class="contact-info-content">
                <h4>Address</h4>
                <p>Gokaraju Rangaraju Institute of Engineering & Technology,<br /> Bachupally, Survey No. 288, Nizampet Rd, Kukatpally, Hyderabad, Telangana, 500090</p>
              </div>
            </div>
            <div class="contact-info-item">
              <div class="contact-info-icon" style={{color:'black',fontSize:'35px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <BsInstagram/>
              </div>
              <div class="contact-info-content">
                <h4>instagram</h4>
                <p>akash.paul2106 <br />Sri.charanreddy <br />anurag.chenna <br />hanokkala</p>
              </div>
            </div>
            <div class="contact-info-item">
              <div class="contact-info-icon" style={{color:'black',fontSize:'35px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <HiMail/>
              </div>
              <div class="contact-info-content">
                <h4>Email</h4>
                <p>akashpaulsama@gmail.com <br />Reddysricharan455@gmail.com <br />anurag.chenna.2004@gmail.com <br />hanokkala123@gmail.com</p>
              </div>
            </div>
          </div>
          <div class="contact-form">
            <form action="" id="contact-form">
              <h2>Send Message</h2>
              <div class="input-box">
                <input type="text" required="true" name="" />
                <span>Full Name</span>
              </div>
              <div class="input-box">
                <input type="email" required="true" name="" />
                <span>Email</span>
              </div>
              <div class="input-box">
                <textarea required="true" name=""></textarea>
                <span>Type your Message...</span>
              </div>
              <div class="input-box">
                <input type="submit" value="Send" name="" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact