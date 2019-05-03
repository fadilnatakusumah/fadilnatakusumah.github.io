import React, { Component } from 'react';

import './App.css';

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
