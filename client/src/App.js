import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkAuth } from './actions/userActions';
import { Col, Row } from 'reactstrap';
import Loading from './components/Loading';
import SideBar from './components/SideBar';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(checkAuth());
  }

  render() {
    const loader = (
      <Col className="mt-5 d-flex justify-content-center">
        <Loading loading={this.props.loading} />
      </Col>
    )

    return (
      <BrowserRouter>
        <div className="bg d-flex flex-column">
          <Row className="d-flex w-100" noGutters style={{border:"1px solid blue"}}>
            <NavigationBar />
          </Row>
          <Row className="d-flex w-100" noGutters style={{border:"1px solid red", flex:1}}>
            {this.props.authenticated && <SideBar/>}
            {!this.props.loading ? <Routes /> : loader }
          </Row>
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
