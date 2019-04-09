import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import NavBar from 'components/presentational/NavBar';

class Header extends Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
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
    // eslint-disable-next-line no-console
    console.log('implentar janela de novo post');
  }

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { categories } = this.props;

    return (
      <NavBar
        categories={categories}
        anchorEl={anchorEl}
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        handleMenuOpen={this.handleMenuOpen}
        handleMenuClose={this.handleMenuClose}
        handleMobileMenuOpen={this.handleMobileMenuOpen}
        handleNewPostSectionOpen={this.handleNewPostSectionOpen}
      />
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
