import * as ActionTypes from './actionTypes';

export const PostBook = ( state = {
    isLoading: false,
    book: null,
    errMess : null
}, action) => {
    switch(action.type) {
        case ActionTypes.POST_BOOK_SUCCESS:
            let book = action.payload;
            return {...state, isLoading:false, book:book, errMess: null};

        case ActionTypes.POST_BOOK_FAILURE:
            return {...state, isLoading:false, book:null, errMess:action.payload};

        case ActionTypes.POST_BOOK_REQUEST:
            return {...state, isLoading:true, book:null, errMess: null};

        default:
            return state
    }
}