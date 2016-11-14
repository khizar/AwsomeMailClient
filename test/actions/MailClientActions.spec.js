import { it, describe } from 'mocha';
import { expect } from 'chai';
import {
    GLOBAL_CLICK_EVENT, globalClick, FETCH_EMAILS, fetchEmails, SELECT_EMAIL, selectEmail, DELETE_EMAIL, deleteEmail
}
    from '../../src/actions/MailClientActions';

describe('MailClientActions', () => {

    it('should create a GLOBAL_CLICK_EVENT action', () => {
        const expectedAction = {
            type: GLOBAL_CLICK_EVENT
        };
        const createdAction = globalClick();
        expect(createdAction).to.deep.equal(expectedAction);
    });

    it('should create a FETCH_EMAILS action', () => {
        const emails = [{
            sender: 'one',
            message: 'message'
        }, {
            sender: 'two',
            message: 'message'
        }];

        const expectedAction = {
            type: FETCH_EMAILS,
            emails
        };

        const createdAction = fetchEmails(emails);
        expect(createdAction).to.deep.equal(expectedAction);
    });

    it('should create a SELECT_EMAIL action', () => {
        const email = {
            sender: 'sender',
            subject: 'subject'
        };

        const expectedAction = {
            type: SELECT_EMAIL,
            email
        };

        expect(selectEmail(email)).to.deep.equal(expectedAction);
    });

    it('should create a DELETE_EMAIL action', () => {
        const emailId = "id";

        const expectedAction = {
            type: DELETE_EMAIL,
            emailId
        };

        expect(deleteEmail(emailId)).to.deep.equal(expectedAction);
    })

});