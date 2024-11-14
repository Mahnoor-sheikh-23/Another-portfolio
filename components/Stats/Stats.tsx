import React from 'react';
import StatsItem from './StatsItem';
import "./stats.css";

const statsData = [
  {
    endCountNum: 11,
    endCountText: "+",
    text: "Months of Experience"
  },
  {
    endCountNum: 8,
    endCountText: "+",
    text: "Website Built"
  },
  {
    endCountNum: 95,
    endCountText: "%",
    text: "Cients Satisfied"
  },
]

function Stats() {
  return (
    <div className='stats-section'>
      {
        statsData.map((item, index) => {
          return <StatsItem  endCounNum={item.endCountNum} endCountText={item.endCountText} text={item.text} key={index}/>
        })
      }
    </div>
  )
}

export default Stats
