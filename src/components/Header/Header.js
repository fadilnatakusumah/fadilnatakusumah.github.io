import React from 'react';

import Navbar from './Navbar/Navbar';
import NavIcons from './NavIcons/NavIcons';
import Content from './Content/Content';
import Aux from './../hoc';
import LoadingComponent from '../LoadingCss/Loading';
import './Header.css';
import 'animate.css';

class Header extends React.Component {
    state = {
        loading: true,
    }
    setLoading = () => this.setState({ loading: false });

    componentDidMount() {
        setTimeout(() => {
            this.setLoading();
            this.props.setLoading();
        }, 1000);
    }

    render() {
        return (
            <div className="header-container">
                <div className="header animated fadein">
                    {this.state.loading
                        ? <LoadingComponent />
                        : <Aux>
                            <Navbar />
                            <Content />
                            <NavIcons />
                        </Aux>
                    }
                </div>
            </div>
        )
    }
}

export default Header;