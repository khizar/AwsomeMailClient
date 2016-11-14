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

                <h3 className="client-head">Awesome Mail Client</h3>
                <div className="mail-client-wrapper clearfix">
                    <MailNavigationPanel emails={this.props.emailMessages}/>
                    <MailMessagePanel />
                </div>
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