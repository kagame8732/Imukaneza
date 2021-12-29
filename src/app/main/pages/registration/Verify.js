import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class Verify extends Component {
    render() {
        axios
            .patch("users/verify/" + `${this.props.match.params.token}`)
            .then((Response) => {
                alert("Account have been verified");
            })
            .catch((err) => {
                console.log(err);
            });
        return (
            <>
                <h2>
                    {this.props.match.params.token}
                </h2>
                <Redirect to={'/'} />

            </>
        )
    }
}
