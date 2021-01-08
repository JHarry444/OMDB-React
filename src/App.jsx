import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Search from './components/Search';
import Details from './components/Details';

const App = () => (
  <Router>
    <Navigation />
    <Switch>
      <Route exact path="/">
        <Search />
      </Route>
      <Route path="/details/:id">
        <Details />
      </Route>
    </Switch>
  </Router>
);

export default App;
