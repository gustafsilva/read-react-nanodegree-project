import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import NewPostDialog from '../NewPostDialog';
import NavBar from '../../presentational/NavBar';

class Header extends Component {
  state = {
    /** Element representing category menu. */
    menuCategoriesAnchorEl: null,
    /** Element representing category mobile */
    menuMobileAnchorEl: null,
    /** Flag that indicates whether dialog for new post is open. */
    isOpenDialogNewPost: false,
  };

  handleMenuCategoriesOpen = (event) => {
    this.setState({ menuCategoriesAnchorEl: event.currentTarget });
  };

  handleMenuCategoriesClose = () => {
    this.setState({ menuCategoriesAnchorEl: null });
    this.setState({ menuMobileAnchorEl: null });
  };

  handleMenuMobileOpen = (event) => { this.setState({ menuMobileAnchorEl: event.currentTarget }); };

  handleNewPostDialogOpen = () => {
    this.handleMenuCategoriesClose();

    this.setState({ isOpenDialogNewPost: true });
  };

  handleNewPostDialogClose = () => { this.setState({ isOpenDialogNewPost: false }); };

  render() {
    const { menuCategoriesAnchorEl, menuMobileAnchorEl, isOpenDialogNewPost } = this.state;
    const { categories } = this.props;

    return (
      <Fragment>
        <NavBar
          categories={categories}
          menuCategoriesAnchorEl={menuCategoriesAnchorEl}
          menuMobileAnchorEl={menuMobileAnchorEl}
          handleMenuOpen={this.handleMenuCategoriesOpen}
          handleMenuClose={this.handleMenuCategoriesClose}
          handleMobileMenuOpen={this.handleMenuMobileOpen}
          handleNewPostDialogOpen={this.handleNewPostDialogOpen}
        />
        <NewPostDialog
          open={isOpenDialogNewPost}
          handleClose={this.handleNewPostDialogClose}
        />
      </Fragment>
    );
  }
}

Header.propTypes = {
  /** All categories available. */
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ categories }) => ({
  categories,
});

export default connect(mapStateToProps)(Header);
