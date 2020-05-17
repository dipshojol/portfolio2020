import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
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
            <Route path="/about" exact strict component={User} />
            <Route path="/portfolio" exact strict component={User} />
            <Route path="/skills" exact strict component={User} />
            <Route path="/education" exact strict component={User} />
            <Route path="/contact" exact strict component={User} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
