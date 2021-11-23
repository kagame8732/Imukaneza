import React, { useEffect,useState } from "react";
import LeftSideMenu from "../../components/leftSidemenu";
import RightSideMenu from "../../components/rightSidemenu";
import MiddleSide from "../../components/middleSide";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
const Dashboard =() =>{
    const [state, setState] = useState({
        left: false,
      });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    useEffect(()=>{
        document.body.style.padding = "0";
        document.body.style.margin  = "0";
        document.body.style.backgroundColor = "white"
    },[])
    return (
        <div>
            {/* this Phone version */}
            <SwipeableDrawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
            onOpen={toggleDrawer('right', true)}
          >
                   <LeftSideMenu whichOne="Overview" id="phoneMenu" isPhone={true} />
          </SwipeableDrawer>
            <div className="row col-12 noM">
                <div className="col-sm-2 noM" id="left_side_admin">
                    {/* this Left side version for pc*/}
                    <LeftSideMenu whichOne="Overview" isPhone={false}/>
                </div>
                <div className="col-sm noM" id="middle_side_admin">
                    {/* this Middle side version for all */}
                    <MiddleSide toggle={toggleDrawer} />
                </div>
                <div className="col-sm-3 noM" id="right_side_admin">
                    {/* this Right side version for pc*/}
                    <RightSideMenu />
                </div>
            </div>
        </div>
    )
}
export default Dashboard;