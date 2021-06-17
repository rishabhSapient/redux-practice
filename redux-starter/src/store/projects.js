import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;
const slice = createSlice({
    name: 'projects',
    initialState: [],
    reducers: {
        addProjects: (state, action) => {
            state.push({
                id: ++lastId,
                name: action.payload.name
            })
        }
    }
})
export const {addProjects} = slice.actions;
export default slice.reducer;
