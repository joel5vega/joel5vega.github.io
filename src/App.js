import './App.css';
import { useState,useEffect } from 'react';
//Importar componentes
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';
import AboutMe from './components/about/AboutMe';
import Projects from './components/project/Projects';
import Experience from './components/experience/Experience';
import Education from './components/education/Education';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
// import {render} from 'react-dom';
function App() {
  const [activeNav, setActiveNav] = useState('#')
  const vHeight=window.innerHeight;
  const options=["#","#education","#experience","#projects","#about","#contact"];
  const optionscel=["#","#education","#experience","#experience","#projects","#projects","#about","#about","#about","#about","#contact","#contact","#contact"];
  useEffect(() => { 
    const handleScroll = (event) => {
      console.log(window.innerHeight)
      const page= Math.floor(window.scrollY/vHeight);
      console.log(options[page])
      if(window.innerWidth<480){
        setActiveNav(optionscel[page])  
      }
      else{setActiveNav(options[page])}
     console.log('window.scrollY', window.scrollY);
  }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [activeNav]);
  return (
    <div className='body'>
      <Home />
      <NavBar activeNav={activeNav} setActiveNav={setActiveNav} section="#about" />
      <Education />
      <Experience />
      <Projects />
      <AboutMe />
      <Contact/>
      {/* <Footer /> */}

    </div>
  );
}

export default App;
