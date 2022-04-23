import React from 'react'
import './footer.css';
import { FaFacebook } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import {ImStackoverflow} from 'react-icons/im';

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
        <a href="https://stackoverflow.com/users/13552407/kelxby%E3%82%B1%E3%83%AB%E3%83%93"><ImStackoverflow /></a>
        <a href="https://github.com/Kilx-D"> <BsGithub/></a>
        <a href="https://www.linkedin.com/in/daniel-portillo-6682a4216/"> <BsLinkedin/></a>
        <a href="https://twitter.com/kilxter"> <BsTwitter/></a>
      </div>

      <div className="footer-copyright">
        <small>&copy; P O R T I L L O. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer