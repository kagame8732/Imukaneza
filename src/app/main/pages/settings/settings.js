import React, { useEffect } from "react";
import LeftSideMenu from "../../components/leftSidemenu";
import RightSideMenu from "../../components/rightSidemenu";
import MiddleHeader from "../../widgets/middleHeaders";
import Avatar from "@material-ui/core/Avatar";
import { Edit } from "@material-ui/icons";
const SettingsPage =() =>{
    useEffect(()=>{
        document.body.style.padding = "0";
        document.body.style.margin  = "0";
        document.body.style.backgroundColor = "white"
    },[])
    return (
        <div>
        {/* this Phone version */}
       
        <div className="row col-12 noM">
            <div className="col-sm-2 noM" id="left_side_admin">
                {/* this Left side version for pc*/}
                <LeftSideMenu whichOne="Settings" isPhone={false}/>
            </div>      
            <div className="col-sm noM" id="middle_side_admin">
                {/* this Middle side version for all */}
                <div id="middle_div_Admin">
                    <MiddleHeader name="Settings" />
                    <div className="row col-12 noM">
                        <div className="col-6 noM">
                               
                                    <div className="row col-12 noM">
                                        <div className="col-sm noM">
                                        <div id="img_setting_whole_div">
                                            <Avatar id="img_Setting"/>
                                            <Edit id="icon_edit_setting"/>
                                        </div>
                                        </div>
                                        <div className="col-sm" id="mAuto">
                                            <p className="noM" id="name_on_setting">Hirwa Washington</p> 
                                            <p className="noM" id="name_on_location">Kigali,Niboye</p>   
                                        </div>
                                    </div>
                        </div>
                        <div className="row col-12 noM" id="margin_top_botton_setting">
                            <div className="col-sm">
                                <label id="setting_inputs_name">Name</label><br/>
                                <input  defaultValue="Hirwa Washington" id="setting_inputs"/>
                            </div>
                            <div className="col-sm">
                            <label id="setting_inputs_name">Email</label><br/>
                                <input  defaultValue="Hirwaaldo1@gmail.com" id="setting_inputs"/>
                            </div>
                        </div>
                        <div className="row col-12 noM" id="margin_top_botton_setting">
                            <div className="col-sm">
                                <label id="setting_inputs_name">Phone</label><br/>
                                <input  defaultValue="+250 788549923" id="setting_inputs"/>
                            </div>
                            <div className="col-sm">
                            <label id="setting_inputs_name">Location</label><br/>
                                <input  defaultValue="Kigali,Niboye" id="setting_inputs"/>
                            </div>
                        </div>
                        <button id="setting_button">
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-sm-3 noM" id="right_side_admin">
                {/* this Right side version for pc*/}
                <RightSideMenu />
            </div>
        </div>
    </div>
    )
}
export default SettingsPage;