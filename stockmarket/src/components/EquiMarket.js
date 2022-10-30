import React from 'react'
// import './Style/equitymarket.css'
import './Style/introme.css'
function EquiMarket() {
    return (
        <div className='Elementry-childs'>
            {/* <div className='bimg'>
                <img src={bistock} alt=''></img>
            </div> */}
            <div className="heading">
                <h1>Equity Markets</h1>
            </div>
            <div classsName="subh" style={{marginLeft:"3%", fontSize:"3vh"}}>
                <h2>Exchanges :
                    Drivers of economic growth
                </h2>
            </div>
            <div className="cont">
                <p>
                    Stock exchanges are marketplaces where shares are bought and sold. Companies looking to raise funds can
                    issue shares on stock exchange, i.e essentially sell shares. Market Participants (other companies, retail
                    investors, banks, insurance firms etc) buy these shares, allowing sellers to raise the required amount. Once
                    shares are bought by market participants the shares are considered to have gone “public”. These shares can
                    now be bought and sold at will on the stock exchange by the market participants. Price of each share is
                    determined by laws of demand and supply. Higher the demand, greater the share price and vice versa. Most of
                    the trading in India takes place on two major stock exchanges, namely the BSE (Bombay stock exchange) and
                    the NSE (National stock exchange). NSE is the biggest stock exchange in India, in terms of total volume of
                    shares bought and sold. </p>
                <p>Like shares, other instruments such as options, futures,bonds etc. are also traded by market participants on
                    exchanges. Only registered market participants/members can trade on stock exchanges. So when retail
                    investors want to buy or sell shares they need to do so through these registered members, who are called
                    “stock brokers”. These brokers get the investor to open an account with them, which allows them to access
                    all the required details of the client. Stock brokers then act as middlemen between investors and exchange
                    and facilitate buying and selling of shares, in return they charge a brokerage fee for their services. </p>
                <p>Exchanges play a very important role in the economic growth of the country. Economy grows when new jobs are
                    created, new jobs are created when companies open new factories, new factories are opened when firms have
                    sufficient funds required to make these investments and exchanges help these firms raise funds for
                    investment. </p>
                <p>Let’s now understand how trades are executed and orders are placed at an exchange. </p>
                <p>Trading Mechanisms and types of orders </p>
                <p>In our previous post, we discussed how exchanges facilitate buying and selling of shares between market
                    participants and the role of brokers in the process. In this article let’s discuss how orders to buy/sell
                    shares are placed on an exchange. </p>
                <p>Let’s assume you decide to buy 1 kg of tomatoes from the nearby vegetable market at not more than Rs.10/kg.
                    You go to the market and see that there are five vendors, all selling tomatoes at Rs 15/Kg. You start
                    negotiating with each one of them and realize that there can be two outcomes: </p>
                <p>Outcome 1: Just like you other customers are also demanding lower price. Seeing this vendors will start
                    reducing the price, as nobody is willing to buy tomatoes at Rs 15/kg. It might happen that the price comes
                    down to Rs 10/kg and after buying 1 kg tomato you go home happily, </p>
                <p>Outcome 2: Unlike you, others are willing to pay the price of Rs.15/kg demanded by vendors. As vendors will
                    be able to clear their stock at higher price, prices will never come down. In this case you won’t be able to
                    buy tomatoes at Rs.10/kg and will return empty handed. </p>
                <p>In the above example, you are the buyer, tomato vendors are the sellers and tomatoes are the commodities
                    (underlying). Similarly on the exchange, there are many buyers and sellers and the underlying could be
                    anything: stock, bond etc. The entire trading process takes place on an electronic system where buy and sell
                    orders are matched. Just like in our example, suppose now you want to buy 1 share of a company A at Rs 100,
                    currently trading at a price of Rs 108. Lets us discuss the different types of orders that can be placed to
                    execute the above order. </p>
                <p>Types of orders </p>
                <p>Limit Order: You can key in an order into your computer to buy 1 share of company A at Rs.100. Just as in our
                    earlier example there are 2 possibilities. If lot of people are demanding shares of company A, at Rs.100 and
                    nobody is willing to pay the current market price of Rs.108, prices will automatically come down to match
                    demand and you might be able to buy at Rs.100 or even lower than that. However if other buyers are
                    comfortable paying Rs.108, then prices will not come down to your desired level and you will not be able to
                    buy the shares. In a limit order, the order will get executed at your desired price or at a better price –
                    i.e. at the limit price or a lower price in case of a buy order, and conversely, at the limit price or a
                    higher price in case of a sell order. This order type is advantageous when the investor wants to buy/sell at
                    a particular price and does not mind waiting for that price. </p>
                <p>Market Order: In this case you key in an order to buy/sell the shares immediately at the current market
                    price. Your priority is speed of order execution and you do not care about the direction of price movement.
                    In this case you might end up buying at a higher price or selling at a lower price, as price might
                    increase/decrease by the time order is executed. </p>
                <p>Stop Loss order: This is a risk averse investors favorite. Suppose after buying the shares at Rs.100 you are
                    now concerned that the price might fall further and do not want to make a huge loss. So you can enter a stop
                    loss order at a price lower than your purchase price. Let’s assume you do not want to lose more than Rs.5 on
                    your purchase, a stop loss order can be put in at Rs.95. If the price starts to trend down and hits Rs.95
                    shares will be sold and your loss will be minimised to Rs.5. </p>
                <p>Duration order: This order variety allows you to specify the time till when the order you placed stays open.
                    Let’s suppose you enter a limit order and make it “Good for the day”. In this case, if the order is not
                    executed by the end of the day then it will automatically get cancelled. However if you place “Good until
                    cancelled” order, then the order will remain open/active until the price comes down to your desired level
                    and you are able to buy the share. </p>
            </div>
        </div>
    )
}

export default EquiMarket