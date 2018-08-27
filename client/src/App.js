import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkAuth } from './actions/userActions';
import { Col, Row, Alert } from 'reactstrap';
import Loading from './components/Loading';
import SideBar from './components/SideBar';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       visible:this.props.message?true:false
      }
  }
  
  componentDidMount() {
    this.props.dispatch(checkAuth());
    this.checkMobi();
    window.addEventListener('resize', this.checkMobi);
  }

  componentWillReceiveProps = (prevProps, prevState) => {
    this.setState({visible:this.props.message?true:false})
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
      <Row className="text-center d-flex w-100 sticky-top" noGutters>
        <Col>
          <Alert isOpen={this.state.visible} color="success">
            {this.props.message}
          </Alert>
        </Col>
      </Row>
    )
  }

  renderMsg = () => {
    return (
      <Row className="text-center" noGutters>
        <Col style={{height:'50px'}}>
          <Alert style={{height:'100%'}}isOpen={this.state.visible} color="success">
            {this.props.message}
          </Alert>
        </Col>
      </Row>
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
          {this.props.message && this.renderMsg()}
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
  message: state.message.message
})

export default connect(mapStateToProps)(App);
