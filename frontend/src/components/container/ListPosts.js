import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import { camelToTitle } from '@cahil/utils';

import NavListPosts from '../presentational/NavListPosts';
import PostThumbnail from './PostThumbnail';
import filterPosts from '../../utils';
import EditPostDialog from './EditPostDialog';

class ListPosts extends Component {
  state = {
    /** Flag that indicates which filter will be applied to the list of posts. */
    filterBy: 'votes',
    filterOrd: 'asc',
    /** ID of the post to be edited. */
    editPostId: null,
  };

  handleChangeFilterBy = (event) => { this.setState({ filterBy: event.target.value }); };

  handleChangeFilterOrd = (event) => { this.setState({ filterOrd: event.target.value }); };

  handleOpenEditPost = (editPostId) => { this.setState({ editPostId }); };

  handleCloseEditPost = () => { this.setState({ editPostId: null }); };

  render() {
    const {
      filterBy,
      filterOrd,
      editPostId,
      openEditPost,
    } = this.state;
    const {
      posts,
      categoryFilter,
      postLinked,
      categories,
    } = this.props;

    const categorySearched = categories.filter(category => category.name === categoryFilter);
    if (categoryFilter !== '' && categorySearched.length <= 0) {
      return <Typography variant="overline">Category not found.</Typography>;
    }

    const filteredPosts = filterPosts(posts, categoryFilter, filterBy, filterOrd);

    return (
      <Grid container>
        <NavListPosts
          filter={filterBy}
          handleChangeFilter={this.handleChangeFilterBy}
          title={camelToTitle(`Posts ${categoryFilter}`)}
          filterOrd={filterOrd}
          handleChangeFilterOrd={this.handleChangeFilterOrd}
        />

        <Grid container direction="row">
          {filteredPosts.map(post => (
            <PostThumbnail
              key={post.id}
              id={post.id}
              width={350}
              handleOpenDialogEdit={this.handleOpenEditPost}
              handleCloseDialogEdit={this.handleCloseEditPost}
              postLinked={postLinked}
            />
          ))}
          {filteredPosts.length <= 0 && (
            <Typography variant="overline">No posts found.</Typography>
          )}
        </Grid>

        {editPostId !== null && (
          <EditPostDialog
            id={editPostId}
            isOpenDialog={openEditPost !== null}
            handleCloseDialog={this.handleCloseEditPost}
          />
        )}
      </Grid>
    );
  }
}

ListPosts.defaultProps = {
  posts: {},
  categoryFilter: '',
  postLinked: false,
};

ListPosts.propTypes = {
  /** All posts available. */
  posts: PropTypes.arrayOf(PropTypes.object),
  /** Category specific to filter the posts. */
  categoryFilter: PropTypes.string,
  postLinked: PropTypes.bool,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ posts, categories }) => ({
  posts,
  categories,
});

export default connect(mapStateToProps)(ListPosts);
