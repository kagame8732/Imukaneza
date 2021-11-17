import React, { useEffect } from "react";
import LeftSideMenu from "./components/leftSidemenu";
import RightSideMenu from "./components/rightSidemenu";
import SearchIcon from '@material-ui/icons/Search';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import PayCard from "./widgets/pay";
const Dashboard =() =>{
    useEffect(()=>{
        document.body.style.padding = "0";
        document.body.style.margin  = "0";
        document.body.style.backgroundColor = "white"
    },[])
    return (
        <div>
            <div className="row col-12 noM">
                <div className="col-sm-2 noM" id="left_side_admin">
                    <LeftSideMenu whichOne="Overview"/>
                </div>
                <div className="col-sm noM" id="middle_side_admin">
                    <div id="middle_div_Admin">
                        <div className="row col-12 noM" >
                            <div className="col-sm noM">
                                <ul id="nav_admin">
                                    <li><SearchIcon/></li>
                                    <li><input placeholder="Seacher" id="seacher_Admin" /></li>
                                </ul>
                            </div>
                            <div className="col-sm noM">
                                <ul id="nav_admin_right">
                                    <li><NotificationsRoundedIcon/></li>
                                    <li><MoreVertOutlinedIcon/></li>
                                </ul>
                            </div>
                        </div>
                        <p id="overView_style">Overview</p>
                        <div className="row col-12 noM ">
                            <div className="col-sm-5 noM">
                                <PayCard/></div>
                            <div className="col-sm noM">ssss</div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 noM" id="right_side_admin">
                    <RightSideMenu />
                </div>
            </div>
        </div>
    )
}
export default Dashboard;