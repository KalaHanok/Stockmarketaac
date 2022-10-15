import React from 'react'
import './Style/introme.css'
import mp1 from './images/mp1.png'
import mp2 from './images/mp2.png'
function MonetaryPolicy() {
    return (
        <div className='Elementry-childs'>
            <div className="heading">
                <h1>Monetary Policy</h1>
            </div>
            <div className="subh">
                <h2>Money</h2>
            </div>
            <div className="cont">
                <p> If someone wants to borrow INR 1,000 for a day and promises to return INR 10,000 the next day, you might not
                    believe him, as magic only happens in Harry Potter movies. But if that someone is a bank, you better take it
                    seriously. The article below explains how this magic works.</p>
                <p>Suppose there were no banks in the city you live in and the first bank opened today. You went to the bank and
                    deposited INR 1000. As per Government regulations, banks need to set aside at least 10% of the deposit
                    amount as reserve and rest can be lent out. It is easy to understand why Government would want such a rule.
                    If banks lend out the entire deposit amount, it will have none left to meet depositor’s withdrawal
                    requirement. Thus, banks retain some part of the money to meet their liquidity requirements, before lending
                    out the remaining amount. We will learn more about this percentage requirement in future articles.</p>
                <p>Let’s come back to our example. You deposited INR 1000 with the bank, bank retained INR 100 (10% of 1000) and
                    loaned out the rest to a company seeking a loan of INR 900 to fund its capital requirement. Company utilised
                    this amount to buy tools and machinery, from a capital supplier, for its new plant. This supplier, after
                    receiving the money from company, went to the same bank again and deposited INR 900. In this roundabout way,
                    money again came back to the bank in the form of deposit, but it was 10% lesser than the original deposit
                    amount. The below chain explains this process.</p>

            </div>
            <div className="images"> <img src={mp1} alt="" /> </div>
            <div className="cont">
                Now again as per Government rule, bank will have to retain 10% of the deposit and can lend rest of the amount.
                This time bank will retain INR 90 (10% of INR 900) and will lend out only INR 810. Let’s suppose bank lent INR
                810 to a farmer, to buy seeds and fertilizers. The farmer bought these from a fertilizer manufacturing company.
                The company, after receiving payment from the farmer, returns to the bank to deposit the money. Thus money again
                came back to the bank in the form of deposit, but it was 10% lesser than the deposit amount of INR 900. The
                process can be seen in the following flow chart.
            </div>
            <div className="images"> <img src={mp2} alt="" /> </div>
            <div className="cont">
                This process will keep on repeating. Every time bank receives a deposit it will retain 10% of the deposit amount
                and lend out the balance.Sum of all these deposit amounts (INR 1000+ INR 900 + INR 810 …) will add up to INR
                10,000. As discussed in the beginning, if banks say they will convert INR 1000 to INR 10,000, you better take it
                seriously. This shows how small amount of money injected into the economy results in economic activity worth
                many folds larger than the amount injected.
                <br /> Let’s learn more about money and the role played by central bank in the whole process.

            </div>
            <br />
            <div className="subh">
                <h2>Central Bank :
                    The big boss
                </h2>
            </div>
            <div className="cont">
                <p> Central Bank is the single most important unit in the whole financial system. It is very easy to understand
                    the need and importance of a central bank. You must have seen a football or a wrestling match. Ever tried to
                    imagine what would happen if the referee is not present? In wrestling, a wrestler can easily cheat and use
                    wrong moves to defeat his opponent. Similarly, in a football match, a goal might be claimed, even if scored
                    after offside. Central bank is the big boss and can be considered as referee of the banking system. The
                    Central bank drafts rules that all participants of the system need to adhere to and ensures implementation
                    of these rules. </p>
                <p>Let us reconsider the example that we discussed in our previous article. We understood everything about how
                    money flows within the system and its multiplier effect, but we still don’t know how money came into your
                    hand, in the first place. It is the central bank of a country that has all the rights and power to print
                    money. A currency note is a promise by the Governor of central bank of India that he will pay you the same
                    amount of money in exchange for this note. Suppose, I write on a stamp paper that I will give INR 1,000 to
                    the holder of this stamp paper and pass it on to you as a gift. You owe INR 1,000 to your friend Neha and
                    decide to pay her using the stamp paper, which can be converted to money any time. Neha accepted the stamp
                    paper and decided to buy groceries using the same and passed it on the shopkeeper, who in turn used it for
                    some other purpose. This is how paper currency got accepted in the society and circulation began.</p>
                <p>So far we have discussed two important functions of the Central bank. First one is to draft and implement
                    regulations for the banking system. Central bank decides criteria regarding who should be allowed to operate
                    a bank, minimum documents required to open a bank account, amount of money banks should hold as reserve to
                    safeguard depositors money in case of crisis etc. They provide a level playing field to all banks and also
                    ensure that customer interest is safeguarded. The second function of Central bank is to print money.</p>
                <p>In addition to this, central bank is also responsible for controlling inflation in a country. As discussed
                    previously, inflation can be of two types: demand pull and cost push. If central bank prints too much of
                    money and this extra money flows into the system, it will result in a case of too much money chasing too few
                    goods. This is exactly what happens in the case of demand pull inflation. So when inflation is high, central
                    banks reduce injecting money into the economy. When inflation is low central bank pumps more money into the
                    economy to drive up inflation. As discussed earlier in our article on forex, if central bank prints too much
                    money thereby increasing its supply, the currency will depreciate and its value will come down. Too little
                    printing can lead to appreciation of currency as well. Thus, another important job of the central bank is to
                    control currency fluctuations in the forex market.</p>
                <p>To conclude central banks are the big boss of the banking system, they design rules of the game, ensure all
                    banks follow the same, control money supply, target inflation and closely watch and safeguard the economy
                    against unwanted currency fluctuations.</p>
                <p>Read on to understand how central banks inject money in the economy.</p>
                <p>Monetary Policy Instruments</p>
                <p>The previous article details Central bank’s functions and it’s importance in the financial system. In today’s
                    world, inflation targeting and control of money flow in order to ensure price stability takes precedence
                    over all other tasks of the Central bank. The bank uses different processes and adopts various instruments
                    to achieve this objective. Some of the important ones are explained below:</p>
                <p>Cash Reserve Ratio (CRR): Let’s again go back to the example where we understood how more money is created in
                    the economy and how money multiplier works. As soon as a deposit was made, the bank was required to retain a
                    certain portion of the deposit and was free to lend the balance amount. The percentage of deposit that the
                    bank is required to retain is called “cash reserve ratio”. So if an individual deposits Rs 100 with the bank
                    and CRR is 5%, banks need to retain Rs 5 in reserve and can lend rest of the money to borrowers. The main
                    objective of CRR is to ensure that banks have sufficient cash, in order to meet withdrawal requirements of
                    their customers. It works on the assumption that all depositors do not demand their money back on the same
                    day and only a small percentage of the total population do so. In India, Reserve Bank of India (RBI) sets
                    the CRR ratio and banks are required to deposit the same with RBI. </p>
                <p>Statutory Liquidity Ratio (SLR): It can be thought of as an addition requirement like CRR where banks are
                    required to retain certain percentage of total deposits in cash and cash equivalents. The main objective of
                    this exercise is to ensure that banks have sufficient liquid balance to meet customer’s demand for cash.
                    Suppose funds are invested in real estate property or used to buy stake in a company, then it cannot be
                    easily liquified. It will take time to sell stake in a company or sell land/real estate. However investing
                    in gold or Government securities is prudent as these instruments can be readily converted to cash. Gold has
                    a standard price and can be easily converted to cash by exchanging with other banks or selling in the
                    market. Read more about Government securities below.</p>
                <p>Open Market Operations: When individuals need funds, they can borrow the same from banks. This transaction
                    involves promise of payback within a certain time period and payment of interest on the borrowed amount.
                    Similarly when Government wants to borrow money, it does so by issuing securities called treasury bill/bond.
                    Suppose Government wants to borrow Rs 1000, it can issue a treasury bond which promises pay back of Rs 1000
                    in 5 years and an interest rate of 8%. RBI handles Government’s borrowing activities. In open market
                    operations, RBI either buys these securities from financial institutions like banks or sells it to them. If
                    RBI is buying from banks, it means RBI is paying money to banks, which will then be loaned out thereby
                    pumping more money into the system. If RBI is selling to banks, then banks are paying money and buying these
                    securities thereby reducing the cash available to provide loans.This has the effect of sucking money out of
                    the system.</p>
                <p>Repo and Reverse Repo Rate: Just like individuals and governments, sometimes banks also need money to fulfil
                    their cash requirements. In such cases they can borrow money from RBI. The interest rate at which banks
                    borrow money from RBI is called repo rate. Sometimes banks also have excess cash and like to earn interest
                    on it. In such cases they can park the money with RBI and earn interest on it. Interest rate received by
                    banks for parking excess cash with RBI is called reverse repo rate.</p>

                <p>Monetary Policy Mechanism</p>
                <p>In the previous article we learnt about Central bank controlling money supply to the economy and the
                    instruments at its disposal to achieve this objective. This article elaborates on how Central bank uses
                    these tools to achieve its monetary policy objective.</p>
                <p>Suppose a central bank wants to pump in more money into the economy. This is called expansionary monetary
                    policy. Let’s see how this can be achieved using different tools:</p>
                <p>CRR: This is the percentage of deposit that the bank is required to retain and maintain as reserve with RBI.
                    Suppose current CRR is 6% and RBI reduces the same to 4%. The differential of 2% (6%- 4%) has now been made
                    available to banks, they can now withdraw this amount and lend the same. Increased lending will lead to flow
                    of money from banks into the economy, thereby accomplishing RBI’s mission. </p>
                <p>SLR: If the objective it to increase money supply then RBI can lower SLR. Suppose the current SLR is 18%, and
                    RBI lowers the same to 15%. Banks can redeem the 3% differential amount and utilise the same for lending
                    purposes. This extra money will flow into the economy. </p>
                <p>Open Market Operations: If the Central bank wants to increase money supply, it can buy back Government
                    securities held by banks. This will put more funds in the hands of banks, which will then lend out the same
                    leading to increased money supply in the economy.</p>
                <p>Repo rate and reverse repo rate: Repo rate is the rate at which banks can borrow money from Central banks. If
                    Central bank reduces repo rate, then banks cost of borrowing goes down. Suppose the repo rate drops from 7%
                    to 6%, the 1% differential interest outflow that banks saved on can be utilised to lend to borrowers. Lower
                    interest rates might also encourage banks to borrow more to lend. This will lead to more money flow into the
                    economy. </p>
                <p>Reverse repo rate is the interest rate which Central banks pay other banks for funds parked with it. Lowering
                    reverse repo rate, will lead to lesser interest earnings for banks. Hence instead of parking money with
                    Central bank, banks will lend more to borrowers leading to increased money supply.</p>
                <p>In a contrary situation, when central bank wants to take money out of the economy, it will reverse its
                    decisions in all the above cases. So CRR, SLR, repo rate & reverse repo rate will all increase and Central
                    bank will sell Government securities to suck money out of the system. This is called contractionary monetary
                    policy.</p>
                <p>Let’s now understand how central banks decide which economic policy, contractionary or expansionary, to
                    pursue.</p>
                <p>Monetary Policy Decisions</p>
                <p>In our previous article we learnt about how central banks achieve expansionary and contractionary monetary
                    policy objectives. In this article, let’s discuss how central banks decide whether to pursue contractionary
                    or expansionary monetary policy. But before that, we need to understand how central banks control interest
                    rates. Let’s do this using an example.</p>
                <p>You can probably recall the typical Zamindar and Lala characters in old Bollywood movies. They used to be
                    among the wealthiest people in the village and anybody in need of money used to go to them for a loan. These
                    villians used to take advantage of the situation and charge very high interest rate on the loan. Suppose
                    there is a very wealthy Zamindar – let’s call him Z, and he lends money to less wealthy Zamindars in nearby
                    villages. He charges 20% interest on loans. Less wealthy Zamindars borrow money from Z at 20% and lend out
                    the same to people in their village at a slightly higher charge of 25%. The differential of 5% is the less
                    wealthier Zamindars profit. Now suppose Z, decides to raise interest rate charged to 23% from 20%. The
                    smaller Zamindars have choice of either raising interest rates and passing on the increased cost to the end
                    borrower or they can decide against raising interest rate thereby making lesser profits. </p>
                <p>In our example, Z is the central bank and smaller zamindars are other local banks. We know that local banks
                    borrow money from central bank at repo rate. So if central bank decides to increase the interest rate (repo
                    rate), cost of borrowing funds increases for other banks. They pass this onto the end customer by increasing
                    their lending cost. Similarly, when central bank reduces repo rate, cost of borrowing funds becomes cheap
                    and profitability of banks increases. In such cases, banks might pass on the benefits to their customers by
                    lowering interest rates on funds lent out. This is how interest rate increases everywhere when central bank
                    increases repo and vice versa, and that is how central banks control interest rates.</p>
                <p>As we learnt in our article on measuring GDP, GDP increases when investment by firms increase. When interest
                    rates are low, cost of borrowing funds are cheap. When firms can borrow easily at cheaper rates, they
                    increase their investments and this ultimately leads to higher GDP.</p>
                <p>When economy is going through a recession and GDP is contracting, Central bank can help by adopting an
                    expansionary monetary policy. As discussed earlier expansionary monetary policy, pursued through either CRR,
                    SLR, open market operations or repo rate route, will result in more funds with banks. If funds are easily
                    made available to banks at lower rates, they will lend out the same to firms at the same lower rate. Lower
                    borrowing cost for firms results into higher investments in the form of new factories and manufacturing
                    units. This results into higher employment, higher incomes and ultimately results in higher GDP.</p>
                <p>Now let us look at the different types of deficits that we read about daily.</p>
            </div>
        </div>
    )
}

export default MonetaryPolicy