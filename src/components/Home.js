import React from 'react';
const Home = () => {
    return (
        <div className='perfil'>
            <img className='foto-perfil' src="joel.jpg" alt="Joel Vega"/>
            <div className='titulo'>Joel Vega</div>
            <div className='subtitulo'>IT Ops Engineer | Linux Administrator </div>
            <div className='tarjeta'> <img src="https://komarev.com/ghpvc/?username=joel5vega&label=Profile%20views&color=0e75b6&style=flat" alt="joel5vega" /> </div>
            {/* <div className='tarjeta'> <a href="https://twitter.com/joel5vega" target="blank"><img src="https://img.shields.io/twitter/follow/joel5vega?logo=twitter&style=for-the-badge" alt="joel5vega" /></a> </div> */}
        </div>
    )

}
export default Home;