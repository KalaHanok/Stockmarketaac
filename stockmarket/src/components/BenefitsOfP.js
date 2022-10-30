import React from 'react'
import bod from './images/bod.png'
// import './Style/iip.css'
import './Style/introme.css'
function BenefitsOfP() {
    return (
        <div className='Elementry-childs'>
            <div className="heading">
                <h1>Benefits of Diversification</h1>
            </div>
            <div className="cont">
                <p> In this article, we will only be talking about equity portfolios. If you speak to any experienced equity
                    investor, the first advice would be to always maintain a well-diversified portfolio. Before going into
                    benefits of maintaining a well diversified portfolio, let’s understand the risks associated with equity
                    investing and the meaning of diversification.</p>
                <p> When you invest in any stock, there are two types of risks associated with this investment. First one is the
                    company specific risk. This is the risk of something wrong happening specifically with the company you have
                    invested in. For example, production stoppage due to a labour strike is a company specific risk, as it will
                    only impact the stock price of the company experiencing it. Similarly, resignation of a CEO having
                    successful track record is an example of company specific risk, as it will not have any impact on the prices
                    of other stocks. The second type of risk is the broader market risk. This is not specific to any company in
                    particular and affects the stock prices of all companies. For example, government not being able to pass
                    important reforms in parliament is an example of market risk, as it will impact the whole economy and thus
                    all the companies. Similarly, a natural calamity will impact all the companies equally and is an example of
                    market risk. Thus, any risk impacting only the stock price of a particular company is company specific risk
                    and the risks impacting stock prices of all the companies equally are market risks.</p>
                <p> Having understood the risks associated with equity investing, let’s see how can we minimize them and protect
                    ourselves. Suppose you have invested in Maruti and Tata Motors, and your friend has invested in Maruti and
                    Sun Pharma. In such a scenario, if auto sales numbers start dropping in all probabilities you will
                    experience more loss than your friend. Both the companies you have invested in belong to the auto sector and
                    stock price of both will be impacted by this news. But in your friend might not experience any loss with his
                    investment in Sun Pharma, as the auto sector news will not have any impact on a pharma stock. This is a very
                    basic example of diversification. Diversification comes from investing in unrelated stocks and is the key to
                    risk minimization. If your portfolio has 10 banking stocks and your friend has 10 stocks from 10 different
                    sectors, obviously your losses will be very high, compared to your friend, if any bad news regarding banks
                    hit the market. Your friend has protected himself by investing into different unrelated stocks providing
                    protection against sector or company specific risk.</p>
                <p> As discussed, through diversification (investing in unrelated stocks) we can protect ourselves against
                    company/sector specific risk. But the market risk is non-diversifiable. Even if you invest in 10 different
                    stocks from various sectors all will be negatively impacted with a news like higher taxes, instable
                    government or large scale natural calamity. Thus, we cannot diversify away the market risk. But on the
                    contrary all the company specific risk is diversifiable by investing in lots of unrelated stocks.</p>
                <p> As we keep on increasing the number of stocks in the portfolio, company/sector specific risk keeps on
                    decreasing.</p>
                <p> As shown in the graph below, it is generally believed with 30 stocks you can completely diversify away the
                    specific risk and only risk remaining in your portfolio would be market risk.</p>


            </div>
            <br/>
                <div className="images"> <img src={bod} alt=""/> </div>
        </div>
    )
}
export default BenefitsOfP