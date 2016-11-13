import React from 'react';

const MailMessage = (props) => (
    <div className="message-container">
        <p className="email-text"> {props.email ? props.email.message: ''}</p>
    </div>
);

MailMessage.propTypes = {
    email: React.PropTypes.object
};

export default MailMessage;