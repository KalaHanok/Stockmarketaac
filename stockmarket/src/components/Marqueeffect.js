import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './Style/marqueeffect.css'
import Marqueelement from './Marqueelement'
import Ul from './Ul'
function Marqueeffect() {
    const [posts,setpost]=useState([])
    const [id,setid]=useState(1)
    let mystr='01'
    let key = 1
    let i=0
    const sleep=(ms)=>{
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    useEffect(()=>{
        let intervel_id=setInterval(()=>{
            axios.get(`http://127.0.0.1:8000/test/${mystr}/`)
                    .then(res=>{
                        setpost(res.data)
                        console.log(posts)
                        key+=1
                        if(key%6==0){
                            
                        }
                        setid(key)
                        mystr=`${i}${key}`
                    })
        },20000)
        return ()=>{
            clearInterval(intervel_id)
        }
    },[])
    let len=posts.length
    return (
        <>
            {
                posts.map(symdata=>{
                    <Marqueelement name={symdata.name} change={symdata.change} />
                })
            }
        </>
      )
}

export default Marqueeffect