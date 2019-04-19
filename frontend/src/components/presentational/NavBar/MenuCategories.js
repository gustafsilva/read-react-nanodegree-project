import React from 'react';
import PropTypes from 'prop-types';
import { Menu, MenuItem } from '@material-ui/core';
import { camelToTitle } from '@cahil/utils';

import Link from '../../hocs/Link';

const MenuCategories = (props) => {
  const {
    categories,
    anchorEl,
    isMenuOpen,
    handleMenuClose,
  } = props;

  if (anchorEl === null) {
    return false;
  }

  return (
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
  );
};

MenuCategories.defaultProps = {
  anchorEl: null,
};

MenuCategories.propTypes = {
  /** Categories with their names and URL addresses. */
  categories: PropTypes.arrayOf(PropTypes.object),
  /** Component where menu will appear. */
  anchorEl: PropTypes.objectOf(PropTypes.object),
  /** Flag indicating whether menu is open. */
  isMenuOpen: PropTypes.bool.isRequired,
  /** Function responsible for closing menu. */
  handleMenuClose: PropTypes.func.isRequired,
};

export default MenuCategories;
