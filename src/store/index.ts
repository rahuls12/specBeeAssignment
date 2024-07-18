import { configureStore } from "@reduxjs/toolkit";
import {
  articlesReducer,
  changeAuthorFilter,
  changeCategoryFilter,
  changePage,
  changeSortingOrder,
  changeTotalPage,
} from "./slices/articlesSlice";

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
  },
});

export * from "./thunks/fetchArticles";
export {
  changeAuthorFilter,
  changeCategoryFilter,
  changeSortingOrder,
  changePage,
  changeTotalPage,
};
