import React from 'react';
import Moment from 'moment';

require('../../../styles/index.scss');

class MailItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {status: 'unread'};
    }

    handleMailItemClick = () => {
        if(this.state.status === 'unread'){
            this.setState({
                status: 'read'
            });
        }
        this.props.setSelectedEmail(this.props.mailItem);
    };

    getFormattedDate = (timestamp) => Moment.unix(timestamp).format("ddd, Do MMMM, HH:mm");

    render() {
        return (
            <div className={this.props.status} onClick={ this.handleMailItemClick }>
                <span className="sender">{this.props.mailItem.sender}</span><a className="del-mail" href="#">&nbsp;delete</a><br/>
                <span className="subject">{this.props.mailItem.subject}</span><br/>
                <span className="time">{this.getFormattedDate(this.props.mailItem.time_sent)}</span><br/>
            </div>
        )
    }
}

MailItem.propTypes = {
    mailItem: React.PropTypes.shape({
        sender: React.PropTypes.string,
        subject: React.PropTypes.string,
        timestamp: React.PropTypes.string
    }),
    handleClick: React.PropTypes.func,
    setSelectedEmail: React.PropTypes.func,
    status: React.PropTypes.string
};
export default MailItem;