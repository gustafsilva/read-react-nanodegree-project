import {
  BASE_API,
  headers,
  convertJSON,
  generateUID,
  checkError,
  returnError,
} from '../utils';

export const fetchPosts = () => (
  fetch(`${BASE_API}/posts`, headers)
    .then(convertJSON)
    .then(checkError)
    .catch(returnError)
);

export const getPost = id => (
  fetch(`${BASE_API}/posts/${id}`, headers)
    .then(convertJSON)
    .then(checkError)
    .catch(returnError)
);

export const addPost = (title, body, author, category) => {
  const id = generateUID();
  const timestamp = Date.now();

  if ((typeof title !== 'string' || title.length <= 0)
    || (typeof body !== 'string' || body.length <= 0)
    || (typeof author !== 'string' || author.length <= 0)
    || (typeof category !== 'string' || category.length <= 0)) {
    return new Promise((res) => {
      res(null);
    });
  }

  const newPost = JSON.stringify({
    id,
    title,
    body,
    author,
    category,
    timestamp,
  });

  return fetch(`${BASE_API}/posts`, { ...headers, method: 'POST', body: newPost })
    .then(convertJSON)
    .then(checkError)
    .catch(returnError);
};

export const votePost = (id, option) => {
  const vote = JSON.stringify({
    option,
  });

  return fetch(`${BASE_API}/posts/${id}`, { ...headers, method: 'POST', body: vote })
    .then(convertJSON)
    .then(checkError)
    .catch(returnError);
};

export const editPost = (id, title, body) => {
  const post = JSON.stringify({
    title,
    body,
  });

  return fetch(`${BASE_API}/posts/${id}`, { ...headers, method: 'PUT', body: post })
    .then(convertJSON)
    .then(checkError)
    .catch(returnError);
};

export const deletePost = id => (
  fetch(`${BASE_API}/posts/${id}`, { ...headers, method: 'DELETE' })
    .then(convertJSON)
    .then(checkError)
    .catch(returnError)
);
