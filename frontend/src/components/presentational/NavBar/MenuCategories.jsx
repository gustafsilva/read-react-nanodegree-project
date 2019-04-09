import React from 'react';
import PropTypes from 'prop-types';
import { Menu, MenuItem } from '@material-ui/core';
import camelToTitle from '@cahil/utils/transforms/camelToTitle';

import Link from 'components/hocs/Link';

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
        <Link to={`/${category.path}`} key={category.path} color="black">
          <MenuItem onClick={handleMenuClose}>
            {camelToTitle(category.name)}
          </MenuItem>
        </Link>
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
