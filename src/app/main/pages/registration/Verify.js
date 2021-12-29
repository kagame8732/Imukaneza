/** @format */

import React, { Component } from "react";
import axios from "axios";

export default class Verify extends Component {
  render() {
    axios
      .patch("users/verify/" + `${this.props.match.params.token} `)
      .then((Response) => {
        // console.log(Response.data.message);
        alert("Account have been verified");
      })
      .catch((err) => {
        console.log(err);
      });
    return <h1>{this.props.match.params.token}</h1>;
  }
}
