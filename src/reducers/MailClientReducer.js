import { GLOBAL_CLICK_EVENT, FETCH_EMAILS, SELECT_EMAIL, DELETE_EMAIL } from '../actions/MailClientActions';
import { fromJS } from 'immutable';

const initialState = fromJS({
    globalClickCount: 0,
    emails: [],
    selectedEmail: null
});

const MailClientReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'GLOBAL_CLICK_EVENT':
            return state.set('globalClickCount', state.get('globalClickCount') + 1);
        case 'FETCH_EMAILS':
            return state.set('emails', action.emails);
        case 'SELECT_EMAIL':
            return state.set('selectedEmail', action.email);
        case 'DELETE_EMAIL':
            const newEmailsList = state.get('emails').filter(email => {
                return email.uid !== action.emailId
            });

            let newState = state.set('emails', newEmailsList);
            if (newState.get('selectedEmail') && newState.get('selectedEmail').uid === action.emailId) {
                newState = newState.set('selectedEmail', {
                    sender: '',
                    subject: '',
                    message: ''
                });
            }
            return newState;
        default:
            return state;
    }
};

export default MailClientReducer;