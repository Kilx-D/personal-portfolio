import React from 'react'
import './footer.css';
import { FaFacebook } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer-logo'>P O R T I L L O</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#skill">My Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer-socials">
        <a href="https://facebook.com"> <FaFacebook/></a>
        <a href="https://instagram.com"> <BsInstagram/></a>
        <a href="https://twitter.com"> <BsTwitter/></a>
      </div>

      <div className="footer-copyright">
        <small>&copy; P O R T I L L O. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer