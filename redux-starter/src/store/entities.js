import { combineReducers } from 'redux';
import projectReducer from './projects';
import bugReducer from './bugs';
import userReducer from './users';

export default combineReducers({
    bugs: bugReducer,
    projects: projectReducer,
    users: userReducer
})