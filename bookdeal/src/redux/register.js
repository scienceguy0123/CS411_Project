import * as ActionTypes from './actionTypes';

export const Register = (state ={
            isLoading: false,
            user: null,
            errMess: null,
            isRegistered: false
            }, action) => {
                    switch(action.type) {
                        case ActionTypes.REGISTER_REQUEST:
                            return {
                                ...state,
                                isLoading: true,
                                user: action.creds,
                                errMess: null,
                                isRegistered: false
                            };
                        case ActionTypes.REGISTER_SUCCESS:
                            return{
                                ...state,
                                isLoading: false,
                                user: action.creds,
                                errMess: null,
                                isRegistered: true
                            }
                        case ActionTypes.REGISTER_FAILURE:
                            return{
                                ...state,
                                isLoading: false,
                                user: null,
                                errMess: action.message,
                                isRegistered: false
                            }
                        default:
                            return state;
                    }  
                }                                  
                                