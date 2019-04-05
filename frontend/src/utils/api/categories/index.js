import { BASE_API, headers, convertJSON } from '../utils';

export const getCategories = () => (
  fetch(`${BASE_API}/categories`, headers)
    .then(convertJSON)
    .then(response => response.categories)
);

export const getPostFromCategory = category => (
  fetch(`${BASE_API}/${category}/posts`, headers)
    .then(convertJSON)
);
