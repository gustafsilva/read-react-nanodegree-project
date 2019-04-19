import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';
import { error, info } from 'react-notification-system-redux';

import { handleEditComment } from '../../store/actions/comments';
import DialogFullScreen from '../presentational/DialogFullScreen';
import { createNotificationError } from '../../utils/notifications';

class EditCommentDialog extends Component {
  state = {
    body: '',
  };

  componentDidMount = () => {
    const { bodyStoredInDatabase } = this.props;

    this.setState({
      body: bodyStoredInDatabase,
    });
  };

  changeBody = (event) => { this.setState({ body: event.target.value }); };

  handleSave = () => {
    const { body } = this.state;
    const {
      id,
      dispatch,
      handleCloseDialog,
      bodyStoredInDatabase,
    } = this.props;

    if (body.length > 0) {
      // If all fields are filled in.
      if (body !== bodyStoredInDatabase) {
        // If there is any change in the fields.
        dispatch(handleEditComment(id, body));
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
    const { body } = this.state;
    const { isOpenDialog, handleCloseDialog } = this.props;

    if (body === undefined) {
      return false;
    }

    return (
      <DialogFullScreen
        title="Edit Comment"
        isOpen={isOpenDialog}
        handleClose={handleCloseDialog}
        handleDone={this.handleSave}
      >
        <form noValidate autoComplete="off">
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
EditCommentDialog.propTypes = {
  /** ID of the post being edited. */
  id: PropTypes.string.isRequired,
  /** Body of the post stored in the database before editing. */
  bodyStoredInDatabase: PropTypes.string.isRequired,
  /** Flag that indicates whether the post edit dialog screen is open. */
  isOpenDialog: PropTypes.bool.isRequired,
  /** Function responsible for closing post editing dialog. */
  handleCloseDialog: PropTypes.func.isRequired,
  /** Function responsible for dispatch of shared (redux). */
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ comments }, { id }) => {
  const comment = comments.find(currentComment => currentComment.id === id);

  return {
    bodyStoredInDatabase: comment.body,
  };
};

export default connect(mapStateToProps)(EditCommentDialog);
