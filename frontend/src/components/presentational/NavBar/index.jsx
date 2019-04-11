import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  withStyles,
} from '@material-ui/core';
import {
  MoreVert,
} from '@material-ui/icons';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';

import Link from 'components/hocs/Link';
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
    anchorEl,
    mobileMoreAnchorEl,
    handleMenuOpen,
    handleMenuClose,
    handleMobileMenuOpen,
    handleNewPostDialogOpen,
  } = props;
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

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
        anchorEl={anchorEl}
        isMenuOpen={isMenuOpen}
        handleMenuClose={handleMenuClose}
      />
      <MenuMobile
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        isMobileMenuOpen={isMobileMenuOpen}
        handleMenuOpen={handleMenuOpen}
        handleMenuClose={handleMenuClose}
        handleNewPostSectionOpen={handleNewPostDialogOpen}
      />
    </div>
  );
};

NavBar.defaultProps = {
  anchorEl: null,
  mobileMoreAnchorEl: null,
};

NavBar.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  anchorEl: PropTypes.objectOf(PropTypes.object),
  mobileMoreAnchorEl: PropTypes.objectOf(PropTypes.object),
  handleMenuOpen: PropTypes.func.isRequired,
  handleMenuClose: PropTypes.func.isRequired,
  handleMobileMenuOpen: PropTypes.func.isRequired,
  handleNewPostDialogOpen: PropTypes.func.isRequired,
};

export default withStyles(styles)(NavBar);
