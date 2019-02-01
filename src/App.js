import React, { Component } from 'react';
import logo from './assets/images/preview.jpg';
import './App.css';

// my components
import Navigation from './components/Navigation';
import { Navigation2 } from './components/Navigation2';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <div className={'content'}>
          <div className={'container'}>
            <Navigation2 />
            <About logo={logo}/>
            <Portfolio logo={logo}/>
            <Resume/>
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}


export default App;
