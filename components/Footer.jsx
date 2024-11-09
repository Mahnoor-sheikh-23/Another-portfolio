import React from 'react';
import "./contact.css";
import Logo from './Logo';

const Footer = () => {
    return (
        <footer>
            <div className='footer-firstdiv container'>
                <div className='footer-secnd-div'>
                    <Logo light={true}/>
                    <div className='footer-third-div'>Copyright &copy; 2024. All rights reserved.</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
