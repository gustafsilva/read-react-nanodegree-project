import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';


import categories from './categories';
import posts from './posts';
import comments from './comments';
import user from './user';

const reducers = combineReducers({
  categories,
  posts,
  comments,
  user,
  loadingBar: loadingBarReducer,
});

export default reducers;
