import React from 'react';
import MailItemContainer from '../MailItem/MailItemContainer';

const MailItemList = (props) => (
    <ul>
        {props.mailItemsList.map(mailItem =>
            <li key={mailItem.uid}>
                <MailItemContainer mailItem={mailItem}/>
            </li>
        )}
    </ul>
);

MailItemList.propTypes = {
    mailItemsList: React.PropTypes.oneOfType([
        React.PropTypes.object,
        React.PropTypes.array
    ])
};
export default MailItemList;