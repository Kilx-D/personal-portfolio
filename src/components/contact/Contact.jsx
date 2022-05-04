import React from 'react'
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
// import emailjs from 'emailjs-com';

const Contact = () => {

  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_ez3iw5p', 'template_24c2u3m', form.current, '-WA3koGhHzXoSKcC_')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });

  //     e.target.reset();
  // };
  
  return (
    <section id="contact">
      <h5>Let's talk</h5>
      <h2>Contact Me</h2>

      {/* i hope they text or email instead of call 🤞 */}

      <div className="container contact_container">
        <div className="contact-options">
          <div className="contact-option">
            <MdOutlineEmail className='contact-option-icon'/>
            <h4>Email</h4>
            <h5>dannyport93@gmail.com</h5>
            <a href="mailto:dannyport93@gmail.com" target="_blank">Send a Message</a>
          </div>

          {/* <div className="contact-option">
            <RiMessengerLine className='contact-option-icon'/>
            <h4>Messenger</h4>
            <h5>Kilxter</h5>
            <a href="https://m.me/ernest.achiever" target="_blank">Send a Message</a>
          </div> */}

          <div className="contact-option">
            <BsWhatsapp className='contact-option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+17063407585</h5>
            <a href="https://api.whatsapp.com/send?phone=17063407585" target="_blank">Send a Message</a>
          </div>
        </div>
        {/* end of contact options */}
        {/* <form ref={form} onSubmit={sendEmail}>
            <input  type="text" name="name" placeholder='Your Full Name' required/>
            <input type="email" name="email" placeholder='Your Email' required/>
            <textarea name="message"rows="10" placeholder='Your Message' required></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
        </form> */}
      </div>
    </section>
    )
}

export default Contact