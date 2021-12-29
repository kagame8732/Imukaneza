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

export default class Signup extends Component {

    handleSubmit = e => {
        e.preventDefault();
        const data = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
            // confirmPassword: this.confirmPassword,
            homeAddress: this.homeAddress,
            phoneNumber: this.phoneNumber

        }
        axios.post('users/signup', data).then(
            Response => {
                console.log(Response.data.message);
            }
        ).catch(
            err => {
                console.log(err)
            }
        )
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    {/* header one  */}
                    {/* <Header/> */}
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
                                // onClick={() => { history.push('/') }}
                                >
                                    <li>Have an account?</li>
                                    <li><Link
                                        to={'/'}
                                        className="color_primary"
                                        id="active_login"
                                    >Sign in
                                    </Link></li>
                                    {/* <li
                                        className="color_primary"
                                        id="active_login">
                                        Sign in</li> */}
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
                            {/* <div className="col-sm-2" id="left_side_singup">
            <img id="image_frsit_sct_signup" src={Logo} alt="Doctor"/>
            </div> */}
                        </div>
                    </div>
                </div>
            </form >)

    }
}

