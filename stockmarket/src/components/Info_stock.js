import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {Chart as ChartJS,Title,Tooltip,LineElement,Legend,CategoryScale,LinearScale,PointElement} from 'chart.js'
import { Line } from 'react-chartjs-2';
import './Style/info_stock.css'
import {useNavigate} from 'react-router-dom'
ChartJS.register(
    Title,Tooltip,LineElement,Legend,CategoryScale,LinearScale,PointElement
)
function Info_stock() {
  const params = useParams()
  const navigate=useNavigate()
  console.log(params.id,params.days)
  const [data_stock, setdata_stock] = useState({ id: null, symbol: '', shortName: '', longName: '', exchange: '', market: '', quoteType: '' })
  const [api_data, set_apidata] = useState({ x_values: [], y_values: [],O_values:[] })
  const getId=(dy)=>{
    if(dy==0)
      return ['current-search','none','none']
    else if(dy==1)
      return ['none','current-search','none']
    else if(dy==2)
      return ['none','none','current-search']
  }
  const [id1,id2,id3]=getId(params.days)
  const urltoapply=(dy,sym,apiKey)=>{
    if(dy==0){
      let url=`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${sym}&interval=5min&apikey=${apiKey}`
      let k='Time Series (5min)'
      return [k,url]
    }
    else if(dy==1){
      let url=`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${sym}&apikey=${apiKey}`
      let k='Weekly Time Series'
      return [k,url]
    }
    else if(dy==2){
      let url=`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${sym}&apikey=${apiKey}`
      let k='Monthly Time Series'
      return [k,url]
    }
  }
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/stockdetails/${params.id}/`).then(
      (res) => {
        axios.get("http://127.0.0.1:8000/stockapiKey/").then(res2=>{
            console.log(res2)
            const [k,url]=urltoapply(params.days,res.data.symbol,res2.data.apiKey)
            axios.get(url).then(
              res1 => {
                console.log(res1.data)
                set_apidata((prevstate) => {
                  return (
                    {
                      x_values: [],
                      y_values: [],
                      O_values:[]
                    }
                  )
                })
                let data_index = res1.data[k]
                console.log( res1.data[k])
                Object.keys(data_index).forEach(key1 => {
                  set_apidata((prevstate) => {
                    return (
                      {
                        x_values: [...prevstate.x_values, key1],
                        y_values: [...prevstate.y_values, data_index[`${key1}`]['4. close']],
                        O_values: [...prevstate.y_values, data_index[`${key1}`]['1. open']]
                      }
                    )
                  })
                })
              }
            )
        })
        setdata_stock(() => {
          return ({
            ...data_stock,
            id: res.data.id,
            symbol: res.data.symbol,
            shortName: res.data.shortName,
            longName: res.data.longName,
            exchange: res.data.exchange,
            market: res.data.market,
            quoteType: res.data.quoteType
          })
        })
        console.log("o values...")
        console.log(api_data.O_values)
        let lastvalue=Number(api_data.y_values[api_data.y_values.length-1])
        console.log("last value",lastvalue)
        console.log("first value",Number(api_data.O_values[0]))
      }
    )
  }, [params.id,params.days])
  return (
    <div className='info-main-container'>
      <div className='info-meta-main-container'>
        <div className='info-meta-upper-container'>
          <div className='info-c-name'>
            {data_stock.longName}
          </div>
          <div className='info-request-days'>
            <div className='info-days' onClick={()=>navigate(`/${params.id}/0`)} id={id1}>1D</div>
            <div className='info-days' onClick={()=>navigate(`/${params.id}/1`)} id={id2}>1W</div>
            <div className='info-days' onClick={()=>navigate(`/${params.id}/2`)} id={id3}>1M</div>
          </div>
        </div>
        <div className='info-chart-details'>
          <div className='info-chart-price-chart'>
            Price Chart
          </div>
          <div className='info-chart-lhr-values'>
            <div className='info-chart-values-child'>
              <div  className='info-chart-text'>
                low
              </div>
              <div className='info-chart-values'>
                {Math.min(...api_data.y_values)}
              </div>
            </div> 
            <div className='info-chart-values-child'>
              <div className='info-chart-text'>
                high
              </div>
              <div className='info-chart-values'>
                {Math.max(...api_data.y_values)}
              </div>
            </div>
            <div className='info-chart-values-child'>
              <div className='info-chart-text'>
                return
              </div>
              <div className='info-chart-values'>
                {(((Number(api_data.y_values[0])-Number(api_data.O_values[api_data.O_values.length-1]))/Number(api_data.O_values[api_data.O_values.length-1]))*100).toFixed(3)}%
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='info-s-main-container'>
        <Line data={
          {
            labels:api_data.x_values.reverse(),
            datasets:[
              {
                  label:'close',
                  data:api_data.y_values.reverse(),
                  backgroundColor:'yellow',
                  borderColor:'gray',
                  tension:0.4,
                  pointRadius:1
                  
              }
            ],
          }
        } 
        options={
          {
            maintainAspectRatio:false,
            /*scales:{
              y:{
                grid:{
                  display:false
                },
                ticks:{
                  display:false
                }
              },
              x:{
                grid:{
                  display:false
                },
                ticks:{
                  display:false
                }
              }
            }*/
          }
        }
        />
      </div>
    </div>
  )
}
export default Info_stock