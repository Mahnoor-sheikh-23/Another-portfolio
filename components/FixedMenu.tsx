import React, { use } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { CgMenuGridR } from "react-icons/cg";
import MediaQuery, { useMediaQuery } from 'react-responsive';
import { FiMapPin, FiPhoneCall, FiMail } from "react-icons/fi";
// import "./fixed-menu.css";
import "../app/style/fixed-menu.css";

// components
import Nav from './Nav';
import Socials from './Socials';

const FixedMenu = () => {
    const [showMenuButton, setShowMenuButtons] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [isMounted, setIsMounted] = useState(false);//ensure the component is mounted 

    const isMobile = useMediaQuery({
        query: "(max-width : 640px)",

    });

    // check if the component is mounted to prevent SSR mismatches 
    useEffect(() => {
        setIsMounted(true)
    }, []);

    useEffect(() => {
        if (isMounted) {
            const handleScroll = () => {
                setShowMenuButtons(window.scrollY > 150) // show thw button after the scrolling 150px
            };
            if (!isMobile) {
                window.addEventListener("scroll", handleScroll);
                return () => window.removeEventListener("scroll", handleScroll);
            } else {
                // always show the button on mobile
                setShowMenuButtons(true)
            }
        }
    }, [isMobile, isMounted])

    // prevent rerendring until mounted 
    if (!isMounted) return null;


    return (
        <div className='fixed-menu '>
            {/* menu */}
            <AnimatePresence>
                {
                    showMenu && showMenuButton &&
                    <motion.div 
                    initial={{opacity:0 , y:20}}
                    animate={{opacity:1 , y:0}}
                    exit={{opacity:0 , y:20}}
                    transition={{duration:0.2}}
                     className='show-motion-div'>
                        <div className='under-show-motion-div'>
                            <Nav containerStyles="nav-container-styling" listStyles="nav-list-styles" linkStyles="nav-link-style" spy={true} />
                            {/* info */}
                            <div className='info'>
                                <div className='under-info'>
                                    <div className='inner-info'>
                                        {/* location */}
                                        <div className='.under-inner-info'>
                                            <div className='last-div-info'>
                                                <FiMapPin />
                                            </div>
                                            <p className='info-para'>Location</p>
                                            <p>Pakistan , Karachi</p>
                                        </div>
                                        {/* phone */}
                                        <div className='.under-inner-info'>
                                            <div className='last-div-info'>
                                                <FiPhoneCall />
                                            </div>
                                            <p className='info-para'>Phone</p>
                                            <p>+03423 660 573</p>
                                        </div>
                                        {/* email */}
                                        <div className='.under-inner-info'>
                                            <div className='last-div-info'>
                                                <FiMail />
                                            </div>
                                            <p className='info-para'>Email</p>
                                            <p>mahnooradnan479@gmail.com</p>
                                        </div>
                                    </div>
                                    {/* socials  */}
                                    <Socials containerStyles="CONTAINER-STYLES" iconStyles="ICON-STYLE" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
            {/* menu buttons  */}
            {/* render button without animation on mobile */}
            {
                isMobile ? (
                    <div className='starting-menu-div'>
                        <button onClick={() => setShowMenu(!showMenu)} className='grid-button'>
                            <CgMenuGridR className='menu-grid' />
                        </button>
                    </div>
                ) : (
                    <AnimatePresence>
                        {showMenuButton && (
                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 100, opacity: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 40
                                }}
                                className='motion-div'
                            >
                                <button onClick={() => setShowMenu(!showMenu)} className='grid-button'><CgMenuGridR className='menu-grid' /></button>

                            </motion.div>
                        )}
                    </AnimatePresence>
                )
            }
        </div>
    )
}

export default FixedMenu
