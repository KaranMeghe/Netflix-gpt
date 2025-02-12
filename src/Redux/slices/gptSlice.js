import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        searchResults: [],
        isLoading: false
    },
    reducers: {
        toggleGptSearch: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addSearchResults: (state, action) => {
            state.searchResults = action.payload;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    }
});

export const { toggleGptSearch, addSearchResults, setIsLoading } = gptSlice.actions;
export const gptReducer = gptSlice.reducer;