import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/home';
import WhatIsTheTask from './pages/what_is_the_task';
import './styles/index.less';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/what-is-the-task">
        <WhatIsTheTask />
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
