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

import Header from './components/Header/Header'
import Portofolios from './components/Portofolios/Portofolios'
import Aux from './components/hoc';

class App extends Component {
  state = {
    loading: true,
  }

  setLoading = () => this.setState({ loading: false })

  renderMoreContent = () => (
    <Aux>
      <Portofolios />
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
