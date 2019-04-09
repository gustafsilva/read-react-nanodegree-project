import {
  BASE_API,
  headers,
  convertJSON,
  generateUID,
  checkError,
  returnError,
} from '../utils';

export const fetchCommentsFromPost = postId => (
  fetch(`${BASE_API}/posts/${postId}/comments`, headers)
    .then(convertJSON)
    .then(checkError)
    .catch(returnError)
);

export const fetchComment = id => (
  fetch(`${BASE_API}/comments/${id}`, headers)
    .then(convertJSON)
    .then(checkError)
    .catch(returnError)
);

export const addCommentToPost = (body, author, parentId) => {
  const id = generateUID();
  const timestamp = Date.now();
  const comment = JSON.stringify({
    id,
    timestamp,
    body,
    author,
    parentId,
  });

  return fetch(`${BASE_API}/comments`, { ...headers, method: 'POST', body: comment })
    .then(convertJSON)
    .then(checkError)
    .catch(returnError);
};

export const voteComment = (id, option) => {
  const vote = JSON.stringify({ option });

  return fetch(`${BASE_API}/comments/${id}`, { ...headers, method: 'POST', body: vote })
    .then(convertJSON)
    .then(checkError)
    .catch(returnError);
};

export const editComment = (id, body) => {
  const comment = JSON.stringify({
    timestamp: Date.now(),
    body,
  });

  return fetch(`${BASE_API}/comments/${id}`, { ...headers, method: 'PUT', body: comment })
    .then(convertJSON)
    .then(checkError)
    .catch(returnError);
};

export const deleteComment = id => (
  fetch(`${BASE_API}/comments/${id}`, { ...headers, method: 'DELETE' })
    .then(convertJSON)
    .then(checkError)
    .catch(returnError)
);
