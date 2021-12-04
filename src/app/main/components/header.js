import React, {} from 'react'
import { useHistory } from "react-router-dom";
const Header = () => {
    const history = useHistory();
    return (
        // header For Login and Singup
        <
        div id = "header_of_page_login" >
        <
        p id = "header_login_page"
        className = "color_dark"
        onClick = {
            () => { history.push('/') } } > imukaneza < /p> <
        /div>
    )
}
export default Header