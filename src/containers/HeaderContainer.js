import Header from '../components/Header';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        isLogged: state.userData.isLogged
    } 
};

export default connect(mapStateToProps, null)(Header);