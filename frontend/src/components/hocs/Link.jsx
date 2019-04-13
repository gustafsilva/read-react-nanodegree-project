import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Link = ({ color, ...props }) => <NavLink {...props} style={{ color }} />;

Link.defaultProps = {
  color: 'white',
};

Link.propTypes = {
  /** Link child color. */
  color: PropTypes.string,
};

export default Link;
