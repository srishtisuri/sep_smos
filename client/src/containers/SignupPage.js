import React, { Component } from 'react'
import { signup } from '../actions/userActions';
import { connect } from 'react-redux';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { FaUserPlus } from 'react-icons/fa';
import logo from '../content/stationery.png'


class SignupPage extends Component {
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
        // console.log(this.props)
        this.props.dispatch(signup(
            this.state.userNumber,
            this.state.password,
            this.props.history
        ));
    }

    render() {
        return (
            <Col className="d-flex justify-content-center align-items-center">
            <Form className="text-center" onSubmit={this.handleSubmit} style={{ width: "325px" }}>
            <img src={logo} />
            <br /><br />
            <h2>Sign Up</h2>
            <br />
                <FormGroup>
                    {/* <Label><b>Staff or Student Number</b></Label> */}
                    <Input
                        type="text"
                        name="userNumber"
                        size="lg"
                        placeholder="Staff or Student Number"
                        onChange={(event) => {
                            this.setState({
                                userNumber: event.target.value
                            });
                        }}
                    ></Input>
                    {/* <Label><b>Password</b></Label> */}
                    <Input
                        type="password"
                        name="password"
                        placeholder="Password"
                        size="lg"
                        onChange={(event) => {
                            this.setState({
                                password: event.target.value
                            });
                        }}
                    ></Input>
                    {/* {this.props.errors.map(e => {
                        return (<FormFeedback key={e}>{e}</FormFeedback>)
                    })} */}
                </FormGroup>
                <br />
                <FormGroup>
                    <Button style={{width:"100%"}} color="success" type="submit" size="lg"><FaUserPlus className={!this.props.mobi?"mr-2":""}/> Sign Up</Button>
                </FormGroup>
                {/* <FormGroup>
                    <Label>Don't have an account? <Link to={{ pathname: '/signup' }}>Sign up now</Link></Label>
                </FormGroup> */}
                <br />
                © 2018-2019
            </Form>
</Col>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user.user,
    authenticated: state.user.authenticated,
    mobi: state.mobi.mobi
})

export default connect(mapStateToProps)(SignupPage);


