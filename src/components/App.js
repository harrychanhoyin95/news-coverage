import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AppStyle from './AppStyle';
import Layout from './molecules/Layout/Layout';
import NewsPage from './pages/NewsList/NewsList';
import NewsSourcePage from './pages/News/News';

const App = () => {
  return (
    <Router>
      <AppStyle />
      <Switch>
        <Layout>
          <Route path="/" exact component={NewsPage} />
          <Route path="/news/:source" component={NewsSourcePage} />
        </Layout>
      </Switch>
    </Router>
  );
};

export default App;
