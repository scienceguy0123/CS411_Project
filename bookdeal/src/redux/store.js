import {configureStore} from '@reduxjs/toolkit';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Register} from './register';
import {User} from './user';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            register: Register,
            user: User
        }),
        applyMiddleware(thunk, logger)
    );
    
    return store;

}