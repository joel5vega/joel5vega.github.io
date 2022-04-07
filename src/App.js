import './App.css';
//Importar componentes
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';
import Stats from './components/stats/Stats';
import AboutMe from './components/about/AboutMe';
import Projects from './components/project/Projects';
import Experience from './components/experience/Experience';
import Education from './components/education/Education';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
// import {render} from 'react-dom';
function App() {
  return (
    <div className='body'>
      <Home />
      <NavBar />
      <Education />
      <Experience />
      <Projects />
      <Stats />
      <AboutMe />
      <Contact/>
      <Footer />

    </div>
  );
}

export default App;
