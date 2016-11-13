import React from 'react';

export default class MailItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {status: 'unread'};
    }


    static propTypes = {
        sender: React.PropTypes.string,
        subject: React.PropTypes.string,
        timestamp: React.PropTypes.string,
        handleClick: React.PropTypes.func
    };

    handleMailItemClick = () => {
        if(this.state.status === 'unread'){
            this.setState({
                status: 'read'
            });
        }

    };

    render() {
        return (
            <div className={this.state.status} onClick={ this.handleMailItemClick }>
                <span className="sender">{this.props.sender}</span>
                <span className="subject">{this.props.subject}</span>
                <span className="time">{this.props.timestamp}</span>
                <a className="del-mail">close</a>
            </div>
        )
    }
}
