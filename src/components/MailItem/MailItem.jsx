import React from 'react';
import Moment from 'moment';
import NativeListener from 'react-native-listener';

require('../../../styles/index.scss');

class MailItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = { status: 'unread' };
    }

    handleMailItemClick = () => {

        if (this.state.status === 'unread') {
            this.setState({
                status: 'read'
            });
        }
        if (this.props.setSelectedEmail) {
            this.props.setSelectedEmail(this.props.mailItem);
        }

    };

    handleDeleteEmailClick = () => {
        if (this.props.deleteEmail) {
            this.props.deleteEmail(this.props.mailItem.uid);
        }

    };

    getFormattedDate = (timestamp) => Moment.unix(timestamp).format("ddd, Do MMMM, HH:mm");

    render() {
        return (
            <div className={this.state.status} onClick={ this.handleMailItemClick }>
                <span className="sender">{this.props.mailItem.sender}</span>
                <NativeListener onClick={this.handleDeleteEmailClick}>
                    <button type="button" className="close del-mail" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </NativeListener>
                <br/>
                <span className="subject">{this.props.mailItem.subject}</span><br/>
                <span className="time">{this.getFormattedDate(this.props.mailItem.time_sent)}</span><br/>
            </div>
        )
    }
}

MailItem.propTypes = {
    mailItem: React.PropTypes.shape({
        uid: React.PropTypes.string,
        sender: React.PropTypes.string,
        subject: React.PropTypes.string,
        timestamp: React.PropTypes.string
    }),
    handleClick: React.PropTypes.func,
    setSelectedEmail: React.PropTypes.func,
    status: React.PropTypes.string,
    deleteEmail: React.PropTypes.func
};
export default MailItem;