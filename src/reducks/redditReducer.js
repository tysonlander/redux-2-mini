import axios from 'axios'

const initialState = {
  loading: false,
  articles: []
}

const REQUEST_ARTICLES = 'REQUEST_ARTICLES';

export const requestArticles = () => {
  const articles = axios
  .get('/api/reddit')
  .then((res) => res.data)
  return{
    type: REQUEST_ARTICLES,
    payload: articles
  }
}

function redditReducer(state = initialState, action){
  switch(action.type){
    case REQUEST_ARTICLES + '_PENDING':
      return {...state, loading: true}
    case REQUEST_ARTICLES + '_FULFILLED':
      return {loading: false, articles: action.payload}
    case REQUEST_ARTICLES + '_REJECTED':
      return {...state, loading: false}
    default:
      return state;
  }
}

export default redditReducer;