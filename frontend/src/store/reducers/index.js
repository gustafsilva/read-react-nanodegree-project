import { combineReducers } from 'redux';

import categories from './categories';
import posts from './posts';

const reducers = combineReducers({
  categories,
  posts,
});

export default reducers;