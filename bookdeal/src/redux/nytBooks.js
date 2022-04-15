import * as ActionTypes from './actionTypes';

export const NYTBooks = (state = {
        isLoading: false,
        errMess: null,
        book: null,
        
    }, action) => {
    switch(action.type) {
        case ActionTypes.FETCH_NYTBOOKS_SUCCESS:
            return {...state, isLoading: false, errMess: null, book: action.payload};

        case ActionTypes.FETCH_NYTBOOKS_REQUEST:
            return {...state, isLoading: true, errMess: null, book: null};

        case ActionTypes.FETCH_NYTBOOKS_FAILURE:
            return {...state, isLoading: false, errMess: action.payload, book: null};
        
        case ActionTypes.CLEAN_NYTBOOK:
            return {...state, isLoading: false, errMess: null, book: null};
    

        default:
            return state;
    }
}