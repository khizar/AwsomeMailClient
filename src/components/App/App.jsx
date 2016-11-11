import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../../styles/index.scss';
import React from 'react';

export default class App extends React.Component {
    static propTypes = {
      children: React.PropTypes.object
    };

    render() {
        return (
            <div className="align-middle">
                <h1>Awesome Mail Client</h1>
                <p>This React project just works including <span className={styles.redBg}>module</span> local styles.</p>
                <p>Global bootstrap css import works too as you can see on the following button.</p>

                {this.props.children}
            </div>
        )
    }
}
