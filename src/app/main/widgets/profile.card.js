import React from "react";
const ProfileCard =(porps) =>{
    return (
      <div id="profileCard">
          <img src={'https://bestbaltimoreheadshot.com/wp-content/uploads/2019/12/lawyer-headshot-Baltimore-Bobby.jpg'} id="img_profile" alt="" />
        <div id="detailWholeProfileCard">
        <div className="row col-12 noM" id="margin_botton">
                <div className="col-6 noM" id="name_side_profile_card" >
                    <p className="noM" id="profile_cord_name">Names</p>
                </div>
                <div className="col-6 noM" >
                <p className="noM" id="profile_cord_name_rs">Nike </p>
                </div>
                
        </div>
        <div className="row col-12 noM">
                <div className="col-6 noM" id="name_side_profile_card" >
                    <p  id="profile_cord_name">Phone Number</p>
                </div>
                <div className="col-6 noM" >
                <p className="noM" id="profile_cord_name_rs">+250 788542312</p>
                
                </div>
                
        </div>
       
        <div className="row col-12 noM">
                <div className="col-6 noM" id="name_side_profile_card" >
                    <p  id="profile_cord_name">Email</p>
                </div>
                <div className="col-6 noM" >
                <p className="noM" id="profile_cord_name_rs">info@imukaneza.rw</p>
                </div>
                
        </div>
       
        <button id="profileCardButton">Edit</button>
        </div> 
          
          
      </div>
    )
}
export default ProfileCard;