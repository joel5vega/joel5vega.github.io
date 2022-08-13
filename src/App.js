import './App.css';
import React, { lazy, Suspense } from 'react';
//Importar componentes
import Home from './components/home/Home';
import Loader from './components/Loader/Loader';
import NavBar from './components/navbar/NavBar'
// Lazy loads components when they are needed
const Projects = lazy(() => import('./components/project/Projects'));
const Contact = lazy(() => import('./components/contact/Contact'));
const Experience = lazy(() => import('./components/experience/Experience'));
const AboutMe = lazy(() => import('./components/about/AboutMe'));
const Education = lazy(() => import('./components/education/Education'));

function App() {
  return (
    <Suspense fallback={<Loader/>}>
      <div className='body'>
      <NavBar />
      <Home />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <AboutMe />
    </div>  
    </Suspense>
  );
}

export default App;
