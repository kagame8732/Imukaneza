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
       
        <div className="row col-12 margin-0">
            <div className="col-sm-2 margin-0" id="left_side_admin">
                {/* this Left side version for pc*/}
                <LeftSideMenu whichOne="Settings" isPhone={false}/>
            </div>      
            <div className="col-sm margin-0" id="middle_side_admin">
                {/* this Middle side version for all */}
                <div id="middle_div_Admin">
                    <MiddleHeader name="Settings" />
                    <div className="row col-12 margin-0 form p-5">
                        <div className="col-6 margin-0">
                               
                                    <div className="row col-12 margin-0">
                                        <div className="col-sm margin-0">
                                        <div id="img_setting_whole_div">
                                            <Avatar id="img_Setting"/>
                                            <Edit id="icon_edit_setting"/>
                                        </div>
                                        </div>
                                        <div className="col-sm" id="mAuto">
                                            <p className="margin-0" id="name_on_setting">Hirwa Washington</p> 
                                            <p className="margin-0" id="name_on_location">Kigali,Niboye</p>   
                                        </div>
                                    </div>
                        </div>
                        <div className="row col-12 margin-0" id="margin_top_botton_setting">
                            <div className="col-sm">
                                <label id="setting_inputs_name">Name</label><br/>
                                <input  defaultValue="Hirwa Washington" id="setting_inputs"/>
                            </div>
                            <div className="col-sm">
                            <label id="setting_inputs_name">Email</label><br/>
                                <input  defaultValue="info@imukaneza.rw" id="setting_inputs"/>
                            </div>
                        </div>
                        <div className="row col-12 margin-0" id="margin_top_botton_setting">
                            <div className="col-sm">
                                <label id="setting_inputs_name">Phone</label><br/>
                                <input  defaultValue="+250 788549923" id="setting_inputs"/>
                            </div>
                            <div className="col-sm">
                            <label id="setting_inputs_name">Location</label><br/>
                                <input  defaultValue="Kigali,Niboye" id="setting_inputs"/>
                            </div>
                        </div>
                        <button className="btn btn-dimension m-3 right text-white btn_color_dark">
                            Update
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-sm-3 margin-0" id="right_side_admin">
                {/* this Right side version for pc*/}
                <RightSideMenu />
            </div>
        </div>
    </div>
    )
}
export default SettingsPage;