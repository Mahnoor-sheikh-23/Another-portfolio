import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import "../app/style/about.css";
import AnimatedText from './AnimatedText';
import girlPicture from "../public/heroSectionImage/girl.png";

const About = () => {
  return (
    <div className='first-div-of-about' id='ABOUT'>
      <div className='second-div-of-about'>
        <div className='third-div-of-about'>
          {/* image + shape  */}
          <div className='fourth-hidden-div-of-about'>
            <div className='fifth-div-of-about'>
              {/* shape */}
              <div className='sixth-div-of-about'>
              </div>
              {/* image  */}
              <div className='about-image1'>
                <Image src={girlPicture} width={350} alt='' height={350} quality={100} />
              </div>
              {/* rotating shape  */}
              <div className='about-image2'>
                <motion.div animate={{
                  rotate: [0, 360],

                }}
                  transition={{
                    duration: 10,
                    ease: "linear",
                    repeat: Infinity
                  }}>
                  <Image src='https://static.vecteezy.com/system/resources/thumbnails/021/971/708/small_2x/color-blob-banner-clip-art-free-png.png'
                    width={160}
                    height={160}
                    alt=''
                  />
                </motion.div>
                <div className='after-circle-div'>
                  <div className='-div'>10+</div>
                  <div className='--div'>Years of <br />Experience</div>
                </div>
              </div>
            </div>
          </div>
          {/* text  */}
          <div className='div-of-text-about'>
            <div>
              <AnimatedText text="My Name is Mahnoor" textStyles="aboutSEction" />
              <p className='about-text-skills'>Frontend developer & Designer</p>
            </div>
            <p className='actual-about-text'>I create visually stunning and functional websites using modern frontend technologies and design principles. Explore my work to see how combine creativity with technical skills to deliver exceptional digital experiences</p>
            {/* info items  */}
            <div className='info-div'>
              {/* item : 01 */}
              <div className='info-no-01'>
                <div className='info-of-age'>AGE</div>
                <p className='info-of-years'>17 Years</p>
              </div>
              {/* item : 02 */}
              <div className='info-no-01'>
                <div className='info-of-age'>BORN IN </div>
                <p className='info-of-years'>Pakistan , Karachi </p>
              </div>
              {/* item : 03 */}
              <div className='info-no-01'>
                <div className='info-of-age'>PHONE</div>
                <p className='info-of-years'>+03423 960573</p>
              </div>
              {/* item : 04 */}
              <div className='info-no-01'>
                <div className='info-of-age'>EMAIL</div>
                <p className='info-of-years'>mahnooradnan479@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
