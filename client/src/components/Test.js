import React, { Component } from 'react';
import { connect } from 'react-redux';

class Test extends Component {
        render() {
            console.log(this.props)
            return (
                <div>
                    <h1>Test Component Successfully Rendered</h1>
                </div>
            );
        }
    }

function mapStateToProps(state){
    return {
        store: state
    }
}

export default connect(mapStateToProps)(Test);