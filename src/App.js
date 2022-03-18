import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Redes from './components/Redes';
import Stats from './components/Stats';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <NavBar />
      </header>
      <div className='container'>
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
