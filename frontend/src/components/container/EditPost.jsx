import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';

import { handleEditPost } from 'store/actions/posts';
import DialogFullScreen from 'components/presentational/DialogFullScreen';

class EditPost extends Component {
  state = {
    title: '',
    body: '',
  };

  componentDidMount = () => {
    const { initTitle, initBody } = this.props;

    this.setState({
      title: initTitle,
      body: initBody,
    });
  }

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

  handleSave = () => {
    const { title, body } = this.state;
    const { handleClose, dispatch, id } = this.props;

    dispatch(handleEditPost(id, title, body));
    handleClose();
  }


  render() {
    const { title, body } = this.state;
    const { open, handleClose } = this.props;

    return (
      <DialogFullScreen
        title="Edit Post"
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
        </form>
      </DialogFullScreen>
    );
  }
}

EditPost.propTypes = {
  id: PropTypes.string.isRequired,
  initTitle: PropTypes.string.isRequired,
  initBody: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ posts }, { id }) => {
  const post = posts.find(currentPost => currentPost.id === id);

  return {
    initTitle: post.title,
    initBody: post.body,
  };
};

export default connect(mapStateToProps)(EditPost);
