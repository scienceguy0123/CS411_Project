import React, {Component} from 'react';
import Header from './Header.js';
import{useSelector, useDispatch} from 'react-redux';
import {connect} from 'react-redux';
import {registerUser} from '../redux/actionCreators.js';



const mapStateToProps = state =>{
    return{
        register: state.register
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        registerUser: (creds) => dispatch(registerUser(creds))
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
                <Header registerUser = {this.props.registerUser} />
                
            </div>



        )
    }
}

export default (connect(mapStateToProps, mapDispatchToProps)(Main));