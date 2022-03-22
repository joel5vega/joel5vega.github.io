import './App.css';
//Importar componentes
import Home from './components/Home';
import NavBar from './components/NavBar';
import Stats from './components/Stats';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Sishorarios from './components/SisHorarios';
// import 'bootstrap/dist/js/bootstrap.bundle';
//React Router
// import {render} from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <NavBar />
        </header>
        <div className='body'>
          <div>
            <Routes>
              <Route path="/projects" element={<Projects />} />
              <Route path="/stats" element={<Stats />} />
              <Route path="/aboutme" element={<AboutMe />} />
              <Route path="/" element={<Home />} />
              {/* <Route path='/projects' element={<Sishorarios />} /> */}
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
