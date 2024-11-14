"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { Link as ScrollLink } from "react-scroll"
import "../app/style/hero.css";
import girlPicture from "../public/heroSectionImage/girl.png";

// importing components 
import RotatingShape from './RotatingShape';
import Header from './Header';
import Stats from './Stats/Stats';

const Hero = () => {
    return (
        <div className='father-of-all-div' id='HOME'>
            {/* header */}
            <Header />
            <div className='container another-container'>
                <div className='relative relatives'>
                    <h1 className='h1-heading'>
                        <span className='spaan'>I Build And</span> Design Powerful
                        <TypeAnimation preRenderFirstString={true}
                            sequence={["Websites", 2000, "Apps", 2000]}
                            speed={50}
                            repeat={Infinity}
                            wrapper='span'
                            cursor={false}
                            className='type-animation'
                        />
                    </h1>
                    <p className='lead  p-lead'>
                        Delivering powerful, custom Websites that blend asthetics with performance.
                    </p>
                    <ScrollLink to='contact' smooth>
                        <button className='btn btn-accent buttn' onClick={() => window.location.href = 'mailto:mahnooradnan479@gmail.com'}>Contact me</button>
                    </ScrollLink>
                    {/* stats */}
                    <Stats />
                </div>
                {/* image */}
                <div className='main-div-image'>
                    <div className='under-div-image'>
                        <Image src={girlPicture}
                            fill quality={100}
                            priority
                            className='picture-girl'
                            alt='profile-photo'

                        />
                    </div>
                    {/* arrow shape */}
                    {/* Shape 1  */}
                    <div className='rotating-icon1' data-scroll data-scroll-speed="0.2">
                        <RotatingShape content={<i className="fa-solid fa-diamond icon1" aria-hidden="true"></i>} direction={"left"} duration={6} />
                    </div>
                    {/* Shape 2  */}
                    <div className='rotating-icon2' data-scroll data-scroll-speed="0.1">
                        <RotatingShape content={<i className="fa-solid fa-diamond icon1" aria-hidden="true"></i>} direction={"right"} duration={5} />
                    </div>
                    {/* Shape 3  */}
                    <div className='rotating-icon3 ' data-scroll data-scroll-speed="0.08">
                        <RotatingShape content={<i className="fa-solid fa-diamond icon1" aria-hidden="true"></i>} direction={"left"} duration={7} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero
