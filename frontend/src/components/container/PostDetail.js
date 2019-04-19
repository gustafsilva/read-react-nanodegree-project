import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PostThumbnail from './PostThumbnail';
import EditPost from './EditPostDialog';

class PostDetail extends Component {
  state = {
    isOpenEditDialog: false,
  };

  handleOpenEditDialog = () => { this.setState({ isOpenEditDialog: true }); };

  handleCloseEditDialog = () => { this.setState({ isOpenEditDialog: false }); };

  render() {
    const { isOpenEditDialog } = this.state;
    const { id } = this.props;

    return (
      <div>
        <PostThumbnail id={id} handleOpenDialogEdit={this.handleOpenEditDialog} />
        <EditPost
          id={id}
          isOpenDialog={isOpenEditDialog}
          handleCloseDialog={this.handleCloseEditDialog}
        />
      </div>
    );
  }
}

PostDetail.propTypes = {
  // todo: traduzir comentários.
  /** ID do post a ser renderizado. */
  id: PropTypes.string.isRequired,
};

export default connect()(PostDetail);
