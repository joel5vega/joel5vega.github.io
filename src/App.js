import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Redes from './components/Redes';
import Stats from './components/Stats';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <NavBar />
      </header>
      <div className='container'>
        <AboutMe/>
        <Projects/>
        <div >
          <Redes />
        </div>
        <div >
          <Stats />
        </div>
      </div>

    </div>
  );
}

export default App;
