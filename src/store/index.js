import { createStore } from 'redux'
import MailClient from '../reducers/index';
import { fromJS } from 'immutable';

const initialState= fromJS({
    numOfClicks: "1"
});

export const store = createStore(MailClient, initialState);