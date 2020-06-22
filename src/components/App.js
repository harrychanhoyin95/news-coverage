import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './molecules/Layout/Layout';
import News from './pages/News/News';

const App = () => {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route path="/" exact>
            <News />
          </Route>
        </Layout>
      </Switch>
    </Router>
  );
};

export default App;
