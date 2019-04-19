import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';
import { error, info } from 'react-notification-system-redux';

import { handleEditPost } from '../../store/actions/posts';
import DialogFullScreen from '../presentational/DialogFullScreen';
import { createNotificationError } from '../../utils/notifications';

class EditPostDialog extends Component {
  state = {
    title: '',
    body: '',
  };

  componentDidMount = () => {
    const { titleStoredInDatabase, bodyStoredInDatabase } = this.props;

    this.setState({
      title: titleStoredInDatabase,
      body: bodyStoredInDatabase,
    });
  };

  changeTitle = (event) => { this.setState({ title: event.target.value }); };

  changeBody = (event) => { this.setState({ body: event.target.value }); };

  handleSave = () => {
    const { title, body } = this.state;
    const {
      id,
      dispatch,
      handleCloseDialog,
      titleStoredInDatabase,
      bodyStoredInDatabase,
    } = this.props;

    if (title.length > 0 && body.length > 0) {
      // If all fields are filled in.
      if (title !== titleStoredInDatabase || body !== bodyStoredInDatabase) {
        // If there is any change in the fields.
        dispatch(handleEditPost(id, title, body));
      } else {
        const notificationInfoOption = { title: 'No data changed.' };
        dispatch(info(notificationInfoOption));
      }
      handleCloseDialog();
    } else {
      const notificationErrorOption = createNotificationError('All fields are mandatory');
      dispatch(error(notificationErrorOption));
    }
  };

  render() {
    const { title, body } = this.state;
    const { isOpenDialog, handleCloseDialog } = this.props;

    if (title === undefined || body === undefined) {
      return false;
    }

    return (
      <DialogFullScreen
        title="Edit Post"
        isOpen={isOpenDialog}
        handleClose={handleCloseDialog}
        handleDone={this.handleSave}
      >
        <form noValidate autoComplete="off">
          <TextField
            label="Title"
            value={title}
            onChange={this.changeTitle}
            margin="normal"
            variant="filled"
            fullWidth
            required
          />

          <TextField
            label="Body"
            value={body}
            onChange={this.changeBody}
            margin="normal"
            variant="filled"
            fullWidth
            required
          />
        </form>
      </DialogFullScreen>
    );
  }
}

EditPostDialog.propTypes = {
  /** ID of the post being edited. */
  id: PropTypes.string.isRequired,
  /** Title of the post stored in the database before editing. */
  titleStoredInDatabase: PropTypes.string.isRequired,
  /** Body of the post stored in the database before editing. */
  bodyStoredInDatabase: PropTypes.string.isRequired,
  /** Flag that indicates whether the post edit dialog screen is open. */
  isOpenDialog: PropTypes.bool.isRequired,
  /** Function responsible for closing post editing dialog. */
  handleCloseDialog: PropTypes.func.isRequired,
  /** Function responsible for dispatch of shared (redux). */
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ posts }, { id }) => {
  const post = posts.find(currentPost => currentPost.id === id);

  return {
    titleStoredInDatabase: post.title,
    bodyStoredInDatabase: post.body,
  };
};

export default connect(mapStateToProps)(EditPostDialog);
