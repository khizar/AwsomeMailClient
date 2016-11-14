import React from 'react';
import { it, describe, beforeEach } from 'mocha';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import MailMessageComponent from '../../../src/components/MailMessage/MailMessage';

describe('MailMessage' , () => {

    let mailMessageComponent;

    beforeEach(() => {
        mailMessageComponent = shallow(<MailMessageComponent/>);
    });

    it('Panel should render', () => {
        expect(mailMessageComponent).to.exist;
        expect(mailMessageComponent.type()).to.not.equal(null);
    });

    it('should have a single mail message container ', () => {
        expect(mailMessageComponent.find('div.message-container')).to.have.length(1);
    });

    it('should contain an with email text', () => {
       expect(mailMessageComponent.find('.email-text')).to.have.length(1);
    });

});