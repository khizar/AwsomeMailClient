import React from 'react';
import ReactDom from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from './routes';

ReactDom.render(
    // Provider connects our component tree to a Redux store.
    // Provider has to be ancestor to all of our application components.

    <Router history={hashHistory} routes={routes}/>,
    document.getElementById('app'));
