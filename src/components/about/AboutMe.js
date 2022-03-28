import React from "react";
import "./about.css"
import foto from '../../assets/joel.jpg'
import Redes from '../home/Redes'
import { FiAward } from 'react-icons/fi'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { RiServiceLine } from 'react-icons/ri'
const AboutMe = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <img className="about__me-img" src={foto} alt="Joel Vega" />
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FiAward className="about__icon" />
                            <h5>Experience</h5>
                            <small>+5 years</small>
                        </article>
                        <article className="about__card">
                            <FaChalkboardTeacher className="about__icon" />
                            <h5>Education</h5>
                            <small>Always learning</small>
                        </article>
                        <article className="about__card">
                            <RiServiceLine className="about__icon" />
                            <h5>Leadership</h5>
                            <small>Lead & serve</small>
                        </article>
                    </div>
                    <p>
                    I am an electronic engineer passionate about technology, and education!
                    <br></br>  joel5vega@gmail.com
                    </p>
                    {/* <a href="#contact" className="btn btn-primary">Contact Me</a> */}
                </div>
            </div>

        </section >
    )
}
export default AboutMe;