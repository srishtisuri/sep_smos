import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkAuth } from './actions/userActions';
import { Col, Row, Alert } from 'reactstrap';
import Loading from './components/Loading';
import SideBar from './components/SideBar';

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: this.props.notification ? true : false
    }
    this.props.dispatch(checkAuth());
    this.checkMobi();
  }

  componentDidMount() {
    window.addEventListener('resize', this.checkMobi);
  }

  componentWillReceiveProps = (prevProps, prevState) => {
    this.setState({ visible: this.props.notification ? true : false })
  }


  checkMobi = () => {
    if (window.innerWidth <= 1010) {
      this.props.dispatch({ type: "MOBI_TRUE" })
    } else {
      this.props.dispatch({ type: "MOBI_FALSE" })
    }
  }

  renderMsg = () => {
    return (
      <div className={"text-center text-dark "} style={{fontSize:'14px', backgroundColor:this.props.notificationColor}}>
        {/* <p style={{color:'white', padding:0, margin:0}}> */}
        {this.props.notification}
        {/* </p> */}
      </div>
    )
  }

  render() {
    const loader = (
      <Col className="d-flex justify-content-center align-items-center">
        <Loading loading={this.props.loading || this.props.redirecting} />
      </Col>
    )
    return (
      <BrowserRouter>
        <div className="app d-flex flex-column" style={{ backgroundColor: this.props.authenticated ? "#ffffff" : "#e1e1e1" }}>
          {this.props.authenticated && <Row className="d-flex w-100 sticky-top" noGutters>
            <NavigationBar />
          </Row>}
          {this.props.notification && this.renderMsg()}
          <Row className="d-flex" noGutters style={{ flex: 1 }}>
            {this.props.authenticated && <SideBar />}
            {!this.props.loading && !this.props.redirecting ? <Routes /> : loader}
          </Row>
        </div>
      </BrowserRouter>
    );
  }
}
// className="d-flex justify-content-center align-items-center"
const mapStateToProps = (state) => ({
  loading: state.loader.loading,
  authenticated: state.user.authenticated,
  redirecting: state.redirect.redirecting,
  notification: state.notification.notification,
  notificationColor: state.notification.notificationColor
})

export default connect(mapStateToProps)(App);
