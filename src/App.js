import './App.css';
import React, { lazy, Suspense } from 'react';
//Importar componentes
import Home from './components/home/Home';
// import AboutMe from './components/about/AboutMe';

// import Projects from './components/project/Projects';
// import Experience from './components/experience/Experience';
// import Education from './components/education/Education';
// import Contact from './components/contact/Contact';
// Lazy loads components when they are needed
const Projects = lazy(() => import('./components/project/Projects'));
const Contact = lazy(() => import('./components/contact/Contact'));
const Experience = lazy(() => import('./components/experience/Experience'));
const AboutMe = lazy(() => import('./components/about/AboutMe'));
const Education = lazy(() => import('./components/education/Education'));
const renderLoader=()=>{<p>Loading</p>}
function App() {
  return (
    <Suspense fallback={renderLoader}><div className='body'>
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
