import React, { Component } from 'react'
import { signup } from '../actions/userActions';
import { connect } from 'react-redux';
import { Container, Row, Form, FormGroup, Label, Input, Button } from 'reactstrap';

class SignupPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userNumber: '',
            password: ''
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // console.log(this.props)
        this.props.dispatch(signup(
            this.state.userNumber,
            this.state.password,
            this.props.history
        ));
    }

  render() {
    return (
        <Container className="mt-5 d-flex justify-content-center">
        <Row className="justify-content-center">
            <Form style={{ width: "400px" }} className="m-auto" onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label><b>Staff or Student Number</b></Label>
                    <Input
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
        </Row>
        </Container >
            );
  }
}

const mapStateToProps = (state) => ({
  
})

export default connect(mapStateToProps)(SignupPage);


