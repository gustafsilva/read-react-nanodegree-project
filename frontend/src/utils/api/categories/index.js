import {
  BASE_API,
  headers,
  convertJSON,
  checkError,
  returnError,
} from '../utils';

export const fetchCategories = () => (
  fetch(`${BASE_API}/categories`, headers)
    .then(convertJSON)
    .then(checkError)
    .then(response => response.categories)
    .catch(returnError)
);

export const getPostFromCategory = category => (
  fetch(`${BASE_API}/${category}/posts`, headers)
    .then(convertJSON)
    .then(checkError)
    .catch(returnError)
);
