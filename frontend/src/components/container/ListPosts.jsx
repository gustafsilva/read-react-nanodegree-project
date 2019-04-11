import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import camelToTitle from '@cahil/utils/transforms/camelToTitle';

import NavListPosts from 'components/presentational/NavListPosts';
import PostThumbnail from 'components/container/PostThumbnail';
import EditPost from 'components/container/EditPost';

class ListPosts extends Component {
  state = {
    filter: 'votes',
    editPostId: null,
  };

  handleChangeFilter = (event) => {
    const filter = event.target.value;

    this.setState({
      filter,
    });
  }

  handleOpenEditPost = (editPostId) => { this.setState({ editPostId }); }

  handleCloseEditPost = () => { this.setState({ editPostId: null }); }

  render() {
    const { filter, editPostId, openEditPost } = this.state;
    const { posts, category } = this.props;
    let postsFilted = posts.filter(post => post.deleted === false);

    if (category !== '') {
      postsFilted = postsFilted.filter(post => post.category === category);
    }

    postsFilted = filter === 'votes'
      ? postsFilted.sort((a, b) => b.voteScore - a.voteScore)
      : postsFilted.sort((a, b) => b.timestamp - a.timestamp);

    return (
      <Grid container>
        <NavListPosts
          filter={filter}
          handleChangeFilter={this.handleChangeFilter}
          title={camelToTitle(`Posts ${category}`)}
        />

        <Grid container direction="row">
          {postsFilted.map(post => (
            <PostThumbnail
              key={post.id}
              id={post.id}
              width={350}
              handleOpenDialogEdit={this.handleOpenEditPost}
              handleCloseDialogEdit={this.handleCloseEditPost}
            />
          ))}
          {postsFilted.length <= 0 && (
            <Typography variant="overline">Nenhum post encontrado.</Typography>
          )}
        </Grid>

        {editPostId !== null && (
          <EditPost
            id={editPostId}
            open={openEditPost !== null}
            handleClose={this.handleCloseEditPost}
          />
        )}
      </Grid>
    );
  }
}

ListPosts.defaultProps = {
  posts: {},
  category: '',
};

ListPosts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  category: PropTypes.string,
};

const mapStateToProps = ({ posts }) => ({
  posts,
});

export default connect(mapStateToProps)(ListPosts);
