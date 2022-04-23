import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsDribbble} from 'react-icons/bs';
import {BsStackOverflow} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/daniel-portillo-6682a4216/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/Kilx-D" target="_blank"><BsGithub /></a>
        <a href="https://stackoverflow.com/users/13552407/kelxbyケルビ" target="_blank"><BsStackOverflow /></a>

    </div>
  )
}

export default HeaderSocials