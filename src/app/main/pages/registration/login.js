import React from "react";
import { useHistory } from "react-router-dom";
import LockIcon from '@material-ui/icons/Lock';
import Header from "../../components/header";
import illustration from "../../../../assets/svg/order-ride.svg"
const Login = (props) => {
    const history = useHistory();
    // login file
    return (
        <div>
            {/* header one  */}
            {/* <Header/> */}
            <div className="container" id="centre_div_login">
                <div className="row">
                    <div id="form_login" className="col-sm-4 form mt-5">
                        <p id="welcome">Welcome Back</p>
                        <p id="sign_in_below">Please sign in below or learn more about imukaneza.</p>
                        <label>Email Address</label><br />
                        <input type="text" /><br />
                        <label>Password</label><br />
                        <input type="password" /><br />
                        <button className="btn btn btn_color_dark" id="login_button">Sign in</button>
                        <ul id="list_style_none" onClick={() => { history.push('/signup') }}>
                            <li>Not a member?</li>
                            <li className="color_primary" id="active_login">Sign up now</li>
                        </ul>
                        <p className="color_primary" id="active_forgrt">Forgot Password?</p>
                        <p id="icon_words_login"> <LockIcon />100% privacy guaranteed</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;