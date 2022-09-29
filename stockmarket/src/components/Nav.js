import React,{useState} from 'react'
import { AiFillCaretDown } from "react-icons/ai";
import { ImSearch } from "react-icons/im";
import { RiSendPlaneFill } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { FaBars} from "react-icons/fa";
import './Style/nav.css'
import axios from 'axios';
function Nav() {
    const [data,setdata]=useState([])
    const [c_name ,set_c_name]=useState("nav-search-data")
    return (
        <div className='Nav-container' onClick={()=>{
        }}>
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
                    <input className='Nav-input' onChange={(x)=>{
                        let sestr=x.target.value
                        if(sestr===""){
                            set_c_name("nav-search-none")
                        }
                        else{
                            set_c_name("nav-search-data") 
                        }
                        console.log(sestr)
                        axios.post(`http://127.0.0.1:8000/search/`,{search:sestr}).then(
                            (res)=>{
                                setdata(prevState=>{
                                    return(
                                        []
                                    )
                                })
                                Object.keys(res.data).forEach(key=>{
                                    let new_setdata={
                                            symbol:res.data[key]['symbol'],
                                            shortName:res.data[key]['shortName']
                                    }
                                    setdata(prevState => {
                                        return(
                                            [ ...prevState, new_setdata ])
                                        })
                                })
                            }
                        )
                    }}></input>
                    <div className='Nav-searchicon'>
                        <ImSearch />
                    </div>
                    <div className={c_name}>
                        {
                            data.map(val=>
                                    <p className='search-p'> {val.shortName}( {val.symbol} )</p>
                                )
                        }
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