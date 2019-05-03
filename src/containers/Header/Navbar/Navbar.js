import React from 'react';

import Aux from '../../../components/hoc';

import './Navbar.css';
import 'animate.css';
import hamburgerIcon from '../../../assets/images/burger_icon.png';
import closeIcon from '../../../assets/images/close_icon.png';

class Nav extends React.Component {
  state = {
    darker: false,
    hide: false,
    show: false,
    typeNavigation: 'fadeInDown'
  }

  componentDidMount() {
    window.addEventListener('scroll', this.hideNav)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.hideNav)
  }

  // make invisible when scroll down, but visible when scroll up;
  hideNav = () => {
    const { hide } = this.state;

    window.scrollY > this.prev ?
      !hide && this.setState({ hide: true, darker: true })
      :
      hide && this.setState({ hide: false, darker: true });

    window.scrollY === 0 ?
      this.setState({ darker: false })
      : this.setState({ darker: true })


    this.prev = window.scrollY;
  }

  showNav = () => {
    if (this.state.show) {
      this.setState({ typeNavigation: 'fadeOutUp' })
      setTimeout(() => {
        this.setState({ show: false })
      }, 1000);
    } else {
      this.setState({ show: !this.state.show, typeNavigation: 'fadeInDown' })
    }
  }
  render() {
    const classHideBar = this.state.hide ? 'hidebar' : '';
    const classDarker = this.state.darker ? 'darker' : '';
    const { typeNavigation } = this.state;
    return (
      <Aux>
        {this.state.show ?
          <div className={`navLink animated ${typeNavigation}`} >
            <div>
              <img alt="close_icon" src={closeIcon} onClick={this.showNav} />
            </div>
            <ul>
              <li>
                <a href="#portfolios" rel="noopener noreferrer">Latest Work</a>
              </li>
              <li>
                <a href="#about" rel="noopener noreferrer">About Me</a>
              </li>
              <li>
                <a href="#skills" rel="noopener noreferrer">Skills</a>
              </li>
              <li>
                <a href="#contact" rel="noopener noreferrer">Contact Me</a>
              </li>
              <li>
                <a style={{ color: 'purple' }} href="https://drive.google.com/open?id=1dBVJ7CjhbzO4ED_gISWZo6Tfze_6Q_yK" target="_blank" rel="noopener noreferrer">Resume</a>
              </li>
            </ul>
          </div>
          : null
        }
        <div className={`navigation-container ${classHideBar} ${classDarker}`}>
          <div className="title animated bounceInLeft">
            <a href="fadilnatakusumah.github.com"><h1>Muhammad Fadhilah M.</h1></a>
          </div>
          <div className="navigation animated bounceInRight" onClick={this.showNav}>
            <span>MENU</span>
            <img className={'iconImage'} alt={'icon_hamburger'} src={hamburgerIcon} />
          </div>
        </div>
      </Aux >
    )
  }
}

export default Nav;