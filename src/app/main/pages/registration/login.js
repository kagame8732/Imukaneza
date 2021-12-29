import React, { Component } from "react";
import { Link } from "react-router-dom";
import Signup from "./signup";
import Forgot from "./forgot";
import { useHistory } from "react-router-dom";
import LockIcon from '@material-ui/icons/Lock';
import Header from "../../components/header";
import illustration from "../../../../assets/svg/order-ride.svg"
import axios from "axios";


class Login extends Component {


    handleSubmit = e => {
        e.preventDefault();
        const data = {
            email: this.email,
            password: this.password
        }

        axios.post('users/signin', data).then(
            Response => {
                localStorage.setItem('token', Response.data.token)
                // console.log(Response);
            }).catch(
                err => {
                    console.log(err)
                }
            )

    }

    render() {
        return (<form onSubmit={this.handleSubmit}>
            <div>
                {/* header one  */}
                {/* <Header/> */}
                <div
                    className="container"
                    id="centre_div_login">
                    <div
                        className="row">
                        <div
                            id="form_login"
                            className="col-sm-4 form mt-5">
                            <p
                                id="welcome">W
                                elcome Back</p>
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
                </div>
            </div></form >
        )
    }
}


export default Login;