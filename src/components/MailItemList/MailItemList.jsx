import React from 'react';
import MailItem from '../MailItem/MailItem'

const MailItemList = (props) => (
    <ul>
        {(props.mailItems) && props.mailItems.map(mailItem =>
            <li key={props.mailItems.uid}><MailItem mailItem={mailItem}/></li>
        )}
    </ul>
);

MailItemList.propTypes = {
    mailItems: React.PropTypes.array
};
export default MailItemList;