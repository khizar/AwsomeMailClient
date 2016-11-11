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
    // Provider connects our component tree to a Redux store.
    // Provider has to be ancestor to all of our application components.
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}/>
    </Provider>,
    document.getElementById('app')
);
