"use client";
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Journey from '@/components/Journey';
import Work from '@/components/Work/Work';
import Contact from '@/components/Contact';
import React, { useEffect } from 'react';
import FixedMenu from '@/components/FixedMenu';
import Testimonial from '@/components/Testimonial/Testimonial';
import Footer from '@/components/Footer';

const Home = () => {
  //  implement locomotive scroll 
  useEffect(() => {
    const loadLocalMotiveScroll = async () => {
      const locomomtiveScroll = (await import("locomotive-scroll")).default;
      new locomomtiveScroll();
    };
    loadLocalMotiveScroll()
  }, [])


  return (
    <div >
      <Hero />
      <FixedMenu />
      <Services />
      <About />
      <Journey />
      <Work />
      {/* <Testimonial/> */}
      <Contact />
      <Footer/>
    </div>
  )
}

export default Home;
