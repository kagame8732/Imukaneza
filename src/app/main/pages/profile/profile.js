import React, { useEffect } from "react";
import LeftSideMenu from "../../components/leftSidemenu";
import RightSideMenu from "../../components/rightSidemenu";
import MiddleHeader from "../../widgets/middleHeaders";
import ProfileCard from "../../widgets/profile.card";
import ListCard from "../../widgets/list.card";
const Profile =() =>{
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
                <LeftSideMenu whichOne="Profile" isPhone={false}/>
            </div>
            <div className="col-sm noM" id="middle_side_admin">
                {/* this Middle side version for all */}
                <div id="middle_div_Admin">
                <MiddleHeader name="Profile" />
                    <div className="row col-12 noM">
                        <div className="col-sm noM">
                            <ProfileCard/>
                        </div>
                        <div className="col-sm noM" id="margin_top">
                            <ListCard />
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
export default Profile;