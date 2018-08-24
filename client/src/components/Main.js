import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import ViewItems from './ViewItems';
import NotFound from './NotFound';
import { checkAuth } from '../actions/userActions';
import Loading from './Loading';
import { Container } from 'reactstrap';
import Test from './Test';

class Main extends React.Component {

    componentDidMount() {
        this.props.dispatch(checkAuth());
    }

    render() {
        if (this.props.loading) {
            return (
                <Container className="mt-5 d-flex justify-content-center">
                    <Loading loading={this.props.loading} />
                </Container>
            )
        } else {
            return (
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route exact path="/viewitems" component={ViewItems} />
                    {/* This is a test component for you to play around with*/}
                    <Route path="/test" component={Test} />
                    <Route component={NotFound} />
                </Switch>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.user.authenticated,
        user: state.user.user,
        loading: state.loader.loading
    }
}

export default withRouter(connect(mapStateToProps)(Main));