import React from 'react'
import './portfolio.css';

import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';


const data = [
  {
      id: 1,
      image: "https://media.discordapp.net/attachments/781794429652566056/967536676652081232/unknown.png?width=477&height=422",
      title: 'Programmer survey Form made with HTML and CSS',
      github: 'https://codepen.io/kilx-d/pen/qBXMWdZ',
      demo: 'https://codepen.io/kilx-d/full/qBXMWdZ'

  },
  {
      id: 2,
      image: "https://media.discordapp.net/attachments/781794429652566056/967539250792919080/unknown.png?width=407&height=422",
      title: 'Drum Kit App made with Javascript',
      github: 'https://github.com/Kilx-D/Javascript-drum-kit',
      demo: 'https://kilx-d.github.io/Javascript-drum-kit/'
  },
  {
      id: 3,
      image: "https://media.discordapp.net/attachments/781794429652566056/967536226414522378/unknown.png",
      title: 'Todolist app made with React',
      github: 'https://codesandbox.io/s/managing-a-component-tree-practice-forked-wifmug?file=/src/index.js',
      demo: 'https://wifmug.csb.app'
  },
  {
      id: 4,
      image: "https://media.discordapp.net/attachments/781794429652566056/967880071731875900/unknown.png?width=407&height=422",
      title: 'Tindog Business Landing Page made with Bootstrap',
      github: 'https://github.com/Kilx-D/Tindog',
      demo: 'https://kilx-d.github.io/Tindog/'
  },
  {
      id: 5,
      image: "https://cdn.discordapp.com/attachments/781794429652566056/967879814767853588/unknown.png",
      title: 'Daily Journal Blog site made with EJS, expressjs, and mongoDB',
      github: 'https://github.com/Kilx-D/ejs-blog',
      demo: 'https://damp-atoll-59993.herokuapp.com'
  }, 
  {
      id: 6,
      image: "https://cdn.discordapp.com/attachments/781794429652566056/967586843447140422/unknown.png",
      title: 'A todolist utilizing MongoDB and Expressjs',
      github: 'https://github.com/Kilx-D/Todolist-App',
      demo: 'https://glacial-crag-00640.herokuapp.com'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      

      

      <h5 id="fact">Fun Fact: This site was handcrafted by me with react :)</h5>

      <div className="container portfolio-container">
      {
        data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className='portfolio-item'>
              <div className="portfolio-item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className='portfolio-item-cta'>
                <a href={github} className='btn' target='_blank'>Code</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
          )
        })
      }
      
      

      
      

      </div>
    </section>
  )
}

export default Portfolio