import React from 'react'
// import './Style/equitymarket.css'
import './Style/introme.css'
import trend1 from './images/trend1.png'
import trend2 from './images/trend2.png'
function Trend() {
    return (
        <div className='Elementry-childs'>
            <div className="heading">
                <h1>Trend, Support & Resistance</h1>
            </div>
            <div className="subh">
                <h2>Trend :
                    Your best friend
                </h2>
            </div>
            <div className="cont">
                <p>You might have seen technical analysts analyzing charts on various business news channels and telling that a
                    particular stock is in uptrend/downtrend. When we say a stock is in uptrend it means that we expect stock
                    price to move upwards in near future. Similarly, when we say a stock is in downtrend it means we expect
                    stock price to move downwards in near future. You would have noticed that prices rarely move in a straight
                    line. Even if the stock price has moved up, over the last year, there will be days or months when it would
                    have moved down, compared to the previous close. So how do we define a trend? Technical Analysis says that
                    if the stock price is moving up and making higher highs and higher lows, it is in uptrend. Let’s understand
                    this through an example. </p>
                <p> Suppose you decide to analyze traffic situation at a nearby signal. You know that signal becomes green in
                    every 5 mins and remains open for the next 5 mins. At 6pm you observe that there are 100 cars waiting at the
                    signal which just turned red. The signal will become green at 6:05 pm and will again become red at 6:10 pm.
                    You observe that in every 5 mins 30 cars arrive at the signal and add up to the queue. In the 5 mins, when
                    signal is open, 50 cars pass by. Let’s note down your observations at various points of time </p>
                <p> At 6:00 PM - Signal just turned red and there are 100 cars waiting </p>
                <p> At 6:05 PM - In last 5 mins, 30 cars were added to the queue and now the number of cars waiting at signal is
                    130. Signal turns green. </p>
                <p> HIGHER HIGH! </p>
                <p> At 6:10 PM - 50 cars pass by when the signal was open, but 30 were again added in the last 5 mins. So total
                    cars at the signal are 130+30-50 = 110. </p>
                <p> HIGHER LOW! </p>
                <p> At 6:15 PM - Again 30 cars were added to the queue. Number of cars become 110+30 = 140. Signal becomes
                    green. </p>
                <p> HIGHER HIGH! </p>
                <p> At 6:20 PM - 50 cars pass by in last 5 mins when the signal was green, but 30 were again added. Now the
                    number becomes 140+30-50 = 120 </p>
                <p> HIGHER LOW! </p>
                <p> As we can see, no of cars at the signal makes a higher high in every 10 mins starting 6:05 PM. At 6:05 PM it
                    was 130 which became 140 at 6:15 PM. This will become 150 at 6:25 pm, if you keep calculating. This is an
                    example of uptrend. You can see this trend in the first half of the chart below. </p>
                <p> At 6:25 pm, we can say that no of cars at the signal are in uptrend and we expect them to increase in near
                    future. </p>
                <p> Let’s say you observe that around 7 pm, it starts getting less congested and only 25 cars are added to the
                    queue in every 5 mins, instead of 30 cars. Previously 60 cars were getting added to the queue in every 10
                    mins and only 50 were moving out, as the signal only opens for 5 mins in a 10 min window. After 7 pm the
                    situation has changed. Now, only 50 cars are getting added in every 10 mins and we know that same number of
                    cars will move out, in 5 mins when the signal is open. So now the traffic has become stagnate. It’s neither
                    increasing nor decreasing, as 25 cars are added in every 5 mins but in next 5 mins, 50 move out. This
                    situation is depicted by the middle part of the chart below. </p>
                <p>After 7:30 pm, you observe that only 20 cars are getting added to the queue. Now the pattern will make lower
                    highs and lower lows. We recommend trying this scenario yourself. Traffic situation will improve because we
                    know that only 40 cars are added to the queue in every 10 mins and 50 cars are moving out. We can clearly
                    say that no of cars at the signal are in downtrend and now we expect them to decrease with time. </p>

            </div>
            <div className="images">
                <img src={trend1} alt=""/>
            </div>
            <div className="cont">
                <p>If we join all the highs, it’s called resistance. If we join all the lows, it’s called support. Keep reading,
                    as we go in details of trend, support and resistance in our next post. </p>
                <p> Basics of Trend, Support & Resistance </p>
                <p> In our previous article, we explained the rationale behind trend. It’s a pattern identified by technical
                    analysts to predict future price movements of a security. In the example that we covered in last article, we
                    stood at a signal for 2.5 hrs to identify various trends. Similarly, we can analyze any stock for a specific
                    time period to study and identify trends. For better understanding, we recommend reading the above article
                    before going ahead. </p>
                <p> Trend: A trend is defined as a general pattern or direction followed by price of a stock in a specified time
                    period. As discussed in the previous article, a stock price never moves in a straight line. It generally
                    follows a random pattern with successive highs and lows. But over a period of time, price of a stock can
                    move up or down. If the price seems to be heading upwards, it’s called an uptrend. If the price seems to be
                    heading downwards, it’s called downtrend. It might also happen that we are not able to recognize any
                    pattern, as happened in the middle portion of the chart that we explained in last article. Usually, a trend
                    is classNameified as a long term trend, if it lasts for more than a year. Short term trends are the ones which
                    last for around 1-2 months. There could be multiple short term trends in a long term trend. A stock might be
                    in a long term uptrend which has been observed over the last 5 years, but currently experiencing short term
                    downtrend due to factors which are not expected to last long. </p>
                <p> Support and Resistance: We obtained resistance by joining all the highs and support by joining all the lows,
                    in the chart created in previous article. As seen in the chart, no. of cars moved between these two lines.
                    Similarly, when we plot support and resistance by joining lows and highs of a stock price and determine a
                    trend, we expect the stock price to move between these two lines. If the stock price moves below the support
                    line, it means that the trend has been broken and there is excess downward pressure on the stock. Similarly,
                    when stock price moves above resistance, again trend has been broken and there is excess upward pressure on
                    the stock. In an uptrend, this could happen because the speed of increase in no of people interested in
                    buying stock has increased. Suppose in our previous example, instead of 30 cars coming and joining the queue
                    in every 5 mins, 40 cars are coming and joining the queue after 6:30 pm. In this case we would get the
                    following chart. We can easily see how the resistance is broken and line depicting no of cars move out of
                    trend due to excess upward pressure. Same thing can happen with a stock price, when the speed of increase in
                    no of people interested in buying stock increases. </p>

            </div>
            <div className="images">
                <img src={trend2} alt=""/>
            </div>
        </div>
    )
}

export default Trend