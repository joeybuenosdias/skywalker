import { FETCH_DATA } from './actions';

export const appReducer = (state = {}, action) => {
    switch(action.type) {
        case FETCH_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
};

export default appReducer;