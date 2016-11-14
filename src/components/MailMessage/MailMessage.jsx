import React from 'react';
import classNames from 'classnames';

const MailMessage = (props) => (
    <div className="message-container">
        <div className="email-text">
            <span className="sender">{props.email ? 'From: ' + props.email.sender : ''}</span><br/>
            <span className="subject">{props.email ? 'Subject: ' + props.email.subject : ''}</span><br/>
            <span className={classNames({'center-text': !props.email })}>{props.email ? props.email.message: 'Select an email'}</span>
        </div>
    </div>
);

MailMessage.propTypes = {
    email: React.PropTypes.object
};

export default MailMessage;