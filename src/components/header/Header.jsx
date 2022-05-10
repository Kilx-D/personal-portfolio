import React from 'react'
import CTA from './CTA';
import './header.css';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <div className='hero'>
          <h5>Hello I'm</h5>
          <h1>Daniel Portillo</h1>
          <h5 className="text-light">software engineer</h5>
          <CTA />
        </div>
        
        {/* <HeaderSocials /> */}

        {/* <div className="me">
                <img src={ME} alt="me" />
                
                <a href="container" className='scroll_down'>Scroll Down</a>
            </div> */}
      </div>
    </header>
  )
}

export default Header