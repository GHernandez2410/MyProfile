import React from 'react';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import LoadingOverlay from 'react-loading-overlay';

import Menu from './Menu';
import ErrorBoundary from './ErrorBoundary';
import Home from './views/Home';
import About from './views/About';
import Skills from './views/Skills';
import Portfolio from './views/Portfolio';

class App extends React.Component{

    state={
        history: createBrowserHistory()
    }

    componentWillMount(){
        this.setState({ loading: this.props.loading })
    }

    componentWillReceiveProps(nextProps){
        this.setState({ loading: nextProps.loading })
    }

    render(){
        return(
            <div>
                <ErrorBoundary>
                    <LoadingOverlay
                    active={this.state.loading}
                    spinner
                    text='Loading...'
                    >
                        <div>
                        <Router history={this.state.history}>
                                <div className="ui continer">
                                    <Menu />
                                    <Route path={'/'} exact strict component={Home} />
                                    <Route path={'/about'} strict component={About} />
                                    <Route path={'/skills'} strict component={Skills} />
                                    <Route path={'/portfolio'} strict component={Portfolio} />
                                </div>
                            </Router>
                        </div>
                    </LoadingOverlay>
                </ErrorBoundary>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.menu.loading
    }
}

export default connect(mapStateToProps)(App);