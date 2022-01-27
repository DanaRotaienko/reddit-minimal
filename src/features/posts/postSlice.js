import { createSlice } from "@reduxjs/toolkit";

//Creating Slice Object
export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: {}
    },
    reducers: {
        addPost: (state, action) => {
            const {postId, creatorId, image, topic, comments, support} = action.payload;
            state.posts[postId] = {
                postId: postId,
                creatorId: creatorId,
                image: image, 
                topic: topic,
                comments: [],
                support: {}
            }
        }
    }
});

//Selectors
export const selectPosts = (state) => state.posts.posts;

//Exports 
export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;