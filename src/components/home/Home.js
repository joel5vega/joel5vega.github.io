import React from 'react';
import "./home.css"
import Perfil from '../../assets/photos/joel.png'
import CTA from '../../components/home/CTA';
import Redes from '../../components/home/Redes';
import Quote from '../../components/home/Quote';

const Home = () => {
    return (
        <section>
            <div className='container header__container'>
                <img className='foto-perfil' src={Perfil} alt="Joel Vega" />
                <h5>Hello, I'm.</h5>
                <h1>Joel Vega</h1>
                <h5 className="text-light>">I'm a IT Ops Engineer & Linux Administrator </h5>
                <div className='tarjeta'> <img src="https://komarev.com/ghpvc/?username=joel5vega&label=Profile%20views&color=0e75b6&style=flat" alt="joel5vega" /> </div>
                <Quote />
                <CTA />
                <div className='badges'>
                    <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="HORIZONTAL" data-vanity="joel5vega" data-version="v1"></div>
                </div>
                <Redes />
            </div>
        </section>
    )

}
export default Home;

