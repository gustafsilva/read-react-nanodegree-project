import React from 'react';
import PropTypes from 'prop-types';
import { Menu, MenuItem, IconButton } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';

import Link from '../../hocs/Link';

const MenuMobile = (props) => {
  const {
    mobileMoreAnchorEl,
    isMobileMenuOpen,
    handleMenuClose,
    handleMenuOpen,
    handleOpenDialogNewPost,
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
      <MenuItem onClick={handleOpenDialogNewPost}>
        <IconButton color="inherit">
          <AddIcon />
        </IconButton>
        <p>New Post</p>
      </MenuItem>
    </Menu>
  );
};

MenuMobile.defaultProps = {
  mobileMoreAnchorEl: null,
};

MenuMobile.propTypes = {
  /** Component where menu will be rendered. */
  mobileMoreAnchorEl: PropTypes.objectOf(PropTypes.object),
  /** Flag indicating whether menu mobile is open. */
  isMobileMenuOpen: PropTypes.bool.isRequired,
  /** Function responsible for opening menu. */
  handleMenuOpen: PropTypes.func.isRequired,
  /** Function responsible for closing menu. */
  handleMenuClose: PropTypes.func.isRequired,
  /** Function responsible for opening dialog for new post. */
  handleOpenDialogNewPost: PropTypes.func.isRequired,
};

export default MenuMobile;
