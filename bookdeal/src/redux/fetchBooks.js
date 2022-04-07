import * as ActionTypes from './actionTypes';

export const FetchBooks = (state = {
        isLoading: false,
        errMess: null,
        books: null,
        
    }, action) => {
    switch(action.type) {
        case ActionTypes.FETCH_BOOKS_SUCCESS:
            return {...state, isLoading: false, errMess: null, books: action.payload};

        case ActionTypes.FETCH_BOOKS_REQUEST:
            return {...state, isLoading: true, errMess: null, books: null};

        case ActionTypes.FETCH_BOOKS_FAILURE:
            return {...state, isLoading: false, errMess: action.payload, books: null};
        
        case ActionTypes.CLEAN_BOOKS:
            return {...state, isLoading: false, errMess: null, books: null};
    
        default:
            return state;
    }
}