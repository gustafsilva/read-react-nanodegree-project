import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from 'components/container/Header';
import HomePage from 'pages/HomePage';
import PostsByCategoryPage from 'pages/PostsByCategoryPage';
import PostDetailPage from 'pages/PostDetailPage';

const App = () => (
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

export default App;
