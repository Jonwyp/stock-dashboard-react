import React from "react";
import NewsArticle from "./NewsArticle";
import "./NewsList.css"

const NewsList = ({ newsData, enteredSymbol }) => {
  return (
    <div>
      <h2 className="newslist-header">Top news for {enteredSymbol}</h2>
      {newsData.map((news, index) => {
        return (
          <div key={index}>
            <hr />
            <NewsArticle {...news} />
          </div>
        );
      })}
    </div>
  );
};

export default NewsList;
