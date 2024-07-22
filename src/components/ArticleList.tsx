/* eslint-disable jsx-a11y/alt-text */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArtices } from "../store";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { url } from "../defaultImg";
import Pagination from "./Pagination";
import sortBy from "../helper/sortBy";
import setFilters from "../helper/setFilter";
import { ShimmerContentBlock } from "react-shimmer-effects";

export default function ArticleList() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const mainUrl = "https://dummy-rest-api.specbee.site";

  const articles = useSelector((state: any) => {
    const selectedCategories = state.articles.appliedCategoryFilter;
    const selectedAuthors = state.articles.appliedAuthorFilter;
    const sortingOrder = state.articles.sorting;
    const initialData = [...state.articles.data];
    const currentPage = state.articles.currentPage;
    sortBy(sortingOrder, initialData);
    // if no filter is selected
    return setFilters(
      selectedAuthors,
      selectedCategories,
      initialData,
      currentPage
    );
  });

  useEffect(() => {
    dispatch(fetchArtices());
  }, [dispatch]);

  const renderedItems =
    articles &&
    articles.map((article: any, index: number) => {
      return (
        <div
          className="article-preview"
          onClick={() => window.open(article.url, "_blank")}
          key={article.id}
        >
          <div className="article-preview-container">
            <div>
              <img
                style={{
                  border: "0.5px solid lightslategrey",
                  borderRadius: "10px",
                  height: "70%",
                }}
                src={article.image ? mainUrl + article.image : url}
                alt="img"
              />
            </div>
            <div>
              <div className="date-source-container">
                <div className="date-div">
                  {article.date ? new Date(article.date).toDateString() : ""}
                </div>
                <div className="date-div">{article.source}</div>
              </div>

              <div>
                <h2
                  className="title-div"
                  dangerouslySetInnerHTML={{ __html: article.title }}
                ></h2>
              </div>
            </div>
          </div>
          <div
            className="content-div"
            style={{ width: "100%" }}
            dangerouslySetInnerHTML={{ __html: article.body }}
          ></div>
          <div className="author-div">{article.author}</div>
          <hr />
        </div>
      );
    });
  const noItemToRender = <h1 className="no-items">No Items to Render.</h1>;
  return (
    <div>
      {articles.length ? renderedItems : noItemToRender}
      {articles.length ? <Pagination /> : ""}
    </div>
  );
}
