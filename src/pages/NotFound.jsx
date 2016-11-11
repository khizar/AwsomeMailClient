import React from 'react';
import { browserHistory } from 'react-router';

export default class NotFound extends React.Component {
    componentWillMount() {
        browserHistory.push('/'); //returning to the main page
    }

    render() {
        return null;
    }
}
