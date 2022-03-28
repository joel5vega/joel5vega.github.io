import './App.css';
//Importar componentes
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';
import Stats from './components/Stats';
import AboutMe from './components/about/AboutMe';
import Projects from './components/project/Projects';
import Footer from './components/Footer';
// import {render} from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <div className='body'>
        <Home/>
        <NavBar />
        <AboutMe />
        <Projects />
        <Stats />
        <Footer />
      </div>
    </div>
  );
}

export default App;
