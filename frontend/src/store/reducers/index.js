import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import { reducer as notifications } from 'react-notification-system-redux';


import categories from './categories';
import posts from './posts';
import comments from './comments';
import user from './user';

const reducers = combineReducers({
  categories,
  posts,
  comments,
  user,
  notifications,
  loadingBar: loadingBarReducer,
});

export default reducers;
