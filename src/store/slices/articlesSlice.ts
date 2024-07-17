import { createSlice } from "@reduxjs/toolkit";
import { fetchArtices } from "../thunks/fetchArticles";

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchArtices.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchArtices.fulfilled, (state, action: [] | any) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchArtices.rejected, () => {});
  },
});

export const articlesReducer = articlesSlice.reducer;
