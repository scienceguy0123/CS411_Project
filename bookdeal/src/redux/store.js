import {configureStore} from '@reduxjs/toolkit';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Register} from './register';
import {User} from './user';
import { PostBook } from './postBook';
import { FetchBooks } from './fetchBooks';
import {GoogleBook} from './googleBook';
import {NYTBooks} from './nytBooks'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            register: Register,
            user: User,
            postBook: PostBook,
            fetchBooks: FetchBooks,
            googleBook: GoogleBook,
            nytBooks: NYTBooks
        }),
        applyMiddleware(thunk, logger)
    );
    
    return store;

}