import { connect } from 'react-redux';
import App from './App';
import { globalClick, fetchEmails } from '../../actions/MailClientActions';
import emails from '../../../messages_sample.json';

const mapStateToProps = (state) => ({
    emailMessages: state.get('emails')
});

const mapDispatchToProps = (dispatch) => ({
    onGlobalClick: () => {
        dispatch(globalClick());
    },
    setFetchedEmails: () => {
        dispatch(fetchEmails(emails.emailMessages))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);