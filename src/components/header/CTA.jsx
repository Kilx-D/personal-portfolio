import React from 'react'
import Resume from '../../assets/Resume.pdf';
import { FaScroll } from 'react-icons/fa';
import { GrPersonalComputer } from 'react-icons/gr';

const CTA = () => {

  const handleClick = () => {
    document.querySelector("title").innerHTML = "I hope you like my resume 👉👈";
  }

  return (
    <div className="cta">
        <a href={Resume} download className='btn' onClick={handleClick}>Download Resume <FaScroll /></a>
        <a href="#contact" className='btn btn-primary'>Hire Me <GrPersonalComputer /></a>
    </div>
    )
}

export default CTA