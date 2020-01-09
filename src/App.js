import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Search from './Search';
import Details from './Details';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './Navigation';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Search} />
          <Route path='/details/:id' component={Details} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
