import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import LoadingIcon from './components/LoadingIcon';
import ScrollToTop from './components/ScrollToTop';

const About = React.lazy(() => import('./pages/about'));
const Schedule = React.lazy(() => import('./pages/Schedule/schedule'));
const Home = React.lazy(() => import('./pages'));
const Standings = React.lazy(() => import('./pages/standings'));
const Stats = React.lazy(() => import('./pages/stats'));
const Team = React.lazy(() => import('./pages/Team/team'));
const Teams = React.lazy(() => import('./pages/Teams/teams'));
const GameDetails = React.lazy(() =>
  import('./pages/GameDetails/game-details')
);
const GameLineup = React.lazy(() => import('./pages/GameLineup/game-lineup'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main>
        <Suspense fallback={<LoadingIcon />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/Schedule" component={Schedule} />
            <Route exact path="/standings" component={Standings} />
            <Route exact path="/teams" component={Teams} />
            <Route exact path="/stats" component={Stats} />
            <Route exact path="/team/:abbr" component={Team} />
            <Route
              exact
              path="/game-details/:gameDetails"
              component={GameDetails}
            />
            <Route
              exact
              path="/game-lineup/:gameLineup"
              component={GameLineup}
            />
          </Switch>
        </Suspense>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
