import React from 'react';

const MailMessage = (props) => (
    <div className="message-container">
        <p className="email-text"> {props.emailText}</p>
    </div>
);

MailMessage.propTypes = {
    emailText: React.PropTypes.string
};

export default MailMessage;