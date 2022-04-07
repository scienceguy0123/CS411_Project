import * as ActionTypes from './actionTypes';

export const GoogleBook = (state = {
        isLoading: false,
        errMess: null,
        book: null,
        
    }, action) => {
    switch(action.type) {
        case ActionTypes.FETCH_GBOOKS_SUCCESS:
            return {...state, isLoading: false, errMess: null, book: action.payload};

        case ActionTypes.FETCH_GBOOKS_REQUEST:
            return {...state, isLoading: true, errMess: null, book: null};

        case ActionTypes.FETCH_GBOOKS_FAILURE:
            return {...state, isLoading: false, errMess: action.payload, book: null};
        
        case ActionTypes.CLEAN_GBOOK:
            return {...state, isLoading: false, errMess: null, book: null};
    

        default:
            return state;
    }
}