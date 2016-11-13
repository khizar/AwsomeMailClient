import React from 'react';
import MailItemsList from '../MailItemList/MailItemList';

const MailNavigationPanel = (props) => (
    <div className="navigation-panel">
        <MailItemsList mailItemsList={props.emails}/>
    </div>
);

MailNavigationPanel.propTypes = {
    emails: React.PropTypes.oneOfType([
        React.PropTypes.object,
        React.PropTypes.array
    ])
};

export default MailNavigationPanel;