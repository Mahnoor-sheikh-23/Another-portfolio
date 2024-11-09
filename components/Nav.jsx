"use client";
import React from 'react';
import { Link as ScrollLink } from "react-scroll";
import './header.css';


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

const Nav = ({ containerStyles, listStyles, linkStyles, spy }) => {
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
