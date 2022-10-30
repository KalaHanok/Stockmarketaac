import React from 'react'
import IntroMacroEco from './IntroMacroEco'
import IntrestRates from './IntrestRates'
import CircularFlow from './CircularFlow'
import MonetaryPolicy from './MonetaryPolicy'
// import './Style/elemco.css'
function EleEconomics() {
  return (
    <div style={{backgroundColor:'white',display:'flex',position:'absolute',flexFlow:'column', maxWidth:"100%",overflowX:'hidden'}}>
        <IntroMacroEco/>
        <IntrestRates/>
        <CircularFlow/>
        <MonetaryPolicy/>
    </div>
  )
}
export default EleEconomics