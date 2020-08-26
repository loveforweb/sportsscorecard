import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Footer from './components/Footer';
import Header from './components/Header';
import Teams from './pages/Teams/teams';
import Team from './pages/Team/team';

const About = React.lazy(() => import('./pages/about'));
const Fixtures = React.lazy(() => import('./pages/fixtures'));
const Home = React.lazy(() => import('./pages'));
const Standings = React.lazy(() => import('./pages/standings'));
const Stats = React.lazy(() => import('./pages/stats'));
const Results = React.lazy(() => import('./pages/results'));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/fixtures" component={Fixtures} />
          <Route exact path="/standings" component={Standings} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/teams" component={Teams} />
          <Route exact path="/stats" component={Stats} />
          <Route exact path="/team/:abbr" component={Team} />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
