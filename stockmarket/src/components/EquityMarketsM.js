import React from 'react'
import EquiMarket from './EquiMarket'
import UnderstandingFinancialStatements from './UnderstandingFinancialStatements'
import TechnicalAnalysis from './TechnicalAnalysis'
import ChartsEquity from './ChartsEquity'
import Trend from './Trend'
import Volume from './Volume'
function EquityMarketsM() {
  return (
    <div style={{backgroundColor:'black',display:'flex',position:'absolute',flexFlow:'column',overflow:'hidden',width:'98.8vw'}}>
        <EquiMarket/>
        <UnderstandingFinancialStatements/>
        <TechnicalAnalysis/>
        <ChartsEquity/>
        <Trend/>
        <Volume/>
    </div>
  )
}
export default EquityMarketsM