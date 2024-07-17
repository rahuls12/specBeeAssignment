/* eslint-disable jsx-a11y/alt-text */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArtices } from "../store";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { url } from "../defaultImg";

export default function ArticleList() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const articles = useSelector((state: any) => {
    return state.articles.data;
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
                <div>{article.date}</div>
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
