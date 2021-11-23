import React from "react";
const ListCard =(porps) =>{
    return (
      <div id="profileCard">
          <div className="row col-12 noM" id="right_side_card_list">
                <div className="col-6 noM">
                <p className="noM" id="profile_cord_name">Names</p>
                </div> 
                <div className="col-6 noM" >
                <p className="noM" id="right_side_list_header">Status</p>
                </div>  
          </div>
          <hr id="line_profile_card" />
          <div className="row col-12 noM" id="right_side_card_list_two">
          <div className="col noM" id="lll">
                <p className="noM list_left_side" id="list_left_side_1">Ride From Niboye to Gasabo</p><br/>
            </div>  
            <div className="col-4 noM" >
            <p className="noM" id="right_side_list_header">Pending</p>
            </div>
          </div>
          <div className="row col-12 noM" id="right_side_card_list_two">
          <div className="col noM" id="lll">
                <p className="noM list_left_side" id="list_left_side_1">Ride From Niboye to Gasabo</p><br/>
            </div>  
            <div className="col-4 noM" >
            <p className="noM" id="right_side_list_header">Done</p>
            </div>
          </div>
          <div className="row col-12 noM" id="right_side_card_list_two">
          <div className="col noM" id="lll">
                <p className="noM list_left_side" id="list_left_side_1">Ride From Niboye to Gasabo</p><br/>
            </div>  
            <div className="col-4 noM" >
            <p className="noM" id="right_side_list_header">In Progress</p>
            </div>
          </div>
      </div>
    )
}
export default ListCard;