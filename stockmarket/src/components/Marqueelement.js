import React from 'react'
import './Style/marqueeffect.css'
import './Style/marqueelement.css'
function Marqueelement(props) {
  let c_name=''
  if (props.change<0){
    c_name='marque-element-change-red'
  }
  else if(props.change>=0){
    c_name='marque-element-change-green'
  }
  return (
    <>
    <li className='marquee-li-info'>
      <span className='marque-element-name'>
        {props.name}
      </span>
      <span className={c_name}>
        {props.change}
      </span>
    </li> 
    </>
  )
}

export default Marqueelement