import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/Home';
import Education from './pages/Education';
import Portfolio from './pages/Portfolio';
import CssBaseline from '@material-ui/core/CssBaseline';
const Route = require('react-router-dom').Route;

function App() {
  const User = () => {
    return <h1>welcome user</h1>;
  };
  return (
    <>
      <Router>
        <CssBaseline />
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact strict component={HomePage} />
            <Route path="/about" exact strict component={HomePage} />
            <Route path="/portfolio" exact strict component={Portfolio} />
            <Route path="/skills" exact strict component={HomePage} />
            <Route path="/education" exact strict component={Education} />
            <Route path="/contact" exact strict component={User} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
