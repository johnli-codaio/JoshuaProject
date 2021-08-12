import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/home';
import './styles/index.less';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/what-is-the-task">
        <Home />
      </Route> 
      <Route path="/who-are-the-unreached">
        <Home />
      </Route>
      <Route path="/donate">
        <Home />
      </Route>
      <Route path="/get-involved">
        <Home />
      </Route> 
    </Switch>
  </Router>,
  document.getElementById('root')
);
