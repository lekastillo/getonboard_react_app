import React from "react";
import { Router } from '@reach/router';

import Provider from "./providers/Provider";
import AppWrapper from "./components/appWrapper";
import NotFound from './pages/404';

import App from './pages/App';
import About from './pages/about';
import Job from './pages/job';
import FavoritesJob from './pages/FavoriteJobs';

const IndexPage = () => {
  return (
    <Provider>
      <AppWrapper>
        <Router>
          <App path="/" component={App} />
          <Job path="/job" component={Job} />
          <FavoritesJob path="/favorite_jobs" component={FavoritesJob} />
          <About path="/about" component={About} />
          <NotFound default  />
        </Router>
      </AppWrapper>
    </Provider>
  );
}

export default IndexPage;
