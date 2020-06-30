import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NewsPage from './pages/NewsList/NewsList';
import NewsSourcePage from './pages/News/News';
import CurrencyPage from './pages/Currency/Currency';

import LoadingContainer from '../containers/Loading/Loading';

import Layout from './molecules/Layout/Layout';
import history from '../services/history';

import AppStyle from './AppStyle';

const DataFetchingRoute = ({
  component: Component,
  url,
  urlParams,
  ...props
}) => {
  return (
    <Route
      {...props}
      render={(routerProps) => (
        <LoadingContainer
          url={url}
          urlParams={urlParams}
          component={Component}
          {...routerProps}
        />
      )}
    />
  );
};

DataFetchingRoute.propTypes = {
  component: PropTypes.func.isRequired,
  url: PropTypes.string,
  urlParams: PropTypes.string,
};

DataFetchingRoute.defaultProps = {
  url: null,
  urlParams: null,
};

const App = () => {
  return (
    <Router history={history}>
      <AppStyle />
      <Switch>
        <Layout>
          <DataFetchingRoute
            path="/"
            exact
            component={NewsPage}
            url="http://localhost:3000/api/news/sources"
          />
          <DataFetchingRoute
            path="/news/:source"
            component={NewsSourcePage}
            url="http://localhost:3000/api/news"
            urlParams="source"
          />
          <DataFetchingRoute
            path="/currency"
            component={CurrencyPage}
            url="http://localhost:3000/api/currency"
          />
        </Layout>
      </Switch>
    </Router>
  );
};

export default App;
