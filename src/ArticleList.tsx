/* eslint-disable jsx-a11y/alt-text */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArtices } from "./store";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { url } from "./defaultImg";

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
          onClick={() => window.open(article.url, "_blank")}
          key={article.id}
        >
          <div>{article.date}</div>
          <div>{article.source}</div>
          <div>
            <img className="size-16" src={url} alt="img" />
          </div>
          <div>
            {article.title}
          </div>
          <div>{article.body}</div>
        </div>
      );
    });

  return <div>{renderedItems}</div>;
}
