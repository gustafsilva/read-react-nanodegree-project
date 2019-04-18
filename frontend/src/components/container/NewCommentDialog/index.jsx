import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';

import DialogFullScreen from '../../presentational/DialogFullScreen';
import { handleAddComment } from '../../../store/actions/comments';

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
      alert('O campo não deve ser vázio');
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
};

export default connect()(NewCommentDialog);
