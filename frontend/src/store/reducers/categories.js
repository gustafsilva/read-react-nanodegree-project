import {
  GET_CATEGORIES,
} from 'store/actions/categories';

const categories = (state = [], action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        ...action.categories,
      };
    default:
      return state;
  }
}

export default categories;