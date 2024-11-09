import React, { useEffect, useState } from 'react';
import "./contact.css";
import { FaCheckCircle } from "react-icons/fa";
import AnimatedText from './AnimatedText';
import { useForm, ValidationError } from "@formspree/react";
import Image from 'next/image';



const Contact = () => {

  const [state, handleSumbit] = useForm("mkgnnoya")

  const [formData, setFormData] = useState({
    // state for form inputs 
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  })

  // state to control icon visiblity ,  and button text 
  const [showIcons, setShowIcons] = useState(false);

  // handle input changes 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }

  // clear the form after sumbission and handle message visiblity 
  useEffect(() => {
    if (state.succeeded) {
      setShowIcons(true)// show thw success isocn 
      // clear the ipus
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
      });

      // hide the icon and revert button text after 3 seconds 
      const timer = setTimeout(() => {
        setShowIcons(false)
      }, 3000);

      // clean up the timer on component unmount or before re-rendring the effect 
      return () => clearTimeout(timer)
    }

  }, [state.succeeded])

  // handle form sumbission 
  const handlFormeSumbit = (e) => {
    e.preventDefault();
    handleSumbit(formData); //call formspere's sumbit handler with form data 
  }

  return (
    <section className='first-div-of-contact' id='CONTACT'>
      <div className='container second-div-of-contact'>
        <div className='third-div-of-contact'>
          <div className='fourth-div-of-contact'>
            <AnimatedText text="Let's Work Together" textStyles="text-style-contact" />
            {/* form */}
            <form onSubmit={handlFormeSumbit} className='form-styling'>
              {/* firstname & lastname  fields */}
              <div className='fifth-div-of-contact'>
                {/* first name  */}
                <div className='sixth-div-of-contact'>
                  <label className='label-style' htmlFor='firstname'>First Name<span className='span-of-label'>*</span></label>
                  <input onChange={handleChange} type='text' id='firstname' name='firstName' value={formData.firstName} className='input-' placeholder='First Name' required />
                </div>
                {/* last name  */}
                <div className='sixth-div-of-contact'>
                  <label className='label-style' htmlFor='lastname'>Last Name<span className='span-of-label'>*</span></label>
                  <input onChange={handleChange} type='text' id='lastname' name='lastName' value={formData.lastName} className='input-' placeholder='Last Name' required />
                </div>

              </div>
              {/* email fields  */}
              <div >
                <label className='label-style' htmlFor='email'>Email<span className='span-of-label'>*</span></label>
                <input onChange={handleChange} type='text' id='email' name='email' value={formData.email} className='input-' placeholder='youremail@email.com' required />
                <ValidationError prefix='Email' field='email' errors={state.errors} />
              </div>
              {/* phone fields  */}
              <div >
                <label className='label-style' htmlFor='phone'>Phone Number<span className='span-of-label'>*</span></label>
                <input onChange={handleChange} type='text' id='phone' name='phone' value={formData.phone} className='input-' placeholder='+1 (555) 000-0000' required />
              </div>
              {/* message  fields  */}
              <div >
                <label className='label-style' htmlFor='message'>Message<span className='span-of-label'>*</span></label>
                <textarea onChange={handleChange} id='message' name='message' value={formData.message} className='textarea' rows="5" placeholder='Leave a message ...' required />
                <ValidationError prefix='Message' field='message' errors={state.errors} />
              </div>
              {/* sumbit button */}
              <button type='submit' disabled={state.submitting} className='sumbit-btn'>
                {
                  state.submitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      {/* show icon with opacity transition  */}
                      <FaCheckCircle className={`facheck-circle-styling ${showIcons ? "opacity-100" : "opacity-0"}`} />
                      <span className={`button--text ${showIcons ? "opacity-0" : "opacity-100"} `}>Send Message</span>
                    </>
                  )
                }
              </button>
            </form>
          </div>
          {/* image  */}
          <div className='image-div-contact'>
            <Image  src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrieq43qC-QhVyC9KLhf9aB5cZiJrAJDq8zQ&s"} quality={100} width={577} height={664} alt=''/>
          </div>
        </div>
      </div>
    </section>
  )
}
  ;

export default Contact
