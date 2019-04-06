import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from 'components/container/Header';
import HomePage from 'pages/HomePage';
import PostsByCategoryPage from 'pages/PostsByCategoryPage';
import PostDetailPage from 'pages/PostDetailPage';

import handleInitData from 'store/actions/shared';

class App extends Component {
  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(handleInitData());
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <div className="content">
            <Route path="/" exact component={HomePage} />
            <Route path="/:category" exact component={PostsByCategoryPage} />
            <Route path="/:category/:post_id" exact component={PostDetailPage} />
          </div>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(App);
