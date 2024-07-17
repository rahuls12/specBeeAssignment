/* eslint-disable jsx-a11y/alt-text */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArtices } from "../store";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { url } from "../defaultImg";

export default function ArticleList() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const articles = useSelector((state: any) => {
    const selectedCategories = state.articles.appliedCategoryFilter;
    const selectedAuthors = state.articles.appliedAuthorFilter;
    const sortingOrder = state.articles.sorting;
    const initialData = [...state.articles.data];
    const currentPage = state.articles.currentPage;
    switch (sortingOrder) {
      case "date-dsc":
        initialData.sort((a: any, b: any) => {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
        break;
      case "title-asc":
        initialData.sort((a: any, b: any) => {
          if (a.title > b.title) return 1;
          return -1;
        });
        break;
      case "title-dsc":
        initialData.sort((a: any, b: any) => {
          if (b.title > a.title) return 1;
          return -1;
        });
        break;
      default:
        initialData.sort((a: any, b: any) => {
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        });
    }
    // if no filter is selected
    if (selectedAuthors.length === 0) {
      if (selectedCategories.length === 0) {
        return initialData;
      }
    }

    // category wise filtering
    let categoryFilteredData = initialData;
    if (selectedCategories.length)
      categoryFilteredData = initialData.filter((d: any) => {
        return selectedCategories.indexOf(d.source) !== -1;
      });

    // author wise filtering
    let authorFilteredData = categoryFilteredData;
    if (selectedAuthors.length)
      authorFilteredData = categoryFilteredData.filter((d: any) => {
        return selectedAuthors.indexOf(d.author) !== -1;
      });

    // pagination
    // const finalData = authorFilteredData.filter((d: any, index: number) => {
    //   console.log(index);
    //   let startingIndex = (currentPage - 1) * 5;

    //   return index >= startingIndex && index <= startingIndex + 5;
    // });

    // return finalData;
    return authorFilteredData;
  });

  useEffect(() => {
    dispatch(fetchArtices());
  }, [dispatch]);

  const renderedItems =
    articles &&
    articles.map((article: any) => {
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
                }}
                src={url}
                alt="img"
              />
            </div>
            <div>
              <div className="date-source-container">
                <div>{new Date(article.date).toDateString()}</div>
                <div>{article.source}</div>
              </div>

              <div>
                <h2 dangerouslySetInnerHTML={{ __html: article.title }}></h2>
              </div>
            </div>
          </div>
          <div
            style={{ width: "100%" }}
            dangerouslySetInnerHTML={{ __html: article.body }}
          ></div>
          <div>{article.author}</div>
          <hr />
        </div>
      );
    });

  return <div>{renderedItems}</div>;
}
