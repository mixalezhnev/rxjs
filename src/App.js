import React, { Component } from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';

import {
    cancelableRequest,
    cancelableRequestCancel,
    repeatableRequest,
    repeatableRequestCancel
} from './store/modules/actions';

class App extends Component {
    render() {
        const {
            cancelableRequest,
            cancelableRequestCancel,
            repeatableRequest,
            repeatableRequestCancel
        } = this.props;

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <button onClick={cancelableRequest}>Run cancelable request</button>
                    <button onClick={cancelableRequestCancel}>Cancel request</button>
                    <button onClick={repeatableRequest}>Run repeatable request</button>
                    <button onClick={repeatableRequestCancel}>Cancel repeatable request</button>
                </header>
            </div>
        );
    }
}

export default connect(null, {
    cancelableRequest,
    cancelableRequestCancel,
    repeatableRequest,
    repeatableRequestCancel
})(App);
