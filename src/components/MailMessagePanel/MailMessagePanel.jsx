import React from 'react';
import MailMessageContainer from '../MailMessage/MailMessageContainer';

const MailMessagePanel = (props) => (
    <div className="message-panel">
        <MailMessageContainer />
    </div>
);

MailMessagePanel.propTypes = {
    email: React.PropTypes.object
};

export default MailMessagePanel;