import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CloseIcon from '@material-ui/icons/Close';
import Setting from '@material-ui/icons/Settings';
const RightSideMenu =() =>{
    return (
        <div className="m_r_l">
            <div className="row col-12">
                <div className="col-sm">
                <Avatar id="img_whole">
                </Avatar>
                </div>
                <div className="col-sm">
                    <div id="close_admin">
                        <ul>
                            <li id="seeting_style"><Setting/></li>
                            <li id="closeIcons_style"><CloseIcon/></li>
                        </ul>
                        
                    </div>
                </div>
            </div>

            <p id="name_admin">Hirwa <br/>Washington</p>
            <p id="Financial">Financial analytics</p>
            
        </div>
    )
}
export default RightSideMenu;