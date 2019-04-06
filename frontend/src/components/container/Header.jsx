import React, { Component } from 'react';

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
    console.log('implentar janela de novo post');
  }

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const categories = [
      {
        name: 'react',
        path: 'react',
      },
      {
        name: 'redux',
        path: 'redux',
      },
    ];

    return (
      <header>
        <NavBar
          categories={categories}
          anchorEl={anchorEl}
          mobileMoreAnchorEl={mobileMoreAnchorEl}
          handleMenuOpen={this.handleMenuOpen}
          handleMenuClose={this.handleMenuClose}
          handleMobileMenuOpen={this.handleMobileMenuOpen}
          handleNewPostSectionOpen={this.handleNewPostSectionOpen}
        />
      </header>
    );
  }
}

export default Header;
