import React from 'react';
import { it, describe, beforeEach } from 'mocha';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from '../../../src/components/App/App';
import MailMessagePanel from '../../../src/components/MailMessagePanel/MailMessagePanel';
import MailNavigationPanel from '../../../src/components/MailNavigationPanel/MailNavigationPanel';
import sinon from 'sinon';

describe('App component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App/>);
    });

    it('should always pass, coz its a dummy', function () {
        expect([1, 2, 3].indexOf(4)).to.equal(-1);
    });

    it('should exist', () => {
        expect(wrapper).to.exist;
    });

    it('should be a div', () => {
        expect(wrapper.type()).to.equal('div');
    });

    it('should have the correct class', () => {
        expect(wrapper.hasClass('awesome-email-client')).to.equal(true);
    });


    it("should call the correct callback on Click", () => {
        const spy = sinon.spy();
        wrapper = shallow(<App onGlobalClick={spy}/>)
        wrapper.simulate('click');
        expect(spy.calledOnce).to.equal(true);
    });

    it('should have a mail navigation panel', () => {
       expect(wrapper.find(MailNavigationPanel)).to.have.length(1);
    });

    it('should have a mail message panel', () => {
        expect(wrapper.find(MailMessagePanel)).to.have.length(1);
    });
});