import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import About from './pages/about';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages';
import React from 'react';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
