import React from 'react';
import "./home.css"
import Perfil from '../../assets/photos/joel.png'
import CTA from '../../components/home/CTA';
import Quote from '../../components/home/Quote';

const Home = () => {
    return (
        <section>
            <div className='container header__container'>
                <img className='foto-perfil' src={Perfil} alt="Joel Vega" />
                <h1>Joel Vega</h1>
                <h2>IT Solution Architect</h2>
                <Quote />
                <CTA />
                <img src="https://komarev.com/ghpvc/?username=joel5vega&label=GitHub%20Profile%20views&color=4db5ff" alt="joel5vega" /> 
            </div>
        </section>
    )

}
export default Home;

