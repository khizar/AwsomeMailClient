import React from 'react';
import { it, describe, beforeEach } from 'mocha';
import { expect, have } from 'chai';
import { shallow } from 'enzyme';
import MailItem from '../../../src/components/MailItem/MailItem';

describe('MailItem', () => {

    let mailItem;

    beforeEach(() => {
        const mailItemObj = {
            uid: 'uid_1',
            sender: 'sender_name_1',
            subject: 'subject_1',
            message: 'message_1',
            time_sent: 'utc_timestamp_1'
        };
        mailItem = shallow(<MailItem mailItem={mailItemObj} />);
    });

    it('should render', () => {
        expect(mailItem).to.exist;
        expect(mailItem.type()).to.not.equal(null);
    });

    it('should contain a span for sender name', () => {
        expect(mailItem.find('span.sender')).to.have.length(1);
        expect(mailItem.find('span.sender').isEmpty()).to.equal(false);
    });

    it('should contain a span for subject', () => {
        expect(mailItem.find('span.subject')).to.have.length(1);
        expect(mailItem.find('span.subject').isEmpty()).to.equal(false);
    });

    it('should contain a span for time', () => {
        expect(mailItem.find('span.time')).to.have.length(1);
        expect(mailItem.find('span.time').isEmpty()).to.equal(false);
    });

    it('should have a button to delete message', () => {
        expect(mailItem.find('button.del-mail')).to.have.length(1);
    });

    it('should have a read/unread status which works', () => {
        expect(mailItem.hasClass('unread')).to.equal(true);

        mailItem.simulate('click');

        expect(mailItem.hasClass('unread')).to.equal(false);
        expect(mailItem.hasClass('read')).to.equal(true);
    });


});