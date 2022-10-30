import React from 'react'
import IntroMacroEco from './IntroMacroEco'
import IntrestRates from './IntrestRates'
import CircularFlow from './CircularFlow'
import MonetaryPolicy from './MonetaryPolicy'
// import './Style/elemco.css'
function EleEconomics() {
  return (
    <div style={{backgroundColor:'black',display:'flex',position:'absolute',flexFlow:'column',overflow:'hidden',width:'98.8vw'}}>
        <IntroMacroEco/>
        <IntrestRates/>
        <CircularFlow/>
        <MonetaryPolicy/>
    </div>
  )
}
export default EleEconomics