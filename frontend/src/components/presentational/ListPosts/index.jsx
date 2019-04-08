import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
} from '@material-ui/core';

import Post from './Post';

const ListPosts = ({ posts }) => {

  return (
    <Grid container direction="row">
      {posts.map(post => (
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          body={post.body}
          commentCount={post.commentCount}
          voteScore={post.voteScore}
        />
      ))}
    </Grid>
  );
};

ListPosts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListPosts;
