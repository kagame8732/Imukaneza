import React, { useEffect } from "react";
import LeftSideMenu from "../../components/leftSidemenu";
import RightSideMenu from "../../components/rightSidemenu";
import MiddleHeader from "../../widgets/middleHeaders";
import {LocalShippingRounded,ArrowDropDownCircleRounded,CardGiftcardRounded} from '@material-ui/icons';
import {useHistory} from 'react-router-dom'
const Service =() =>{
    // this page for selecting your Service
    const history = useHistory()
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
                <LeftSideMenu whichOne="Service" isPhone={false}/>
            </div>
            <div className="col-sm noM" id="middle_side_admin">
                {/* this Middle side version for all */}
                <div id="middle_div_Admin">
                    <MiddleHeader name="Service"  />
                    <p id="service_small_header">We manage a fleet of professionally cleaned service at our Creators Agency<br/>
                    We has service options when you need to move no need to wait.
                    </p>
                    <div className="row col-12" id="service_cards">
                        <div className="col-sm" id="ride_side_whole" 
                        onClick={(()=>{history.push({
                            pathname:`/service/:ride`,
                            state: { 
                                ServiceType:"Ride",
                             }
                        })})}>
                               <LocalShippingRounded   id="svg_car_ride"/>
                               <p id="small_tiitle_service">400,000Frw Ride Packages</p>
                               <p id="small_descrition_service">This service is only ride with packaging materials</p>
                                <ArrowDropDownCircleRounded  id="icons_on_card_service"/>
                        </div>
                        <div className="col-sm" id="ride_side_whole"
                        onClick={(()=>{history.push({
                            pathname:`/service/:packaging`,
                            state: { 
                                ServiceType:"Packaging",
                             }
                        })})}
                        >
                               <CardGiftcardRounded   id="svg_car_ride"/>
                               <p id="small_tiitle_service">200,000Frw  Packaging only</p>
                               <p id="small_descrition_service">This service is only ride with packaging materials</p>
                                <ArrowDropDownCircleRounded  id="icons_on_card_service"/>
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
export default Service;  