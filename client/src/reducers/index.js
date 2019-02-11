const initState = {
  articles: [],
  tags: []
};

export default function rootReducer(state = initState, action) {
  switch (action.type) {
    case "GET_ARTICLES": {
      return {
        ...state,
        articles: action.data.articles
      };
    }
    case "GET_TAGS": {
      return {
        ...state,
        tags: action.data.tags
      };
    }
    default:
      return state;
  }
}
