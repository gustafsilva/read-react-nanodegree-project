import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  withStyles,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import MoreVert from '@material-ui/icons/MoreVert';

import Link from '../../hocs/Link';
import MenuCategories from './MenuCategories';
import MenuMobile from './MenuMobile';

const styles = theme => ({
  root: {
    width: '100%',
  },
  navBar: {
    backgroundColor: '#315EE0',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'bl',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

const NavBar = (props) => {
  const {
    classes,
    categories,
    menuCategoriesAnchorEl,
    menuMobileAnchorEl,
    handleMenuOpen,
    handleMenuClose,
    handleMobileMenuOpen,
    handleNewPostDialogOpen,
  } = props;
  const isMenuOpen = Boolean(menuCategoriesAnchorEl);
  const isMobileMenuOpen = Boolean(menuMobileAnchorEl);

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navBar}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" color="inherit" noWrap>
            Readable React
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link to="/">
              <IconButton color="inherit">
                <HomeIcon />
              </IconButton>
            </Link>
            <IconButton
              aria-owns={isMenuOpen ? 'material-appbar' : undefined}
              aria-haspopup="true"
              onClick={handleMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <IconButton onClick={handleNewPostDialogOpen} color="inherit">
              <AddIcon />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit">
              <MoreVert />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <MenuCategories
        categories={categories}
        anchorEl={menuCategoriesAnchorEl}
        isMenuOpen={isMenuOpen}
        handleMenuClose={handleMenuClose}
      />
      <MenuMobile
        mobileMoreAnchorEl={menuMobileAnchorEl}
        isMobileMenuOpen={isMobileMenuOpen}
        handleMenuOpen={handleMenuOpen}
        handleMenuClose={handleMenuClose}
        handleOpenDialogNewPost={handleNewPostDialogOpen}
      />
    </div>
  );
};

NavBar.defaultProps = {
  menuCategoriesAnchorEl: null,
  menuMobileAnchorEl: null,
};

// todo: ajustar nomes de props que tem funções.
NavBar.propTypes = {
  /** Styles the components you ure to render. (material-ui). */
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  /** All available post categories. */
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  /** Element representing category menu. */
  menuCategoriesAnchorEl: PropTypes.objectOf(PropTypes.any),
  /** Element representing category mobile */
  menuMobileAnchorEl: PropTypes.objectOf(PropTypes.any),
  /** Function responsible for opening menu on desktop devices. */
  handleMenuOpen: PropTypes.func.isRequired,
  /** Function responsible for closing menu on desktop devices. */
  handleMenuClose: PropTypes.func.isRequired,
  /** Function responsible for opening menu on mobile devices. */
  handleMobileMenuOpen: PropTypes.func.isRequired,
  /** Function responsible for closing menu on mobile devices. */
  handleNewPostDialogOpen: PropTypes.func.isRequired,
};

export default withStyles(styles)(NavBar);
