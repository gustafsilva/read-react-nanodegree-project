import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';

import NavListPosts from 'components/presentational/NavListPosts';
import List from 'components/presentational/ListPosts';


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

    return (
      <Grid container>
        <NavListPosts
          filter={filter}
          handleChangeFilter={this.handleChangeFilter}
        />

        <List posts={posts} />
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
