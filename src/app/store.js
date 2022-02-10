import { configureStore } from '@reduxjs/toolkit';
import searchTermReducer from '../features/searchTerm/searchTermSlice';
import postsReducer from '../features/posts/postsSlice';
import commentsReducer from '../features/comments/commentsSlice';
import supportsReducer from '../features/supports/supportsSlice';

export const store = configureStore({
  reducer: {
    searchTerm: searchTermReducer,
    posts: postsReducer,
    comments: commentsReducer,
    supports: supportsReducer
  },
});
