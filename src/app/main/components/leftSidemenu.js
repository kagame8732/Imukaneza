import React from "react";
import Logo from '../../../assets/img/logo.png'
import Navigation from "./navigation";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import CompassCalibration from '@material-ui/icons/CompassCalibration';
import SettingsIcons from '@material-ui/icons/Settings';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
import img_doc from '../../../assets/img/documents.svg'
const LeftSideMenu =(props) =>{
      // this array of menu 

    const navigations =[
        {
            name:"Overview",
            icon:HomeRoundedIcon,
            url:"/dashboard"
        },
        {
            name:"Service",
            icon:CompassCalibration,
            url:"/service"
        },
        {
            name:"Profile",
            icon:PersonRoundedIcon,
            url:"/profile"
        },
        {
            name:"Report",
            icon:AssignmentRoundedIcon,
            url:"/report"
        },
        {
            name:"Settings",
            icon:SettingsIcons,
            url:"/settings"
        },
    ]
    return (
        // this Left Side of Dashboard
        <div className="m_r_l p-5">
            <img src={Logo} alt="" id="left_side_admin_logo"/>
            <p id="name_web_left_side">Creators Agency</p>
             {/* navigation style  */}
            {
                navigations.map((item,key)=>{
                    return <Navigation name={item.name} url={item.url} theOne={props.whichOne} icon={item.icon} key={key}/>
                })
            }
            {
                props.isPhone === true ? <img src={img_doc} id="admin_img_style_phone" alt=""/>:
                <img src={img_doc} id="admin_img_style" alt=""/>
            }
            <p id="report_style">PDF Report</p>
            <p id="report_details_style">Annual detailed report</p>
            <button id="download_button_admin">Download</button>
        </div>
    )
}
export default LeftSideMenu;