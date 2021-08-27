import Header from 'components/common/Header/Header';
import ProductDetails from 'components/home/ProductDetails';
import Home from 'pages/Home/Home';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products/:id" component={ProductDetails} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
