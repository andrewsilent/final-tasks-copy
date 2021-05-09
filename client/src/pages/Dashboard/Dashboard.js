import React from 'react';
import CONSTANTS from '../../constants';
import CustomerDashboard from '../../components/CustomerDashboard/CustomerDashboard';
import CreatorDashboard from '../../components/CreatorDashboard/CreatorDashboard';
import Header from '../../components/Header/Header';
import {connect} from 'react-redux';


const Dashboard = (props) => {
    const {role, history} = props;

    if (role !== CONSTANTS.CUSTOMER || role !== CONSTANTS.CREATOR) {
        props.history.replace('/login');
    }

    return (
        <div>
            <Header/>
            {
                role === CONSTANTS.CUSTOMER ?
                    <CustomerDashboard history={history} match={props.match}/>
                    :
                    <CreatorDashboard history={history} match={props.match}/>
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return state.auth.data
};

export default connect(mapStateToProps)(Dashboard);
