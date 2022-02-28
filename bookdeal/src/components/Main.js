import React, {Component} from 'react';
import Header from './Header.js';
import{useSelector, useDispatch} from 'react-redux';
import {connect} from 'react-redux';
import {registerUser, loginUser, logoutUser} from '../redux/actionCreators.js';



const mapStateToProps = state =>{
    return{
        register: state.register,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        registerUser: (creds) => dispatch(registerUser(creds)),
        loginUser: (creds) => dispatch(loginUser(creds)),
        logoutUser: () => dispatch(logoutUser())
    }
}

class Main extends Component{
    constructor(props){
        super(props);

        this.state = {}
    }

    render() {
        return(
            <div>
                <Header registerUser = {this.props.registerUser} 
                        loginUser = {this.props.loginUser}
                        logoutUser = {this.props.logoutUser}
                        user={this.props.user}
                        />
                
            </div>



        )
    }
}

export default (connect(mapStateToProps, mapDispatchToProps)(Main));