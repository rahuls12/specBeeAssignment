import { createSlice } from "@reduxjs/toolkit";
import { fetchArtices } from "../thunks/fetchArticles";

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    currentPage: 1,
    totalPages: 1,
    data: [],
    appliedCategoryFilter: [],
    appliedAuthorFilter: [],
    sorting: "date-asc", // date-asc, date-dsc, title-asc, title-dsc
    isLoading: false,
    error: null,
  },
  reducers: {
    changeCategoryFilter(state, action) {
      state.appliedCategoryFilter = action.payload;
    },
    changeAuthorFilter(state, action) {
      state.appliedAuthorFilter = action.payload;
    },
    changeSortingOrder(state, action) {
      state.sorting = action.payload;
    },
    changePage(state, action) {
      if (action.payload < 1) {
        state.currentPage = 1;
      } else if (action.payload > state.totalPages) {
        state.currentPage = state.totalPages;
      } else state.currentPage = action.payload;
    },
    changeTotalPage(state, action) {
      state.totalPages = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchArtices.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchArtices.fulfilled, (state, action: [] | any) => {
      state.isLoading = false;
      state.data = action.payload;
      state.totalPages = Math.ceil(action.payload.length / 5);
    });
    builder.addCase(fetchArtices.rejected, () => {});
  },
});

export const articlesReducer = articlesSlice.reducer;
export const {
  changeCategoryFilter,
  changeAuthorFilter,
  changeSortingOrder,
  changePage,
  changeTotalPage,
} = articlesSlice.actions;
