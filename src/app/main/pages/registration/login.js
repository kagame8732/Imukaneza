import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Signup from "./signup";
import Forgot from "./forgot";
import { useHistory } from "react-router-dom";
import LockIcon from '@material-ui/icons/Lock';
import Header from "../../components/header";
import illustration from "../../../../assets/svg/order-ride.svg"

import AuthService from "../service/Auth/auth.service";

const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleLogin(e) {
        e.preventDefault();

        this.setState({
            message: "",
            loading: true
        });

        AuthService.login(this.email, this.password).then(
            () => {
                this.props.history.push("/dashboard");
                window.location.reload();
            },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                this.setState({
                    loading: false,
                    message: resMessage
                });
            }
        );
    }
    render() {
        return (<form onSubmit={this.handleLogin}>
            <div>
                {/* header one */}
                {/* <Header/> */}
                <div
                    className="container"
                    id="centre_div_login">
                    {
                        !this.axios ?
                            <>
                                <div
                                    className="row">
                                    <div
                                        id="form_login"
                                        className="col-sm-4 form mt-5">
                                        <p
                                            id="welcome">Welcome Back</p>
                                        <p
                                            id="sign_in_below">Please sign in below or learn more about Creators Agency.</p>

                                        <label>Email Address</label><br />
                                        <input
                                            type="email"
                                            placeholder="Email" required
                                            onChange={e => this.email = e.target.value}



                                        /><br />
                                        <label>Password</label><br />
                                        <input
                                            type="password"
                                            placeholder="Password" required
                                            onChange={e => this.password = e.target.value}



                                        /><br />
                                        <button
                                            className="btn btn btn_color_dark"
                                            id="login_button"
                                        > Sign in</button>


                                        <ul
                                            id="list_style_none"
                                        >
                                            <li>Not a member?</li>
                                            <li><Link
                                                to={'/signup'}
                                                className="color_primary"
                                                id="active_login"
                                            >Sign up now
                                            </Link></li>
                                        </ul>
                                        <p>
                                            <Link
                                                to={'/forgot'}
                                                className="color_primary"
                                                id="active_forgrt"
                                            >Forgot Password?
                                            </Link>
                                        </p>
                                        <p
                                            id="icon_words_login">
                                            <LockIcon />100% privacy guaranteed</p>
                                    </div>
                                </div>
                            </>
                            :
                            <div>
                                <Redirect to={'/dashboard'} />

                            </div>
                    }
                </div>
            </div ></form >
        )
    }
}