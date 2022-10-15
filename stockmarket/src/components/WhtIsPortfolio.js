import React from 'react'
import './Style/iip.css'
function WhtIsPortfolio() {
    return (
        <div className='Elementry-childs'>
            <div className="heading">
                <h1>Calculating a Portfolio's Return</h1>
            </div>
            <div className="cont">
                <p> Let’s continue with the same example which we discussed in the last article. Five years back, Mr Trump had
                    invested INR 50,000 in Reliance, INR 20,000 in Maruti and INR 25,000 in SBI. The current values of these
                    investments in Reliance, Maruti and SBI are INR 35,000, INR 30,000 and INR 40,000, respectively. Thus, the
                    total portfolio networth changed from INR 95,000 to INR 1,05,000.</p>
                <p>The total cumulative value of Mr Trump’s investment increased by INR 10,000 (=1,05,000 – 95,000), in last 5
                    years. In last article we defined networth as the sum of values of all the investments. We can also define
                    it as the amount that Mr Trump will receive, if he wants to liquidate his investments(sell whatever he
                    owns). Suppose, today Mr Trump wants to take out all his money. He can sell shares of Reliance and get INR
                    35,000. Similarly, he can get INR 30,000 and INR 40,000, by selling all the shares of Maruti and SBI,
                    respectively. The total money that he can generate by selling all his investments is INR 1,05,000 which is
                    equal to the portfolio networth. We can say that Mr Trump will receive additional INR 10,000 on his
                    investment of INR 95,000, if he decides to liquidate all investments. Thus, the current return generated by
                    his portfolio is 10.53% (=10,000/95,000) or in other words, he can receive a return of 10.53%, if he sells
                    off everything and liquidate his portfolio today.</p>
                <p>Portfolio Return = (Current Networth – Initial Networth) / Initial Networth</p>
                <p>Using the same logic, we can say that Reliance, Maruti and SBI generated a return of -30% (-15,000/50,000),
                    50%(10,000/20,000) and 60%(15,000/25,000), respectively. In our last article, we mentioned that by looking
                    at the above two pie charts we can easily conclude that Reliance has generated less returns than SBI and
                    Maruti. The calculations that we just did also proves the same thing, but there is also an intuitive way of
                    deducing this result. We defined weight of an instrument as the portion of total portfolio value represented
                    by the instrument. Reliance’s weight in the portfolio dropped from 53% to 33%, which means that value of
                    portfolio represented by Reliance dropped by 20%. This can happen only if the value represented by SBI and
                    Maruti increases by 20%. Maruti now represents 29% (8% more than the initial composition) and SBI represents
                    38% ( 12% more than the initial composition). Thus, SBI experienced the highest growth, followed by Maruti
                    and then Reliance. One look at the above charts and we can clearly see that blue portion represented by
                    Reliance shrunk while the green and Red portion represented by SBI and Maruti grew. Thus, growth in value of
                    the investment in Reliance would be definitely less than SBI and Maruti.</p>
            </div>
        </div>
    )
}

export default WhtIsPortfolio