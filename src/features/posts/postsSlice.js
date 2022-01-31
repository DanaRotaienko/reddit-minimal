import { createSlice } from "@reduxjs/toolkit";

//Creating Slice Object
export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: {}
    },
    reducers: {
        addPost: (state, action) => {
            const {subreddit, topic, photo, publicationTime, postId} = action.payload;
            state.posts[subreddit].push({
                topic: topic,
                photo: photo,
                publicationTime: publicationTime, 
                postId: postId
            })
        }
    }
});

//Selectors
export const selectPosts = (state) => state.posts.posts;

//Exports 
export const { addPosts } = postsSlice.actions;
export default postsSlice.reducer;