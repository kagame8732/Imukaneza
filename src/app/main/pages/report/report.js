import React, { useEffect } from "react";
import LeftSideMenu from "../../components/leftSidemenu";
import RightSideMenu from "../../components/rightSidemenu";
import MiddleHeader from "../../widgets/middleHeaders";

const Report =() =>{
 
    useEffect(()=>{
        document.body.style.padding = "0";
        document.body.style.margin  = "0";
        document.body.style.backgroundColor = "white"
    },[])
    return (
        <div>
        <div className="row col-12 noM">
            <div className="col-sm-2 noM" id="left_side_admin">
                {/* this Left side version for pc*/}
                <LeftSideMenu whichOne="Report" isPhone={false}/>
            </div>
            <div className="col-sm noM" id="middle_side_admin">
                {/* this Middle side version for all */}
                <div id="middle_div_Admin">
                    <MiddleHeader name="Report"  />
                    <div className="container  margin-0 ">
                    <div className="row col-12 margin-0">
                            <div className="col-sm-12 form margin-0 p-5">
                                <p id="header_profile">Please write a below related to your inquiry.If you
                                don't find what you need,fill out Report form
                                </p>
                                <label id="lable_report">Report Name</label><br/>
                                <input type="text" id="nameInputReport" />
                                <label id="lable_report">Describe Your Report</label><br/>
                                <textarea type="text" id="nameTextAreaReport"></textarea>
                                <button className="btn btn text-white btn_color_dark">Submit</button>
                            </div>
                    </div>
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
export default Report;