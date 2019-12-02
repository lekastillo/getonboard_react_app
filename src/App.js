import React from "react";
import { Router } from '@reach/router';

import Provider from "./providers/Provider";
import AppWrapper from "./components/appWrapper";
import NotFound from './pages/404';

import App from './pages/App';
import Job from './pages/job';

const IndexPage = () => {
  return (
    <Provider>
      <AppWrapper>
        <Router>
          <App path="/" component={App} />
          <Job path="/job" component={Job} />
          <NotFound default  />
        </Router>
      </AppWrapper>
    </Provider>
  );
}

export default IndexPage;
