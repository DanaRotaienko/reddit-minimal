import { createSlice } from "@reduxjs/toolkit";

//Creating Slice Object
export const creatorsSlice = createSlice({
    name: 'comments',
    initialState: {
        creators: {}
    },
    reducers: {
        addCreator: (state, action) => {
            const {creatorId, creatorName, url} = action.payload;
            state.creators[creatorId] = {
                creatorId: creatorId,
                creatorName: creatorName,
                url: url
            }
        }
    }
});

//Selectors
export const selectCreators = (state) => state.creators.creators;

//Exports 
export const { addCreator } = creatorsSlice.actions;
export default creatorsSlice.reducer;