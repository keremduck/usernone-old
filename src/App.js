import Navbar from './components/Navbar';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Projects from './components/Projects';
import NoPage from './components/NoPage';
import Github from './api/Github';
import Footer from './components/Footer'
function App() {
  return (
    <div className='container'>
    <Router>
    <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
          <Footer/>
        </Route>
        <Route path="/projects">
          <Projects/>
          <Footer/>
        </Route>
        <Route path="/api">
          <Github/>
          <Footer/>
        </Route>
        <Route path="*">
          <NoPage/>
          <Footer/>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
