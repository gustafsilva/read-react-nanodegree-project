import {
  GET_POSTS,
  getPosts,
} from 'store/actions/posts';

describe('[store/actions] posts', () => {
  test('[getPosts] criando ação para receber posts', () => {
    const posts = [];
    const actionExpected = { type: GET_POSTS, posts };

    expect(getPosts(posts)).toEqual(actionExpected);
  });
});
