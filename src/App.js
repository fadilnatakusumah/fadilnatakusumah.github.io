import React, { Suspense } from 'react';
import {
  Route,
  Switch,
  withRouter,
  useLocation,
} from 'react-router-dom';
import './App.scss';
import { AnimatePresence, motion } from 'framer-motion';

import Profile from './containers/Profile';
import Header from './components/Header';
import styled from 'styled-components';
const Projects = React.lazy(() => import('./containers/Projects'));
const Contacts = React.lazy(() => import('./containers/Contacts'));

const App = () => {
  const location = useLocation()
  return (
    <div className="wrapperApp">
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch key={location.pathname} location={location}>
          <Route path="/" exact >
            <Suspense fallback={null}>
              <Profile />
            </Suspense>
          </Route>
          <Route path="/projects">
            <Suspense fallback={null}>
              <Projects />
            </Suspense>
          </Route>
          <Route path="/contacts">
            <Suspense fallback={null}>
              <Contacts />
            </Suspense>
          </Route>
        </Switch>
      </AnimatePresence>
      <Footer>
        Copyright Muhammad Fadhilah Mulyana &copy; 2020
      </Footer>
    </div>
  );
}

const Footer = styled(motion.div)`
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  color:white;
  white-space: nowrap;

  @media (max-width:700px) { 
    font-size: 12px;
  }
`

export default withRouter(App);
