import { connect } from 'react-redux';
import MailItem from './MailItem';
import { selectEmail } from '../../actions/MailClientActions';


const mapDispatchToProps = (dispatch) => ({
    setSelectedEmail: (email) => {
        dispatch(selectEmail(email))
    }
});

export default connect(null, mapDispatchToProps)(MailItem);