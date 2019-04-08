import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';

import NavListPosts from 'components/presentational/NavListPosts';
import PostThumbnail from 'components/presentational/PostThumbnail';

class ListPosts extends Component {
  state = {
    filter: 'votes',
  };

  handleChangeFilter = (event) => {
    const filter = event.target.value;

    this.setState({
      filter,
    });
  }

  render() {
    const { filter } = this.state;
    const { posts } = this.props;

    let postsFilted = posts.filter(post => post.deleted === false);
    postsFilted = filter === 'votes'
      ? postsFilted.sort((a, b) => b.voteScore - a.voteScore)
      : postsFilted.sort((a, b) => b.timestamp - a.timestamp);

    return (
      <Grid container>
        <NavListPosts
          filter={filter}
          handleChangeFilter={this.handleChangeFilter}
        />

        <Grid container direction="row">
          {postsFilted.map(post => (
            <PostThumbnail
              key={post.id}
              title={post.title}
              author={post.author}
              body={post.body}
              commentCount={post.commentCount}
              voteScore={post.voteScore}
            />
          ))}
        </Grid>
      </Grid>
    );
  }
}

ListPosts.defaultProps = {
  posts: {},
};

ListPosts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = ({ posts }) => ({
  posts,
});

export default connect(mapStateToProps)(ListPosts);
