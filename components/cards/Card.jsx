import Image from 'next/image'
import React from 'react';
import "../journey.css";
// import {chip} from "../../public/journey/head-with-ai-chip.zip";

const Card = ({
  type,
  logoUrl,
  position,
  duration,
  description,
  company,
  institution,
  qualification,
  name, icon
}) => {
  return (
    <div className='card-styling'>
      <div className='card2-styling'>
        <div className='card3-styling'>
          <div className='card4-styling'>
            <div className='card5-styling'>
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZOaynkB4W2HitcybR54FHKLQTXpncpVSV6g&s" height={29} width={39} alt='' />
              <h3 className='h3-of-card'>
                {
                  type === "experience" ? position : type === "education" ? qualification : duration
                }
              </h3>
            </div>
            <p className='text-base'>
              {type !== "experience" && type !== "education" ? null : duration}
            </p>
          </div>
          <div className='card6-styling'>
            <div className='card6-styling-under-div'>
              {
                //reader icons for skills 
                type === "skills" ? (
                  <div className='reder-icons'>
                    <div className='reader-icons-real'>{icon}</div>
                  </div>
                ) : (
                  //render the logo for experince & education 
                  
                  <div className='render-logo-div'>
                    <Image src={logoUrl} fill alt='' className='card6-styling-image' />
                  </div>
                )
              }
              <div className='after-logo-render'>
                <h3 className='after-logo-render-h3'>
                  {
                    type === "experience" ? company : type === "education" ? institution : type === "skills" ? name : null
                  }
                </h3>
                <p className='after-logo-render-p'>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;

