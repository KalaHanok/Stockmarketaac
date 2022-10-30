import React from 'react'
// import './Style/equitymarket.css'
import './Style/introme.css'
function Volume() {
    return (
        <div className='Elementry-childs'>
            <div className="heading">
                <h1>Volume</h1>
            </div>
            <div className="subh">
                <h2>A buy is a sell</h2>
            </div>
            <div className="cont">
                <p>Let’s discuss this concept using an example. Suppose you want to measure the number of transactions taking
                    place during a working day in the nearby fruit market. The market opens at 9.30 AM every day and closes by 5
                    PM. Note that the number of transactions are always measured for a particular period, say 1 hour or 15
                    minutes and not at any particular moment like 10.12 AM. Another important point is that number of
                    transactions is not the sum of buy and sell activities, but the total number of buy or sell activities which
                    is equal to the total number of sell or buy activities. This is because one cannot buy unless someone else
                    is willing to sell. So if at 10.45 AM, one were to say 200 transactions have taken place, it means that
                    since 9.30 AM 200 people have bought and sold fruits. </p>
                <p> Now let’s replace fruits with stocks and transactions with volume in the above example. Volume of a stock is
                    the total number of transactions taking place in a stock during a particular time period. If one were to say
                    that volume of a stock at 10.45 AM is 50,000, it means that since the open of the market at 9.20 AM a
                    particular stock has been bought and sold 50,000 times. Just like price, volume is an important indicator to
                    understand whether money is moving into or away from a particular stock. In the case of fruit market, if
                    more transactions are taking place in mangoes compared to other fruits, it can be interpreted that more
                    people want to buy and sell mangoes compared to other fruits. This increase in interest could be because of
                    two different reasons. One reason might be that more people are buying mangoes and hence demand is
                    increasing causing price to increase. Alternatively suppliers might have stocked up mangoes in huge
                    quantities which they want to sell off, so they are enticing buyers by decreasing prices. Similarly, sudden
                    increase in volume of a stock could be because of two reasons. Increased demand for the stock might have
                    pushed up activity in the counter leading to price increase. Alternatively, current shareholders might be
                    selling the stock in droves, increasing activity in the counter thereby lowering prices. </p>
                <p> Volume also indicates liquidity available for a stock. Liquidity refers to the ease with which a stock can
                    be bought or sold in the market without affecting its price. To understand this better let’s revisit our
                    example of fruits market. Suppose you have a stock of 50,000 apples that have to be sold. Current market
                    price of a single apple is Rs.25 and 40,000 apples were sold in the market the previous day. If you decide
                    to sell all 50,000 apples today, supply of apples in the market will drastically increase compared to the
                    previous day’s level and hence price will probably drop down below Rs.25. But suppose, previous day was
                    holiday and you believe apple sales suffered because of the same. The best alternative then is to calculate
                    the average number of transactions over the past one month to smoothen the effect of abnormally high or low
                    transaction numbers. Suppose average number of transactions over the past one month is 20,00,000 apples a
                    day. Now you can be sure that attempting to sell 50,000 apples a day will not affect price as market offers
                    sufficient liquidity for apples. The same analogy applies in case of buying and selling stocks as well.
                    Whenever an investor wants to buy/sell stocks in huge lots, it is prudent to check the average volume over
                    the past 1 month / 3 months to make sure that price impact is limited. </p>
                <p> We discussed trends in our previous article. If volume is increasing in a bull trend, it means that momentum
                    is increasing and more and more people are joining the trend. Suppose volumes are decreasing in a bull trend
                    we can assume the the stock is losing momentum and the trend might reverse soon. The same logic applies in
                    case of other trends as well. </p>

            </div>
        </div>
    )
}

export default Volume