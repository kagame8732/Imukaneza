import React, { Component } from 'react';

export default class Verify extends Component {

    render() {
        return (
            <h1>{this.props.match.params.token}</h1>
        )
    }
}