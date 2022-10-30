import React,{useState} from 'react'
import { AiFillCaretDown } from "react-icons/ai";
import { ImSearch } from "react-icons/im";
import { FaBars} from "react-icons/fa";
import {useNavigate} from 'react-router-dom'
import { AiFillHome } from "react-icons/ai";
import { VscGraphLine } from "react-icons/vsc";
import { BsGraphUp,BsGraphDown } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import './Style/nav.css'
import axios from 'axios';
function Nav() {
    const [data,setdata]=useState([])
    const [icons_c_name,set_i_c_names]=useState('icons-none')
    const [c_name ,set_c_name]=useState("nav-search-data")
    const navigate=useNavigate()
    return (
        <div className='Nav-container' onClick={()=>{
            set_c_name("nav-search-none")
        }}>
            <div className='Nav-bar' onClick={()=>{set_i_c_names(
                (prevState)=>{
                    if(prevState==='icons-none'){
                        return 'icons-display'
                    }
                    return 'icons-none'
                }
            )}}>
                <FaBars/>
            </div>
            <div className='Nav-child1' onClick={()=>{set_i_c_names(
                (prevState)=>{
                    if(prevState==='icons-none'){
                        return 'icons-display'
                    }
                    return 'icons-none'
                }
            )}}>
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
                                            shortName:res.data[key]['shortName'],
                                            id:res.data[key]['id']
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
                                    <p className='search-p' onClick={
                                        ()=>{
                                            navigate(`${val.id}/0`)
                                            set_c_name("nav-search-none")
                                        }
                                        }>
                                         {val.shortName}( {val.symbol} )
                                    </p>
                                )
                        }
                    </div>
                </div>
            <div className='Nav-child2'>
                <div className='Nav-sendicon' onClick={()=>{navigate('/aboutus')}} style={{color:"black"}}>
                   <FcAbout/>
                </div>
                <div className='Nav-notifyicon'onClick={()=>{navigate('/contactus')}}>
                    <IoMdContact/>
                </div>
            </div>
            <div className={icons_c_name}>
                <div className='nav-icons-c-1'>
                    <div  className='nav-icon-m' onClick={
                            ()=>{
                                navigate('/')
                                set_i_c_names('icons-none')
                            }
                        }><AiFillHome/> </div>
                </div>
                <div className='nav-icons-c-2'>
                    <div  className='nav-icon-m'
                     onClick={()=>{
                            navigate('/ElementryEconomics')
                            set_i_c_names('icons-none')
                        }
                    } ><BsGraphUp/></div>
                    <div  className='nav-icon-m'
                     onClick={()=>{
                            navigate('/Equitymarkets')
                            set_i_c_names('icons-none')
                        }
                    }><BsGraphDown/></div>
                    <div  className='nav-icon-m'
                     onClick={()=>{
                            navigate('/InvestmentInPortfolios')
                            set_i_c_names('icons-none')
                        }
                    }><VscGraphLine/></div>
                </div>
                <div className='nav-icons-c-3'>
                    <div  className='nav-icon-m' onClick={()=>{navigate('/contactus')}}><IoMdContact/></div>
                    <div  className='nav-icon-m' id='nav-icons-c-3' onClick={()=>{navigate('/aboutus')}}><FcAbout/></div>
                </div>
            </div>
        </div>
    )
}
export default Nav