import React, { Component } from 'react';
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import './App.scss';
import Profile from './containers/Profile';
import { AnimatePresence } from 'framer-motion';
import Projects from './containers/Projects';
import Header from './components/Header';

// import Header from './containers/Header/Header'
// import Portfolios from './containers/Portfolios/Portfolios'
// import About from './containers/About/About';
// import Skills from './containers/Skills/Skills';
// import WhyWorkWithMe from './containers/WorkWithMe/WorkWithMe';
// import Contact from './containers/Contact/Contact';
// import Aux from './components/hoc';

class App extends Component {
  render() {
    const { location } = this.props;
    return (
      <div className="wrapperApp">
        <Header />
        <AnimatePresence>
          <Switch key={location.key}>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/" >
              <Profile />
            </Route>
          </Switch>
        </AnimatePresence>
      </div>
    );
  }
}


export default withRouter(App);
