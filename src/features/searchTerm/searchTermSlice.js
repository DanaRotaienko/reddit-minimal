import { createSlice } from "@reduxjs/toolkit";

//Creating Slice Object
export const searchTermSlice = createSlice({
    name: 'searchTerm',
    initialState: {
        text: ''
    },
    reducers: {
        setSearchTerm: (text, action) => {
           const term = action.payload;
           state.text = term;
        },
        clearSearchTerm: (action) => {
            state.text = '';
        }
    }
});

//Selectors
export const selectTerm = (state) => state.searchTerm.text;

//Exports 
export const { setSearchTerm, clearSearchTerm } = searchTermSlice.actions;
export default searchTermSlice.reducer;
