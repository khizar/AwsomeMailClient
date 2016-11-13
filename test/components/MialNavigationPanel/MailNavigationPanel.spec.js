import React from 'react';
import { it, describe, beforeEach } from 'mocha';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import MailNavigationPanel from '../../../src/components/MailNavigationPanel/MailNavigationPanel';
import MailItemList from '../../../src/components/MailItemList/MailItemList';

describe('MailNavigationPanel' , () => {

    let mailNavigationComponent;

    beforeEach(() => {
        mailNavigationComponent = shallow(<MailNavigationPanel/>);
    });

    it('Mail Navigation Panel should render', () => {
        expect(mailNavigationComponent).to.exist;
        expect(mailNavigationComponent.type()).to.not.equal(null);
    });

    it('should have a single mail items list component', () => {

       expect(mailNavigationComponent.find(MailItemList)).to.have.length(1);
    });

});