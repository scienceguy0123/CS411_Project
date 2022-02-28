import * as ActionTypes from './actionTypes';

export const User = (state ={
            isLoading: false,
            user: null,
            errMess: null,
            isAuthenticated: false
            }, action) => {
                    switch(action.type) {
                        case ActionTypes.LOGIN_REQUEST:
                            return {
                                ...state,
                                isLoading: true,
                                user: action.creds,
                                errMess: null,
                                isAuthenticated: false
                            };
                        case ActionTypes.LOGIN_SUCCESS:
                            return{
                                ...state,
                                isLoading: false,
                                user: action.user,
                                errMess: null,
                                isAuthenticated: true
                            }
                        case ActionTypes.LOGIN_FAILURE:
                            return{
                                ...state,
                                isLoading: false,
                                user: null,
                                errMess: action.message,
                                isAuthenticated: false
                            }

                        case ActionTypes.LOGOUT_SUCCESS:
                            return{
                                ...state,
                                isLoading: false,
                                user: null,
                                errMess: null,
                                isAuthenticated: false
                            }


                        default:
                            return state;
                    }  
                }                                  
                                