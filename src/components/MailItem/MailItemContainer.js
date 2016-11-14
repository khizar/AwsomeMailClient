import { connect } from 'react-redux';
import MailItem from './MailItem';
import { selectEmail, deleteEmail } from '../../actions/MailClientActions';


const mapDispatchToProps = (dispatch) => ({
    setSelectedEmail: (email) => {
        dispatch(selectEmail(email))
    },
    deleteEmail: (emailId) => {
        dispatch(deleteEmail(emailId));
    }
});

export default connect(null, mapDispatchToProps)(MailItem);