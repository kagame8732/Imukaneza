import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';
import Emailicon from '@material-ui/icons/Email';
import CheckIcon from '@material-ui/icons/Check';
import Header from "../../components/header";
import Logo from '../../../../assets/img/logo.png'
import axios from 'axios';

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

const email = value => {
    // if (!isEmail(value)) {
    //     return (
    //         <div className="alert alert-danger" role="alert">
    //             This is not a valid email.
    //         </div>
    //     );
    // }
};

const vusername = value => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The username must be between 3 and 20 characters.
            </div>
        );
    }
};

const vpassword = value => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleRegister(e) {
        e.preventDefault();

        this.setState({

            message: "",
            successful: false
        });

        AuthService.register(
            this.firstName,
            this.lastName,
            this.email,
            this.password,
            this.homeAddress,
            this.phoneNumber

        ).then(
            response => {
                this.setState({
                    message: response.data.message,
                    successful: true
                });
            },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                this.setState({
                    successful: false,
                    message: resMessage
                });
            }
        );
        // }
    }

    render() {
        return (
            <form onSubmit={this.handleRegister}>
                <div>
                    <div
                        className="container"
                        id="centre_div_login">
                        <div
                            className="row col-12">
                            <div
                                className="col-sm-6 form mt-5"
                                id="signup_width">
                                <p id="header_signup">
                                    To Start, Please Provide Your Basic Info.
                                </p>
                                <div
                                    id="div_input_signup">
                                    <PersonIcon
                                        id="icon" />
                                    <input
                                        type="text"
                                        placeholder="FirstName" required
                                        id="input_signup"
                                        onChange={e => this.firstName = e.target.value}
                                    />
                                </div>
                                <div
                                    id="div_input_signup">
                                    <PersonIcon
                                        id="icon" />
                                    <input
                                        type="text"
                                        placeholder="LastName" required
                                        id="input_signup"
                                        onChange={e => this.lastName = e.target.value}
                                    />
                                </div>
                                <div
                                    id="div_input_signup">
                                    <Emailicon
                                        id="icon" />
                                    <input
                                        type="email"
                                        placeholder="Email" required
                                        id="input_signup"
                                        onChange={e => this.email = e.target.value}

                                    />
                                </div>

                                <div
                                    id="div_input_signup">
                                    <LockIcon
                                        id="icon" />
                                    <input
                                        type="password"
                                        placeholder="Password" required
                                        id="input_signup"
                                        onChange={e => this.password = e.target.value}

                                    />
                                </div>
                                <div
                                    id="div_input_signup">
                                    <LockIcon
                                        id="icon" />
                                    <input
                                        type="password"
                                        placeholder="Confirm-Password" required
                                        id="input_signup"
                                        onChange={e => this.confirmPassword = e.target.value}

                                    />
                                </div>

                                <div
                                    id="div_input_signup">
                                    <Emailicon
                                        id="icon" />
                                    <input list="brow"
                                        type='text'
                                        id='input_signup'
                                        placeholder="Home address" required
                                        onChange={e => this.homeAddress = e.target.value}

                                    />
                                    <datalist id="brow" >
                                        <option value="Kimironko" />
                                        <option value="Gikondo" />
                                        <option value="Kicukiro" />
                                        <option value="Muhima" />
                                    </datalist>

                                </div>
                                <div
                                    id="div_input_signup">
                                    <PersonIcon
                                        id="icon" />
                                    <input
                                        type='tel'
                                        placeholder="Telephone" required
                                        id="input_signup"
                                        onChange={e => this.phoneNumber = e.target.value}
                                    />
                                </div>

                                <button
                                    className="btn btn btn_color_dark"
                                    id="login_button" >
                                    Create</button>
                                <p
                                    id="icon_words_login">
                                    <LockIcon />
                                    100% privacy guaranteed</p>
                                <ul
                                    id="list_style_none_signup"
                                >
                                    <li>Have an account?</li>
                                    <li><Link
                                        to={'/'}
                                        className="color_primary"
                                        id="active_login"
                                    >Sign in
                                    </Link></li>

                                </ul>
                                <div
                                    id="lass">
                                    <p
                                        id="ending_signup">
                                        <CheckIcon />Get Comfortable
                                    </p>
                                    <p
                                        id="ending_signup">
                                        <CheckIcon />No risk, no long-term commitment to start
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form >)
    }
}