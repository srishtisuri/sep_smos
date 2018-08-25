import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginPage from './containers/LoginPage';
import SignupPage from './containers/SignupPage';
import DashboardPage from './containers/DashboardPage';
import ViewItemsPage from './containers/ViewItemsPage';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route path="/dashboard" component={DashboardPage} />
            <Route exact path="/viewItems" component={ViewItemsPage} />
        </Switch>
    )
}

export default Routes
