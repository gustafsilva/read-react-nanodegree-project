import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';


import categories from './categories';
import posts from './posts';
import user from './user';

const reducers = combineReducers({
  categories,
  posts,
  user,
  loadingBar: loadingBarReducer,
});

export default reducers;
