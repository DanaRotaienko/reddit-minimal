import { createSlice } from "@reduxjs/toolkit";

//Creating Slice Object
export const supportsSlice = createSlice({
    name: 'supports',
    initialState: {
        supports: {}
    },
    reducers: {
        uploadSupport: (state, action) => {
            const {postId, ups, downs, isUp, isDown} = action.payload;
            state.supports[postId] = {
                ups: ups,
                downs: downs,
                isUp: isUp,
                isDown: isDown
            }
        },
        addUp: (postId, action) => {
            state.supports[postId] = {
                ...state.supports[postId],
                ups: state.supports[postId] + 1,
                isUp: true
            }
        },
        addDown: (postId, action) => {
            state.supports[postId] = {
                ...state.supports[postId],
                downs: state.supports[postId] + 1,
                isDown: true
            }
        },
        removeUp: (postId, action) => {
            state.supports[postId] = {
                ...state.supports[postId],
                ups: state.supports[postId] - 1,
                isUp: false
            }
        },
        removeDown: (postId, action) => {
            state.supports[postId] = {
                ...state.supports[postId],
                downs: state.supports[postId] - 1,
                isDown: false
            }
        }
    }
});

//Selectors
export const selectSupports = (state) => state.supports.supports;

//Exports 
export const { uploadSupport, addUp, addDown, removeUp, removeDown } = supportsSlice.actions;
export default supportsSlice.reducer;