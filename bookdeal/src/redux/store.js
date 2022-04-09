import {configureStore} from '@reduxjs/toolkit';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Register} from './register';
import {User} from './user';
<<<<<<< HEAD

=======
import { PostBook } from './postBook';
import { FetchBooks } from './fetchBooks';
import {GoogleBook} from './googleBook';
>>>>>>> chou

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            register: Register,
<<<<<<< HEAD
            user: User
=======
            user: User,
            postBook: PostBook,
            fetchBooks: FetchBooks,
            googleBook: GoogleBook
>>>>>>> chou
        }),
        applyMiddleware(thunk, logger)
    );
    
    return store;

}