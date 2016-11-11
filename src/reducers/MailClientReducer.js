import { CLICK_EVENT } from '../actions/MailClientActions';
import { fromJS } from 'immutable';

const initialState = fromJS({
    globalClickCount: 0
});

const MailClientReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CLICK_EVENT':
            return state.set(state.globalClickCount, state.globalClickCount++);
        default:
            return state;
    }
};

export default MailClientReducer;