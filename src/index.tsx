import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/home';
import WhatIsTheTask from './pages/what_is_the_task';
import WhoAreTheUnreached from './pages/who_are_the_unreached';
import GetInvolved from './pages/get_involved';
import ScrollToTop from './components/scroll_to_top';
import './styles/index.less';

ReactDOM.render(
  <Router>
    <ScrollToTop />
    <Switch>
      <Route path="/what-is-the-task" component={WhatIsTheTask} />
      <Route path="/who-are-the-unreached" component={WhoAreTheUnreached} />
      <Route path="/get-involved" component={GetInvolved} />
      <Route path="/donate">
        <Home />
      </Route>
      <Route path="/" component={Home} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
