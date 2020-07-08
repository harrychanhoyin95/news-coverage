import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AuthContext } from '../contexts/AuthContext';
import { theme } from './theme';

import NewsPage from './pages/NewsList/NewsList';
import NewsSourcePage from './pages/News/News';
import CurrencyPage from './pages/Currency/Currency';
import SettingsPage from './pages/Settings/Settings';
import HistoryPage from './pages/History/History';
import SignUpPage from './pages/SignUp/SignUp';
import LoginPage from './pages/Login/Login';
import SearchPage from './pages/Search/Search';

import history from '../services/history';

import LoadingContainer from '../containers/Loading/Loading';
import NotificationContainer from '../containers/Notification/Notification';

import Layout from './molecules/Layout/Layout';

import PrivateRoute from './atoms/Route/PrivateRoute';

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
  const currentUser = JSON.parse(localStorage.getItem('user'));
  const [authUser, setAuthUser] = useState(currentUser);

  const setUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    setAuthUser(user);
  };

  return (
    <ThemeProvider theme={theme}>
      <AuthContext.Provider value={{ authUser, setAuthUser: setUser }}>
        <Router history={history}>
          <AppStyle />
          <Switch>
            <Layout>
              <DataFetchingRoute
                path="/"
                exact
                component={NewsPage}
                url={`${process.env.API_PATH}/news/sources`}
              />
              <DataFetchingRoute
                path="/news/:source"
                component={NewsSourcePage}
                url={`${process.env.API_PATH}/news`}
                urlParams="source"
              />
              <DataFetchingRoute
                path="/currency"
                component={CurrencyPage}
                url={`${process.env.API_PATH}/currency`}
              />
              <Route path="/settings" exact component={SettingsPage} />
              <Route path="/signup" component={SignUpPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/search" component={SearchPage} />

              <PrivateRoute path="/settings/history" component={HistoryPage} />
              <NotificationContainer />
            </Layout>
          </Switch>
        </Router>
      </AuthContext.Provider>
    </ThemeProvider>
  );
};

export default App;
