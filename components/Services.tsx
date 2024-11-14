import React from 'react';
import "./Stats/stats.css";


const services = [
    {
        icon: "https://thumbs.dreamstime.com/b/note-pad-pencil-6244653.jpg",
        title: "UX UI Design",
        description: "Designing completing engaging user experinces"
    },
    {
        icon: "https://cdn-icons-png.freepik.com/512/5148/5148346.png",
        title: "Web Development",
        description: "Develop robust, scalable websites for all devices  "
    },
    {
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-3igXMwzwhf2OvVM1FRp007XQr5ti8aAjNg&s",
        title: "E-Commerce Solutions",
        description: "Building secure user-friendly online stores to drive sales  "
    },
    {
        icon: "https://png.pngtree.com/png-vector/20240904/ourmid/pngtree-magnifying-glass-clipart-blue-handle-3d-illustration-transparent-background-png-image_13752256.png",
        title: "Care & Support",
        description: "Providing updates , security and support for performance "
    },
]

const Services = () => {
    return (
        <div className='first-div-section' id='Services'>
            <div className='second-div-section'>
                <ul className='section-ul'>
                    {
                        services.map((service, index) => {
                            return <li className='sections-li' key={index}>
                                <img src={service.icon} width={48} height={48} alt='' className='service-image' />
                                <h3 className='sections-h3-tag'>{service.title}</h3>
                                <p className='sections-p-tag'>{service.description}</p>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Services
