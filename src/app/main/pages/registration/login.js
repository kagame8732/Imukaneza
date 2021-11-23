import React from "react";
import { useHistory } from "react-router-dom";
import LockIcon from '@material-ui/icons/Lock';
import Header from "../../components/header";
const Login =(props) =>{
    const history = useHistory();
        // login file
    return (
       <div>
           {/* header one  */}
           <Header/>
           <div className="container" id="centre_div_login">
            <div id="form_login">
                <p id="welcome">Welcome Back</p>
                <p id="sign_in_below">Please sign in below or learn more about Creators Agency.</p>
                <label>Email Address</label><br/>
                <input type="text"  /><br/>
                <label>Password</label><br/>
                <input type="password"  /><br/>
                <button className="btn btn" id="login_button">Sign in</button>
                <ul id="list_style_none" onClick={()=>{history.push('/signup')}}>
                    <li>Not a member?</li>
                    <li id="active_login">Sign up now</li>
                </ul>
                <p id="active_forgrt">Forgot Password?</p>
                <p id="icon_words_login"> <LockIcon/>100% privacy guaranteed</p>
            </div>

            </div>
       </div>
    )
}
export default Login;