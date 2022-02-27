import {configureStore} from '@reduxjs/toolkit';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Register} from './register';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            register: Register
        }),
        applyMiddleware(thunk, logger)
    );
    
    return store;

}