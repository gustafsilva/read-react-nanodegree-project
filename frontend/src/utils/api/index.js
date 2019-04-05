import {
  getCategories,
  getPostFromCategory,
} from './categories';
import {
  getCommentsFromPost,
  getComment,
  addCommentToPost,
  voteComment,
  editComment,
  deleteComment,
} from './comments';
import {
  getPosts,
  getPost,
  addPost,
  votePost,
  editPost,
  deletePost,
} from './posts';
import { ERROR_API } from './utils';

export default {
  ERROR_API,
  getCategories,
  getPostFromCategory,
  getCommentsFromPost,
  getComment,
  addCommentToPost,
  voteComment,
  editComment,
  deleteComment,
  getPosts,
  getPost,
  addPost,
  votePost,
  editPost,
  deletePost,
};
