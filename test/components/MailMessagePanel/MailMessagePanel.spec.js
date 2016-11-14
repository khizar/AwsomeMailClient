import React from 'react';
import { it, describe, beforeEach } from 'mocha';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import MailMessagePanel from '../../../src/components/MailMessagePanel/MailMessagePanel';
import MailMessageContainer from '../../../src/components/MailMessage/MailMessageContainer';

describe('MailMessagePanel' , () => {

    let mailMessagePanel;

    beforeEach(() => {
        mailMessagePanel = shallow(<MailMessagePanel/>);
    });

    it('Panel should render', () => {
        expect(mailMessagePanel).to.exist;
        expect(mailMessagePanel.type()).to.not.equal(null);
    });

});