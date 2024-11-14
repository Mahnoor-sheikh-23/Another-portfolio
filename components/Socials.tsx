import Link from 'next/link'
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";


const socilas = [
    {
        icons: <RiInstagramFill />,
        path: "https://www.instagram.com/mahnoor_adnan14/",
    },
    {
        icons: <FaFacebook />,
        path: "https://www.facebook.com/profile.php?id=61568207710971",
    },
    {
        icons: <FaTwitter />,
        path: "",
    },
    {
        icons: <FaLinkedin />,
        path: "https://www.linkedin.com/in/growthmonii/",
    }
]

type SocialsProps = {
    containerStyles?: string;
    iconStyles?: string;
  };
const Socials: React.FC<SocialsProps> = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socilas.map((item, index) => {
                return <Link
                    href={item.path}
                    key={index}
                    className={iconStyles}
                >
                    <span>{item.icons}</span>
                </Link>
            })}
        </div>
    )
}

export default Socials
