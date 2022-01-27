import { createSlice } from "@reduxjs/toolkit";

//Creating Slice Object
export const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: {}
    },
    reducers: {
        addComment: (state, action) => {
            const {creator, commentId, time, text} = action.payload;
            state.comments[commentId] = {
                creator: creator,
                commentId: commentId, 
                time: time,
                text: text
            }
        }
    }
});

//Selectors
export const selectComments = (state) => state.comments.comments;

//Exports 
export const { addComment } = commentsSlice.actions;
export default commentsSlice.reducer;