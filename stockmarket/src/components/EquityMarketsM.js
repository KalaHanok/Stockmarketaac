import React from 'react'
import EquiMarket from './EquiMarket'
import UnderstandingFinancialStatements from './UnderstandingFinancialStatements'
import TechnicalAnalysis from './TechnicalAnalysis'
import ChartsEquity from './ChartsEquity'
import Trend from './Trend'
import Volume from './Volume'
function EquityMarketsM() {
  return (
    <div style={{backgroundColor:'white',display:'flex',position:'absolute',flexFlow:'column',overflowX:'hiddenS'}}>
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