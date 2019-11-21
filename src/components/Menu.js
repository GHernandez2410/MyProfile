import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Popup } from 'semantic-ui-react';

import { expand } from '../actions/MenuAndModalActions';
import GoogleAuth from '../components/GoogleAuth';

import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class Menu extends React.Component {
    componentWillMount() {
        this.setState({
            expanded: this.props.menu.expanded
        })
    }

    onChangeExpanded(e) {
        this.props.expand(!this.state.expanded)
        return this.state.expanded
    }

    onSignOutClick = () => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.auth.signOut();
    }

    render() {
        return (
            <div className='ui left fixed menu' >
                <SideNav className='MenuBackGround'  >
                    <SideNav.Toggle onClick={(e) => { this.onChangeExpanded(e) }} />
                    <SideNav.Nav defaultSelected='Home'>
                        <NavItem eventKey='Logout'>
                            <NavIcon>
                                <GoogleAuth/>

                                <Popup trigger={
                                    <Link to={'/'} style={{ textDecoration: 'none', cursor: 'pointer' }} onClick={this.onSignOutClick}>
                                        <i className='power icon' style={{ fontSize: '1.75em' }} />
                                    </Link>
                                }
                                    content='Logout'
                                    position='left center'
                                    inverted
                                />
                            </NavIcon>
                            <NavText>
                                <div className='item' style={{ paddingRight: 0 }}>
                                    <Link to={'/'} style={{ textDecoration: 'none', cursor: 'pointer' }} onClick={this.onSignOutClick}>
                                        <div className='content IconColor' >
                                            Logout
                                                </div>
                                    </Link>
                                </div>
                            </NavText>
                        </NavItem>
                        <NavItem eventKey='Home'>
                            <NavIcon>
                                <Popup trigger={
                                    <Link to={'/'} style={{ textDecoration: 'none', cursor: 'pointer' }}>
                                        <i className='right home icon' style={{ fontSize: '1.75em' }} />
                                    </Link>
                                }
                                    content='Home'
                                    position='left center'
                                    inverted
                                />
                            </NavIcon>
                            <NavText>
                                <div className='item' style={{ paddingRight: 0 }}>
                                    <Link to={'/'} style={{ textDecoration: 'none', cursor: 'pointer' }}>
                                        <div className='content IconColor'>
                                            Home
                                                </div>
                                    </Link>
                                </div>
                            </NavText>
                        </NavItem>
                        <NavItem eventKey='About'>
                            <NavIcon>
                                <Popup trigger={
                                    <Link to={'/about'} style={{ textDecoration: 'none', cursor: 'pointer' }}>
                                        <i className='info circle icon IconColor' style={{ fontSize: '1.75em' }} />
                                    </Link>
                                }
                                    content='About'
                                    position='left center'
                                    inverted
                                />
                            </NavIcon>
                            <NavText>
                                <div className='item btn' style={{ textAlign: 'left', paddingRight: 0 }}>
                                    <Link to={'/about'} style={{ textDecoration: 'none', cursor: 'pointer' }}>
                                        <div className='content IconColor'>
                                            About
                                        </div>
                                    </Link>
                                </div>
                            </NavText>
                        </NavItem>
                        <NavItem eventKey='Skills'>
                            <NavIcon>
                                <Popup trigger={
                                    <Link to={'/skills'} style={{ textDecoration: 'none', cursor: 'pointer' }}>
                                        <i className='area graph icon IconColor' style={{ fontSize: '1.75em' }} />
                                    </Link>
                                }
                                    content='Skills'
                                    position='left center'
                                    inverted
                                />
                            </NavIcon>
                            <NavText>
                                <div className='item btn' style={{ textAlign: 'left', paddingRight: 0 }}>
                                    <Link to={'/skills'} style={{ textDecoration: 'none', cursor: 'pointer' }}>
                                        <div className='content IconColor'>
                                            Skills
                                                </div>
                                    </Link>
                                </div>
                            </NavText>
                        </NavItem>
                        <NavItem eventKey='Portfolio'>
                            <NavIcon>
                                <Popup trigger={
                                    <Link to={'/portfolio'} style={{ textDecoration: 'none', cursor: 'pointer' }}>
                                        <i className='folder open icon IconColor' style={{ fontSize: '1.75em' }} />
                                    </Link>
                                }
                                    content='Portfolio'
                                    position='left center'
                                    inverted
                                />
                            </NavIcon>
                            <NavText>
                                <div className='item btn' style={{ textAlign: 'left', paddingRight: 0 }}>
                                    <Link to={'/portfolio'} style={{ textDecoration: 'none', cursor: 'pointer' }}>
                                        <div className='content IconColor'>
                                            Portfolio
                                                </div>
                                    </Link>
                                </div>
                            </NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        menu: state.menu,
        userEmail: state.auth.userEmail
    })
}

export default connect(mapStateToProps, { expand })(Menu);