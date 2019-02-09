import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { relative } from "path";
import { getUser } from "../actionCreator/action";
import { Link } from "react-router-dom";

const Articles = props => {
  const [articles, setArticles] = useState([]);
  const { tags } = props;

  useEffect(() => {
    fetch("https://conduit.productionready.io/api/articles")
      .then(res => res.json())
      .then(data => setArticles(data.articles));
  });
  const handleClick = tag => {
    props.dispatch(getUser(tag));
  };
  //   console.log(props.tags);
  return (
    <div>
      <div className="hero">
        <div className="hero-description">
          <h1>Conduit</h1>
          <span>A place to share your knowledge.</span>
        </div>
      </div>
      <div className="articles-container">
        <ul>
          {articles &&
            articles.map((article, i) => (
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
        <div className="tags-container">
          <div className="tags">
            <span className="tag-heading">Popular tags</span>
            <div className="tag-wrapper">
              {tags &&
                tags.map(tag => (
                  <span className="tag-item" onClick={() => handleClick(tag)}>
                    {tag}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    tags: state.tags
  };
};
export default connect(mapStateToProps)(Articles);
