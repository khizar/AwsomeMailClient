import { connect } from 'react-redux';
import MailMessage from './MailMessage';

const mapStateToProps = (state) => ({
    email: state.get('selectedEmail', {message:'no email selected'})
});


export default connect(mapStateToProps, null)(MailMessage);