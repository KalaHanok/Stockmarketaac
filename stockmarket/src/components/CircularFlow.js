import React from 'react'
import cf1 from './images/cf1.png'
import cf2 from './images/cf2.png'
import cf4 from './images/cf4.png'
import './Style/introme.css'
function CircularFlow() {
    return (
        <div className='Elementry-childs'>
            <div className="heading">
                <h1>Circular Flow</h1>
            </div>
            <div className="subh">
                <h2>Circular Flow of Products : How you control the entire production process
                </h2>
            </div>
            <div className="cont">
                <p> Market is a very common term used by all of us on a daily basis. Any place enabling buyers and sellers of a
                    particular good/service to interact with each other is called market. If there is a place where buyers and
                    sellers of sugar are coming together and trading with each other, it will be called a sugar market.
                    Similarly, if buyers and sellers of furniture are trading with each other on an online portal, then that
                    portal is also a furniture market.</p>
                <p> Suppose you want to set up a cloth manufacturing unit. First thing that you would need is a piece of land to
                    setup the factory. Once you have the land, you need capital. By capital, we are referring to related
                    infrastructure like factory building, machines and software systems. Finally, you would be needing people to
                    work in your factory, called labor. These are the three essential things that are always required for
                    production and are called factors of production. Now the next question, where will you obtain them from? You
                    would be buying these factors from other individuals. You can very well argue that you can buy them from
                    other firms as well, but ultimately somebody would have bought it from individuals.</p>
                <p> Let’s divide the whole economy into two parts, firms and households. All land, capital and labour ultimately
                    belongs to households, let’s consider these households as individual families. Firms will be buying these 3
                    factors of production from households. So we have firms who are the buyer’s, households are the seller’s and
                    factors of production as the product. As per our definition of market, this setup would be called a factor
                    market.</p>
                <p> Let’s now revisit our example where you were trying to setup a cloth manufacturing unit. Suppose, now the
                    factory is set up and you begin manufacturing. Who will buy your products? Again it’s the households
                    (individuals) who would be buying your products in the cloth market. Let’s broaden our example and think
                    about who would be buying all the finished goods manufactured in the economy, it will be the households who
                    would be buying these products. Thus, in finished goods market, firms are the sellers and households are the
                    buyer’s.</p>
                <p> As we saw, firms buy factors of production from households in factor market. Then they manufacture finished
                    goods using these factors of production and sell it back to households in finished goods market. Full
                    circular process can be seen in the figure below.</p>
            </div>
            <div className="images"><img src={cf1} alt=""/></div>
            <br/>
                <div className="subh">
                    <h2>Circular Flow of Income :
                        Spend.. it's all coming back to you

                    </h2>
                </div>
                <div className="cont">
                    <p> In the previous article, “Circular flow of products” we saw how products flow in the economy. Firms buy
                        factors of production from households in the factor market and sell finished goods back to them in the
                        finished goods market.</p>
                    <p>When firms buy factors of production (land, capital and labor) from the factor market, they need to reimburse
                        households for the same. Thus, in factor market money is flowing from firms to households. Money spent by
                        firms is their cost of production and earnings for the households. In the finished goods markets, firms are
                        selling their products to households, so money is flowing from households to firms. As shown in the diagram
                        below money and products flow in opposite directions, money moves clockwise and products flow anti
                        clockwise. The cumulative amount spent by households is equal to the revenue of the firms. The difference
                        between the amount earned by firms in the finished goods market and the money spent by firms in the factor
                        market is the firm’s profit.</p>

                    <p>The diagram also makes it obvious that expenditure of one entity is equal to total income of another;
                        applying the same working to the entire economy, total expenditure in the economy is always equal to the
                        total income.</p>
                    <p>Let’s talk a little more about the income received by households. In the factor market, households earn
                        various kinds of income from firms. Income received for renting out land is termed rent. In return for labor
                        provided by household’s, they receive salary/wages and capital earns interest. It is easy to understand how
                        land would earn rent and labor would earn wages/salary, but understanding how capital earns interest is a
                        little difficult.</p>

                </div>
                <div className="images"> <img src={cf2} alt=""/> </div>
                <br/>
                    <div className="subh">
                        <h2>Measuring GDP :
                            The recipe

                        </h2>
                    </div>
                    <div className="cont">
                        <p> Understanding how to measure gross domestic produce (GDP) becomes very easy after learning circular flow of
                            income. We recommend reading our previous three articles on circular flow of products and money before
                            continuing on. As discussed in an earlier article, GDP is the value of final goods and services produced
                            domestically in a given time period. When we say GDP of India was USD 2.3 trillion in financial year 2015,
                            we mean that total value of all goods and services produced in the Indian economy between April 2014 and
                            March 2015 was USD 2.3 trillion.</p>
                        <p> In order to measure GDP, we need to calculate the expenditure incurred on producing all the goods and
                            services. Obviously, goods and services produced in the economy will get consumed generating income for
                            producers. From our previous article on circular flow of income we know that income is equal to expenditure.
                            So if we can measure the total spending on goods and services in the economy, we will be able to arrive at
                            the total GDP figure. Hence we can either use the total expenditure or total income approach to calculate
                            total GDP.</p>

                    </div>
                    <div className="images-cf"> <img src={cf4} alt=""/> </div>
                    <div className="cont">
                        <p> Let’s discuss the expenditure approach. From the above diagram, we can see that there are 4 major spenders
                            in the economy. Households are spending on purchasing goods and services produced by firms, firms are
                            spending on their factor requirements, Government is spending to create public goods and finally foreigners
                            are spending to buy domestic goods.</p>
                        <p>Total Expenditure = Household expenditure on goods and service (C) + Firm expenditure on capital and other
                            factors (I)+ Government’s expenditure on public goods (G)+ Foreigners net expenditure on exports (X-M)</p>
                        <p>GDP = C + I + G + (X – M)</p>
                        <p>Here, C is the consumption by households, I is defined as the investment by firms, G is the government
                            expenditure and X-M is export minus imports. This is how GDP is measured in the expenditure approach.</p>
                        <p>If any of the above 4 things increase, GDP of the country will also increase. If households are consuming
                            more because of rising levels of income, then GDP will increase. If firms are investing more, because
                            borrowing money has become easy due to low interest rates, then GDP will increase. If Government is spending
                            more on public goods, then GDP will increase. Finally, if exports are rising faster than imports, even then
                            GDP will increase.
                        </p>
                    </div>
                </div>
                )
}

                export default CircularFlow