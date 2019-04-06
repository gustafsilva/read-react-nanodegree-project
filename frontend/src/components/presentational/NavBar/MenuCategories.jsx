import React from 'react';
import PropTypes from 'prop-types';
import { Menu, MenuItem } from '@material-ui/core';

const MenuCategories = ({ categories, anchorEl, isMenuOpen, handleMenuClose }) => (
  anchorEl !== null && (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose} disabled>Categories</MenuItem>
      {categories.map(category => (
        <MenuItem onClick={handleMenuClose} key={category.path}>{category.name}</MenuItem>
      ))}
    </Menu>
  )
);

MenuCategories.defaultProps = {
  anchorEl: null,
};

MenuCategories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  anchorEl: PropTypes.objectOf(PropTypes.object),
  isMenuOpen: PropTypes.bool.isRequired,
  handleMenuClose: PropTypes.func.isRequired,
};

export default MenuCategories;
