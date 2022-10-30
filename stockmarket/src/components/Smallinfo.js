import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Style/smallinfo.css'
function Smallinfo() {
    const navigate = useNavigate()
    const [ids,setIds]=useState({id1:'smallinfo-visible',id2:'none',id3:'none'})
    const [lids,setLids]=useState({id1:'smallinfo-color',id2:'none',id3:'none'})

  return (
    <div className='smallinfo-container'>
        <div className='smallinfo-heading'>Basic of Investing</div>
        <div className='smallinfo-subcontainer'>
            <div className='smallinfo-label-container'>
                <div  className='smallinfo-labels'  onClick={()=>{
                    setIds((prevState)=>{
                        return {
                            ...ids,
                            id1:'smallinfo-visible',
                            id2:'none',
                            id3:'none'
                        }
                    })
                    setLids((prevState)=>{
                        return {
                            ...lids,
                            id1:'smallinfo-color',
                            id2:'none',
                            id3:'none'
                        }
                    })
                }}>
                    <span className='smallinfo-number'>1</span>
                    <span className='small-info-label-span' id={lids.id1}>Elementary economics<span> &gt;</span></span>
                </div>
                <div className='smallinfo-labels'  onClick={()=>{
                    setIds((prevState)=>{
                        return {
                            ...ids,
                            id1:'none',
                            id2:'smallinfo-visible',
                            id3:'none'
                        }
                    })
                    setLids((prevState)=>{
                        return {
                            ...lids,
                            id1:'none',
                            id2:'smallinfo-color',
                            id3:'none'
                        }
                    })

                }}>
                    <span className='smallinfo-number'>2</span>
                    <span className='small-info-label-span' id={lids.id2}>Equity markets<span> &gt;</span></span>
                </div>
                <div className='smallinfo-labels'  onClick={()=>{
                    setIds((prevState)=>{
                        return {
                            ...ids,
                            id1:'none',
                            id2:'none',
                            id3:'smallinfo-visible'
                        }
                    })
                    setLids((prevState)=>{
                        return {
                            ...lids,
                            id1:'none',
                            id2:'none',
                            id3:'smallinfo-color'
                        }
                    })
                }}>
                    <span className='smallinfo-number'>3</span>
                    <span className='small-info-label-span' id={lids.id3}>Investing in portfolios<span> &gt;</span></span>
                </div>
            </div>
            <div className='smallinfo-info-container'>
                <div className='smallinfo-infocontainer'  >
                    <div className='small-info-con-subcon' id={ids.id1}>
                        <div className='smallinfo-info'>Decode the general state of an economy and drivers that lead to the economic growth of a country. Learn how GDP is calculated and how it’s connected to economic growth. Understand inflation, stagflation and how they impact your investments...</div>
                        <div className='smallinfo-learnmore' onClick={() => navigate('/ElementryEconomics')}>Learn more</div>

                    </div>
                </div>
                <div className='smallinfo-infocontainer' >
                    <div className='small-info-con-subcon' id={ids.id2}>
                        <div className='smallinfo-info'>A guided introduction to equity market participants, trading mechanisms, indices, financial & investment ratios and key metrics one should look at before investing. Also included is a primer to technical analysis for stocks....</div>
                        <div className='smallinfo-learnmore' onClick={() => navigate('/Equitymarkets')}>Learn more</div>
                    </div>
                </div>
                <div className='smallinfo-infocontainer'>
                    <div className='small-info-con-subcon'  id={ids.id3}>
                        <div className='smallinfo-info'>Read about the importance of portfolio investing and benefits of diversification. Learn how to calculate a portfolio's return, how to construct portfolios and how to benchmark and track the portfolio's performance...</div>
                        <div className='smallinfo-learnmore' onClick={() => navigate('/InvestmentInPortfolios')}>Learn more</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Smallinfo