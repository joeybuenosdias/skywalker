import { combineReducers } from 'redux';
import { appReducer } from '../App/appReducer';

export const rootReducer = combineReducers({
    app: appReducer,
});