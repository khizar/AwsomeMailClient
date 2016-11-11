import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App/App';
import NotFound from './pages/NotFound';
import WelcomePage from './pages/MailClient';

// Define the application routes and assign for each one the related component.
export default (
    <Route path="/" component={App}>
        <IndexRoute component={WelcomePage}/>
        <Route path="*" component={NotFound}/>
    </Route>
);

