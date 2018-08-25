import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkAuth } from './actions/userActions';
import { Container, Row } from 'reactstrap';
import Loading from './components/Loading';
import SideBar from './components/SideBar';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(checkAuth());
  }

  render() {
    const loader = (
      <Container className="mt-5 d-flex justify-content-center" style={{ position: "absolute" }}>
        <Loading loading={this.props.loading} />
      </Container>
    )
    return (
      <BrowserRouter>
        <div className="bg">
          <NavigationBar />
          {this.props.loading && loader}
            {this.props.authenticated && !this.props.loading && <Row>
              {this.props.authenticated && <SideBar />}
              {!this.props.loading && <Routes />}
            </Row> }
            {!this.props.authenticated && !this.props.loading && <Routes />}
        </div>
      </BrowserRouter>
    );
  }
}
// className="d-flex justify-content-center align-items-center"
const mapStateToProps = (state) => ({
  loading: state.loader.loading,
  authenticated: state.user.authenticated
})

export default connect(mapStateToProps)(App);
