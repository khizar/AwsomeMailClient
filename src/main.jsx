import React from 'react';
import ReactDom from 'react-dom';
import { Router } from 'react-router';
import routes from './routes';
import Provider from 'react-redux';

const { store, history } = require('./store/index');

ReactDom.render(
    // Provider connects our component tree to a Redux store.
    // Provider has to be ancestor to all of our application components.

    <Provider store={store}><Router history={history} routes={routes}/></Provider>,
    document.getElementById('app'));
