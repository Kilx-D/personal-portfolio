import React from 'react'
import './skills.css';
import { BsPatchCheckFill } from 'react-icons/bs';
import { ImHtmlFive } from 'react-icons/im';
import { FaCss3Alt } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { DiReact } from 'react-icons/di';

const Skills = () => {



    return (
        <section id="skill">
            <h5>What skills I Have</h5>
            <h2>My Skills</h2>

            <div className="container skill-container">
                <div className="skill-fontend">
                    <h3>Frontend Development</h3>
                    <div className="skill-content">
                        <article className='skill-details'>
                            <BsPatchCheckFill className='skill-details-icon'/>
                            <div>
                                <h4>HTML5</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>

                        </article>

                        <article className='skill-details'>
                            <BsPatchCheckFill className='skill-details-icon'/>
                            <div>
                                <h4>CSS3</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='skill-details'>
                            <BsPatchCheckFill className='skill-details-icon'/>
                            <div>
                                <h4>Javascript</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>

                        </article>
                        <article className='skill-details'>
                            <BsPatchCheckFill className='skill-details-icon'/>
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='skill-details'>
                            <BsPatchCheckFill className='skill-details-icon'/>
                            <div>
                                <h4>Jquery</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                        <article className='skill-details'>
                            <BsPatchCheckFill className='skill-details-icon'/>
                            <div>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                        <article className='skill-details'>
                            <BsPatchCheckFill className='skill-details-icon'/>
                            <div>
                                <h4>Threejs</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="skill-backend">
                    <h3>Backend Development</h3>
                    <div className="skill-content">
                        <article className='skill-details'>
                            <BsPatchCheckFill className='skill-details-icon'/>
                            <div>
                                <h4>Nodejs</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>

                        </article>

                        <article className='skill-details'>
                            <BsPatchCheckFill className='skill-details-icon'/>
                            <div>
                                <h4>Expressjs</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='skill-details'>
                            <BsPatchCheckFill className='skill-details-icon'/>
                            <div>
                                <h4>Socket.io</h4>
                                <small className='text-light'>Basic</small>
                            </div>

                        </article>
                        <article className='skill-details'>
                            <BsPatchCheckFill className='skill-details-icon'/>
                            <div>
                                <h4>Linux</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                        <article className='skill-details'>
                            <BsPatchCheckFill className='skill-details-icon'/>
                            <div>
                                <h4>Bash Shell</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='skill-details'>
                            <BsPatchCheckFill className='skill-details-icon'/>
                            <div>
                                <h4>MongoDB</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='skill-details'>
                            <BsPatchCheckFill className='skill-details-icon'/>
                            <div>
                                <h4>SQL</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                        <article className='skill-details'>
                            <BsPatchCheckFill className='skill-details-icon'/>
                            <div>
                                <h4>PHP</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                        <article className='skill-details'>
                            <BsPatchCheckFill className='skill-details-icon'/>
                            <div>
                                <h4>Python</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='skill-details'>
                            <BsPatchCheckFill className='skill-details-icon'/>
                            <div>
                                <h4>Java</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                        <article className='skill-details'>
                            <BsPatchCheckFill className='skill-details-icon'/>
                            <div>
                                <h4>C#</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                        <article className='skill-details'>
                            <BsPatchCheckFill className='skill-details-icon'/>
                            <div>
                                <h4>EJS</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                        <article className='skill-details'>
                            <BsPatchCheckFill className='skill-details-icon'/>
                            <div>
                                <h4>Passportjs</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills