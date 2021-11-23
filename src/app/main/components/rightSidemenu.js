import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CloseIcon from '@material-ui/icons/Close';
import Setting from '@material-ui/icons/Settings';
import RecentActivities from "../widgets/recent.activities";
import  ArrowUpward from '@material-ui/icons/ArrowUpward';
const RightSideMenu =() =>{
    // Right side for dashboard
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
            <div id="div_admin_count">
                <p id="tiitle_conut">Total Users</p>
                <p id="number_conut">{`${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(122324)}`}</p>
            </div>
            <p id="recentActivitiesTiltle">Recent Activities</p>
            <p id="recentActivitiesTiltleSmall">Today</p>
            <RecentActivities icons={ArrowUpward} 
            iconsColor="#56DF87" 
            iconsBackground="#EBFBF1" 
            name="To All Riders" 
            status ="Sent" number="224"/>
        </div>
    )
}
export default RightSideMenu;