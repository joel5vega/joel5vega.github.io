import React from 'react';
import "./home.css"
import CTA from '../../components/home/CTA';
import Redes from '../../components/home/Redes';
const Home = () => {
    return (
        <header>
            <div className='container header__container'>
                <div className='me'>
                <img className='foto-perfil' src="joel.jpg" alt="Joel Vega" />
                </div>
                
                <h5>Hello, I'm.</h5>
                <h1>Joel Vega</h1>
                <h5 className="text-light>">I'm a IT Ops Engineer</h5>
                <h5 className='text-light'>  Linux Administrator </h5>
                <div className='tarjeta'> <img src="https://komarev.com/ghpvc/?username=joel5vega&label=Profile%20views&color=0e75b6&style=flat" alt="joel5vega" /> </div>
                <CTA />
                
                <Redes />
                
                {/* <a href="#contact" className='scroll__down'>Scroll Down</a> */}
                
            </div>

        </header>


    )

}
export default Home;

