import React, { Component } from 'react';
import axios from 'axios';

export default class Verify extends Component {
    function useQuery() {
    return new URLSearchParams(useLocation().search);
}

console.log(`${this.props.match.params} `)
const data = new URLSearchParams(this.props.location.search).get('token')
axios.patch('users/verify/' + `${this.props.match.params.token} `).then(
    Response => {
        // console.log(Response.data.message);
        alert('Account have been verified')
    }
).catch(
    err => {
        console.log(err)
    }
)
render() {
    return (
        <h1></h1>
    )
}
}