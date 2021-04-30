import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import Settings from './pages/Settings';
import Stuff from './pages/Stuff';

//STORE can be displayed from any component.

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/stuff' component={Stuff} />
          <Route path='/settings' component={Settings} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </>
  );
}

export default App;