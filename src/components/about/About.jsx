import React from 'react'
import './about.css';
import ME from '../../assets/real-me.jpg';

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className="about_me_image">
            <img src={ME} alt="an image of me" id="about-me-image"/>
          </div>
        </div>

        <div className='about_content'>
          <div className="about_cards">
            <article className='about_card'>
              <h5></h5>
            </article>
          </div>

          <p>
          Hi, I'm Daniel, or Kilxby/Kilxter around the internet. I am a fullstack web developer looking for intern and entry level
          opputunities to gain experience in the industry. I have been studying to code 
          for 2 years and have learned multiple technologies. I'm a fast learner and a natural 
          problem solver that can help you achieve your goals with efficiency! I hope to be working with you soon, I won't let you down :).

          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About