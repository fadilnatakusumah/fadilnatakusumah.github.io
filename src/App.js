import React, { Component } from 'react';
import './App.css';

// my components
// import Navigation from './components/Navigation';
// import { Navigation2 } from './components/Navigation2';
// import About from './components/About';
// import Portfolio from './components/Portfolio';
// import Resume from './components/Resume';
// import Footer from './components/Footer';
// import coffee from './assets/images/coffee.gif';

import Header from './containers/Header/Header'
import Portfolios from './containers/Portfolios/Portfolios'
import About from './containers/About/About';
import Skills from './containers/Skills/Skills';
import WhyWorkWithMe from './containers/WorkWithMe/WorkWithMe';
import Contact from './containers/Contact/Contact';

import Aux from './components/hoc';

class App extends Component {
  state = {
    loading: true,
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  setLoading = () => this.setState({ loading: false })

  renderMoreContent = () => (
    <Aux>
      <Portfolios />
      <About />
      <Skills />
      <WhyWorkWithMe />
      <Contact />
    </Aux>
  )
  render() {
    return (
      <div className="wrapper">
        <Header
          loading={this.state.loading}
          setLoading={this.setLoading} />
        {!this.state.loading ?
          this.renderMoreContent()
          : null
        }
      </div>
    );
  }
}


export default App;
