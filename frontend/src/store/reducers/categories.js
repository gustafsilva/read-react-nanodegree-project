import {
  GET_CATEGORIES,
} from '../actions/categories';

export const INIT_STATE = [];

const categories = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
};

export default categories;
