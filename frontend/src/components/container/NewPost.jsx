import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import camelToTitle from '@cahil/utils/transforms/camelToTitle';
import { TextField } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FilledInput from '@material-ui/core/FilledInput';

import { handleSavePost } from 'store/actions/posts';
import DialogFullScreen from 'components/presentational/DialogFullScreen';

class NewPost extends Component {
  state = {
    title: '',
    body: '',
    category: '',
  };

  changeTitle = (event) => {
    const { value } = event.target;

    this.setState({
      title: value,
    });
  }

  changeBody = (event) => {
    const { value } = event.target;

    this.setState({
      body: value,
    });
  }

  changeCategory = (event) => {
    const { value } = event.target;

    this.setState({
      category: value,
    });
  }

  handleSave = () => {
    const { title, body, category } = this.state;
    const {
      handleClose,
      dispatch,
      author,
    } = this.props;

    dispatch(handleSavePost(title, body, author, category));
    handleClose();
  }


  render() {
    const { title, body, category } = this.state;
    const { open, handleClose, categories } = this.props;
    return (
      <DialogFullScreen
        title="New Post"
        open={open}
        handleClose={handleClose}
        handleSave={this.handleSave}
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
          />

          <TextField
            id="filled-body"
            label="Body"
            value={body}
            onChange={this.changeBody}
            margin="normal"
            variant="filled"
            fullWidth
          />

          <FormControl fullWidth margin="normal">
            <InputLabel>Category</InputLabel>
            <Select
              value={category}
              onChange={this.changeCategory}
              input={<FilledInput name="age" />}
              variant="filled"
              label="Category"
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

NewPost.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  author: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ categories, user }) => ({
  categories,
  author: user,
});

export default connect(mapStateToProps)(NewPost);
