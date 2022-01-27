import { createSlice } from "@reduxjs/toolkit";

//Creating Slice Object
export const supportsSlice = createSlice({
    name: 'posts',
    initialState: {
        supports: {}
    },
    reducers: {
        addSupport: (state, action) => {
            const {supportId, supports, postId} = action.payload;
            state.supports[supportId] = {
                supportId: supportId,
                supported: false,
                neglected: false,
                supports: supports,
                postId: postId
            }
        },
        toSupport: (postId, action) => {
            const id = action.payload;
            const supported = state.supports[id].supported ? false : true;
            const toAdd = supported ? 1 : -1;

            state.supports[id] = {
                ...state.supports[id],
                supported: supported,
                supports: state.supports[id].supports + toAdd
            }
        },
        toNeglect: (postId, action) => {
            const id = action.payload;
            const neglected = state.supports[id].neglected ? false : true;
            const toAdd = neglected ? -1 : 1;

            state.supports[id] = {
                ...state.supports[id],
                neglected: neglected,
                supports: state.supports[id].supports + toAdd
            }
        }
    }
});

//Selectors
export const selectSupports = (state) => state.supports.supports;

//Exports 
export const { addSupport, toSupport, toNeglect } = supportsSlice.actions;
export default supportsSlice.reducer;