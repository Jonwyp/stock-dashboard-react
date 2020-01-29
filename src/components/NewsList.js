import React from "react";
import NewsArticle from "./NewsArticle";

const NewsList = ({ newsData }) => {
  return (
    <div>
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
