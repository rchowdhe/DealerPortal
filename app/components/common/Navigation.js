import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link, Location } from 'react-router';

class Navigation extends Component {

    componentDidMount() {
        const { menu } = this.refs;
        $(menu).metisMenu();
    }

    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    }

    secondLevelActive(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
    }

    render() {
        return (
            <nav className="navbar-default navbar-static-side" role="navigation">
                    <ul className="nav metismenu" id="side-menu" ref="menu">
                        <li className="nav-header">
                            <div className="dropdown profile-element"> <span>
                                { localStorage.getItem('username') == 'Rajiv' ? <img alt="image" className="img-circle" src="img/avtar.jpg"/> : <img alt="image" className="img-circle" src="img/profile_small.jpg"/> }
                                
                             </span>
                                <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                            <span className="clear"> <span className="block m-t-xs"> <strong className="font-bold">{localStorage.getItem('username')}</strong>
                             </span> <span className="text-muted text-xs block">Developer<b className="caret"></b></span> </span> </a>
                                <ul className="dropdown-menu animated fadeInRight m-t-xs">
                                    <li><a href="#"> Logout</a></li>
                                </ul>
                            </div>
                            <div className="logo-element">
                              <img src="img/STERIS-Logo-Small.png" width="50%" />
                            </div>
                        </li>
                        <li className={this.activeRoute("/main")}>
                            <Link to="/main"><i className="fa fa-th-large"></i> <span className="nav-label">Dashboard</span></Link>
                        </li>
                        <li className={this.activeRoute("/dealeroperations")}>
                            <Link to="/dealeroperations"><i className="fa fa-th-large"></i> <span className="nav-label">Dealer operations</span></Link>
                        </li>
                    </ul>

            </nav>
        )
    }
}

export default Navigation