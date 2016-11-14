import React from 'react';
import MailMessageContainer from '../MailMessage/MailMessageContainer';

const MailMessagePanel = (props) => (
    <div className="message-panel  col-md-8">
        <MailMessageContainer />
    </div>
);

MailMessagePanel.propTypes = {
    email: React.PropTypes.object
};

export default MailMessagePanel;