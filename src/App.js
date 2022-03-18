import './App.css';
import NavBar from './components/NavBar';
import Stats from './components/Stats';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
//React Router
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
<Router>
      <header className="App-header">
        <NavBar />
      </header>
      <div className='container'>
        
        <div>
          <Routes>
          {/* <Route exact path="/project"><Projects /></Route>  */}
          <Route
                exact
                path="/project"
                render={(props) => (
                  <Projects  />
                )}
              />
          </Routes>
        
        </div>
        
        
        <AboutMe /> 
        <Projects />
        
        <div >
          <Stats />
        </div>
      <Footer />
      </div>
      </Router>
    </div>
  );
}

export default App;
