import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Label, Form, FormGroup, FormFeedback, Input, Button } from 'reactstrap';
import { login } from '../actions/userActions';
import { connect } from 'react-redux';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userNumber: '',
            password: ''
        };
    }

    
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
            <Container className="mt-5 d-flex justify-content-center">
                <Row className="justify-content-center">
                    <Form onSubmit={this.handleSubmit} style={{ width: "400px" }}>
                        <FormGroup>
                            <Label><b>Staff or Student Number</b></Label>
                            <Input
                                invalid={this.props.errors.length > 0}
                                type="text"
                                name="userNumber"
                                placeholder="Enter a Staff or Student Number"
                                onChange={(event) => {
                                    this.setState({
                                        userNumber: event.target.value
                                    });
                                }}
                            ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label><b>Password</b></Label>
                            <Input
                                invalid={this.props.errors.length > 0}
                                type="password"
                                name="password"
                                placeholder="Enter a password"
                                onChange={(event) => {
                                    this.setState({
                                        password: event.target.value
                                    });
                                }}
                            ></Input>
                            {this.props.errors.map(e => {
                                return (<FormFeedback key={e}>{e}</FormFeedback>)
                            })}
                        </FormGroup>
                        <FormGroup>
                            <Button color="success" type="submit">Login</Button>
                        </FormGroup>
                        <FormGroup>
                            <Label>Don't have an account? <Link to={{ pathname: '/signup' }}>Sign up now</Link></Label>
                        </FormGroup>
                    </Form>
                </Row>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        errors: state.error.errors,
        user: state.user.user,
        authenticated: state.user.authenticated,
    }
}

export default connect(mapStateToProps)(Login);