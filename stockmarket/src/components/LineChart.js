import { useState } from 'react';

function LineChart(props) {
    const [data,setData]=useState({
        labels:props.x_labels,
        datasets:[
            {
                label:'',
                data:props.y_labels,
                backgroundColor:'yellow'
            }
        ]
    })
    return (
        <>
            
        </>
  )
}

export default LineChart