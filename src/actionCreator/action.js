export function setArticles() {
  return dispatch => {
    fetch("https://conduit.productionready.io/api/articles")
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "GET_ARTICLES", data });
      });
  };
}

export function getTags() {
  return dispatch => {
    fetch("https://conduit.productionready.io/api/tags")
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "GET_TAGS", data });
      });
  };
}

export function getUser(user) {
  return {
    type: "CURRENT_USER"
  };
}
