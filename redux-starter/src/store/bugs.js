import { createAction, createReducer } from '@reduxjs/toolkit';

// actions creators
export const bugAdded = createAction('bugAdded')
export const bugRemoved = createAction('bugRemoved');
export const bugResolved = createAction('bugResolved');
// actions creators


// Reducer
let lastId = 0;

export default createReducer([], {
    [bugAdded.type]: (state, action) => {
        state.push({
            id: ++lastId,
            description: action.payload.description,
            resolved: false
        })
    },
    [bugRemoved.type]: (state, action) => {
        const index = state.findIndex(val => val.id === action.payload.id);
        state.splice(index, 1);
    },
    [bugResolved.type]: (state, action) => {
        const index = state.findIndex(val => val.id === action.payload.id);
        state[index].resolved = true; 
    }
});