import React from 'react'
import { BsFillCaretLeftFill ,BsFillCaretRightFill} from "react-icons/bs";
import './Style/marque.css'
import Marqueeffect from './Marqueeffect';
function Marque() {
  return (
    <div className='Marque-container'>
        <div className='Marque-icon1'>
            <BsFillCaretLeftFill/>
        </div>
        <div className='Marque-info'>
           <Marqueeffect/>
        </div>
        <div className='Marque-icon2'>
            <BsFillCaretRightFill/>
        </div>
    </div>
  )
}

export default Marque