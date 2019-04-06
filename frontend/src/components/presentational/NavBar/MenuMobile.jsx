import React from 'react';
import PropTypes from 'prop-types';
import { Menu, MenuItem, IconButton } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';

import Link from 'components/hocs/Link';


const MenuMobile = (props) => {
  const {
    mobileMoreAnchorEl,
    isMobileMenuOpen,
    handleMenuClose,
    handleMenuOpen,
    handleNewPostSectionOpen,
  } = props;

  return (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMenuClose}
    >
      <Link to="/" color="black">
        <MenuItem onClick={handleMenuClose}>
          <IconButton color="inherit">
            <HomeIcon />
          </IconButton>
          <p>Home</p>
        </MenuItem>
      </Link>
      <MenuItem onClick={handleMenuOpen}>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <p>Categories</p>
      </MenuItem>
      <MenuItem onClick={handleNewPostSectionOpen}>
        <IconButton color="inherit">
          <AddIcon />
        </IconButton>
        <p>New Post</p>
      </MenuItem>
    </Menu>
  );
}

MenuMobile.defaultProps = {
  mobileMoreAnchorEl: null,
};

MenuMobile.propTypes = {
  mobileMoreAnchorEl: PropTypes.objectOf(PropTypes.object),
  isMobileMenuOpen: PropTypes.bool.isRequired,
  handleMenuOpen: PropTypes.func.isRequired,
  handleMenuClose: PropTypes.func.isRequired,
  handleNewPostSectionOpen: PropTypes.func.isRequired,
};

export default MenuMobile;
