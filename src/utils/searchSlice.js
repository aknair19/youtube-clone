import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchSuggestionQuery: null,
    searchSuggestionData: null,
    popularVideos: null,
    searchQuery: "",
  },
  reducers: {
    getSearchSuggestionQuery: (state, action) => {
      state.searchSuggestionQuery = action.payload;
    },
    getSearchSuggestionData: (state, action) => {
      state.searchSuggestionData = action.payload;
    },
    getVideos: (state, action) => {
      state.popularVideos = action.payload;
    },
    getSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    clearSearchQuery: (state, action) => {
      state.searchQuery = "";
    },
  },
});

export const {
  getSearchSuggestionQuery,
  getSearchSuggestionData,
  getVideos,
  getSearchQuery,
  clearSearchQuery,
} = searchSlice.actions;
export default searchSlice.reducer;
