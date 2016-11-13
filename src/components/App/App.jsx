import React from 'react';
import MailNavigationPanel from '../MailNavigationPanel/MailNavigationPanel';
import MailMessagePanel from '../MailMessagePanel/MailMessagePanel';


require('../../../styles/index.scss');

class App extends React.Component {

    componentDidMount() {
        this.props.setFetchedEmails();
    }

    render() {
        return (
            <div className="awesome-email-client" onClick={this.props.onGlobalClick}>

                <h1>Awesome Mail Client</h1>
                <p>This React project just works including <span className="redBg">module</span> local styles.</p>
                <p>Global bootstrap css import works too as you can see on the following button.</p>

                <MailNavigationPanel emails={this.props.emailMessages}/>
                <MailMessagePanel />
            </div>
        )
    }
}

App.propTypes = {
    onGlobalClick: React.PropTypes.func,
    setFetchedEmails: React.PropTypes.func,
    emailMessages: React.PropTypes.oneOfType([
        React.PropTypes.object,
        React.PropTypes.array
    ])
};
export default App;