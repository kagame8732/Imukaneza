import React, { Component } from 'react';

export default class Forgot extends Component {
    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <div
                    className="container"
                    id="centre_div_forgot">
                    <div
                        className="row">
                        <div
                            id="form_login"
                            className="col-sm-4 form mt-5">
                            <p
                                id="welcome">
                                Forgot Password
                            </p>
                            <label>Email Address</label><br />
                            <input
                                type="email"
                                placeholder="Email" required
                                onChange={e => this.email = e.target.value}

                            /><br />

                            <button
                                className="btn btn btn_color_dark"
                                id="login_button"
                            > Sign in</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}