import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AppContainer from './components/App/AppContainer';
import NotFound from './pages/NotFound';
import MailClient from './pages/MailClient';

// Define the application routes and assign for each one the related component.
export default (
    <Route path="/" component={AppContainer}>
        <IndexRoute component={MailClient}/>
        <Route path="*" component={NotFound}/>
    </Route>
);

