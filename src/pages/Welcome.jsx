import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/index.scss';

const WelcomePage = props => (
    <div>
        <h1>Awesome Mail Client</h1>
        <p>This React project just works including <span className={styles.redBg}>module</span> local styles.</p>
        <p>Global bootstrap css import works too as you can see on the following button.</p>
        <p><a href="/" className="btn btn-primary btn-lg">Enjoy!</a></p>
    </div>
);

export default WelcomePage;
