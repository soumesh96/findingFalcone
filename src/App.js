import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store'
import ErrorBoundary from './Components/ErrorBoundary';
import Home from './Containers/Home';
import Result from './Containers/Result';
import Header from './Containers/Header';
import Footer from './Containers/Footer';
import NoPageFound from './Components/PageNotFound';

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Header />
        <Router>
          <Switch>
            <Route path="/" exact render={() => <Redirect to="/home" />} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/result" component={Result} />
            <Route component={NoPageFound} />
          </Switch>
        </Router>
        <Footer />
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
