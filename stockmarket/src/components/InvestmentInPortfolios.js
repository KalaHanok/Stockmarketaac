import React from 'react'
import WhtIsPortfolio from './WhtIsPortfolio'
import CalAPortfolio from './CalAPortfolio'
import BenefitsOfP from './BenefitsOfP'
function InvestmentInPortfolios() {
  return (
    <div style={{backgroundColor:'black',display:'flex',position:'absolute',flexFlow:'column'}}>
        <WhtIsPortfolio/>
        <CalAPortfolio/>
        <BenefitsOfP/>
    </div>
  )
}

export default InvestmentInPortfolios