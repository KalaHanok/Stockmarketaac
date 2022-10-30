import React from 'react'
import Man from './images/Man.svg'
import graph from './images/graph.svg'
import './Style/homeui.css'
function HomeUi() {
  return (
    <div>
      <div>
        <div className='home-ui-man-content'>
          <div className='homeui-content'>
            <div id='homeui-c-1'>KNOW</div>
            <div id='homeui-c-2'>BEFORE INVESTING</div>
          </div>
          <img src={Man} />
        </div>
      </div>
      <div>
        <img src={graph}/>
      </div>
    </div>
  )
}

export default HomeUi