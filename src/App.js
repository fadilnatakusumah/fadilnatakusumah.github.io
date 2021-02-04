import React, { Suspense } from 'react';
import {
  Route,
  Switch,
  withRouter,
  useLocation,
} from 'react-router-dom';
import './App.scss';
import { AnimatePresence } from 'framer-motion';

import Profile from './containers/Profile';
import Header from './components/Header';
import { FaDownload, FaGithub } from 'react-icons/fa';
const Projects = React.lazy(() => import('./containers/Projects'));
const Contacts = React.lazy(() => import('./containers/Contacts'));

const App = () => {
  const location = useLocation()
  return (
    <div className="wrapperApp">
      <div>
        <h2>Hi, sorry this web page is still under development :)</h2>
        {/* <h4>Here check out my Github</h4> */}
        <div>
          <a target="_blank" rel="noreferrer" href="https://github.com/fadilnatakusumah">
            <FaGithub />
            <span>Github</span>
          </a>
          <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/12y92QCDx7rsL7droLik6qJXHI3_iVW94/view?usp=sharing">
            <FaDownload />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
      {/* <Header />
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
      </AnimatePresence> */}
    </div>
  );
}


export default withRouter(App);
