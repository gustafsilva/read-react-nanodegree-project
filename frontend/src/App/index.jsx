import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';

import LoadingApp from '../components/presentational/LoadingApp';
import Content from '../components/presentational/Content';
import Header from '../components/container/Header';
import HomePage from '../pages/HomePage';
import PostsByCategoryPage from '../pages/PostsByCategoryPage';
import PostDetailPage from '../pages/PostDetailPage';

import handleInitData from '../store/actions/shared';

class App extends Component {
  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(handleInitData());
  };

  render() {
    const { isLoading } = this.props;

    if (isLoading === true) {
      return <LoadingApp />;
    }

    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <Header />
          <Content>
            <Route path="/" exact component={HomePage} />
            <Route path="/:category" exact component={PostsByCategoryPage} />
            <Route path="/:category/:post_id" exact component={PostDetailPage} />
          </Content>
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = ({ categories, posts }) => ({
  // todo: ajustar erro se categoria for carregado e post não.
  isLoading: !(categories.length > 0 && posts.length >= 0),
});

App.propTypes = {
  /** Function responsible for dispatch of shared (redux). */
  dispatch: PropTypes.func.isRequired,
  /** Flag that indicates whether the app is loading. */
  isLoading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(App);
