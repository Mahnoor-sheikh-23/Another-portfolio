import React from 'react';
import "./journey.css";
import AnimatedText from './AnimatedText';
import Cards from './cards/Cards';

const Journey = () => {
  return (
    <div  id='JOURNEY'>
      <div className='second-div-journey'>
        <AnimatedText text="My Professional Journey" textStyles="h2-styles"/>
        <Cards/>
      </div>
    </div>
  )
};

export default Journey;
