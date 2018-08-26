import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginPage from './containers/LoginPage';
import SignupPage from './containers/SignupPage';
import DashboardPage from './containers/DashboardPage';
import ViewItemsPage from './containers/ViewItemsPage';
import CartPage from './containers/CartPage';
import TestPage from './containers/TestPage';
import PurchaseHistoryPage from './containers/PurchaseHistoryPage';
import NotFoundPage from './containers/NotFoundPage';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route path="/dashboard" component={DashboardPage} />
            <Route exact path="/viewItems" component={ViewItemsPage} />
            <Route exact path="/cart" component={CartPage} />
            <Route exact path="/purchaseHistory" component={PurchaseHistoryPage} />
            <Route exact path="/testContainer" component={TestPage} />
            <Route component={NotFoundPage} />
        </Switch>
    )
}

export default Routes



















