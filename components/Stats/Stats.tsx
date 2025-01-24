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
    endCountNum: 15,
    endCountText: "+",
    text: "Projects Built"
  },
  {
    endCountNum: 95,
    endCountText: "%",
    text: "Teachers Satisfied"
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
