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

import coffee from './assets/images/coffee.gif';
class App extends Component {
  render() {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <div
          style={{
            backgroundImage: `url(${coffee})`,
            backgroundSize: 'cover',
            height: '100%',
          }}
        >

          <div style={{
            padding: '20px',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
            textAlign: 'center'
          }}>
            <h1 style={{ color: 'white' }}>Hey! Sorry, this website is still on maintenance</h1>
            <h6 style={{
              color: 'white',
              position: 'fixed',
              bottom: '30px',
              textAlign: 'center',
            }}>fadilnatakusumah</h6>
          </div>


        </div>
      </div>
    );
  }
}


export default App;
