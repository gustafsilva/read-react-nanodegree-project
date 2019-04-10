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

  handleMenuOpen = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.setState({ mobileMoreAnchorEl: null });
  };

  handleMobileMenuOpen = (event) => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleNewPostSectionOpen = () => {
    this.handleMenuClose();

    this.setState({ openNewPostDialog: true });
  }

  handleNewPostSectionClose = () => { this.setState({ openNewPostDialog: false }); }

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
          handleNewPostSectionOpen={this.handleNewPostSectionOpen}
        />
        <NewPost
          open={openNewPostDialog}
          handleClose={this.handleNewPostSectionClose}
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
