import React from 'react'
import CountUp from 'react-countup';
import "./stats.css";



interface Duration {
    endCounNum : number,
    endCountText : string , 
    text : string
}

const StatsItem:React.FC<Duration> = ({ endCounNum, endCountText, text }) => {
    return (
        <div className='first-div-of-stats-items'>
            <div className='second-div-of-stats-items'>
                <CountUp end={endCounNum} delay={1} duration={4} />
                <span>{endCountText}</span>
            </div>
            <p className='text-of-stats-items'>{text}</p>
        </div>
    )
}

export default StatsItem
