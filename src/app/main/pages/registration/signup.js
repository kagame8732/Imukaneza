import React from "react";
import { useHistory } from "react-router-dom";
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';
import Emailicon from '@material-ui/icons/Email';
import CheckIcon from '@material-ui/icons/Check';
import Header from "../../components/header";
import Logo from '../../../../assets/img/logo.png'
const Signup =(props) =>{
    const history = useHistory();
    // signup file
    return (
       <div>
               {/* header one  */}
           {/* <Header/> */}
           <div className="container" id="centre_div_login">
            <div className="row col-12">
            <div className="col-sm-6 form mt-5" id="signup_width">
                <p id="header_signup">
                To Start, Please Provide Your Basic Info.
                </p>
                <div id="div_input_signup">
                    <PersonIcon  id="icon"/>
                    <input type="tetx" placeholder="Full Name"   id="input_signup"/>
                </div>
                <div id="div_input_signup">
                    <Emailicon  id="icon"/>
                    <input type="tetx" placeholder="Email" id="input_signup"/>
                </div>
    
                <div id="div_input_signup">
                    <LockIcon  id="icon"/>
                    <input type="password" placeholder="Password"  id="input_signup"/>
                </div>
                <div id="div_input_signup">
                    <LockIcon  id="icon"/>
                    <input type="password" placeholder="Confirm-Password" id="input_signup"/>
                </div>
                <button className="btn btn btn_color_dark" id="login_button" >Create</button>
                <p id="icon_words_login"> <LockIcon/>100% privacy guaranteed</p>
                <ul id="list_style_none_signup"onClick={()=>{history.push('/')}}>
                    <li>Have an account?</li>
                    <li className="color_primary" id="active_login">Sign in</li>
                </ul>
                <div id="lass">
                <p id="ending_signup">
                <CheckIcon/>Get Comfortable
                </p>
                <p id="ending_signup">
                <CheckIcon/>No risk, no long-term commitment to start
                </p>
                </div>
            </div>
            {/* <div className="col-sm-2" id="left_side_singup">
            <img id="image_frsit_sct_signup" src={Logo} alt="Doctor"/>
            </div> */}
            </div>
            </div>
       </div>
    )
}
export default Signup;