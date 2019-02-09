import React, { useState, useEffect } from "react";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://conduit.productionready.io/api/articles")
      .then(res => res.json())
      .then(data => setArticles(data.articles));
  });
  return <div className="articles-container" />;
};

export default Articles;
