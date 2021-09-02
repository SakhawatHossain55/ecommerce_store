import Footer from 'components/common/Footer';
import Header from 'components/common/Header/Header';
import ProductDetails from 'components/home/ProductDetails';
import CartProduct from 'pages/drawer/CartProduct';
import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import Logout from 'pages/Logout/Logout';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products/:id" component={ProductDetails} />
        <Route exact path="/cartProduct" component={CartProduct} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default AppRouter;
