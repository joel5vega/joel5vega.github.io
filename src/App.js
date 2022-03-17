import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Redes from './components/Redes';
function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <NavBar />
        <Redes />
      </header>
    </div>
  );
}

export default App;
