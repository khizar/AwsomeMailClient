import React from 'react';
import { Route } from 'react-router';
import AppContainer from './components/App/AppContainer';
import NotFound from './pages/NotFound';

// Define the application routes and assign for each one the related component.
export default (
    <Route path="/" component={AppContainer}>
        <Route path="*" component={NotFound}/>
    </Route>
);
