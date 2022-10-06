import React from 'react'
import './Style/searchdata.css'

function Searchdata(props) {
  const search_data=props.search_data
  console.log("from search function")
  return (
    <div>
      {
        search_data.forEach(element => {
          Object.values(element).forEach(val=>{
            return (
            <>
              <span>{val['shortName']}  </span> <span>(</span> <span> {val['symbol']}</span><span>)</span>
            </>
            )
          })
        })
      }
    </div>
  )
}

export default Searchdata
