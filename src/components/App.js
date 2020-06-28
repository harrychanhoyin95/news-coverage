import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';

import Layout from './molecules/Layout/Layout';
import Spinner from './atoms/Spinner/Spinner';
import history from '../services/history';

import AppStyle from './AppStyle';

const NewsPage = loadable(() => import('./pages/NewsList/NewsList'), {
  fallback: <Spinner />,
});

const NewsSourcePage = loadable(() => import('./pages/News/News'), {
  fallback: <Spinner />,
});

const CurrencyPage = loadable(() => import('./pages/Currency/Currency'), {
  fallback: <Spinner />,
});

const App = () => {
  return (
    <Router history={history}>
      <AppStyle />
      <Switch>
        <Layout>
          <Route path="/" exact component={NewsPage} />
          <Route path="/news/:source" component={NewsSourcePage} />
          <Route path="/currency" component={CurrencyPage} />
        </Layout>
      </Switch>
    </Router>
  );
};

export default App;
