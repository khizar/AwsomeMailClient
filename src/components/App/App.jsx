import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../../styles/index.scss';
import React from 'react';

const App = props => (
    <div className="align-middle" onClick={props.onGlobalClick}>
        <h1>Awesome Mail Client</h1>
        <p>This React project just works including <span className={styles.redBg}>module</span> local styles.</p>
        <p>Global bootstrap css import works too as you can see on the following button.</p>

        {props.children}
    </div>
);

App.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ]),
    onGlobalClick: React.PropTypes.func
};

export default App;