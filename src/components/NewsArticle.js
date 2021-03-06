import React from "react";

const NewsArticle = ({
  datetime, //= "1545215400000",
  headline, //= "Voice Search Technology Creates A New Paradigm For Marketers",
  source, //= "Benzinga",
  url, //= "https://cloud.iexapis.com/stable/news/article/8348646549980454",
  summary //= "<p>Voice search is likely to grow by leap and bounds, with technological advancements leading to better adoption and fueling the growth cycle, according to Lindsay Boyajian, <a href=\"http://loupventures.com/how-the-future-of-voice-search-affects-marketers-today/\">a guest contributor at Loup Ventu..."
}) => {
  return (
    <div>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <h3 aria-label="news headline">{headline}</h3>
      </a>
      <div>
        Source: <em>{source}</em>,{" "}
        {new Intl.DateTimeFormat("en-GB", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit"
        }).format(datetime)}
      </div>
      <div>
        <p>{summary}</p>
      </div>
    </div>
  );
};

export default NewsArticle;
