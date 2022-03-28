import React from "react";
import "./about.css"
import foto from '../../assets/joel.jpg'
import {FiAward} from 'react-icons/fi'
const AboutMe = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-img">
                        <img className="imagen"src={foto} alt="Joel Vega" />
                        </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                                <FiAward/>
                            <h5>Experience</h5>
                            <small>+5 years</small>
                        </article>
                        </div>
                    <p>🌱 I’m currently learning Kubernetes,  Cloud Concepts</p>
                    <p>💪 I’m looking to collaborate on Kafka projects</p>
                    <p>🤝 I’m looking for help with Data Engineering</p>
                    {/* <p>  👨‍💻 All of my projects are available  <a className="enlace" href="https://joelvega.me">Here</a> </p> */}
                    <p> 💬 Ask me about Linux, ITOps, Education, Leadership</p>
                    <p>📫 How to reach me: joel5vega@gmail.com</p>
                    <p>📄 Know about my experiences:<a className="enlace" href="https://docs.google.com/document/d/1LFXu_uwxMCWK_VshW84e0mHykPju__Sk/edit?usp=sharing&ouid=106673194966111966130&rtpof=true&sd=true">
                        Curriculum Vitae</a></p>
                    <a className="">Desarrolle esta página en React utilizando GitHub pages</a>
                </div>
            </div>

        </section >
    )
}
export default AboutMe;