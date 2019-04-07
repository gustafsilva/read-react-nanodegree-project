import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';

import LoadingApp from 'components/presentational/LoadingApp';
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
    const { loading } = this.props;

    if (loading === true) {
      return <LoadingApp />;
    }

    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <Header />
          <div className="content">
            <Route path="/" exact component={HomePage} />
            <Route path="/:category" exact component={PostsByCategoryPage} />
            <Route path="/:category/:post_id" exact component={PostDetailPage} />
          </div>
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = ({ categories, posts }) => {
  return {
    loading: !(Object.keys(categories).length > 0 && Object.keys(posts).length >= 0),
  };
};

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(App);
