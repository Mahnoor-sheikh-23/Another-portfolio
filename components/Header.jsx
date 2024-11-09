"use client";
import './header.css';
// import { Link as ScrollLink } from "react-scroll";

// impoeritng compomnets
import Logo from './Logo';
import Nav from './Nav';
import Socials from './Socials';


const Header = () => {
    return (
        <header>
            <div className='containers'>
                <div className='under-containers'>
                    {/* logo */}
                    <Logo />
                    {/* nav & social */}
                    <div className='div-of-nav'>
                        <Nav containerStyles="container-style" listStyles="list-style" linkStyles="link-style" />
                        <Socials containerStyles="containers-styles" iconStyles="icon-styles" />
                    </div>
                </div>
            </div>
        </header>


    )
}

export default Header
