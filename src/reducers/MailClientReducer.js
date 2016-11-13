import { GLOBAL_CLICK_EVENT } from '../actions/MailClientActions';
import { fromJS } from 'immutable';

const initialState = fromJS({
    globalClickCount: 0,
    emails: [],
    selectedEmail: {}
});

const MailClientReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'GLOBAL_CLICK_EVENT':
            return state.set('globalClickCount', state.get('globalClickCount') + 1);
        case 'FETCH_EMAILS':
            return state.set('emails', action.emails);
        case 'SELECT_EMAIL':
            return state.set('selectedEmail', action.email);
        default:
            return state;
    }
};

export default MailClientReducer;