import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import PayCard from "../widgets/pay";
import LineChart from "../widgets/line.chart";
import BarChart from "../widgets/bar.chart";
import DoughnutChart from "../widgets/doughnut.chart";
import Menu from '@material-ui/icons/Menu';
import PersonRounded from '@material-ui/icons/PersonRounded';
const MiddleSide =(props) =>{
    return (
          // this Middle part for dashboard
        <div id="middle_div_Admin">
        <div className="row col-12 noM" >
            <div className="col-6 noM" id="sssasasa_1">
                <ul id="nav_admin">
                    <li><SearchIcon/></li>
                    <li><input placeholder="Seacher" id="seacher_Admin" /></li>
                </ul>
            </div>
            <div className="col-6 noM" id="sssasasa_2">
                <ul id="nav_admin_right">
                    <li><NotificationsRoundedIcon/></li>
                    <li><MoreVertOutlinedIcon/></li>
                    <li id="forPhoneProfile"><PersonRounded/></li>
                    <li id="forPhoneMenu" onClick={props.toggle('right', true)}><Menu/></li>
                </ul>
            </div>
        </div>
        <p id="overView_style">Overview</p>
        <div className="row col-12 noM">
            <div className="col-sm-5 mBA MMBS">
                <PayCard className="mBA"/></div>
            <div className="col-sm noM MMBS"  id="right_side_admin_dash">
                <div className="row col-12 noM ">
                    <div className="col-sm noM">
                        <p id="left_side_pf_l_S">Exchange rates</p>
                    </div>
                    <div className="col-sm noM">
                       <p id="right_side_pf_l_S"> Frw </p>
                    </div>
                </div>
                <LineChart/>
            </div>
        </div>
        <div className="row col-12" id="margin_top">
            <div className="col-sm m-12 MMBS" id="right_side_admin_dash">
            <div className="row col-12 noM ">
                    <div className="col-sm noM">
                        <p id="left_side_pf_l_S">Last cost</p>
                    </div>
                    <div className="col-sm noM">
                       <p id="right_side_pf_l_S"> Frw </p>
                    </div>
                </div>
            <BarChart />
            </div>
            <div className="col-sm-4 MMBS" id="right_side_admin_dash">
             <p id="left_side_pf_l_S">Efficiency</p>
                    <DoughnutChart />
            </div>
        </div>
    </div>
    )
}
export default MiddleSide;