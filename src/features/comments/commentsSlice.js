import { createSlice } from "@reduxjs/toolkit";

//Creating Slice Object
export const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: {}
    },
    reducers: {
        addComments: (state, action) => {
            const {postId, comments} = action.payload;
            state.comments[postId].push(comments);
        }
    }
});

//Selectors
export const selectComments = (state) => state.comments.comments;

//Exports 
export const { addComments } = commentsSlice.actions;
export default commentsSlice.reducer;