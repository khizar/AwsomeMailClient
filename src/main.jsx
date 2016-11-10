import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app/App';

render( <AppContainer><App/></AppContainer>, document.getElementById("app"));


if (module.hot) {
    module.hot.accept('./app/App.jsx', () => {
        const App = require('./app/App.jsx').default;
        render(
            <AppContainer>
                <App/>
            </AppContainer>,
            document.getElementById("app")
        );
    });
}
