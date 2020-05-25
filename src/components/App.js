import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './molecules/Layout/Layout';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route path="/" exact>
            <Home />
          </Route>
        </Layout>
      </Switch>
    </Router>
  );
};

export default App;
