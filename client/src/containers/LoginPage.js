import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Col, Form, FormGroup, Label, Input, FormFeedback, Button } from 'reactstrap';
import { login } from '../actions/userActions';
import { FaSignInAlt } from 'react-icons/fa';
import logo from '../content/stationery.png'

class LoginPage extends Component {
    componentDidMount() {
        if (this.props.authenticated) {
            this.props.history.push('/dashboard/' + this.props.user.userNumber)
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch(login(this.state.userNumber, this.state.password, this.props.history))
    }

    render() {
        return (
            <Col className="d-flex justify-content-center align-items-center">
                <Form className="text-center" onSubmit={this.handleSubmit} style={{ width: "325px" }}>
                    <img src={logo} />
                    <br /><br />
                    <h2 className="title">Travis Test</h2>
                    <br />
                    <FormGroup>
                        {/* <Label><b>Staff or Student Number</b></Label> */}
                        <Input
                            invalid={this.props.errors.length > 0}
                            type="text"
                            name="userNumber"
                            size="lg"
                            placeholder="Staff or Student Number"
                            onChange={(event) => {
                                this.setState({
                                    userNumber: event.target.value
                                });
                            }}
                        />
                        {/* <Label><b>Password</b></Label> */}
                        <Input
                            className="font-weight-light"
                            invalid={this.props.errors.length > 0}
                            type="password"
                            name="password"
                            placeholder="Password"
                            size="lg"
                            onChange={(event) => {
                                this.setState({
                                    password: event.target.value
                                });
                            }}
                        />
                        {this.props.errors.map(e => {
                            return (<FormFeedback key={e}>{e}</FormFeedback>)
                        })}
                    </FormGroup>
                    <br />
                    <FormGroup>
                        <Button style={{ width: "100%" }} color="info" type="submit" size="lg"><FaSignInAlt className={!this.props.mobi?"mr-2":""}/> Login</Button>
                    </FormGroup>
                    {/* <FormGroup>
                                <Label>Don't have an account? <Link to={{ pathname: '/signup' }}>Sign up now</Link></Label>
                            </FormGroup> */}
                    <br />
                    <p className="text-muted">© 2018-2019</p>
                </Form>
            </Col>
        );
    }
}

const mapStateToProps = (state) => ({
    errors: state.error.errors,
    user: state.user.user,
    authenticated: state.user.authenticated,
    mobi: state.mobi.mobi
})

export default connect(mapStateToProps)(LoginPage);

