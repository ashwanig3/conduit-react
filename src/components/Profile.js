import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Profile = props => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const user = props.match.params.user;
    fetch(`https://conduit.productionready.io/api/articles?author=${user}`)
      .then(res => res.json())
      .then(data => setUserData(data.articles));
  });

  return (
    <div className="profile">
      <div className="profile-hero">
        {userData.length ? (
          <div className="user-info">
            <img
              className="user-img"
              src={userData[0].author.image}
              alt="user"
            />
            <span>{props.match.params.user}</span>
          </div>
        ) : (
          <div />
        )}
        <button className="follow-btn">
          +Follow {props.match.params.user}
        </button>
      </div>
      <ul>
        {userData &&
          userData.map((article, i) => (
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

export default Profile;
