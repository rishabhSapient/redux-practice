import { combineReducers } from 'redux';
import projectReducer from './projects';
import bugReducer from './bugs';

export default combineReducers({
    bugs: bugReducer,
    projects: projectReducer
})