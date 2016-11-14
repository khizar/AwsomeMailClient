import { it, describe } from 'mocha';
import { expect } from 'chai';
import MailClientReducer from '../../src/reducers/MailClientReducer';
import { globalClick, fetchEmails, selectEmail, deleteEmail } from '../../src/actions/MailClientActions';
import { fromJS } from 'immutable';


describe('MailClientReducer', () => {
    const initialState = fromJS({
        globalClickCount: 0,
        emails: {},
        selectedEmail: {}
    });

    it('it should return same state if passed some action not handled', () => {
        const nextState = MailClientReducer(initialState, {});
        expect(nextState).to.equal(initialState);
    });

    it('should increment the click count on global click action', () => {
        const nextState = MailClientReducer(initialState, globalClick());
        expect(nextState.get('globalClickCount')).to.equal(initialState.get('globalClickCount') + 1);
    });

    it('should set emails to state on fetch email action', () => {
        const emails = fromJS([{
            sender: 'one',
            message: 'message'
        },{
            sender: 'two',
            message: 'message'
        }]);

        const nextState = MailClientReducer(initialState, fetchEmails(emails));
        expect(nextState.get('emails')).to.equal(emails);
    });

    it('should set the selected email on select email action', () => {
       const email = fromJS({
           sender: 'sender',
           subject: 'subject'
       });
        const nextState = MailClientReducer(initialState,selectEmail(email));
        expect(nextState.get('selectedEmail')).to.equal(email);
    });

    it('should delete the email on delete email action', () => {
        const emails =[{
            uid: "id",
            sender: 'sender',
            subject: 'subject'
        },{
            uid: "id2",
            sender: 'sender2',
            subject: 'subject2'
        }];

        const middleState = MailClientReducer(initialState, fetchEmails(emails));

        const nextState = MailClientReducer(middleState, deleteEmail('id'));

        expect(nextState.get('emails').length).to.equal(1);
    });

});