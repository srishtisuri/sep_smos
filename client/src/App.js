import React, { Component } from 'react';
import { Container } from 'reactstrap';
import NavigationBar from './components/NavigationBar';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';
// import { connect } from 'react-redux';


class App extends Component {

  render() {
    return (
      // <div style={{height:"100vh"}}>
      <BrowserRouter>
        <div className="bg">
          <NavigationBar />
          <Main />
        </div>
      </BrowserRouter>
      // {/* </div> */}
    );
  }
}
// className="d-flex justify-content-center align-items-center"

export default App;
