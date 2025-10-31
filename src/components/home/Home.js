import React,{lazy} from 'react';
import "./home.css"
import Perfil from '../../assets/photos/joel.png'
import CTA from '../../components/home/CTA';
import Quote from '../../components/home/Quote';
const Views = lazy(() => import('../../components/home/Views'));
const Home = () => {
    return (
        <section>
            <div className='container header__container'>
                <img className='foto-perfil' src={Perfil} alt="Joel Vega" />
                <h1>Joel Vega</h1>
                <h2>DevOpsEngineer @AxosBank</h2>
                <Quote />
                <CTA />
                <Views />
            </div>
        </section>
    )

}
export default Home;

