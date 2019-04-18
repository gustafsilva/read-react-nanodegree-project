import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';
import { error } from 'react-notification-system-redux';

import DialogFullScreen from '../../presentational/DialogFullScreen';
import { handleAddComment } from '../../../store/actions/comments';
import { createNotificationError } from '../../../utils/notifications';

class NewCommentDialog extends Component {
  state = {
    body: '',
  };

  resetState = () => { this.setState({ body: '' }); };

  handleSave = () => {
    const { body } = this.state;
    const { handleClose, dispatch, postId } = this.props;

    if (body !== '') {
      dispatch(handleAddComment(body, postId));
      handleClose();
      this.resetState();
    } else {
      const notificationOptions = createNotificationError('The body field was empty.');
      dispatch(error(notificationOptions));
    }
  };

  changeBody = (event) => { this.setState({ body: event.target.value }); };

  render() {
    const { body } = this.state;
    const {
      open,
      handleClose,
    } = this.props;

    return (
      <DialogFullScreen
        title="New Comment"
        isOpen={open}
        handleClose={handleClose}
        handleDone={this.handleSave}
      >
        <form>
          <TextField
            id="filled-body"
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

NewCommentDialog.propTypes = {
  postId: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(NewCommentDialog);
