import React from "react";
import "./article.css";

function Article({ imgURL, date, title }) {
  return (
    <div className="gpt3__research-container_article">
      <div className="gpt3__research-container_article-image">
        <img src={imgURL} alt="research_image" />
      </div>
      <div className="gpt3__research-container_article-content">
        <div>
        <h3>{title}</h3>
          <p>{date}</p>
          
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
}

export default Article;
