import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Tag = props => {
  const [tagArticles, setTagArticles] = useState([]);

  useEffect(() => {
    const tag = props.match.params.tag;
    fetch(`https://conduit.productionready.io/api/articles?tag=${tag}`)
      .then(res => res.json())
      .then(data => setTagArticles(data.articles));
  });

  return (
    <div className="tag-articles">
      <div className="hero">
        <div className="hero-description">
          <h1>Conduit</h1>
          <span>A place to share your knowledge.</span>
        </div>
      </div>
      <ul>
        <h3>#{props.match.params.tag}</h3>
        {tagArticles &&
          tagArticles.map((article, i) => (
            <li key={i}>
              <div className="user">
                <img src={article.author.image} alt="user" />
                <Link to={`/${article.author.username}`}>
                  {article.author.username}
                </Link>
              </div>
              <span className="date">{article.createdAt}</span>
              <h3>{article.title}</h3>
              <span className="description">{article.description}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Tag;
