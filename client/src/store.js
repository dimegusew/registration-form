import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from "redux-logger";
import {userReducer} from './reducers/userReducers';
import {registrationReducer} from './reducers/registrationReducer';
import thunk from 'redux-thunk';


const store = createStore(combineReducers({userReducer,registrationReducer}),
{}, applyMiddleware(logger,thunk));

export default store;
