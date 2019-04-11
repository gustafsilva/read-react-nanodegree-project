import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import NewPost from 'components/container/NewPost';
import NavBar from 'components/presentational/NavBar';


class Header extends Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
    openNewPostDialog: false,
  };

  handleMenuOpen = (event) => { this.setState({ anchorEl: event.currentTarget }); };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.setState({ mobileMoreAnchorEl: null });
  };

  handleMobileMenuOpen = (event) => { this.setState({ mobileMoreAnchorEl: event.currentTarget }); };

  handleNewPostDialogOpen = () => {
    this.handleMenuClose();

    this.setState({ openNewPostDialog: true });
  };

  handleNewPostDialogClose = () => { this.setState({ openNewPostDialog: false }); };

  render() {
    const { anchorEl, mobileMoreAnchorEl, openNewPostDialog } = this.state;
    const { categories } = this.props;

    return (
      <Fragment>
        <NavBar
          categories={categories}
          anchorEl={anchorEl}
          mobileMoreAnchorEl={mobileMoreAnchorEl}
          handleMenuOpen={this.handleMenuOpen}
          handleMenuClose={this.handleMenuClose}
          handleMobileMenuOpen={this.handleMobileMenuOpen}
          handleNewPostDialogOpen={this.handleNewPostDialogOpen}
        />
        <NewPost
          open={openNewPostDialog}
          handleClose={this.handleNewPostDialogClose}
        />
      </Fragment>
    );
  }
}

Header.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ categories }) => ({
  categories,
});

export default connect(mapStateToProps)(Header);
