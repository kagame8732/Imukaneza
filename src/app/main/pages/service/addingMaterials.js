import React, { useEffect, useState } from "react";
import LeftSideMenu from "../../components/leftSidemenu";
import RightSideMenu from "../../components/rightSidemenu";
import MiddleHeader from "../../widgets/middleHeaders";

const ServiceAdd =(props) =>{
    // this page  request from the service and will go to pay page
    const [typeService,setTypeService] = useState(props.location.state.ServiceType)
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
                <LeftSideMenu whichOne="Service" isPhone={false}/>
            </div>
            <div className="col-sm margin-0" id="middle_side_admin">
                {/* this Middle side version for all */}
                <div id="middle_div_Admin" className="">
                    <MiddleHeader name="Service"  />
                    <div className="container  margin-0 ">
                    <div className="row col-12 margin-0">
                            <div className="col-sm-12 form margin-0 p-5">
                    <label id="lable_adding_service">Service Type</label><br/>
                    <select  id="selcter_adding_service" onChange={((e)=>{setTypeService(e.target.value)})}>
                    <option value={props.location.state.ServiceType} selected disabled hidden >{props.location.state.ServiceType}</option>
                    <option value="Ride" >Ride</option>
                    <option value="Packaging">Packaging</option>
                    </select>
                    {
                        typeService === "Ride" ? 
                        <>
                            {/* display this when she/he clicks ride card on "/service"   */}
                             <label id="lable_adding_service">In Which Category</label><br/>
                             <select  id="selcter_adding_service">
                             <option value="" selected disabled hidden>Choose Your Category</option>
                            <option value="Ride" >House</option>
                            <option value="Packaging">School</option>
                            </select>
                            <label id="lable_adding_service">Your Location</label><br/>
                            <input  type="text"
                            id="selcter_adding_service" placeholder="eg:KG 383 St, Kigali"/>
                            <label id="lable_adding_service">Your Driver</label><br/>
                            <select  id="selcter_adding_service">
                            <option value="" selected disabled hidden>Select Your Driver</option>
                            <option value="Ride" >Hirwa Mucyo</option>
                            <option value="Packaging">Dushime Dose</option>
                            </select>
                        </>:
                        <>
                             {/* display this when she/he clicks Packaging card on "/service"   */}
                        </>
                    }
                   
                    <button id="next_service">Next</button>
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
export default ServiceAdd;  