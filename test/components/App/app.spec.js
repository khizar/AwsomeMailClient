import React from 'react';
import { it, describe, beforeEach } from 'mocha';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import App from '../../../src/components/App/App';
import sinon from 'sinon';

describe('App component', function () {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App/>);
    });

    it('should always pass, coz its a dummy', function () {
        expect([1, 2, 3].indexOf(4)).to.equal(-1);
    });

    it('App wrapper component should exist', () => {
        expect(wrapper).to.exist;
    });

    it('App wrapper should be a div', () => {
        expect(wrapper.type()).to.equal('div');
    });

    it('App wrapper should have the correct class', () => {
        expect(wrapper.hasClass('awesome-email-client')).to.equal(true);
    });

    it('App wrapper should have the first three correct children', () => {
        let firstChild = wrapper.childAt(0);
        let secondChild = wrapper.childAt(1);
        let thirdChild = wrapper.childAt(2);

        expect(firstChild.type()).to.equal('h1');
        expect(secondChild.type()).to.equal('p');
        expect(thirdChild.type()).to.equal('p');
    });

    it("should call the correct callback on Click", () => {
        const spy = sinon.spy();
        wrapper = shallow(<App onGlobalClick={spy}/>)
        wrapper.simulate('click');
        expect(spy.calledOnce).to.equal(true);
    });

});