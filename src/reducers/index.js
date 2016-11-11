import CLICK_EVENT from '../actions/MailClientActions';

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'CLICK_EVENT':
            return action.filter
        default:
            return state
    }
}

export default visibilityFilter