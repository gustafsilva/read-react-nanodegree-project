import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';


import categories from './categories';
import posts from './posts';

const reducers = combineReducers({
  categories,
  posts,
  loadingBar: loadingBarReducer,
});

export default reducers;
