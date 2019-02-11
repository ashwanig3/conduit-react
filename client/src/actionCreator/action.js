const url = "http://localhost:8000/api";

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

export function signupUser(data) {
  console.log(data);
  return dispatch => {
    fetch(`${url}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };
}
