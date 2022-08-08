import React from 'react'
import { AiFillCaretDown } from "react-icons/ai";
import { ImSearch } from "react-icons/im";
import { RiSendPlaneFill } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { FaBars} from "react-icons/fa";
import './Style/nav.css'
function Nav() {
    return (
        <div className='Nav-container'>
            <div className='Nav-bar'>
                <FaBars/>
            </div>
            <div className='Nav-child1'>
                <div className='Nav-info'>
                    stock-ex
                </div>
                <div className='Nav-downicon'>
                    <AiFillCaretDown />
                </div>
            </div>
            <div className='Nav-child3'>
                <input className='Nav-input'></input>
                <div className='Nav-searchicon'>
                    <ImSearch />
                </div>
            </div>
            <div className='Nav-child2'>
                <div className='Nav-sendicon'>
                    <RiSendPlaneFill />
                </div>
                <div className='Nav-notifyicon'>
                    <IoIosNotifications />
                </div>
            </div>
        </div>
    )
}

export default Nav