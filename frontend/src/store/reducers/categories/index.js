import {
  GET_CATEGORIES,
} from 'store/actions/categories';

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
