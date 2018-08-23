import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Label, Form, FormGroup, Input, Button } from 'reactstrap';
import { login, signup } from '../actions/userActions';
import { connect } from 'react-redux';

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            surname: '',
            username: '',
            email: '',
            password: ''
        };
    }


    handleSubmit = (event) => {
        event.preventDefault();
        // console.log(this.props)
        this.props.dispatch(signup(
            this.state.firstname, 
            this.state.surname, 
            this.state.username, 
            this.state.email, 
            this.state.password
        ));
        this.props.history.push('/login')
    }
    render() {
        return (
            <div>
                <Jumbotron>
                    <Form className="m-auto" style={{ width: "70%" }} onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label><b>Firstname</b></Label>
                            <Input
                                type="text"
                                name="firstname"
                                placeholder="Enter a firstname"
                                onChange={(event) => {
                                    this.setState({
                                        firstname: event.target.value
                                    });
                                }}
                            ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label><b>Surname</b></Label>
                            <Input
                                type="text"
                                name="surname"
                                placeholder="Enter a surname"
                                onChange={(event) => {
                                    this.setState({
                                        surname: event.target.value
                                    });
                                }}
                            ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label><b>Username</b></Label>
                            <Input
                                type="text"
                                name="username"
                                placeholder="Enter a username"
                                onChange={(event) => {
                                    this.setState({
                                        username: event.target.value
                                    });
                                }}
                            ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label><b>Email</b></Label>
                            <Input
                                type="text"
                                name="email"
                                placeholder="Enter an email"
                                onChange={(event) => {
                                    this.setState({
                                        email: event.target.value
                                    });
                                }}
                            ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label><b>Password</b></Label>
                            <Input
                                type="password"
                                name="password"
                                placeholder="Enter a password"
                                onChange={(event) => {
                                    this.setState({
                                        password: event.target.value
                                    });
                                }}
                            ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Button color="primary" type="submit">Sign Up</Button>
                        </FormGroup>
                    </Form>
                </Jumbotron>
            </div>
        );
    }
}

export default connect()(Signup);