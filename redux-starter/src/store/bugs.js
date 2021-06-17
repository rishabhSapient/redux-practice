import { createSlice, createAction, createReducer } from '@reduxjs/toolkit';

let lastId = 0;
const slice = createSlice({
    name: "bugs",
    initialState: [],
    reducers: {
        bugAdded: (state, action) => {
            state.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            })
        },
        bugRemoved: (state, action) => {
            const index = state.findIndex(val => val.id === action.payload.id);
            state.splice(index, 1);
        },
        bugResolved: (state, action) => {
            const index = state.findIndex(val => val.id === action.payload.id);
            state[index].resolved = true;
        }
    }
});

export const { bugAdded, bugRemoved, bugResolved } = slice.actions;
export default slice;