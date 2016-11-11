import { connect } from 'react-redux';
import App from './App';
import { globalClick } from '../../actions/MailClientActions';

const mapDispatchToProps = (dispatch) => ({
    onGlobalClick: () => {
        dispatch(globalClick());
    }
});

export default connect(null, mapDispatchToProps)(App);