import React, { useCallback, useState } from 'react';
import "./testimoninal.css";
import { ImQuotesLeft } from "react-icons/im";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

// import swipper react components
import { Swiper, SwiperSlide } from "swiper/react";
// import swipper styles 
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/swiper-bundle.css';

// import requires module 
import { Autoplay } from "swiper/modules";
import AnimatedText from '../AnimatedText';
import Image from 'next/image';

// sampe data for projects with various categories

const slides = [
  {
    img: "https://media.istockphoto.com/id/924985612/photo/make-up-artist-is-working-with-face-of-gorgeous-model-cosmetic-manicure-and-make-up.jpg?s=612x612&w=0&k=20&c=g0dQePCZlL_lAQ20tmkKlHS089SyxbtziJVVpaoLoz4=",
    name: "Mahnoor Adnan",
    message: "The servise was fanatstic! highky recomnended it to anyone looking for top noth design "
  },
  {
    img: "https://img.freepik.com/free-photo/front-view-confident-woman-studio_23-2148410956.jpg",
    name: "Bushra Malik ",
    message: "The servise was fanatstic! highky recomnended it to anyone looking for top noth design "
  },
  {
    img: "https://media.gettyimages.com/id/1294339577/photo/young-beautiful-woman.jpg?s=612x612&w=gi&k=20&c=THGKzXVD10CLahJ1LhWDar-iTJ2Lgl5M6P20E8nKUtM=",
    name: "Aisha Razzaq",
    message: "The servise was fanatstic! highky recomnended it to anyone looking for top noth design "
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaDSue-mqx5HYJNuXOyIMbL_9a_h-Wkq3HwA&s",
    name: "Anaiba Farhan",
    message: "The servise was fanatstic! highky recomnended it to anyone looking for top noth design "
  },
  {
    img: "https://www.shutterstock.com/image-photo/beautiful-woman-profile-long-shiny-260nw-1922411411.jpg",
    name: "Aniqa Azhar",
    message: "The servise was fanatstic! highky recomnended it to anyone looking for top noth design "
  },
  {
    img: "https://thumbs.dreamstime.com/b/photo-lovely-young-model-girl-no-clothes-closed-eyes-flowers-isolated-beige-color-background-324823252.jpg",
    name: "Mahnoor Adnan",
    message: "The servise was fanatstic! highky recomnended it to anyone looking for top noth design "
  },
]

const Testimonial = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  // state to stoe the active slide index 
  const [activeSlide, setActiveSlide] = useState(0);


  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev()
  }, [swiperRef])

  const handleNext = useCallback(() => {
    swiperRef?.slideNext()
  }, [swiperRef])

  return (
    <div className='main-div-of-testimonial-comp'>
      <div className=' second-div-of-testimonial-comp '>
        <AnimatedText text="What Clients say" textStyles="animated-text-of-testimonil" />
        <div className='after-animatedptext-div'>
          {/* slider info */}
          <div className='slider-info-work'>
           <ImQuotesLeft  className='imquotestleft-styling'/>
           <h3 className='h3 mb-2'>{slides[activeSlide].name}</h3>
           <p className='para-of-active-slides'>{slides[activeSlide].message}</p>
           {/* slider buttons */}
           <div className='div-of-arrow-buttons'>
            <button onClick={handlePrevious} className='fiarrown-btn'><FiArrowLeft/></button>
            <button onClick={handleNext} className='fiarrown-btn'><FiArrowRight/></button>
           </div>
          </div>
          {/* slider */}
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            onSwiper={setSwiperRef}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}//update the active slide  index 
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false

            }}
            className='after-second-div-of-testimonial-comp'>
            {slides.map((slide, index) => {
              return <SwiperSlide key={index} className='slider-of-testimonial'>
                <div className='third-div-of-testimonial-comp'>
                  <div className={` ${activeSlide === index ? "h-full" : "h-[240px]"} fourth-div-of-testimonial-comp`}>
                    <Image src={slide.img} className='imgg-of-testonomial' quality={100} fill alt='' />
                  </div>
                </div>
              </SwiperSlide>;
            })}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Testimonial;
