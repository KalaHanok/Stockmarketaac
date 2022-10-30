import React from 'react'
import WhtIsPortfolio from './WhtIsPortfolio'
import CalAPortfolio from './CalAPortfolio'
import BenefitsOfP from './BenefitsOfP'
function InvestmentInPortfolios() {
  return (
    <div style={{backgroundColor:'white',display:'flex',position:'absolute',flexFlow:'column'}}>
        <WhtIsPortfolio/>
        <CalAPortfolio/>
        <BenefitsOfP/>
    </div>
  )
}

export default InvestmentInPortfolios