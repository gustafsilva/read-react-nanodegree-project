import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import camelToTitle from '@cahil/utils/transforms/camelToTitle';
import {
  TextField,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  FilledInput,
} from '@material-ui/core';
import { error } from 'react-notification-system-redux';

import { handleSavePost } from '../../store/actions/posts';
import DialogFullScreen from '../presentational/DialogFullScreen';
import { createNotificationError } from '../../utils/notifications';

class NewPostDialog extends Component {
  state = {
    title: '',
    body: '',
    category: '',
  };

  resetState = () => { this.setState({ title: '', body: '', category: '' }); };

  changeTitle = (event) => { this.setState({ title: event.target.value }); };

  changeBody = (event) => { this.setState({ body: event.target.value }); };

  changeCategory = (event) => { this.setState({ category: event.target.value }); };

  handleSave = () => {
    const { title, body, category } = this.state;
    const { handleClose, dispatch, author } = this.props;

    if (title === '' || body === '' || category === '') {
      const notificationErrorOption = createNotificationError('No field should be empty.');
      dispatch(error(notificationErrorOption));
    } else {
      dispatch(handleSavePost(title, body, author, category));
      handleClose();
      this.resetState();
    }
  };

  render() {
    const { title, body, category } = this.state;
    const { open, handleClose, categories } = this.props;
    return (
      <DialogFullScreen
        title="New Post"
        isOpen={open}
        handleClose={handleClose}
        handleDone={this.handleSave}
      >
        <form noValidate autoComplete="off">
          <TextField
            id="filled-title"
            label="Title"
            value={title}
            onChange={this.changeTitle}
            margin="normal"
            variant="filled"
            fullWidth
            required
          />

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

          <FormControl fullWidth margin="normal">
            <InputLabel>Category</InputLabel>
            <Select
              value={category}
              onChange={this.changeCategory}
              input={<FilledInput name="category" />}
              variant="filled"
              label="Category"
              required
            >
              {categories.map(categoryOption => (
                <MenuItem key={categoryOption.path} value={categoryOption.path}>
                  {camelToTitle(categoryOption.name)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </form>
      </DialogFullScreen>
    );
  }
}

NewPostDialog.propTypes = {
  /** All categories for available posts. */
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  /** User that is adding new post. */
  author: PropTypes.string.isRequired,
  /** Flag that indicates whether the post edit dialog screen is open. */
  open: PropTypes.bool.isRequired,
  /** Function responsible for closing post editing dialog. */
  handleClose: PropTypes.func.isRequired,
  /** Function responsible for dispatching an action for redux. */
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ categories, user }) => ({
  categories,
  author: user,
});

export default connect(mapStateToProps)(NewPostDialog);
