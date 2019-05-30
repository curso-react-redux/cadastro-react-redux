import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers';

ReactDOM.render(
    <Provider store={createStore(rootReducer, {}, applyMiddleware(ReduxThunk))} >
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));
