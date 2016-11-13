import React from 'react';
import { it, describe, beforeEach } from 'mocha';
import { expect, have } from 'chai';
import { shallow } from 'enzyme';
import MailItemList from '../../../src/components/MailItemList/MailItemList';

describe('MailItemList', () => {

    let mailItemList;
    const mailItemsArr = [{
        uid: 'uid_1',
        sender: 'sender_name_1',
        subject: 'subject_1',
        message: 'message_1',
        time_sent: 'utc_timestamp_1'
    },{
        uid: 'uid_2',
        sender: 'sender_name_2',
        subject: 'subject_2',
        message: 'message_2',
        time_sent: 'utc_timestamp_2'
    }];

    beforeEach(() => {
        mailItemList = shallow(<MailItemList mailItemsList={mailItemsArr}/>);
    });

    it('should render', () => {
        expect(mailItemList).to.exist;
        expect(mailItemList.type()).to.not.equal(null);
        expect(mailItemList.type()).to.equal('ul');
    });

    it('should render list items equal to the number of mail items in the array', () => {
        expect(mailItemList.children('li')).to.have.length(mailItemsArr.length);
    });

});