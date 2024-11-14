"use client";
import React from 'react';
import { Link as ScrollLink } from "react-scroll";
// import './header.css';
import "../app/style/header.css";


const links = [
    {
        name: "HOME"
    },
    {
        name: "ABOUT"
    },
    {
        name: "JOURNEY"
    },
    {
        name: "WORK"
    },
    {
        name: "CONTACT"
    },
]

interface Styling {
    containerStyles : string,
    listStyles  : string , 
    linkStyles : string ,
    spy : boolean
}



const Nav : React.FC<Styling> = ({ containerStyles, listStyles, linkStyles, spy }) => {
    return (
        <nav className={containerStyles}>
            <ul className={listStyles}>
                {links.map((link, index) => {
                    return (
                        <ScrollLink
                            spy={spy}
                            key={index}
                            activeClass='active'
                            to={link.name}
                            smooth
                            className={linkStyles}
                        >
                            {link.name}
                        </ScrollLink>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Nav
