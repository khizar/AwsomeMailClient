import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import routes from './routes';
import { createStore, applyMiddleware } from 'redux';
import MailClientReducer from './reducers/MailClientReducer';
import logger from './middleware/logger';

const store = createStore(MailClientReducer, applyMiddleware(logger));


ReactDom.render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}/>
    </Provider>,
    document.getElementById('app')
);
