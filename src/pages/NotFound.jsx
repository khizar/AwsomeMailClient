import React from 'react';
import { browserHistory } from 'react-router';

export default class NotFound extends React.Component {
    componentWillMount() {
        browserHistory.push('/');
    }

    render() {
        return null;
    }
}
